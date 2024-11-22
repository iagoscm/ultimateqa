import { expect, type Locator, type Page } from '@playwright/test';

export class Login{
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly enter: Locator;
  readonly message: Locator;

  constructor(page: Page){
    this.page = page;
    this.username = page.getByPlaceholder('Email');
    this.password = page.getByPlaceholder('Password');
    this.enter = page.getByRole('button', { name: 'Sign in' });
    this.message = page.locator('#flash div');
  }
  
  async login(username, password){
    await this.username.fill(username);
    await this.password.fill(password);
    await this.enter.click();
  }
  async loginValidation(username, password){
    await this.login(username, password);
    await expect(this.message).toHaveText('Signed in successfully.', {timeout: 5000});
  }
  async wrongLogin(username, password){
    await this.login(username, password);
    await expect(this.message).toHaveText('Invalid email or password.');
  }
  async close(){
    await this.page.close();
  }
}
