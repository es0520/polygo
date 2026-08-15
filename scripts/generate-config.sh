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
sed -i "s|YOUR_SUPABASE_URL|$SUPABASE_URL|" config.js
sed -i "s|YOUR_SUPABASE_PUBLISHABLE_KEY|$SUPABASE_PUBLISHABLE_KEY|" config.js
if [ -n "${NAVER_CLIENT_ID:-}" ]; then
  sed -i "s|YOUR_NAVER_CLIENT_ID|$NAVER_CLIENT_ID|" config.js
else
  echo "::warning::NAVER_CLIENT_ID secret not set yet, Naver login button will show a setup notice until you add it."
fi
echo "Configured SUPABASE_URL host: $(echo "$SUPABASE_URL" | sed -E 's#https://([^/]+).*#\1#')"
