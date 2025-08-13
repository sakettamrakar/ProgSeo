# Programmatic SEO Architecture

This repository supports automated SEO landing pages powered by Shopify.

## Quickstart
1. Export environment variables:
   ```bash
   export STORE_DOMAIN=your-dev-store.myshopify.com
   export THEME_NAME="Dev Theme"
   ```
2. Authenticate with Shopify CLI:
   ```bash
   ./scripts/shopify-login.sh
   ```
3. Start the local preview with hot reload:
   ```bash
   ./scripts/theme-dev.sh
   ```

## Architecture
- Content sourced from `SHEET_CSV_URL` and transformed via custom scripts.
- Pages generated using Shopify theme extensions.
- AI-assisted copy generation using the `OPENAI_API_KEY`.

## Rollout Plan
1. Develop and preview changes against a **development store**.
2. Review SEO metrics before expanding coverage.
3. Gradually roll out to production after validation.

> **Do not publish** themes from a development store. Always push to a private theme and request review before publishing.

## Environment
- Node.js 18+
- Shopify CLI

Set environment variables in `.env` (see `.env.example`).
