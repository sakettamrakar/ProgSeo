#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { stringify } from 'csv-stringify/sync';

const inputArg = process.argv.find(arg => arg.startsWith('--input=')) || process.argv[2];
const limitArg = process.argv.find(arg => arg.startsWith('--limit='));
const inputPath = inputArg ? inputArg.replace('--input=', '').replace(/^"|"$/g, '') : null;
const limit = limitArg ? parseInt(limitArg.replace('--limit=', '')) : undefined;
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
const mappingPath = path.join('data', 'mappings', 'keyword_csv_mapping.json');
let mapping = null;
if (fs.existsSync(mappingPath)) {
  mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf8')).mapping;
}

function normalizeHeader(header) {
  return header.trim().replace(/\s+/g, ' ').toLowerCase();
}

function getMapping(headers) {
  if (mapping) return mapping;
  const normalized = headers.map(normalizeHeader);
  const out = {};
  for (const exp of expected) {
    const idx = normalized.indexOf(normalizeHeader(exp));
    out[exp] = idx !== -1 ? headers[idx] : null;
  }
  return out;
}

function handleize(str) {
  return (str || '').toString().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

const csvRaw = fs.readFileSync(inputPath, 'utf8');
const records = parse(csvRaw, { columns: true, skip_empty_lines: true });
const headers = Object.keys(records[0] || {});
const map = getMapping(headers);
const missing = Object.entries(map).filter(([k, v]) => !v).map(([k]) => k);
if (missing.length) {
  console.error(`Error: Required columns missing: ${missing.join(', ')}`);
  process.exit(2);
}

const seenIdentifiers = new Set();
const seenHandles = new Set();
const metaobjects = [];
const pages = [];
let created = 0, duplicates = 0, skipped = 0;

for (const row of (limit ? records.slice(0, limit) : records)) {
  const cityRaw = row[map['City/State']] || '';
  const city = cityRaw.split(/[\/,]/)[0].trim();
  const category = (row[map['Product Category']] || '').trim();
  const cityHandle = handleize(city);
  const categoryHandle = handleize(category);
  const identifier = `${cityHandle}-${categoryHandle}`;
  const pageHandle = `${cityHandle}-${categoryHandle}`;
  if (!cityHandle || !categoryHandle) {
    skipped++;
    continue;
  }
  if (seenIdentifiers.has(identifier) || seenHandles.has(pageHandle)) {
    duplicates++;
    continue;
  }
  seenIdentifiers.add(identifier);
  seenHandles.add(pageHandle);
  // Meta title
  let metaTitle = row[map['Keyword']].trim();
  if (!metaTitle) metaTitle = `${category} in ${city} | Brand`;
  // Meta description
  let metaDesc = `${metaTitle} - ${row[map['Intent']] || ''}`.trim();
  if (metaDesc.length < 145) metaDesc = metaDesc.padEnd(145, '.');
  if (metaDesc.length > 160) metaDesc = metaDesc.slice(0, 157) + '...';
  // Metaobject row
  metaobjects.push({
    'Identifier': identifier,
    'City': city,
    'Category': category,
    'Meta Title': metaTitle,
    'Meta Description': metaDesc
  });
  // Pages row
  pages.push({
    'Handle': pageHandle,
    'Title': metaTitle,
    'Template Suffix': 'seo-landing',
    'Published': 'FALSE',
    'Metafield: custom.seo_landing_ref [metaobject_reference]': `seo_landing/${identifier}`
  });
  created++;
}

const outDir = path.join('data', 'output');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'metaobjects-seo_landing.csv'), stringify(metaobjects, { header: true }));
fs.writeFileSync(path.join(outDir, 'pages.csv'), stringify(pages, { header: true }));

console.log(`Created: ${created}, Duplicates: ${duplicates}, Skipped: ${skipped}`);
console.log(`Metaobjects: ${path.join(outDir, 'metaobjects-seo_landing.csv')}`);
console.log(`Pages: ${path.join(outDir, 'pages.csv')}`);
