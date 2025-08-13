#!/usr/bin/env bash
set -euo pipefail

if [ -z "${STORE_DOMAIN:-}" ]; then
  echo "STORE_DOMAIN is not set" >&2
  exit 1
fi

shopify login --store "$STORE_DOMAIN"
