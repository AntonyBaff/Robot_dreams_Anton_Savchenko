import { expect } from 'chai';
import puppeteer, { Browser, BrowserContext, Page } from 'puppeteer';

describe('Homework 15 Puppeteer', () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    before(async () => {
        browser = await puppeteer.launch({ headless: false, defaultViewport: { width: 1920, height: 1080 }, slowMo: 100 });
    });

    beforeEach(async () => {
        context = await browser.createBrowserContext();
        page = await context.newPage();
        await page.goto('https://rozetka.com.ua/', { waitUntil: 'domcontentloaded' });
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    after(async () => {
        await browser.close();
    });

    it('Test Case #1', async () => {
        await page.click('ul.sidebar-theme li:nth-child(2) a');
        await page.waitForNavigation();
        await page.click('a[title="Мобільні телефони"].tile-cats__picture');
        await page.waitForNavigation();
        await page.click('section[class="flex-grow-1"]>rz-category-goods>:first-child');
        await page.waitForNavigation();
        await page.click('rz-buy-button.mode-slim.toOrder button');
        await page.waitForSelector('rz-modal-layout[class="modal-layout"] div[class="cart-footer"]>button');
        await page.click('rz-modal-layout[class="modal-layout"] div[class="cart-footer"]>button');
        await page.click('button.header-cart__button');
        await page.waitForSelector('div.cart.cart-se ul.cart-list');
    });

    it('Test Case #2', async () => {
        await page.type('input[type="text"]', 'Клавіатура');
        await page.click('.search-form>button');
        await page.waitForSelector('h2.search-heading span');
    });

    it('Test Case #3', async () => {
        await page.waitForSelector('ul.sidebar-theme li');
        const elements = await page.$$('ul.sidebar-theme li');
        expect(elements.length).to.be.equal(18);
    });

    it('Test Case #4', async () => {
        await page.waitForSelector('button[data-testid="menu_button"]');
        await page.waitForSelector('a.header__logo');
        await page.waitForSelector('button[data-testid="fat_menu_btn"]');
        await page.waitForSelector('ul.header-actions li:nth-child(1)');
        await page.waitForSelector('ul.header-actions li:nth-child(3)');
        await page.waitForSelector('ul.header-actions li:nth-child(6)');
        await page.waitForSelector('ul.header-actions li:nth-child(7)');
        await page.waitForSelector('ul.header-actions li:nth-child(8)');
        await page.waitForSelector('ul.header-actions li:nth-child(9)');
    });
});
