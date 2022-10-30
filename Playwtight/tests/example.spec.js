// @ts-check
const { test, expect } = require('@playwright/test');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))


test.beforeEach(async ({ page }) => {
  await page.goto('https://frescofe.herokuapp.com/auth/login');
});

test.describe('login', () => {
  test('Should be able to login with correct password', async ({ page }) => {
    await page.locator('[id="basic_email"]').fill('aliakseysivenok@gmail.com');
    await page.locator('[id="basic_password"]').fill('12345678');
    await page.locator('[data-qa="login-button"]').click();

    await expect(page.locator('.board-sorting-wrapper h1')).toHaveText('Your Boards');
  });
});