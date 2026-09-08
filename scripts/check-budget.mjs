import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const kib = (bytes) => `${(bytes / 1024).toFixed(1)} KiB`;

function filesRecursive(dir, predicate = () => true) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...filesRecursive(full, predicate));
    else if (predicate(full)) out.push(full);
  }
  return out;
}

function total(files) {
  return files.reduce((sum, file) => sum + fs.statSync(file).size, 0);
}

const cssFiles = filesRecursive(path.join(root, 'src'), (file) => file.endsWith('.css'));
const componentFiles = filesRecursive(path.join(root, 'src', 'components'), (file) => file.endsWith('.css'));
const reactFiles = filesRecursive(path.join(root, 'packages', 'react'), (file) => /\.(js|json)$/.test(file));
const registryBytes = fs.statSync(path.join(root, 'registry.json')).size;

const budgets = [
  ['all source CSS', total(cssFiles), 120 * 1024],
  ['React wrapper package', total(reactFiles), 32 * 1024],
  ['registry.json', registryBytes, 48 * 1024],
  ['largest component stylesheet', Math.max(...componentFiles.map((file) => fs.statSync(file).size)), 12 * 1024]
];

let failed = false;
for (const [label, size, limit] of budgets) {
  const ok = size <= limit;
  console.log(`${ok ? '✓' : '✗'} ${label}: ${kib(size)} / ${kib(limit)}`);
  if (!ok) failed = true;
}

if (failed) {
  console.error('\nSoft performance budget exceeded. Split or simplify the system before raising a limit.');
  process.exit(1);
}
