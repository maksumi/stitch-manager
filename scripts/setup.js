import { existsSync, copyFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const source = join(__dirname, '..', 'data', 'db.example.json');
const dest = join(__dirname, '..', 'data', 'db.json');

if (!existsSync(dest)) {
  copyFileSync(source, dest);
  console.log('✅ db.json created from db.example.json');
} else {
  console.log('ℹ️  db.json already exists, skipping');
}
