import { expect, type Locator, type Page } from '@playwright/test';

export class PaginaPrincipal{  
    readonly page: Page;
    readonly manyElements: Locator;
    readonly landingPage: Locator;
    readonly pricingPage: Locator;
    readonly forms: Locator;
    readonly automation: Locator;
    readonly login: Locator;
    readonly interactions: Locator;

    constructor(page: Page){
        this.page = page;
        this.manyElements = page.getByRole('link', { name: 'Big page with many elements' });
        this.landingPage = page.getByRole('link', { name: 'Fake Landing Page' });
        this.pricingPage = page.getByRole('link', { name: 'Fake Pricing Page' });
        this.forms = page.getByRole('link', { name: 'Fill out forms' });
        this.automation = page.getByRole('link', { name: 'Learn how to automate an' });
        this.login = page.getByRole('link', { name: 'Login automation' });
        this.interactions = page.getByRole('link', { name: 'Interactions with simple' });
    }
    async navigate(){
        await this.page.goto('https://ultimateqa.com/automation');
    }
    async clickManyElements(){
        await this.manyElements.click();
    }
    async clickLandingPage(){
        await this.landingPage.click();
    }
    async clickPricingPage(){
        await this.pricingPage.click();
    }
    async clickForms(){
        await this.forms.click();
    }
    async clickAutomation(){
        await this.automation.click();
    }
    async clickLogin(){
        await this.login.click();
        await expect(this.page).toHaveURL('https://courses.ultimateqa.com/users/sign_in');
    }
    async clickInteractions(){
        await this.interactions.click();
    }
    async close(){
        await this.page.close();
    }

}