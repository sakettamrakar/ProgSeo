# Google Sheet → Public CSV

This folder contains a Google Apps Script that turns a Google Sheet into a public CSV feed.

## Setup

1. Open your Google Sheet.
2. Choose **Extensions → Apps Script**.
3. Replace the contents of `Code.gs` with the script in this directory.
4. Press **Save**.

## Deploy as Web App

1. Click **Deploy → New deployment**.
2. For *Select type*, choose **Web app**.
3. Set **Execute as** to *Me*.
4. Set **Who has access** to *Anyone with the link*.
5. Click **Deploy** and authorize if prompted.
6. Copy the Web app URL. This URL will serve the CSV when accessed with `GET`.

## Sheet Requirements

- The first row must use the following headers:

  `command, city_name, state, country, category_name, category_slug, page_handle, page_title, seo_title, seo_description, h1, intro_html, body_html, faq_json, hero_image_url, canonical_url`
- Additional column **warning** is added by the script.
- The script validates `page_handle` and `category_slug` slugs (`a-z`, `0-9`, `-`).
- Length limits are enforced for text fields. If a value exceeds its limit, the row's `warning` column explains the issue.

## Usage

Request the deployed URL in a browser or via `curl`:

```bash
curl https://script.google.com/macros/s/<deployment-id>/exec
```

The response is a CSV with a `warning` column. Rows with warnings should be skipped in downstream processing.
