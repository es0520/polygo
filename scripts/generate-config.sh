#!/usr/bin/env bash
# Generates config.js from config.example.js using SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY,
# NAVER_CLIENT_ID env vars. Shared by deploy.yml, android-release.yml, ios-release.yml.
set -euo pipefail

if [ -z "${SUPABASE_URL:-}" ]; then
  echo "::error::SUPABASE_URL secret is empty. Go to Settings > Secrets and variables > Actions > Repository secrets and set SUPABASE_URL to the full Project URL (https://xxxx.supabase.co)."
  exit 1
fi
if [[ "$SUPABASE_URL" != https://* ]]; then
  echo "::error::SUPABASE_URL secret ('$SUPABASE_URL') does not start with https://. It must be the full Project URL, not just the project ref."
  exit 1
fi
if [ -z "${SUPABASE_PUBLISHABLE_KEY:-}" ]; then
  echo "::error::SUPABASE_PUBLISHABLE_KEY secret is empty. Go to Settings > Secrets and variables > Actions > Repository secrets and set it."
  exit 1
fi

cp config.example.js config.js
# -i.bak (suffix attached, no space) is the one sed -i form that both GNU sed (Linux runners)
# and BSD sed (macOS runners) accept identically - a bare `sed -i "..."` works on Linux but
# fails on macOS, which requires an extension argument after -i.
sed -i.bak "s|YOUR_SUPABASE_URL|$SUPABASE_URL|" config.js
sed -i.bak "s|YOUR_SUPABASE_PUBLISHABLE_KEY|$SUPABASE_PUBLISHABLE_KEY|" config.js
if [ -n "${NAVER_CLIENT_ID:-}" ]; then
  sed -i.bak "s|YOUR_NAVER_CLIENT_ID|$NAVER_CLIENT_ID|" config.js
else
  echo "::warning::NAVER_CLIENT_ID secret not set yet, Naver login button will show a setup notice until you add it."
fi
rm -f config.js.bak
echo "Configured SUPABASE_URL host: $(echo "$SUPABASE_URL" | sed -E 's#https://([^/]+).*#\1#')"
