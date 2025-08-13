# Content Enrichment

`tools/enrich-content.mjs` fills missing landing-page content using OpenAI.

## Requirements

- Node 18+
- `OPENAI_API_KEY` in environment or `.env`

## Usage

```sh
# generate new CSV
OPENAI_API_KEY=sk-... node tools/enrich-content.mjs \
  --input data/sample-sheet.csv \
  --output data/output/enriched.csv

# dry run without calling the API
node tools/enrich-content.mjs --dry-run
```

Options:

- `--input` path to source CSV (default `data/sample-sheet.csv`)
- `--output` destination for enriched CSV (default `data/output/enriched.csv`)
- `--delay` milliseconds to wait between API calls (default `1000`)
- `--dry-run` skip API calls and file writes; logs intended actions

Generated rows append a `provenance` column listing created fields. Existing content is preserved and marked as `existing`. Each generation logs OpenAI token usage to the console. Hindi rows are produced in Hinglish, while English rows remain in English. Meta descriptions are limited to 160 characters.
