# Canonical Paths & File Structure

This document summarizes the canonical locations for all key files, scripts, data, and outputs in the offline programmatic SEO pipeline. Use this as a reference for navigation, scripting, and documentation.

---

## Key Directories

- `data/` — All input/output CSVs, mapping files, and generated data
  - `data/output/` — All generated CSVs (Matrixify, keyword preview, etc.)
  - `data/mappings/` — Mapping proposals and overrides
- `tools/` — All Node.js scripts for CSV mapping, Matrixify generation, etc.
- `config/` — Offline config, settings, and schema files
- `docs/` — All documentation, audit reports, and workflow guides
- `sections/`, `templates/`, `snippets/` — Shopify theme code
- `assets/` — JS, CSS, and other static assets

---

## Key Files

- `keyword_suggestions.csv` — Source-of-truth input for SEO pipeline
- `tools/keyword-csv-map.mjs` — Header mapping and preview script
- `tools/csv-to-matrixify.mjs` — Matrixify CSV generator
- `data/output/keyword_preview.csv` — Normalized preview of input CSV
- `data/output/metaobjects-seo_landing.csv` — Matrixify metaobject output
- `data/output/pages.csv` — Matrixify pages output
- `data/mappings/keyword_csv_mapping.json` — Mapping proposal/override
- `config/offline.json` — Offline mode config
- `docs/reference-check-report.md` — Repo audit and reference check
- `docs/csv-only-workflow.md` — CSV-only workflow guide
- `docs/matrixify-import-offline.md` — Matrixify import instructions
- `.env.example` — Offline environment variable template

---

## CI & Linting

- `.github/workflows/ci.yml` — Offline CI workflow (format + theme-check)
- `.theme-check.yml` — Theme-check config
- `.prettierrc` — Prettier config
- `package.json` — Scripts: `verify`, `format`, `lint`

---

## Notes
- All scripts and docs reference these canonical paths.
- No Shopify CLI or store domain is required for any step.
- All outputs are written to `data/output/` for easy review and import.
