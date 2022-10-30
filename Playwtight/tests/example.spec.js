// @ts-check
const { test, expect } = require('@playwright/test');
const {LoginPage} = require('../page_object/login.page');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
let loginPage
const credentials = require('../data/credentials.json')

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page)
  await page.goto('https://frescofe.herokuapp.com/auth/login');
});

test.describe('login', () => {
  test('Should be able to login with correct password', async ({ page }) => {
    await loginPage.login(credentials.frescopad.username, credentials.frescopad.password);
    await expect(loginPage.sucNotif).toBeVisible();
  });
});