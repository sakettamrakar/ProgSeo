import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { stringify } from 'csv-stringify/sync';
import OpenAI from 'openai';

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

const args = process.argv.slice(2);
const opts = { input: 'data/sample-sheet.csv', output: 'data/output/enriched.csv', dryRun: false, delay: 1000 };
for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === '--input' && args[i + 1]) {
    opts.input = args[++i];
  } else if (arg === '--output' && args[i + 1]) {
    opts.output = args[++i];
  } else if (arg === '--dry-run') {
    opts.dryRun = true;
  } else if (arg === '--delay' && args[i + 1]) {
    opts.delay = parseInt(args[++i], 10);
  }
}

const csvText = fs.readFileSync(opts.input, 'utf8');
const rows = parse(csvText, { columns: true, skip_empty_lines: true });

const needsGeneration = rows.some((r) => {
  return (
    !r.intro_html?.trim() ||
    !r.body_html?.trim() ||
    !r.faq_json?.trim() ||
    !r.seo_description?.trim() ||
    r.seo_description.length > 160
  );
});

if (needsGeneration && !opts.dryRun && !process.env.OPENAI_API_KEY) {
  console.error('OPENAI_API_KEY must be set in environment');
  process.exit(1);
}

const client = !opts.dryRun && needsGeneration ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) : null;

function sleep(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

async function generate(prompt) {
  const res = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'You are a helpful SEO assistant.' },
      { role: 'user', content: prompt }
    ]
  });
  const usage = res.usage || {};
  console.log(`tokens prompt:${usage.prompt_tokens || 0} completion:${usage.completion_tokens || 0}`);
  return res.choices[0].message.content.trim();
}

async function processRow(row, index) {
  const lang = (row.language || 'English').toLowerCase();
  const langPrompt = lang === 'hindi' ? 'in Hinglish (Hindi using Latin script)' : 'in English';
  const generated = [];

  if (!row.intro_html?.trim()) {
    if (opts.dryRun) {
      console.log(`[dry-run] would generate intro_html for row ${index + 1}`);
    } else {
      const prompt = `Write a short HTML paragraph ${langPrompt} introducing ${row.category_slug} services in ${row.city}. Use <p> tags.`;
      row.intro_html = await generate(prompt);
      generated.push('intro_html');
      await sleep(opts.delay);
    }
  }

  if (!row.body_html?.trim()) {
    if (opts.dryRun) {
      console.log(`[dry-run] would generate body_html for row ${index + 1}`);
    } else {
      const prompt = `Write two HTML paragraphs ${langPrompt} describing ${row.category_slug} services in ${row.city}. Use <p> tags.`;
      row.body_html = await generate(prompt);
      generated.push('body_html');
      await sleep(opts.delay);
    }
  }

  if (!row.faq_json?.trim()) {
    if (opts.dryRun) {
      console.log(`[dry-run] would generate faq_json for row ${index + 1}`);
    } else {
      const prompt = `Provide a JSON array ${langPrompt} with three FAQs about ${row.category_slug} services in ${row.city}. Each item should have keys \"q\" and \"a\". Respond with JSON only.`;
      const text = await generate(prompt);
      try {
        JSON.parse(text);
        row.faq_json = text;
      } catch {
        row.faq_json = '[]';
      }
      generated.push('faq_json');
      await sleep(opts.delay);
    }
  }

  if (!row.seo_description?.trim() || row.seo_description.length > 160) {
    if (opts.dryRun) {
      console.log(`[dry-run] would generate seo_description for row ${index + 1}`);
    } else {
      const prompt = `Write a meta description under 160 characters ${langPrompt} about ${row.category_slug} services in ${row.city}.`;
      let text = await generate(prompt);
      if (text.length > 160) text = text.slice(0, 160);
      row.seo_description = text;
      generated.push('seo_description');
      await sleep(opts.delay);
    }
  }

  row.provenance = generated.length ? `generated:${generated.join('|')}` : 'existing';
}

async function main() {
  for (let i = 0; i < rows.length; i++) {
    await processRow(rows[i], i);
  }
  if (!opts.dryRun) {
    const outDir = path.dirname(opts.output);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(opts.output, stringify(rows, { header: true }));
    console.log(`Wrote ${rows.length} rows to ${opts.output}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

