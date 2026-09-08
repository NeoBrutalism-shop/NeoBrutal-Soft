import { readdir, readFile } from 'node:fs/promises';
import process from 'node:process';

const componentsDir = new URL('../src/components/', import.meta.url);
const indexPath = new URL('../src/index.css', import.meta.url);
const failures = [];

const componentFiles = (await readdir(componentsDir)).filter((file) => file.endsWith('.css')).sort();
const indexCss = await readFile(indexPath, 'utf8');

for (const file of componentFiles) {
  const expected = `@import "./components/${file}";`;
  if (!indexCss.includes(expected)) failures.push(`Missing export in src/index.css: ${file}`);

  const fileUrl = new URL(file, componentsDir);
  const css = await readFile(fileUrl, 'utf8');

  const hoverBlocks = css.match(/[^{}]*:hover[^{}]*\{[^{}]*\}/g) || [];
  for (const block of hoverBlocks) {
    if (/translateY\(\s*-/.test(block)) {
      failures.push(`${file}: upward hover translateY detected. Soft follows “Compress, never float.”`);
    }
  }

  if (/transition\s*:\s*all\b/i.test(css)) {
    failures.push(`${file}: avoid transition: all; declare intentional properties.`);
  }

  const opens = (css.match(/{/g) || []).length;
  const closes = (css.match(/}/g) || []).length;
  if (opens !== closes) failures.push(`${file}: unbalanced CSS braces (${opens} open / ${closes} close).`);
}

for (const file of ['tokens.css', 'base.css', 'resilience.css']) {
  const css = await readFile(new URL(`../src/${file}`, import.meta.url), 'utf8');
  const opens = (css.match(/{/g) || []).length;
  const closes = (css.match(/}/g) || []).length;
  if (opens !== closes) failures.push(`src/${file}: unbalanced CSS braces (${opens} open / ${closes} close).`);
}

if (!indexCss.includes('@import "./resilience.css";')) failures.push('src/index.css must export resilience.css.');
if (!componentFiles.length) failures.push('No component CSS files found.');

if (failures.length) {
  console.error('\nNeoBrutal Soft conformance check failed:\n');
  for (const failure of failures) console.error(`  ✗ ${failure}`);
  console.error('');
  process.exit(1);
}

console.log(`✓ ${componentFiles.length} component stylesheets exported`);
console.log('✓ resilience layer exported');
console.log('✓ no upward hover translateY patterns detected');
console.log('✓ no transition: all declarations detected');
console.log('✓ CSS brace counts are balanced');
console.log('NeoBrutal Soft conformance check passed.');
