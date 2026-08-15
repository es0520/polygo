// Stages the exact set of files GitHub Pages already serves as "the app" into
// www/ (gitignored), which is Capacitor's webDir. Deliberately not the repo
// root, so supabase/, research/, *.sql, README.md etc. never end up inside
// the shipped native binary. No bundler — plain file copy.
import { existsSync, mkdirSync, rmSync, copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const wwwDir = join(root, 'www');

const files = [
  'index.html',
  'app.js',
  'styles.css',
  'manifest.webmanifest',
  'sw.js',
  'config.js',
  'icon.svg',
  'icon-512.png',
  'icon-180.png',
];

if (existsSync(wwwDir)) rmSync(wwwDir, { recursive: true, force: true });
mkdirSync(wwwDir, { recursive: true });

for (const file of files) {
  const src = join(root, file);
  if (!existsSync(src)) {
    if (file === 'config.js') {
      console.error(
        `config.js not found. Run scripts/generate-config.sh first (or copy config.example.js to config.js locally).`
      );
      process.exit(1);
    }
    console.error(`Expected file missing: ${file}`);
    process.exit(1);
  }
  copyFileSync(src, join(wwwDir, file));
}

console.log(`Staged ${files.length} files into www/`);
