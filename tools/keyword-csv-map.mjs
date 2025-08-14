#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

const inputArg = process.argv.find(arg => arg.startsWith('--input=')) || process.argv[2];
const inputPath = inputArg ? inputArg.replace('--input=', '').replace(/^"|"$/g, '') : null;
if (!inputPath) {
  console.error('Error: --input <csv_path> is required.');
  process.exit(1);
}

const expected = [
  'Keyword',
  'Source',
  'Language',
  'Intent',
  'Product Category',
  'City/State'
];
const synonyms = {
  'Product Category': ['Product Type', 'Category'],
  'City/State': ['City', 'City-State']
};

function normalizeHeader(header) {
  return header.trim().replace(/\s+/g, ' ').toLowerCase();
}

function findMapping(headers) {
  const mapping = {};
  const normalized = headers.map(normalizeHeader);
  for (const exp of expected) {
    const expNorm = normalizeHeader(exp);
    let idx = normalized.indexOf(expNorm);
    if (idx === -1 && synonyms[exp]) {
      for (const syn of synonyms[exp]) {
        idx = normalized.indexOf(normalizeHeader(syn));
        if (idx !== -1) break;
      }
    }
    if (idx === -1) {
      mapping[exp] = null;
    } else {
      mapping[exp] = headers[idx];
    }
  }
  return mapping;
}

const csvRaw = fs.readFileSync(inputPath, 'utf8');
const records = parse(csvRaw, { columns: true, skip_empty_lines: true });
const headers = Object.keys(records[0] || {});
const mapping = findMapping(headers);
const missing = Object.entries(mapping).filter(([k, v]) => !v).map(([k]) => k);

if (missing.length) {
  // Write mapping proposal
  const outMapPath = path.join('data', 'mappings', 'keyword_csv_mapping.json');
  fs.mkdirSync(path.dirname(outMapPath), { recursive: true });
  fs.writeFileSync(
    outMapPath,
    JSON.stringify({
      mapping,
      comments: `Missing required columns: ${missing.join(', ')}`
    }, null, 2)
  );
  console.error(`Error: Required columns missing: ${missing.join(', ')}. See ${outMapPath}`);
  process.exit(2);
}

// Write normalized preview
const previewRows = records.slice(0, 10).map(row => {
  const out = {};
  for (const exp of expected) out[exp] = row[mapping[exp]] || '';
  return out;
});
const outPreviewPath = path.join('data', 'output', 'keyword_preview.csv');
fs.mkdirSync(path.dirname(outPreviewPath), { recursive: true });
fs.writeFileSync(
  outPreviewPath,
  [expected.join(',')].concat(previewRows.map(r => expected.map(e => '"' + (r[e] || '').replace(/"/g, '""') + '"').join(','))).join('\n')
);
console.log(`Preview written to ${outPreviewPath}`);
