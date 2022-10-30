class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#basic_email');
        this.passwordInput = page.locator('#basic_password');
        this.submitBtn = page.locator('[data-qa="login-button"]');
        this.sucNotif = page.locator('text=Logged in successfully.');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitBtn.click();
    }
}

module.exports = { LoginPage };