#!/usr/bin/env bash
set -euo pipefail

if [ -z "${THEME_NAME:-}" ]; then
  echo "THEME_NAME is not set" >&2
  exit 1
fi

shopify theme dev --theme "$THEME_NAME"
