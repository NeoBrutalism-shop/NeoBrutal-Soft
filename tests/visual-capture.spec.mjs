import { test } from '@playwright/test';

for (const [path, label] of [['/', 'showcase'], ['/demo/v05.html', 'v05']]) {
  for (const theme of ['light', 'dark']) {
    test(`capture ${label} ${theme}`, async ({ page }, testInfo) => {
      await page.goto(path);
      await page.evaluate((value) => {
        document.documentElement.dataset.theme = value;
        localStorage.setItem('nbs-theme', value);
      }, theme);
      await page.reload();
      const image = await page.screenshot({ fullPage: true });
      await testInfo.attach(`${label}-${theme}`, { body: image, contentType: 'image/png' });
    });
  }
}
