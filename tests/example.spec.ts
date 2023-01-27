import { test } from '@playwright/test';

test('test', async ({ page }) => {
  // This will result in http://localhost:3000/foo
  await page.goto('/login');
  await page.waitForSelector('text=Login');
});
