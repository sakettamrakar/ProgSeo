import fs from 'fs';
import { parse } from 'csv-parse/sync';
import { stringify } from 'csv-stringify/sync';
import path from 'path';

function loadCsv(file) {
  const text = fs.readFileSync(file, 'utf8');
  return parse(text, { columns: true, skip_empty_lines: true });
}

function usage() {
  console.log('Usage: node tools/redirects-from-diff.mjs --old <old.csv> --new <new.csv> [--output <redirects.csv>]');
  process.exit(1);
}

const args = process.argv.slice(2);
let oldPath = 'data/output/pages-old.csv';
let newPath = 'data/output/pages.csv';
let outPath = 'data/output/redirects.csv';

for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === '--old' && args[i + 1]) {
    oldPath = args[++i];
  } else if (arg === '--new' && args[i + 1]) {
    newPath = args[++i];
  } else if (arg === '--output' && args[i + 1]) {
    outPath = args[++i];
  } else if (arg === '--help') {
    usage();
  }
}

if (!fs.existsSync(oldPath)) {
  console.error(`Old CSV not found: ${oldPath}`);
  process.exit(1);
}
if (!fs.existsSync(newPath)) {
  console.error(`New CSV not found: ${newPath}`);
  process.exit(1);
}

const oldRows = loadCsv(oldPath);
const newRows = loadCsv(newPath);

const oldByTitle = new Map();
for (const row of oldRows) {
  const title = row.Title?.trim();
  const handle = row.Handle?.trim();
  if (title && handle) oldByTitle.set(title, handle);
}

const redirects = [];
for (const row of newRows) {
  const title = row.Title?.trim();
  const newHandle = row.Handle?.trim();
  const oldHandle = oldByTitle.get(title);
  if (oldHandle && newHandle && oldHandle !== newHandle) {
    redirects.push({
      'Redirect from': `/pages/${oldHandle}`,
      'Redirect to': `/pages/${newHandle}`,
      'Redirect type': '301',
    });
  }
}

if (!redirects.length) {
  console.log('No handle changes detected.');
} else {
  const outDir = path.dirname(outPath);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outPath, stringify(redirects, { header: true }));
  console.log(`Wrote ${redirects.length} redirects to ${outPath}`);
}
