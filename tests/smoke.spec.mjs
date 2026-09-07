import { test, expect } from '@playwright/test';

test('v0.5 commercial workflows remain interactive', async ({ page }) => {
  await page.goto('/demo/v05.html');

  const themeToggle = page.locator('#themeToggle');
  await themeToggle.click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');

  await page.getByRole('button', { name: 'Renewals due' }).click();
  await expect(page.locator('#viewSummary')).toContainText('2 licenses visible');

  await page.getByRole('button', { name: 'Compact' }).click();
  await expect(page.locator('#licenseTableWrap')).toHaveAttribute('data-nbs-density', 'compact');

  await page.locator('#columnsButton').click();
  const mrrToggle = page.locator('[data-column-toggle="mrr"]');
  await mrrToggle.uncheck();
  await expect(page.locator('th[data-column="mrr"]')).toBeHidden();

  await page.getByRole('button', { name: 'Promote to 50%' }).click();
  await expect(page.locator('#rolloutLabel')).toHaveText('50% of eligible installs');

  await page.getByRole('tab', { name: 'Response' }).click();
  await expect(page.locator('#inspectorCode')).toContainText('commerce_upstream_unavailable');
});

test('tactile button contact moves into positive depth', async ({ page }) => {
  await page.goto('/demo/v05.html');
  const button = page.getByRole('button', { name: 'Dark mode' });
  await button.hover();
  const matrix = await button.evaluate((node) => getComputedStyle(node).transform);
  expect(matrix).not.toBe('none');
  expect(matrix).not.toContain('-');
});
