# Noindex guard for thin pages

The `seo-landing-main` section now guards against indexing of pages with thin content.

- It calculates the combined length of `intro_html` and `body_html` and compares it to a configurable threshold (default **300** characters).
- If the combined content is shorter than the threshold, or if the page metafield `custom.noindex` is set to `true`, the section outputs `<meta name="robots" content="noindex,follow">` to prevent indexing while still following links.
- The threshold can be adjusted in the section settings under **Noindex threshold (characters)**.

This helps avoid search engines indexing pages without sufficient content.
