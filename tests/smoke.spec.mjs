import { test, expect } from '@playwright/test';

test('showcase flagship interactions remain functional', async ({ page }) => {
  await page.goto('/');

  const themeToggle = page.locator('#themeToggle');
  await themeToggle.click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');

  const depth = page.locator('#depthRange');
  await depth.fill('7');
  await expect(page.locator('#depthValue')).toHaveText('7px');
  await expect(page.locator('#restReadout')).toHaveText('7px');
  await expect(page.locator('#hoverReadout')).toHaveText('3.5px');

  await page.getByRole('button', { name: 'Licenses' }).click();
  await expect(page.locator('#demoTitle')).toHaveText('Licenses');
  await expect(page.locator('#metricOne')).toHaveText('11,892');
  await expect(page.locator('#demoListTitle')).toHaveText('Licenses needing attention');

  await page.locator('#agentApprove').click();
  await expect(page.locator('#agentResult')).toContainText(/7 of 7 changes verified|Executing approved plan/);
});

test('showcase tactile hover moves only into positive depth', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name.startsWith('mobile'), 'Hover physics is intentionally not required on touch-first devices.');
  await page.goto('/');
  const button = page.locator('.sc-physics-button');
  await button.hover();
  const matrix = await button.evaluate((node) => getComputedStyle(node).transform);
  expect(matrix).not.toBe('none');
  expect(matrix).not.toContain('-');
});

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

test('tactile button hover moves into positive depth', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name.startsWith('mobile'), 'Hover physics is intentionally not required on touch-first devices.');
  await page.goto('/demo/v05.html');
  const button = page.getByRole('button', { name: 'Dark mode' });
  await button.hover();
  const matrix = await button.evaluate((node) => getComputedStyle(node).transform);
  expect(matrix).not.toBe('none');
  expect(matrix).not.toContain('-');
});
