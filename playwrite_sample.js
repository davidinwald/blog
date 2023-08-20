import { test, expect } from ‘@playwright/test’;

test(‘has title’, async ({ page }) => {
await page.goto(‘https://playwright.dev/’);
// Expect a title “to contain” a substring.
await expect(page).toHaveTitle(/Playwright/);
});

test(‘get started link’, async ({ page }) => {
await page.goto(‘https://playwright.dev/’);
// Click the get started link.
await page.getByRole(‘link’, { name: ‘Get started’ }).click();
// Expects the URL to contain intro.
await expect(page).toHaveURL(/.*intro/);
});

test(‘basic test’, async ({ page }) => {
await page.goto(‘https://playwright.dev/’);
const name = await page.innerText(‘.navbar__title’);
expect(name).toBe(‘Playwright’);
});

test.describe(‘group of tests’, () => {
// Declare hooks inside the group.
test.beforeEach(async ({ page }) => {
await page.goto(‘https://example.com/’);
});

// Tests inside the group share the same context.
test(‘first test’, async ({ page }) => {
// …
});

test(‘second test’, async ({ page }) => {
// …
});
});
