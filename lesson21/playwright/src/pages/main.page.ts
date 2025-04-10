import { Locator, Page } from '@playwright/test';

export class MainPage {
    public get adBanner(): Locator {
        return this.page.locator('//a[@id="img_anch_CNKEnYrNuYwDFf3uuwgdmqY10w"]');
    }

    public get accountButton(): Locator {
        return this.page.locator('a[id="header-account-button"]');
    }

    public get ticketsButton(): Locator {
        return this.page.locator('//ul[@aria-label="Commercial Links"]/li[3]//span[1]');
    }

    public constructor(private page: Page) {}

    public async goToMain(): Promise<void> {
        await this.page.goto('https://www.formula1.com/');
    }

    public async acceptCookiesButton(): Promise<void> {
        await this.page.locator('iframe[title="SP Consent Message"]').contentFrame().getByRole('button', { name: 'ACCEPT ALL' }).click();
    }
}
