import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { stringify } from 'csv-stringify/sync';

function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
      const match = line.match(/^([^#=]+)=(.*)$/);
      if (match) process.env[match[1].trim()] = match[2].trim();
    }
  }
}

loadEnv();

const { SHEET_CSV_URL } = process.env;
if (!SHEET_CSV_URL) {
  console.error('SHEET_CSV_URL must be set in environment');
  process.exit(1);
}

let limit = null;
const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--limit' && args[i + 1]) {
    limit = parseInt(args[i + 1], 10);
    i++;
  }
}

function slugify(str) {
  return str
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function fetchCsv(url) {
  if (/^https?:/i.test(url)) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
    return await res.text();
  }
  const filePath = url.startsWith('file:') ? new URL(url) : url;
  return fs.readFileSync(filePath, 'utf8');
}

async function main() {
  console.log(`Fetching CSV from ${SHEET_CSV_URL}`);
  const csvText = await fetchCsv(SHEET_CSV_URL);
  const rows = parse(csvText, { columns: true, skip_empty_lines: true });
  console.log(`Fetched ${rows.length} rows`);
  const selected = limit ? rows.slice(0, limit) : rows;
  if (limit) console.log(`Limiting to ${selected.length} rows (--limit ${limit})`);

  const metaobjects = [];
  const pages = [];

  for (const row of selected) {
    const citySlug = slugify(row.city || '');
    const identifier = `${citySlug}-${row.category_slug}`;
    metaobjects.push({
      Type: 'metaobject',
      Identifier: identifier,
      'Metaobject Type': 'seo_landing',
      'Field: city': row.city || '',
      'Field: category': row.category_slug || '',
      'Field: h1': row.h1 || row.title || '',
      'Field: intro_html': row.intro_html || '',
      'Field: body_html': row.body_html || '',
      'Field: faq_json': row.faq_json || '',
      'Field: seo_title': row.seo_title || row.title || '',
      'Field: seo_description': row.seo_description || '',
    });
    pages.push({
      Handle: identifier,
      Title: row.title || row.h1 || identifier,
      'Template Suffix': 'seo-landing',
      Published: 'FALSE',
      'SEO Title': row.seo_title || row.title || '',
      'SEO Description': row.seo_description || '',
      'Metafield: custom.seo_landing_ref [metaobject_reference]': `seo_landing/${identifier}`,
    });
  }

  const outDir = path.resolve('data/output');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'metaobjects-seo_landing.csv'), stringify(metaobjects, { header: true }));
  fs.writeFileSync(path.join(outDir, 'pages.csv'), stringify(pages, { header: true }));
  console.log(`Wrote ${metaobjects.length} metaobjects to data/output/metaobjects-seo_landing.csv`);
  console.log(`Wrote ${pages.length} pages to data/output/pages.csv`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
