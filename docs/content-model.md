# Content Model Registration

The `tools/register-content-models.mjs` script registers required content models in Shopify via the Admin GraphQL API. It is safe to run multiple times.

## Metaobject Definitions

### city
- `name` – single line text
- `state` – single line text
- `country` – single line text
- `blurb` – multi line text
- `hero_image` – file reference

### category_token
- `name` – single line text
- `slug` – single line text
- `icon` – file reference
- `intro` – multi line text

### seo_landing
- `city` – metaobject reference to `city`
- `category` – metaobject reference to `category_token`
- `h1` – single line text
- `intro_html` – rich text
- `body_html` – rich text
- `faq_json` – JSON
- `hero_image` – file reference
- `seo_title` – single line text
- `seo_description` – multi line text
- `schema_extra_json` – JSON

## Page Metafield

Registers page metafield `custom.seo_landing_ref` of type `metaobject_reference` targeting the `seo_landing` metaobject.

## Usage

1. Populate a `.env` file with:
   ```
   ADMIN_ACCESS_TOKEN=xxx
   STORE_DOMAIN=your-store.myshopify.com
   ```
2. Execute the script:
   ```
   node tools/register-content-models.mjs
   ```
3. Verify the definitions in Shopify Admin under **Content → Metaobjects** and on Pages.
