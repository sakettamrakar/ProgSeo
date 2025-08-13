# Redirects

Generate 301 redirects when page handles change.

## Create redirects.csv

Run:

```bash
node tools/redirects-from-diff.mjs --old data/output/pages-old.csv --new data/output/pages.csv --output data/output/redirects.csv
```

This compares the old and new `pages.csv` files and writes any handle changes to `redirects.csv`.

## Import with Matrixify

1. In the Matrixify app, choose **New Import → Upload File**.
2. Upload `redirects.csv` and start the import.
3. Each row creates a 301 redirect from the old path to the new path.
