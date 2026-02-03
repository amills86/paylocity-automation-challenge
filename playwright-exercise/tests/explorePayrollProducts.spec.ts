import { test, expect } from '@playwright/test';

test('Verify payroll products navigation and interaction', async ({ page }) => {
  await page.goto('https://www.paylocity.com/');
  await page.getByTitle('Pricing').click();
  await expect(page.getByRole('button', { name: 'Request Pricing' })).toBeVisible();
  await expect(page.locator('#cmp-hubspot-form-263d048f8b-email')).toBeVisible();
});