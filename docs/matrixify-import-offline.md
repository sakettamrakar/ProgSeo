# Matrixify Manual Import Guide (Offline Only)

This guide explains how to manually import SEO landing metaobjects and pages into Shopify using Matrixify, fully offline.

---

## 1. Prepare Your Files
- Ensure you have generated:
  - `data/output/metaobjects-seo_landing.csv`
  - `data/output/pages.csv`

## 2. Import Metaobjects
1. In your Shopify admin, go to **Apps > Matrixify**.
2. Click **Import**.
3. Upload `metaobjects-seo_landing.csv`.
4. Review the import preview and confirm.
5. Wait for the import to complete.

## 3. Import Pages
1. In Matrixify, click **Import** again.
2. Upload `pages.csv`.
3. Ensure the following:
   - **Template Suffix** is set to `seo-landing`.
   - **Published** is `FALSE` (pages are not live by default).
   - **Metafield: custom.seo_landing_ref [metaobject_reference]** is set to `seo_landing/{identifier}`.
4. Confirm and run the import.

## 4. 10-Row Smoke Test
- For your first import, use the `--limit 10` flag when generating CSVs to test with a small batch.
- Verify that:
  - Metaobjects are created and visible in Shopify admin.
  - Pages are created as drafts and reference the correct metaobject.

## 5. Rollback Instructions
- If you need to undo an import:
  - Use Matrixify to export the affected objects (metaobjects or pages).
  - Delete or revert as needed in Shopify admin.

## 6. Scheduled Imports
- Scheduled or automated imports are **deferred** until a Google Sheet or API source is available.
- This workflow is fully offline and manual for now.

---

For troubleshooting, see `docs/reference-check-report.md` and ensure your CSVs match the Matrixify format.
