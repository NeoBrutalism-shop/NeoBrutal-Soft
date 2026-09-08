import { test, expect } from '@playwright/test';

test('forced-colors keeps controls structurally visible', async ({ page }) => {
  await page.emulateMedia({ forcedColors: 'active' });
  await page.goto('/tests/fixtures/resilience.html');

  const primary = page.locator('#forcedPrimary');
  const styles = await primary.evaluate((node) => {
    const style = getComputedStyle(node);
    return {
      boxShadow: style.boxShadow,
      borderStyle: style.borderStyle,
      borderWidth: style.borderWidth,
      color: style.color,
      backgroundColor: style.backgroundColor
    };
  });

  expect(styles.boxShadow).toBe('none');
  expect(styles.borderStyle).not.toBe('none');
  expect(Number.parseFloat(styles.borderWidth)).toBeGreaterThanOrEqual(2);
  expect(styles.color).not.toBe(styles.backgroundColor);
});

test('RTL and long localized strings do not create viewport overflow', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto('/tests/fixtures/resilience.html');

  const dimensions = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    scroll: document.documentElement.scrollWidth
  }));
  expect(dimensions.scroll).toBeLessThanOrEqual(dimensions.viewport + 1);

  const directionalTransform = await page.locator('[dir="rtl"] .nbs-icon--directional').evaluate((node) => getComputedStyle(node).transform);
  expect(directionalTransform).toContain('-1');
});

test('resilience fixture remains keyboard reachable', async ({ page }) => {
  await page.goto('/tests/fixtures/resilience.html');
  await page.keyboard.press('Tab');
  await expect(page.locator('button').first()).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.locator('button').nth(1)).toBeFocused();
});
