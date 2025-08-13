# Operator Runbook

End-to-end process for generating SEO landing pages and keeping them maintained.

## Prerequisites
- Node 18+
- Matrixify app installed on the store
- Shopify Admin access token and store domain in `.env`
- `OPENAI_API_KEY` in environment or `.env`
- Google Sheet or CSV with source rows

## 1. Register content models
1. Populate `.env`:
   ```
   ADMIN_ACCESS_TOKEN=...
   STORE_DOMAIN=your-store.myshopify.com
   ```
2. Run:
   ```sh
   node tools/register-content-models.mjs
   ```
   The script is idempotent and can be rerun safely.

## 2. Generate and enrich CSV
1. Export the source sheet to CSV.
2. Enrich missing content (dry run available with `--dry-run`):
   ```sh
   OPENAI_API_KEY=sk-... node tools/enrich-content.mjs \
     --input data/sample-sheet.csv \
     --output data/output/enriched.csv
   ```
3. Convert the enriched sheet to Matrixify templates:
   ```sh
   SHEET_CSV_URL=file:data/output/enriched.csv \
     node tools/sheet-to-matrixify.mjs
   ```
   Output files: `data/output/metaobjects-seo_landing.csv` and `data/output/pages.csv`.

## 3. Matrixify import order
1. Import **metaobjects** CSV first.
2. Import **pages** CSV after metaobjects exist.
3. Run a 10-row test before bulk import.
4. For ongoing updates, schedule daily Matrixify imports from the hosted CSV URLs.

## 4. Theme preview QA
- Preview each imported page using the theme preview URL: `https://your-store.myshopify.com/pages/<handle>?preview_theme_id=<id>`.
- Verify templates render, metaobject data displays, and SEO metadata is correct.

## 5. Publish checklist
- [ ] Metaobjects and pages imported without errors
- [ ] Content renders correctly in theme preview
- [ ] Internal links and navigation work
- [ ] After QA, publish pages (set `Published` to `TRUE`) and sync to live theme

## 6. Rollback and kill switch
- Export existing metaobjects and pages before any import.
- If issues arise, re-import the backup with **Overwrite** to restore.
- Emergency kill switch: import a CSV of affected page handles with `Published` set to `FALSE` to unpublish instantly.

## 7. Monthly maintenance
- Refresh content from the source sheet and rerun enrichment and conversion scripts.
- Append new rows to the sheet for additional pages.
- Monitor Google Search Console for coverage, CTR, and errors.

## Phased rollout plan
1. **Phase 1** – run `sheet-to-matrixify.mjs --limit 50`, import, and validate.
2. **Phase 2** – increase limit to 500 and repeat QA.
3. **Phase 3** – remove `--limit` and roll out to all rows.
4. After each phase, monitor metrics and roll back if needed using the kill switch.
