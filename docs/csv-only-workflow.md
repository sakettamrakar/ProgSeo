# CSV-Only Workflow (Offline, Windows & Cross-Platform)

This guide explains how to run the programmatic SEO pipeline fully offline using a local CSV file as the single source of truth. No Shopify CLI or store domain is required for these steps.

---

## Prerequisites
- Node.js (v16+ recommended)
- All dependencies installed: `npm install`
- Your input CSV: `C:\GIT\ProgSeo\keyword_suggestions.csv`

---

## 1. Detect and Map CSV Headers

**PowerShell (Windows):**
```powershell
node tools/keyword-csv-map.mjs --input "C:\GIT\ProgSeo\keyword_suggestions.csv"
```

**Bash (Linux/macOS):**
```bash
node tools/keyword-csv-map.mjs --input "./keyword_suggestions.csv"
```

- This will auto-detect headers and output a normalized preview to `data/output/keyword_preview.csv`.
- If required columns are missing or named differently, a mapping proposal will be written to `data/mappings/keyword_csv_mapping.json`.

---

## 2. Generate Matrixify-Ready CSVs

**PowerShell (Windows):**
```powershell
node tools/csv-to-matrixify.mjs --input "C:\GIT\ProgSeo\keyword_suggestions.csv" --limit 10
```

**Bash (Linux/macOS):**
```bash
node tools/csv-to-matrixify.mjs --input "./keyword_suggestions.csv" --limit 10
```

- This will create:
  - `data/output/metaobjects-seo_landing.csv`
  - `data/output/pages.csv`
- The `--limit 10` flag is optional for a quick smoke test.

---

## 3. Mapping Override (Advanced)

If your CSV headers do not match the expected names, edit or create `data/mappings/keyword_csv_mapping.json` with the correct mapping. The scripts will use this mapping on the next run.

---

## 4. Path Quoting & Escaping Notes
- Always wrap Windows paths in double quotes if they contain spaces.
- Use forward slashes or double backslashes in Bash.
- All output files are written to the `data/output/` directory.

---

## 5. Future: Google Sheets/OpenAI Integration

This workflow is fully offline. When a Google Sheet or OpenAI enrichment is available, additional steps will be documented here.

---

For troubleshooting, see `docs/reference-check-report.md` and ensure all dependencies are installed.
