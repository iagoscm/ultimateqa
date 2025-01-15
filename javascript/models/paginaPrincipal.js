const { expect } = require('@playwright/test');

class PaginaPrincipal {
  constructor(page) {
    this.page = page;
    this.manyElements = page.locator('a:has-text("Big page with many elements")');
    this.landingPage = page.locator('a:has-text("Fake Landing Page")');
    this.pricingPage = page.locator('a:has-text("Fake Pricing Page")');
    this.forms = page.locator('a:has-text("Fill out forms")');
    this.automation = page.locator('a:has-text("Learn how to automate an")');
    this.login = page.locator('a:has-text("Login automation")');
    this.interactions = page.locator('a:has-text("Interactions with simple")');
  }

  async navigate() {
    await this.page.goto('https://ultimateqa.com/automation');
  }

  async clickManyElements() {
    await this.manyElements.click();
  }

  async clickLandingPage() {
    await this.landingPage.click();
  }

  async clickPricingPage() {
    await this.pricingPage.click();
  }

  async clickForms() {
    await this.forms.click();
  }

  async clickAutomation() {
    await this.automation.click();
  }

  async clickLogin() {
    await this.login.click();
    await expect(this.page).toHaveURL('https://courses.ultimateqa.com/users/sign_in', { timeout: 15000 });
  }

  async clickInteractions() {
    await this.interactions.click();
  }

  async close() {
    await this.page.close();
  }
}

module.exports = { PaginaPrincipal };
