# Matrixify Import Guide

Step-by-step instructions for importing metaobjects and pages with Matrixify and automating daily imports.

## Prerequisites
- Matrixify app installed
- CSV templates for metaobjects and pages
- Accessible URL for scheduled imports

## 1. Import Metaobjects
1. Prepare CSV with columns:
   - `ID` (leave blank for new records)
   - `Type` – metaobject type, e.g. `seo_landing`
   - `Handle` – unique handle
   - `Published` – `FALSE` for staging
   - `Fields.<field_handle>` – one column per field
2. In Matrixify, **New Import → Upload File**.
3. Map columns:
   - `Type` → `Type`
   - `Handle` → `Handle`
   - `Published` → `Published`
   - `Fields.<field_handle>` → matching field names
4. Import a 10-row test.
5. Review **Content → Metaobjects**. Leave them unpublished.

![Metaobject import screen](images/matrixify-metaobjects.png)

## 2. Import Pages
1. Prepare CSV with columns:
   - `ID`
   - `Handle`
   - `Title`
   - `Body HTML`
   - `Published` – `FALSE`
   - `Metafields.custom.seo_landing_ref` – metaobject handle or ID
2. Matrixify **New Import → Upload File**.
3. Map columns to `Handle`, `Title`, `Body HTML`, `Published`, `Metafields.custom.seo_landing_ref`.
4. Import a 10-row test.
5. Preview URLs: `https://your-store.myshopify.com/pages/<handle>?preview_theme_id=...`

![Page import mapping](images/matrixify-pages.png)

## 3. Schedule Daily Imports from URL
1. Host final CSVs at a direct URL.
2. In Matrixify, **New Import → URL**.
3. Set **Schedule** to *Daily* and specify time.
4. Repeat for metaobjects and pages.

![Scheduling screen](images/matrixify-schedule.png)

## Validation Checklist
- [ ] 10-row test import completed
- [ ] `Published` column set to `FALSE`
- [ ] Previewed imported page URLs

## Rollback Steps
- Export existing metaobjects/pages before importing.
- Re-import the export with **"Overwrite"** to restore.

## Common Error Fixes
- Duplicate or blank `Handle` → ensure uniqueness
- `Type` mismatch → confirm metaobject is registered
- Missing metaobject reference → verify `Metafields.custom.seo_landing_ref`
- Scheduled URL fails → ensure URL is reachable and raw CSV
