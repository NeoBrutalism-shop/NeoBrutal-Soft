import { access, readFile } from 'node:fs/promises';
import process from 'node:process';

const root = new URL('../', import.meta.url);
const failures = [];
const registry = JSON.parse(await readFile(new URL('../registry.json', import.meta.url), 'utf8'));

if (registry.$schema !== 'https://ui.shadcn.com/schema/registry.json') failures.push('registry.json must use the current shadcn registry schema URL.');
if (!Array.isArray(registry.items) || registry.items.length === 0) failures.push('registry.json must contain items.');

const names = new Set();
for (const item of registry.items || []) {
  if (names.has(item.name)) failures.push(`Duplicate registry item name: ${item.name}`);
  names.add(item.name);

  for (const file of item.files || []) {
    try {
      await access(new URL(`../${file.path}`, import.meta.url));
    } catch {
      failures.push(`${item.name}: missing source file ${file.path}`);
    }
  }
}

const base = registry.items?.find((item) => item.name === 'soft-base');
if (!base || base.type !== 'registry:base') failures.push('soft-base must exist as registry:base.');
if (!base?.files?.some((file) => file.path === 'src/index.css')) failures.push('soft-base must install src/index.css.');

for (const item of registry.items?.filter((entry) => entry.type === 'registry:ui') || []) {
  if (!item.registryDependencies?.includes('soft-base')) failures.push(`${item.name}: UI registry items must depend on soft-base.`);
}

for (const required of ['packages/react/package.json', 'packages/react/src/index.js', 'LLMS.md']) {
  try {
    await access(new URL(`../${required}`, import.meta.url));
  } catch {
    failures.push(`Missing distribution file: ${required}`);
  }
}

if (failures.length) {
  console.error('\nNeoBrutal Soft registry check failed:\n');
  for (const failure of failures) console.error(`  ✗ ${failure}`);
  console.error('');
  process.exit(1);
}

console.log(`✓ ${registry.items.length} registry items valid`);
console.log('✓ registry source paths exist');
console.log('✓ UI items depend on the complete Soft base');
console.log('✓ React and agent distribution files exist');
