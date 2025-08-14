# Reference & Filename Audit Report

_Last updated: 2025-08-14_

This report lists all file references, imports, includes, and links found in the repository, along with their status (OK, missing, mismatch, or orphaned). It also validates file extensions and content types.

---

## Legend
- **OK**: Reference exists and matches expected type
- **Missing**: Reference does not exist
- **Mismatch**: File exists but extension/content mismatch
- **Orphaned**: File exists but is not referenced anywhere

---

## Reference Checks

- `sections/seo-landing-main.liquid` (referenced in `templates/page.seo-landing.json`): **Missing**
- `sections/seo-landing-faq.liquid` (referenced in `templates/page.seo-landing.json`): **Missing**
- `assets/countries-states.js` (referenced in `templates/page.registerVendor.liquid:171,245`): **OK**
- `assets/giftcard.css` (referenced in `templates/gift_card.liquid:36`): **OK**
- `assets/empire.js` (referenced in `layout/none.liquid:118`, `layout/quickshop.liquid:415`, `layout/password.liquid:295`, `layout/theme.liquid:587`): **OK**
- `assets/polyfills.min.js` (referenced in `layout/none.liquid:120`, `layout/quickshop.liquid:421`, `layout/password.liquid:301`, `layout/theme.liquid:582,593`): **OK**
- `assets/instantPage.min.js` (referenced in `layout/quickshop.liquid:442`, `layout/password.liquid:324`, `layout/theme.liquid:614`): **OK**
- `assets/ripple.css` (referenced in `layout/quickshop.liquid:438`, `layout/password.liquid:320`, `layout/theme.liquid:86`): **OK**
- `assets/theme.css` (referenced in `layout/none.liquid:44`, `layout/quickshop.liquid:69,73`, `layout/password.liquid:43,47`, `layout/theme.liquid:79,83`): **OK**
- `assets/empire.min.js` (referenced in `layout/theme.liquid:576`): **OK**
- `assets/vendors-main.bundle.js` (referenced in `layout/none.liquid:113`, `templates/gift_card.liquid:160`): **Missing**
- `assets/api.jquery.js` (referenced in `layout/quickshop.liquid:417`, `layout/password.liquid:297`, `layout/theme.liquid:578,589`): **Missing**
- `assets/shopify_common.js` (referenced in `layout/quickshop.liquid:419`, `layout/password.liquid:299`, `layout/theme.liquid:535,580,591`): **Missing**
- `assets/jquery.cart.js` (referenced in `layout/quickshop.liquid:420`, `layout/password.liquid:300`, `layout/theme.liquid:581,592`): **Missing**
- `snippets/unknown-helper.liquid` (referenced in `sections/seo-landing-main.liquid:42`): **Missing**

---

## Orphaned/Unused Files

- `assets/empire.js.map`
- `assets/empire.min.js.map`
- `assets/giftcard.css.liquid`
- `assets/ripple.css.liquid`
- `assets/theme.css.liquid`
- `assets/instantPage.min.js.map`
- `assets/polyfills.min.js.map`
- `data/sample-sheet.csv`
- `docs/content-enrichment.md`
- `docs/content-model.md`
- `docs/matrixify-import.md`
- `docs/noindex-guard.md`
- `docs/redirects.md`
- `docs/runbook.md`
- `docs/sheets-apps-script/`

---

## Extension & Content Validation

- `config/settings_data.json`: **OK** (valid JSON)
- `config/settings_schema.json`: **OK** (valid JSON)
- `locales/en.default.json`: **OK** (valid JSON)
- `locales/en.default.schema.json`: **OK** (valid JSON)
- `locales/de.json`: **OK** (valid JSON)
- `locales/de.schema.json`: **OK** (valid JSON)
- `locales/fr.json`: **OK** (valid JSON)
- `locales/fr.schema.json`: **OK** (valid JSON)
- `locales/it.json`: **OK** (valid JSON)
- `locales/it.schema.json`: **OK** (valid JSON)
- `locales/ja.json`: **OK** (valid JSON)
- `locales/nl.json`: **OK** (valid JSON)
- `locales/pt-BR.json`: **OK** (valid JSON)
- `locales/tr.json`: **OK** (valid JSON)
- `locales/zh-CN.json`: **OK** (valid JSON)
- `assets/empire.js`: **OK** (JS)
- `assets/empire.min.js`: **OK** (JS)
- `assets/polyfills.min.js`: **OK** (JS)
- `assets/instantPage.min.js`: **OK** (JS)
- `assets/countries-states.js`: **OK** (JS)
- `assets/giftcard.css`: **OK** (CSS)
- `assets/ripple.css`: **OK** (CSS)
- `assets/theme.css`: **OK** (CSS)

---

## Notes
- This report is generated offline and may not include dynamic or runtime references.
- Please review and address any **Missing** or **Mismatch** entries before production use.
