import { test } from '@playwright/test';

for (const theme of ['light', 'dark']) {
  test(`capture v0.5 ${theme}`, async ({ page }, testInfo) => {
    await page.goto('/demo/v05.html');
    await page.evaluate((value) => {
      document.documentElement.dataset.theme = value;
      localStorage.setItem('nbs-theme', value);
    }, theme);
    await page.reload();
    const image = await page.screenshot({ fullPage: true });
    await testInfo.attach(`v05-${theme}`, { body: image, contentType: 'image/png' });
  });
}
