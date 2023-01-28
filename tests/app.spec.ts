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
    await page.getByRole('link', { name: 'Dashboard' }).click();
    await page.locator('#exampleSelect').selectOption('Deutsch');
    await page.getByRole('link', { name: 'Willkommen testAccount' }).click();
    await page.getByPlaceholder('TRY').click();
  });

  test('should buy currency', async ({ page }) => {
    await page.getByRole('link', { name: 'SIGN - IN' }).click();
    await page.getByPlaceholder('login with `testAccount`').click();
    await page.getByPlaceholder('login with `testAccount`').fill('testAccount');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Dashboard' }).click();
    await page.locator('#exampleSelect').selectOption('Deutsch');
    await page.locator('#exampleSelect').selectOption('English');
    await page.getByPlaceholder('TRY').click();
    await page.getByPlaceholder('TRY').fill('e');
    await page.getByText('CVECVE-Cape Verdean Escudo').click();
    await page.waitForTimeout(5000);
    await page.getByPlaceholder('20').click();
    await page.getByPlaceholder('20').fill('200');
    await page.getByRole('button', { name: 'Exchange' }).click();
    await page
      .getByRole('row', {
        name: 'Toggle Row Selected CVE Cape Verdean Escudo 200.000 Buy Sell',
      })
      .getByRole('checkbox', { name: 'Toggle Row Selected' })
      .check();
    await page
      .getByRole('row', {
        name: 'Toggle Row Selected CVE Cape Verdean Escudo 200.000 Buy Sell',
      })
      .getByRole('button', { name: 'Sell' })
      .click();
    await page.getByPlaceholder('20').click();
    await page.getByPlaceholder('20').fill('10');
    await page.getByRole('button', { name: 'Exchange' }).click();
    await page.getByRole('button', { name: 'CVE' }).click();
    await page.getByPlaceholder('20').click();
    await page.getByPlaceholder('20').fill('10');
    await page.getByRole('button', { name: 'Exchange' }).click();
    await page.getByRole('button', { name: 'clear' }).click();
    await page.getByText('Logout').click();
  });
});
