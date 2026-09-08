import { test, expect } from '@playwright/test';

for (const theme of ['light', 'dark']) {
  test(`visual regression: core reference plate ${theme}`, async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium', 'Blocking visual baselines use one deterministic desktop Chromium target.');
    await page.setViewportSize({ width: 1100, height: 900 });
    await page.goto('/tests/fixtures/reference.html');
    await page.evaluate((value) => { document.documentElement.dataset.theme = value; }, theme);
    await expect(page.getByTestId('reference-plate')).toHaveScreenshot(`soft-reference-${theme}.png`, {
      animations: 'disabled',
      caret: 'hide',
      maxDiffPixelRatio: 0.002
    });
  });
}
