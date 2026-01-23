import { Locator, Page } from '@playwright/test';

export class TicketsPage {

    public get LastWeekend(): Locator {
        return this.page.getByRole('link', { name: 'flag logo Abu Dhabi' });
    }

    public get selectLastWeekend(): Locator {
        return this.page.locator('//div[@class="row grid-content "]//div[21]//a');
    }

    public get selectCheapestOption(): Locator {
        return this.page.locator('//div[@id="9685"]//a');
    }

    public get cartButton(): Locator {
        return this.page.locator('//a[@class="nav-mainlink menucart"]');
    }

    public get f1Calendar(): Locator {
        return this.page.locator('a').filter({ hasText: 'F1® Calendar' });
    }

    public get cartList(): Locator {
        return this.page.locator('//div[@class="funnel-cart-product-list"]');
    }

    public get addToCartButton(): Locator {
        return this.page.locator('//button[@class="add-to-cart"]');
    }

    public get closePopUpButton(): Locator {
        return this.page.locator('//span[@class="icon icon-close"]');
    }

    public constructor(private page: Page) {}

    public async acceptAllCookiesButton(): Promise<void> {
        await this.page.locator('//button[@id="onetrust-accept-btn-handler"]').click();
    }

    public async goToTicket(): Promise<void> {
        await this.page.goto('https://tickets.formula1.com/en');
    }

}
