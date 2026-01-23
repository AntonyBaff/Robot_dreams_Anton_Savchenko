import { expect, test } from '@playwright/test';
import { MainPage } from 'src/pages/main.page';
import dotenv from 'dotenv';
import { F1LoginPage } from '../src/pages/f1-login.page';
import { TicketsPage } from 'src/pages/tickets.page';
dotenv.config();

test.describe('Formula 1 test', () => {
    test('login', async ({ page }) => {
        const mainPage = new MainPage(page);
        const f1LoginPage = new F1LoginPage(page);

        await mainPage.goToMain();
        await page.waitForLoadState('networkidle');
        await mainPage.acceptCookiesButton();
        await page.getByRole('button').filter({ hasText: /^$/ }).click();
        await f1LoginPage.login();
        await expect(mainPage.accountButton).toBeVisible();
    });

    test('Add ticket to cart', async ({page}) => {
        const ticketsPage = new TicketsPage(page);

        await ticketsPage.goToTicket();
        await ticketsPage.acceptAllCookiesButton();
        await ticketsPage.f1Calendar.hover();
        await ticketsPage.LastWeekend.click();
        await ticketsPage.selectCheapestOption.click();
        await ticketsPage.addToCartButton.click();
        await ticketsPage.closePopUpButton.click();
        await ticketsPage.cartButton.click();
        await expect(ticketsPage.cartList).toBeVisible();
    });
});
