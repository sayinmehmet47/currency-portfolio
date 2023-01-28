import { test, expect } from '@playwright/test';

test.describe('Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });
  test('should login and redirect to main page', async ({ page }) => {
    // This will result in http://localhost:3000/foo
    await page.getByRole('link', { name: 'SIGN - IN' }).click();
    await expect(page).toHaveURL('/login');
    await page.waitForSelector('text=Login');
    await page.fill('input[name="name"]', 'testAccount');
    await page.click('button[type="submit"]');
  });

  test('should click and change language', async ({ page }) => {
    await page.getByRole('link', { name: 'SIGN - IN' }).click();
    await page.getByPlaceholder('login with `testAccount`').click();
    await page.getByPlaceholder('login with `testAccount`').fill('testAccount');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Dashboard' }).click();
    await page.locator('#exampleSelect').selectOption('Deutsch');
    await page.getByRole('link', { name: 'Willkommen testAccount' }).click();
    await page.getByPlaceholder('TRY').click();
  });
});
