const { expect } = require('@playwright/test');

class Login {
  constructor(page) {
    this.page = page;
    this.username = page.getByPlaceholder('Email');
    this.password = page.getByPlaceholder('Password');
    this.enter = page.getByRole('button', { name: 'Sign in' });
    this.message = page.locator('#flash div');
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.enter.click();
  }

  async loginValidation(username, password) {
    await this.login(username, password);
    await expect(this.message).toHaveText('Signed in successfully.', { timeout: 15000 });
  }

  async wrongLogin(username, password) {
    await this.login(username, password);
    await expect(this.message).toHaveText('Invalid email or password.', { timeout: 15000 });
  }

  async close() {
    await this.page.close();
  }
}

module.exports = { Login };
