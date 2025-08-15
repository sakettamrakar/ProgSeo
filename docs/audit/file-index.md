# File Index

The following table enumerates each file in the repository (excluding files matched by the guardrail patterns) along with its size, file extension, and a preview of its first three lines. Binary files have an empty preview.

| Path | Size (bytes) | Extension | First three lines (truncated) |
|---|---|---|---|
| .env.example | 369 | example | # Shopify store domain (e.g. your-store.myshopify.com)
# Intentionally left blank for offline mode
STORE_DOMAIN= |
| .eslintignore | 70 |  | assets/
layout/
sections/ |
| .eslintrc.cjs | 105 | cjs | module.exports = {
  env: {
    node: true, |
| .nvmrc | 3 |  | 18 |
| .prettierignore | 88 |  | assets/
config/settings_data.json
docs/ |
| .prettierrc | 130 |  | // Offline/CSV-only: No Shopify CLI, no store domain, no live theme actions.
{
  "plugins": ["@shopify/prettier-plugi… |
| .shopifyignore | 36 |  | node_modules
.env
build |
| .theme-check.yml | 109 | yml | # Offline/CSV-only: No Shopify CLI, no store domain, no live theme actions.
extends: theme-check:recommended |
| CONTRIBUTING.md | 401 | md | # Contributing

## Commit Messages |
| README-seo.md | 1038 | md | # Programmatic SEO Architecture

This repository supports automated SEO landing pages powered by Shopify. |
| README.md | 294 | md | # ProgSeo
Programatic SEO
 |
| assets/api.jquery.js | 85 | js | // Placeholder for api.jquery.js
// This is a stub file to satisfy theme references. |
| assets/countries-states.js | 1517118 | js | const countryData = [{"id":1,"name":"Afghanistan","code":"AF","dial_code":"+93","currency_name":"Afghan afghani","cur… |
| assets/custom-theme.css | 6900 | css | /* Custom theme CSS. Add your overrides here instead of theme.css or giftcard.css. */

@font-face { |
| assets/custom.css | 652466 | css | @font-face {
  font-family: "Nunito Sans";
  font-weight: 400; |
| assets/custome_footer.css | 3798 | css | /* Main Footer */
.custom-footer {
  background-color: #0E4D2C; |
| assets/empire.js | 1473131 | js | /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({
 |
| assets/empire.js.map | 2156881 | map | {"version":3,"sources":["webpack://empire/./node_modules/@pixelunion/breakpoint/dist/cjs/index.js","webpack://empire/… |
| assets/empire.min.js | 623941 | js | (()=>{var t={646:(t,e)=>{"use strict";function i(){return window.getComputedStyle(document.documentElement,":after").… |
| assets/empire.min.js.map | 2351463 | map | {"version":3,"sources":["webpack://empire/./node_modules/@pixelunion/breakpoint/dist/cjs/index.js","webpack://empire/… |
| assets/giftcard.css | 26925 | css | @font-face {
  font-family: "Nunito Sans";
  font-weight: 400; |
| assets/giftcard.css.liquid | 64183 | liquid | {%- comment -%}type_body{%- endcomment -%}

{%- assign fonts_type_body_display = "swap" \| default: 'auto' -%} |
| assets/instantPage.min.js | 2354 | js | (()=>{var t={737:()=>{let t,e,n;const o=document.createElement("link"),a=o.relList&&o.relList.supports&&o.relList.sup… |
| assets/instantPage.min.js.map | 9772 | map | {"version":3,"sources":["webpack://empire/./node_modules/instant.page/instantpage.js","webpack://empire/webpack/boots… |
| assets/jquery.cart.js | 86 | js | // Placeholder for jquery.cart.js
// This is a stub file to satisfy theme references. |
| assets/polyfills.min.js | 7320 | js | (()=>{var t={337:()=>{!function(t,e){"use strict";if("IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"in… |
| assets/polyfills.min.js.map | 34676 | map | {"version":3,"sources":["webpack://empire/./node_modules/intersection-observer/intersection-observer.js","webpack://e… |
| assets/ripple.css | 5405 | css | /**
 * @license
 * Copyright Google LLC All Rights Reserved. |
| assets/ripple.css.liquid | 5405 | liquid | /**
 * @license
 * Copyright Google LLC All Rights Reserved. |
| assets/shopify_common.js | 89 | js | // Placeholder for shopify_common.js
// This is a stub file to satisfy theme references. |
| assets/theme.css | 653661 | css | /*
 * Theme CSS for: Your Correct Store Name
 * (All content from previous theme.css, with store name updated) |
| assets/theme.css.liquid | 771580 | liquid | {%- comment -%}type_body{%- endcomment -%}

{%- assign fonts_type_body_display = "swap" \| default: 'auto' -%} |
| assets/vendors-main.bundle.js | 94 | js | // Placeholder for vendors-main.bundle.js
// This is a stub file to satisfy theme references. |
| config/offline.json | 51 | json | {
  "offline_mode": true,
  "store_domain": null |
| config/settings_data.json | 19740 | json | {"current":{"minify_scripts":true,"color_background":"#ffffff","color_headings":"#1d1d1d","color_text":"#1d1d1d","col… |
| config/settings_schema.json | 31117 | json | [
  {
    "name": "theme_info", |
| data/output/enriched.csv | 474 | csv | city,category_slug,title,h1,intro_html,body_html,faq_json,seo_title,seo_description,provenance
Portland,plumbing,Port… |
| data/output/keyword_preview.csv | 1041 | csv | Keyword,Source,Language,Intent,Product Category,City/State
"rotavator price in Raipur","Google Autocomplete","English… |
| data/output/metaobjects-seo_landing.csv | 12336 | csv | Identifier,City,Category,Meta Title,Meta Description
raipur-rotavator,Raipur,Rotavator,rotavator price in Raipur,rota… |
| data/output/pages-old.csv | 381 | csv | Handle,Title,Template Suffix,Published,SEO Title,SEO Description,Metafield: custom.seo_landing_ref [metaobject_refere… |
| data/output/pages.csv | 5883 | csv | Handle,Title,Template Suffix,Published,Metafield: custom.seo_landing_ref [metaobject_reference]
raipur-rotavator,rota… |
| data/output/redirects.csv | 102 | csv | Redirect from,Redirect to,Redirect type
/pages/portland-plumbing,/pages/portland-plumbing-experts,301 |
| data/sample-sheet.csv | 455 | csv | city,category_slug,title,h1,intro_html,body_html,faq_json,seo_title,seo_description
Portland,plumbing,Portland Plumbi… |
| docs/content-enrichment.md | 1006 | md | # Content Enrichment

`tools/enrich-content.mjs` fills missing landing-page content using OpenAI. |
| docs/content-model.md | 1317 | md | # Content Model Registration

The `tools/register-content-models.mjs` script registers required content models in Sho… |
| docs/csv-only-workflow.md | 2103 | md | # CSV-Only Workflow (Offline, Windows & Cross-Platform)

This guide explains how to run the programmatic SEO pipeline… |
| docs/matrixify-import-offline.md | 1623 | md | # Matrixify Manual Import Guide (Offline Only)

This guide explains how to manually import SEO landing metaobjects an… |
| docs/matrixify-import.md | 2185 | md | # Matrixify Import Guide

Step-by-step instructions for importing metaobjects and pages with Matrixify and automating… |
| docs/noindex-guard.md | 670 | md | # Noindex guard for thin pages

The `seo-landing-main` section now guards against indexing of pages with thin content. |
| docs/paths.md | 2029 | md | # Canonical Paths & File Structure

This document summarizes the canonical locations for all key files, scripts, data… |
| docs/redirects.md | 544 | md | # Redirects

Generate 301 redirects when page handles change. |
| docs/reference-check-report.md | 4092 | md | # Reference & Filename Audit Report

_Last updated: 2025-08-14_ |
| docs/runbook.md | 2626 | md | # Operator Runbook

End-to-end process for generating SEO landing pages and keeping them maintained. |
| docs/sheets-apps-script/Code.gs | 2295 | gs | const HEADERS = [
  'command',
  'city_name', |
| docs/sheets-apps-script/README.md | 1384 | md | # Google Sheet → Public CSV

This folder contains a Google Apps Script that turns a Google Sheet into a public CSV feed. |
| keyword_suggestions.csv | 21160 | csv | 
Keyword,Source,Language,Intent,Product Category,City/State
rotavator price in Raipur,Google Autocomplete,English,Tra… |
| layout/ecom.liquid | 4680 | liquid | {%comment%}EComposer_v_1_0{%endcomment%}
{%- comment -%}
  Default EComposer theme |
| layout/none.liquid | 4466 | liquid | <!doctype html>
<html class="no-js" lang="{{ request.locale.iso_code }}">
  <head> |
| layout/password.liquid | 13365 | liquid | <!doctype html>
<html class="no-js no-touch" lang="{{ request.locale.iso_code }}">
  <head> |
| layout/quickshop.liquid | 18387 | liquid | <!doctype html>
<html class="no-js no-touch" lang="{{ request.locale.iso_code }}">
  <head> |
| layout/theme.liquid | 26639 | liquid | <!doctype html>
<html class="no-js no-touch" lang="{{ request.locale.iso_code }}">
 <head> |
| lhci-urls.txt | 46 | txt | https://example.com
https://example.com/about |
| locales/cs.json | 23019 | json | {
  "404": {
    "general": { |
| locales/de.json | 23715 | json | {
  "404": {
    "general": { |
| locales/de.schema.json | 89940 | json | {
  "sections": {
    "newsletter": { |
| locales/en.default.json | 21554 | json | {
  "404": {
    "general": { |
| locales/en.default.schema.json | 85041 | json | {
  "sections": {
    "newsletter": { |
| locales/es.json | 23469 | json | {
  "404": {
    "general": { |
| locales/es.schema.json | 93456 | json | {
  "sections": {
    "newsletter": { |
| locales/fr.json | 23733 | json | {
  "404": {
    "general": { |
| locales/fr.schema.json | 92379 | json | {
  "sections": {
    "newsletter": { |
| locales/hi.json | 33841 | json | {
  "404": {
    "general": { |
| locales/it.json | 22028 | json | {
  "404": {
    "general": { |
| locales/it.schema.json | 91754 | json | {
  "sections": {
    "newsletter": { |
| locales/ja.json | 25066 | json | {
  "404": {
    "general": { |
| locales/nl.json | 23065 | json | {
  "404": {
    "general": { |
| locales/pt-BR.json | 22328 | json | {
  "404": {
    "general": { |
| locales/tr.json | 23109 | json | {
  "404": {
    "general": { |
| locales/zh-CN.json | 20971 | json | {
  "404": {
    "general": { |
| package-lock.json | 74011 | json | {
  "name": "progseo",
  "version": "1.0.0", |
| package.json | 834 | json | {
  "name": "progseo",
  "version": "1.0.0", |
| scripts/generate_file_index.py | 4020 | py | #!/usr/bin/env python3
"""
Utility script to generate a file index for the Shopify theme audit. |
| scripts/shopify-login.sh | 163 | sh | #!/usr/bin/env bash
set -euo pipefail
 |
| scripts/theme-dev.sh | 161 | sh | #!/usr/bin/env bash
set -euo pipefail
 |
| sections/404.liquid | 625 | liquid | {% assign continue_shopping_url = routes.all_products_collection_url %}

{% if settings.continue_shopping_url != blan… |
| sections/account.liquid | 3662 | liquid | <section
  class="account-page account-page-details"
  data-template-account> |
| sections/activateaccount.liquid | 1564 | liquid | <section
  class="account-page account-page-activate"
  data-template-account> |
| sections/addresses.liquid | 2460 | liquid | <section
  class="account-page account-page-addresses"
  data-template-account-addresses |
| sections/age-gate.liquid | 975 | liquid | {% liquid
  capture _
    echo settings.show_age_gate_logo |
| sections/ajax-product-count.liquid | 94 | liquid | <template data-data>
  {
    "product_count": {{ collection.products_count }} |
| sections/apps.liquid | 555 | liquid | <div class="{% if section.settings.include_padding %}product-section--container{% endif %}">
  {% for block in sectio… |
| sections/dynamic-blog-posts.liquid | 2743 | liquid | {% assign blog = blogs[section.settings.blog] %}
{% assign blog_url = '#' %}
{% assign onboarding = true %} |
| sections/dynamic-collection-list.liquid | 5619 | liquid | <script
  type="application/json"
  data-section-id="{{ section.id }}" |
| sections/dynamic-countdown-timer.liquid | 27544 | liquid | {% liquid
  assign section_height = section.settings.section_height
 |
| sections/dynamic-custom-liquid.liquid | 701 | liquid | <script
  type="application/json"
  data-section-id="{{ section.id }}" |
| sections/dynamic-faq.liquid | 15515 | liquid | {%- liquid
  assign section = section
  assign section_width = section.settings.section_width |
| sections/dynamic-featured-collection.liquid | 14926 | liquid | <script
  type="application/json"
  data-section-id="{{ section.id }}" |
| sections/dynamic-featured-product.liquid | 18909 | liquid | {% assign product = all_products[section.settings.product] %}
{% assign onboarding = false %}
 |
| sections/dynamic-highlights-banner.liquid | 13011 | liquid | <script
  type="application/json"
  data-section-type="dynamic-highlights-banner" |
| sections/dynamic-html.liquid | 1052 | liquid | <script
  type="application/json"
  data-section-id="{{ section.id }}" |
| sections/dynamic-image-with-text.liquid | 12445 | liquid | {% assign section_classes = "home-section--content" %}
{% assign section_heading = section.settings.section_heading %… |
| sections/dynamic-logo-list.liquid | 2452 | liquid | <script type="application/pxs-animation-mapping+json">
  {
    "blocks": [".logolist--inner"], |
| sections/dynamic-menu-list.liquid | 6483 | liquid | <script
  type="application/json"
  data-section-id="{{ section.id }}" |
| sections/dynamic-page.liquid | 2635 | liquid | <script
  type="application/json"
  data-section-id="{{ section.id }}" |
| sections/dynamic-promo-grid.liquid | 6270 | liquid | <script type="application/pxs-animation-mapping+json">
  {
    "blocks": [".promo-block"], |
| sections/dynamic-promo-mosaic.liquid | 6910 | liquid | <script
  type="application/json"
  data-section-id="{{ section.id }}" |
| sections/dynamic-rich-text.liquid | 2841 | liquid | <script
  type="application/json"
  data-section-id="{{ section.id }}" |
| sections/dynamic-search.liquid | 4889 | liquid | <script
  type="application/json"
  data-section-type="dynamic-search" |
| sections/dynamic-shoppable-image.liquid | 38943 | liquid | {% liquid
  assign enable_text_box = true
  if section.settings.textbox_title == blank and section.settings.textbox_s… |
| sections/dynamic-slideshow.liquid | 15103 | liquid | {% liquid
  assign enable_autoplay = section.settings.enable_autoplay
  assign autoplay_interval = section.settings.a… |
| sections/dynamic-testimonials.liquid | 6393 | liquid | <script
  type="application/json"
  data-section-id="{{ section.id }}" |
| sections/dynamic-video.liquid | 3257 | liquid | <script
  type="application/json"
  data-section-type="dynamic-video" |
| sections/ecom-default-template-quickview.liquid | 38348 | liquid | {% comment %}
 EComposer (https://ecomposer.io)
 You SHOULD NOT modify source code in this page because |
| sections/ecom-predictive-search.liquid | 10524 | liquid | <div id="ecom-shopify-section-predictive-search">
{%- if predictive_search.performed -%}
  <style> |
| sections/ecom_filters.liquid | 160 | liquid | {% assign EComBuilderMode = true %}
{% render 'ecom_filters_snippet' %}
{% schema %} |
| sections/footer-group.json | 4227 | json | {"type":"footer","name":"Footer","sections":{"dynamic_custom_liquid_GwcLQ6":{"type":"dynamic-custom-liquid","disabled… |
| sections/header-group.json | 2387 | json | {"type":"header","name":"Header","sections":{"announcement-bar":{"type":"static-announcement","settings":{"show_annou… |
| sections/login.liquid | 4679 | liquid | <section
  class="account-page account-page-login"
  data-template-account |
| sections/market-index.liquid | 5370 | liquid | <div class="market-index" id="market-index-{{ section.id }}">
  <input
    type="search" |
| sections/order.liquid | 19453 | liquid | {% liquid
  assign enable_orders_atc = settings.enable_orders_atc
  assign enable_checkbox = false |
| sections/page-contact.liquid | 3980 | liquid | <article class="site-page" data-template-page data-template-contact>

  <header class="page-masthead"> |
| sections/page.liquid | 283 | liquid | <article class="site-page" data-template-page>
  <header class="page-masthead">
    <h1 class="page-title"> |
| sections/predictive-search.liquid | 7980 | liquid | {% liquid
  assign queries_available = false
  assign products_results_available = false |
| sections/product-swatch-data.liquid | 647 | liquid | <head>
  <meta name="format-detection" content="telephone=no">
</head> |
| sections/pxs-image-with-text-overlay.liquid | 6806 | liquid | {% assign onboarding = false %}

{% if section.settings.image == blank %} |
| sections/pxs-map.liquid | 9250 | liquid | <script
  type="application/json"
  data-section-type="pxs-map" |
| sections/pxs-newsletter.liquid | 3749 | liquid | {% liquid
  assign pxs_newsletter_form_success = 'form.success' \| t
  assign pxs_newsletter_form_placeholder = 'form.… |
| sections/quickshop.liquid | 18564 | liquid | <script
  type="application/json"
  data-section-type="static-product" |
| sections/register.liquid | 3657 | liquid | <section class="account-page account-page-register" data-template-account>
  <header class="account-page-masthead">
 … |
| sections/resetpassword.liquid | 2039 | liquid | <section
  class="account-page account-page-reset-password"
  data-template-account> |
| sections/seo-landing-faq.liquid | 872 | liquid | {%- assign landing = page.metafields.custom.seo_landing_ref.value -%}
{%- if landing == blank or landing.faq_json == … |
| sections/seo-landing-main.liquid | 3869 | liquid | {%- assign landing = page.metafields.custom.seo_landing_ref.value -%}
{%- if landing == blank -%}
  <div class="page-… |
| sections/seo-related-links.liquid | 2333 | liquid | {%- assign landing = page.metafields.custom.seo_landing_ref.value -%}
{%- assign categories = landing.sibling_categor… |
| sections/static-announcement.liquid | 3244 | liquid | <script
  type="application/json"
  data-section-id="{{ section.id }}" |
| sections/static-article.liquid | 5650 | liquid | <script
  type="application/json"
  data-section-type="static-article" |
| sections/static-blog.liquid | 2688 | liquid | <script
  type="application/json"
  data-section-type="static-blog" |
| sections/static-cart.liquid | 12216 | liquid | {% liquid
  assign is_customer = false
  if shop.customer_accounts_enabled and customer |
| sections/static-collection.liquid | 22080 | liquid | {%- liquid
  assign filter_block = nil
  assign sidebar_blocks = false |
| sections/static-faq.liquid | 407 | liquid | <article class="site-page" data-template-page>
  <header class="page-masthead">
    <h1 class="page-title"> |
| sections/static-footer.liquid | 15641 | liquid | <script
  type="application/json"
  data-section-id="{{ section.id }}" |
| sections/static-header.liquid | 23793 | liquid | {% assign has_box_shadow = false %}
{% if settings.color_background == settings.color_header_background  %}
  {% assi… |
| sections/static-list-collections.liquid | 2976 | liquid | {% assign using_linklist = false %}
{% assign pagination = 12 %}
{% assign linklist = 'all-collections' %} |
| sections/static-password.liquid | 6757 | liquid | <script
  type="application/json"
  data-section-type="static-password" |
| sections/static-product-3-columns.liquid | 20962 | liquid | {% liquid
  for block in section.blocks
    if block.type == 'complementary_products' |
| sections/static-product-compare.liquid | 23351 | liquid | <script
  type="application/json"
  data-section-type="static-product-compare" |
| sections/static-product-recommendations.liquid | 1754 | liquid | {% if section.settings.show_product_recommendations %}
  {% assign product_limit = 5 %}
 |
| sections/static-product.liquid | 20879 | liquid | {% liquid
  for block in section.blocks
    if block.type == 'complementary_products' |
| sections/static-recently-viewed.liquid | 1642 | liquid | {% if section.settings.enable_recently_viewed_products %}
{%- capture recently_viewed_data -%}
  {%- |
| sections/static-search.liquid | 12151 | liquid | {% assign filter_block = nil %}
{% assign sidebar_blocks = false %}
{% assign filter_type = 'faceted' %} |
| sections/static-subcollections-featured-collection.liquid | 9729 | liquid | <script
  type="application/json"
  data-section-id="{{ section.id }}" |
| sections/static-subcollections-grid.liquid | 3662 | liquid | {% assign onboard = true %}

{% if linklists[collection.handle].links.size > 0 %} |
| sections/static-subcollections-menu.liquid | 4784 | liquid | <script
  type="application/json"
  data-section-type="static-subcollections-menu" |
| sections/static-utility-bar.liquid | 24286 | liquid | {% style %}
  .utility-bar {
    background-color: {{ section.settings.background_color }}; |
| sections/surface-pick-up.liquid | 7222 | liquid | <template data-html="surface-pick-up-embed">
  {% comment %}Inject @pixelunion/shopify-surface-pick-up/surface-pick-u… |
| snippets/account-address-form.liquid | 6393 | liquid | {% comment %}
  @param address {Object}
    Object containing address items |
| snippets/account-address-list.liquid | 764 | liquid | {% comment %}
  @param address {Object}
    Object containing address items |
| snippets/advanced-tag-loop.liquid | 1464 | liquid | {%- capture _ -%}
  {% comment %}
  A loop to catch and filter out the different tag categories. |
| snippets/age-gate.liquid | 4545 | liquid | {% liquid
  assign age_gate_enabled = settings.enable_age_gate_site_wide
  assign page_min_age = settings.age_gate_si… |
| snippets/article-comment-item.liquid | 392 | liquid | {%- capture comment_author -%}
  <strong>{{- comment.author -}}</strong>
{%- endcapture -%} |
| snippets/article-comments.liquid | 3963 | liquid | {% assign comment_count = article.comments_count %}

{% if comment and comment.created_at %} |
| snippets/article-excerpt-featured.liquid | 2156 | liquid | {% comment %}
  @param section Object
         Required section containing settings |
| snippets/article-excerpt.liquid | 3749 | liquid | {% comment %}
  @param section Object
         Required section containing settings |
| snippets/back-to-top-button.liquid | 598 | liquid | <div
  class="back-to-top"
  data-back-to-top |
| snippets/breadcrumbs.liquid | 3452 | liquid | {% assign search_category = search_category \| default: blank %}
{% assign show_breadcrumbs = true %}
 |
| snippets/cart-discounts.liquid | 423 | liquid | {%- for discount_application in cart.cart_level_discount_applications -%}
  <li class="discount-list-item cart-discou… |
| snippets/cart-item-list.liquid | 250 | liquid | <ul class="cartitems--list" data-cart-item-list>
  {% for item in cart.items %}
    {% |
| snippets/cart-item.liquid | 6620 | liquid | {% assign compare_at_price = 0 %}

{% for variant in item.product.variants %} |
| snippets/cart-shipping.liquid | 3172 | liquid | {% assign default_province = '' %}
{% assign default_zip = '' %}
 |
| snippets/collection-list-item.liquid | 2726 | liquid | {% comment %}
  @param block Object
         Optional object to display block attributes if used as a block |
| snippets/complementary-product.liquid | 4149 | liquid | {% if product.compare_at_price_min > product.price_min %}
  {%- capture price -%}
    {%- if product.price_varies -%} |
| snippets/complementary-products.liquid | 3032 | liquid | {% liquid
  assign heading = block.settings.heading
  assign products_per_slide = block.settings.products_per_slide |
| snippets/consistent-savings.liquid | 1741 | liquid | {% capture _ %}
  {% comment %}
    @param variants {Object} |
| snippets/countdown-product-card.liquid | 81 | liquid | {%
  render 'product-grid-item',
  product: product, |
| snippets/countdown.liquid | 2601 | liquid | {% comment %}
  @param countdown_year {String}
    The countdown timer year |
| snippets/ecom_cart_line_item_hook.liquid | 223 | liquid | {% comment %}
    ** This snippet was generated by EComposer - Visual Page Builder
    ** This file will display in t… |
| snippets/ecom_filters_snippet.liquid | 0 | liquid |  |
| snippets/ecom_footer.liquid | 99 | liquid | {% comment %}
    ** This snippet was generated by EComposer - Visual Page Builder
{% endcomment %} |
| snippets/ecom_google_snippet.liquid | 15014 | liquid | <script type="application/ld+json">
  {
    "@context": "https://schema.org", |
| snippets/ecom_header.liquid | 102 | liquid | {% comment %}
    ** This snippet was generated by EComposer - Visual Page Builder
{% endcomment %} |
| snippets/ecom_product_json.liquid | 4229 | liquid | {
    "id":  {{ product.id }},
    "title":  {{ product.title \| json }}, |
| snippets/ecom_product_loop_after.liquid | 216 | liquid | {% comment %}
    ** This snippet was generated by EComposer - Visual Page Builder
    ** This file will display in t… |
| snippets/ecom_product_loop_after_cart_button.liquid | 216 | liquid | {% comment %}
    ** This snippet was generated by EComposer - Visual Page Builder
    ** This file will display in t… |
| snippets/ecom_product_loop_after_title.liquid | 216 | liquid | {% comment %}
    ** This snippet was generated by EComposer - Visual Page Builder
    ** This file will display in t… |
| snippets/ecom_product_loop_after_variant.liquid | 216 | liquid | {% comment %}
    ** This snippet was generated by EComposer - Visual Page Builder
    ** This file will display in t… |
| snippets/ecom_product_loop_before.liquid | 216 | liquid | {% comment %}
    ** This snippet was generated by EComposer - Visual Page Builder
    ** This file will display in t… |
| snippets/ecom_product_loop_before_cart_button.liquid | 216 | liquid | {% comment %}
    ** This snippet was generated by EComposer - Visual Page Builder
    ** This file will display in t… |
| snippets/ecom_product_loop_before_title.liquid | 216 | liquid | {% comment %}
    ** This snippet was generated by EComposer - Visual Page Builder
    ** This file will display in t… |
| snippets/ecom_product_loop_before_variant.liquid | 216 | liquid | {% comment %}
    ** This snippet was generated by EComposer - Visual Page Builder
    ** This file will display in t… |
| snippets/ecom_template_collection_after.liquid | 227 | liquid | {% comment %}
    ** This snippet was generated by EComposer - Visual Page Builder
    ** This file will display in t… |
| snippets/ecom_template_collection_before.liquid | 230 | liquid | {% comment %}
    ** This snippet was generated by EComposer - Visual Page Builder
    ** This file will display in t… |
| snippets/ecom_template_product_after.liquid | 227 | liquid | {% comment %}
    ** This snippet was generated by EComposer - Visual Page Builder
    ** This file will display in t… |
| snippets/ecom_template_product_before.liquid | 224 | liquid | {% comment %}
    ** This snippet was generated by EComposer - Visual Page Builder
    ** This file will display in t… |
| snippets/ecom_theme_helper.liquid | 24215 | liquid | <link rel="preconnect" href="https://cdn.ecomposer.app" crossorigin />
<link rel="dns-prefetch" href="https://cdn.eco… |
| snippets/faceted-filter-group.liquid | 7611 | liquid | {% comment %}
  @param filter
  @param filter_group_classes |
| snippets/faq-categories.liquid | 3080 | liquid | {% comment %}
 @param category_id {String}
    The block setting ID for the category |
| snippets/faq-items.liquid | 2799 | liquid | {% comment %}
  @param icon {String}
    The summary icon |
| snippets/featured-collection.liquid | 8045 | liquid | {% comment %}
  @param section [section] Shopify section to reference
 |
| snippets/footer-block.liquid | 1595 | liquid | {%- capture block_class -%}
  site-footer-block-item
  site-footer-block-{{ block.type \| replace: '_', '-' }} |
| snippets/free-shipping-bar.liquid | 1688 | liquid | {% comment %}
  @param context {String}
    The snippet context. |
| snippets/icon-checkbox.liquid | 548 | liquid | <svg
  aria-hidden="true"
  focusable="false" |
| snippets/icon-checkmark-animated.liquid | 494 | liquid | <svg
  class="checkmark {{ additional_classes }}"
  aria-hidden="true" |
| snippets/icon-checkout-lock.liquid | 598 | liquid | <svg
width="20"
height="20" |
| snippets/icon-chevron-down-small.liquid | 446 | liquid | <svg
  aria-hidden="true"
  focusable="false" |
| snippets/icon-chevron-down-thin.liquid | 268 | liquid | <svg
  aria-hidden="true"
  focusable="false" |
| snippets/icon-chevron-down.liquid | 433 | liquid | <svg
  aria-hidden="true"
  focusable="false" |
| snippets/icon-library.liquid | 83475 | liquid | {% comment %}
  @param id {String}
         Name of icon to display |
| snippets/icon-lock.liquid | 1205 | liquid | <svg
  aria-hidden="true"
  focusable="false" |
| snippets/icon-menu-close.liquid | 340 | liquid | <svg
  aria-hidden="true"
  focusable="false" |
| snippets/icon-rss.liquid | 935 | liquid | <svg
  aria-hidden="true"
  focusable="false" |
| snippets/icon-search.liquid | 342 | liquid | <svg
  aria-hidden="true"
  focusable="false" |
| snippets/icon-spinner.liquid | 495 | liquid | <svg
  aria-hidden="true"
  focusable="false" |
| snippets/live-search-form.liquid | 7718 | liquid | {% comment %}
  @param quick_links {LinkedList}
    Handle of menu to display |
| snippets/meganav-image-block.liquid | 1789 | liquid | {% assign image = 'image_' \| append: id %}
{% assign text = 'text_' \| append: id %}
{% assign url = 'link_' \| append:… |
| snippets/meganav-promo.liquid | 558 | liquid | {% comment %}
  @param block Block
    The block with the meganav properties |
| snippets/meganav-sidenav.liquid | 3731 | liquid | {% comment %}
  @param menu LinkList
    List of menu items |
| snippets/meganav-standard.liquid | 3232 | liquid | {% comment %}
  @param menu LinkList
    List of menu items |
| snippets/mobile-nav-list.liquid | 2913 | liquid | {% comment %}
  This is the nav list for the mobile menu.
 |
| snippets/mobile-navmenu-button.liquid | 567 | liquid | {% comment %}
  @param button_label String
    For assistive technology to read out label for button |
| snippets/multi-column-menu.liquid | 1829 | liquid | {% comment %}
  This is the layout for the multi-column meganav menu on desktop
 |
| snippets/navlist.liquid | 6531 | liquid | {% comment %}
  This component is just a standard list of navigation items. It acts recursively
  so that navigation … |
| snippets/navmenu.liquid | 4158 | liquid | {% comment %}
  This is the main menu for the theme
 |
| snippets/newsletter.liquid | 1603 | liquid | {% liquid
  assign form_id = form_id \| default: nil
  assign newsletter_tags = 'prospect' |
| snippets/options-radios.liquid | 12032 | liquid | {% comment %}
  Display variant options for a product
 |
| snippets/options-select.liquid | 2591 | liquid | {% comment %}
  Display variant options for a product
 |
| snippets/page-search-form.liquid | 1496 | liquid | <div class="productgrid--search" data-live-search>
  <form
    class="productgrid--search-form" |
| snippets/pagination.liquid | 2166 | liquid | {% assign grid_list = grid_list \| default: nil %}

{% if paginate.previous or paginate.next %} |
| snippets/placeholder_svg_uri.liquid | 1255 | liquid | {%- comment -%}

  Outputs a placeholder SVG as a data-uri. This allows us to use Shopify's |
| snippets/product-badge.liquid | 5622 | liquid | {% comment %}
  @param class_root {String}
    Base class root |
| snippets/product-form.liquid | 22626 | liquid | {% comment %}
  @param product
 |
| snippets/product-gallery-navigation.liquid | 2572 | liquid | {% comment %}
  @param product {Product}
    The product object in question |
| snippets/product-gallery-viewer.liquid | 6448 | liquid | {% comment %}
  @param product {Product}
    The product object in question |
| snippets/product-gallery.liquid | 3006 | liquid | {% comment %}
  @param product {Product}
    The product object in question or false. Onboards if false or blank. |
| snippets/product-grid-faceted-filters.liquid | 1001 | liquid | {% comment %}
  @param context {Object}
    Collection object or search object |
| snippets/product-grid-filters-active.liquid | 2597 | liquid | {% comment %}
  @param context {Object}
    Collection object or search object |
| snippets/product-grid-item.liquid | 22971 | liquid | {% comment %}
  @param product {Object}
    Required to show product information |
| snippets/product-grid-sidebar-filters.liquid | 908 | liquid | {% assign tag_limit = filter_limit \| times: 1 %}

{% comment %} |
| snippets/product-grid-sidebar.liquid | 2388 | liquid | {% comment %}
  @param menu_block_count {Integer}
    Number of menu blocks to include in the sidebar |
| snippets/product-grid-sortby.liquid | 2713 | liquid | {%- if type == 'select' -%}
  <div class="productgrid--utils utils-sortby">
    <label |
| snippets/product-grid-tag-groups.liquid | 9039 | liquid | <h2 class="productgrid--sidebar-title">
{{ 'product_grid.filters.title_count' \| t: count: 0 }}
</h2> |
| snippets/product-grid-tags-active.liquid | 1335 | liquid | {% capture cat_array %}{%- render 'advanced-tag-loop' -%}{% endcapture %}
{% assign cat_array = cat_array \| split: '\|… |
| snippets/product-grid-tags.liquid | 4889 | liquid | <button
  class="
    productgrid--sidebar-button |
| snippets/product-price.liquid | 11079 | liquid | {% comment %}
  @param class_root {String}
    Base class root |
| snippets/product-recently-viewed.liquid | 2206 | liquid | {% comment %}
  @param product {ProductDrop}
    Product drop containing information about a product |
| snippets/product-request-form.liquid | 4929 | liquid | {% comment %}
  @param product {Object}
    The product object |
| snippets/product-stock-level.liquid | 3730 | liquid | {% comment %}
  @param attr {String}
    Stock level attributes |
| snippets/product.liquid | 19950 | liquid | {% comment %}
  @param product {Object}
    The product object |
| snippets/promo-block-background.liquid | 1104 | liquid | {%- comment -%}
  @param blocks {array}
    Array of blocks to iterate block stylings through |
| snippets/promo-block.liquid | 2910 | liquid | {% assign additional_classes = additional_classes \| default: blank %}

{% assign has_link = false %} |
| snippets/quantity-selector.liquid | 2667 | liquid | {% comment %}
  @param context {String}
    The context, either 'product' or 'cart' |
| snippets/quick-shop.liquid | 145 | liquid | <div class="productitem-quickshop" data-product-quickshop>
  <span class="quickshop-spinner">
    {%- render 'icon-sp… |
| snippets/rating-stars.liquid | 945 | liquid | {% comment %}
  @param value {Float}
    Rating value |
| snippets/recipient-form-disclosure-icon.liquid | 76 | liquid | {%-
  render 'icon-checkmark-animated',
  animation_state: 'unchecked', |
| snippets/results-search-content.liquid | 757 | liquid | {% comment %}
  @param title {String}
    Title for section |
| snippets/rimg.liquid | 13522 | liquid | {%- capture _ -%}
  {% comment %}
    @param img |
| snippets/schema-helpers.liquid | 211 | liquid | {%- comment -%}Outputs JSON-LD script tag when data is present{%- endcomment -%}
{%- if data and data != blank -%}
  … |
| snippets/search-sanitizer.liquid | 1450 | liquid | {% capture _ %}
  {% comment %}
    @param search_terms {string} |
| snippets/share-buttons.liquid | 2218 | liquid | {% comment %}
  @param social_url {String}
    URL to share |
| snippets/site-header-actions.liquid | 1347 | liquid | <ul class="site-header-actions" data-header-actions>
  {% if shop.customer_accounts_enabled %}
    {% unless customer %} |
| snippets/site-mobile-nav.liquid | 1159 | liquid | <div class="site-mobile-nav" id="site-mobile-nav" data-mobile-nav tabindex="0">
  <div class="mobile-nav-panel" data-… |
| snippets/slideshow-slide.liquid | 8871 | liquid | {% liquid
  assign block_slide_image = block.settings.background_image
  assign block_slide_image_mobile = block.sett… |
| snippets/social-icon.liquid | 45559 | liquid | {% comment %}
  @param id {String}
    Name of the social icon to use |
| snippets/social-link.liquid | 757 | liquid | {% comment %}
  @param id {String}
    A unique ID for the link, used as a classname and to look up the icon. |
| snippets/social-list.liquid | 6187 | liquid | {% assign social_networks = 'behance\|clubhouse\|discord\|dribbble\|email\|facebook\|flickr\|houzz\|instagram\|kickstarter\|lin… |
| snippets/social-meta-tags.liquid | 4873 | liquid | {% liquid
  assign og_title = page_title \| default: shop.name
  assign og_url = canonical_url \| default: request.origin |
| snippets/structured-data.liquid | 12127 | liquid | {% comment %}
  Article structured data
  https://developers.google.com/search/docs/data-types/articles |
| snippets/subcollections-banner.liquid | 614 | liquid | <div class="subcollections-banner__container">
  {% if section.settings.show_collection_image and image %}
    <figur… |
| snippets/subcollections-collection.liquid | 4431 | liquid | {% comment %} Assign object as block or section {% endcomment %}
{% if type == 'block' %}
  {%- assign object = block… |
| snippets/subcollections-grid-list-item.liquid | 1878 | liquid | {% comment %} Assign object as block or section {% endcomment %}
{% if type == 'block' %}
  {%- assign object = block… |
| snippets/subcollections-menu-list-item.liquid | 3393 | liquid | {% assign collection_title = 'onboarding.collection.title' \| t %}
{% capture collection_links %}
  {% for i in (1..6) %} |
| snippets/swatch-data.liquid | 2187 | liquid | {%- capture _ -%}
  {% comment %}
    @param product - product to parse |
| snippets/swatch-styles.liquid | 4734 | liquid | {%- capture _ -%}
  {% comment %}
    @param color_name {string} |
| snippets/unknown-helper.liquid | 127 | liquid | {%- comment -%}
Placeholder for unknown-helper.liquid snippet. Remove or replace with real logic as needed.
{%- endco… |
| snippets/video.liquid | 2250 | liquid | {% comment %}
  @param url {String}
    Video URL |
| snippets/wishlist.liquid | 908 | liquid | <style>
  /* Style for product display can be added based on your design requirements */
  @media only screen and (mi… |
| snippets/wk-custom-meta-field.liquid | 1034 | liquid | {% assign wk_metafields = product.metafields.wk_custom_field %}
{% unless wk_metafields == empty %}
  <h1>Extra Infor… |
| snippets/wk-seller-listing-variable.liquid | 427 | liquid | {% assign url_type = '?' %}
{% assign wk_store_ids = "2727634,2727641" \| split: ',' %}
{% assign wk_store_names = "GT… |
| templates/404.json | 67 | json | {"sections":{"main":{"type":"404","settings":{}}},"order":["main"]} |
| templates/article.json | 269 | json | {
  "sections": {
    "main": { |
| templates/blog.json | 282 | json | {
  "sections": {
    "main": { |
| templates/cart.json | 207 | json | {"sections":{"main":{"type":"static-cart","settings":{"show_vendor":false,"show_sku":false,"enable_order_notes":false… |
| templates/collection.agriculture-farming.json | 1054 | json | {"sections":{"main":{"type":"static-collection","blocks":{"menu_qhRgyV":{"type":"menu","settings":{"menu":"agricultur… |
| templates/collection.food-processing-equipment.json | 940 | json | {"sections":{"main":{"type":"static-collection","blocks":{"menu_qhRgyV":{"type":"menu","settings":{"menu":"food-procc… |
| templates/collection.industrial-machinery.json | 1056 | json | {"sections":{"main":{"type":"static-collection","blocks":{"menu_qhRgyV":{"type":"menu","settings":{"menu":"industrial… |
| templates/collection.json | 1051 | json | {"sections":{"main":{"type":"static-collection","blocks":{"menu_qhRgyV":{"type":"menu","settings":{"menu":"food-procc… |
| templates/collection.motors-pump-engines.json | 1062 | json | {"sections":{"main":{"type":"static-collection","blocks":{"menu_qhRgyV":{"type":"menu","settings":{"menu":"motors-pum… |
| templates/collection.spare-parts.json | 1048 | json | {"sections":{"main":{"type":"static-collection","blocks":{"menu_qhRgyV":{"type":"menu","settings":{"menu":"spare-part… |
| templates/collection.subcollections-grid.json | 90 | json | {"sections":{"main":{"type":"static-subcollections-grid","settings":{}}},"order":["main"]} |
| templates/collection.subcollections-menu-list.json | 941 | json | {"sections":{"main":{"type":"static-subcollections-menu","settings":{"show_breadcrumbs":true,"show_description":true,… |
| templates/collection.subcollections.json | 457 | json | {"sections":{"main":{"type":"static-subcollections-featured-collection","settings":{"show_breadcrumbs":true,"show_col… |
| templates/customers/account.liquid | 24 | liquid | {% section 'account' %} |
| templates/customers/activate_account.liquid | 32 | liquid | {% section 'activateaccount' %} |
| templates/customers/addresses.liquid | 26 | liquid | {% section 'addresses' %} |
| templates/customers/login.liquid | 23 | liquid | {% section 'login' %}
 |
| templates/customers/order.liquid | 22 | liquid | {% section 'order' %} |
| templates/customers/register.liquid | 25 | liquid | {% section 'register' %} |
| templates/customers/reset_password.liquid | 30 | liquid | {% section 'resetpassword' %} |
| templates/gift_card.liquid | 6099 | liquid | {% layout none %}

<!doctype html> |
| templates/index.ecomposer.liquid | 18 | liquid | [[ECOM-WORKSPACE]] |
| templates/index.json | 15909 | json | {"sections":{"dynamic_slideshow":{"type":"dynamic-slideshow","blocks":{"slide-1":{"type":"slide","settings":{"backgro… |
| templates/list-collections.json | 169 | json | {"sections":{"main":{"type":"static-list-collections","settings":{"thumbnail_columns_desktop":4,"thumbnail_columns_mo… |
| templates/page.contact.json | 762 | json | {"sections":{"main":{"type":"page-contact","custom_css":[],"settings":{}},"dynamic_html_fPA9f4":{"type":"dynamic-html… |
| templates/page.faq.json | 993 | json | {"sections":{"main":{"type":"static-faq","settings":{}},"dynamic-faq":{"type":"dynamic-faq","blocks":{"category_1":{"… |
| templates/page.json | 68 | json | {"sections":{"main":{"type":"page","settings":{}}},"order":["main"]} |
| templates/page.market-index.json | 77 | json | {"sections":{"main":{"type":"market-index","settings":{}}},"order":["main"]} |
| templates/page.mp_seller_profile.liquid | 1765 | liquid | <script> var wk_type_url = "?";</script><style>#shopify-section-site-footer, #shopify-section-footer, #shopify-sectio… |
| templates/page.registerVendor.liquid | 9156 | liquid | 

<style> |
| templates/page.seo-landing.json | 197 | json | {"sections":{"main":{"type":"seo-landing-main","settings":{}},"related":{"type":"seo-related-links","settings":{}},"f… |
| templates/page.vendorProfile.liquid | 19359 | liquid | <div id="vendor-detail-page">
    <input type="hidden" id="company_id" value="{{$company->id}}">
    @if ($company->b… |
| templates/page.wishlist.liquid | 106 | liquid | <!-- -Create template/page.wishlist.liquid- -->

<div class="page-width"> |
| templates/password.json | 99 | json | {"layout":"password","sections":{"main":{"type":"static-password","settings":{}}},"order":["main"]} |
| templates/product.3-columns.json | 550 | json | {"sections":{"main":{"type":"static-product-3-columns","blocks":{"title":{"type":"title","settings":{}},"vendor":{"ty… |
| templates/product.compare.json | 2369 | json | {"sections":{"main":{"type":"static-product-compare","blocks":{"heading":{"type":"heading","settings":{"text":"Produc… |
| templates/product.json | 4524 | json | {"sections":{"main":{"type":"static-product","blocks":{"title":{"type":"title","settings":{}},"vendor":{"type":"vendo… |
| templates/product.pre-order-3-columns.json | 642 | json | {"sections":{"main":{"type":"static-product-3-columns","blocks":{"title":{"type":"title","settings":{}},"vendor":{"ty… |
| templates/product.pre-order.json | 796 | json | {"sections":{"main":{"type":"static-product","blocks":{"title":{"type":"title","settings":{}},"vendor":{"type":"vendo… |
| templates/product.quickshop.json | 424 | json | {"layout":"quickshop","sections":{"main":{"type":"quickshop","blocks":{"title":{"type":"title","settings":{}},"vendor… |
| templates/product.recently-viewed.liquid | 99 | liquid | {% layout none %}

{% |
| templates/search.header.liquid | 4613 | liquid | {% layout none %}

{% comment %} |
| templates/search.json | 158 | json | {"sections":{"main":{"type":"static-search","blocks":{"filter-1":{"type":"filter","settings":{}}},"block_order":["fil… |
| tools/csv-to-matrixify.mjs | 3948 | mjs | #!/usr/bin/env node
import fs from 'fs';
import path from 'path'; |
| tools/enrich-content.mjs | 4802 | mjs | import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync'; |
| tools/keyword-csv-map.mjs | 2553 | mjs | #!/usr/bin/env node
import fs from 'fs';
import path from 'path'; |
| tools/redirects-from-diff.mjs | 2074 | mjs | import fs from 'fs';
import { parse } from 'csv-parse/sync';
import { stringify } from 'csv-stringify/sync'; |
| tools/register-content-models.mjs | 6305 | mjs | import fs from 'fs';
import path from 'path';
 |
| tools/sheet-to-matrixify.mjs | 3274 | mjs | import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync'; |
