import { BasePage } from 'src/pageobjects/base-page/base-page';
import { MainPage } from 'src/pageobjects/base-page/main-page';
import { SmartphonesTVandElectronicsPage } from 'src/pageobjects/smartphones-tv-and-electronics.page';
import { ItemPage } from 'src/pageobjects/item.page';
import { browser } from '@wdio/globals';

describe('Test case for ROZETKA', () => {
    let basePage: BasePage;
    let mainPage: MainPage;
    let smartphonesTVandElectronics: SmartphonesTVandElectronicsPage;
    let itemPage: ItemPage;

    before(async () => {
        basePage = new BasePage();
        mainPage = new MainPage();
        smartphonesTVandElectronics = new SmartphonesTVandElectronicsPage();
        itemPage = new ItemPage();
        await browser.maximizeWindow();
    });

    beforeEach(async () => {
        await mainPage.goTo();
    });

    it('Check that cart has ordered item', async () => {
        await basePage.sidebar.smartphonesTVandElectronicsItem.click();
        await smartphonesTVandElectronics.smartphones.click();
        await smartphonesTVandElectronics.firstItem.click();
        await itemPage.buyButton.click();
        await basePage.cartModalWindow.continueShoppingButton.waitForExist();
        await basePage.cartModalWindow.continueShoppingButton.click();
        await basePage.header.cartIcon.click();
        await basePage.cartModalWindow.cartList.isDisplayed();
    });

    it('Check search header', async () => {
        await basePage.header.searchInput.setValue('Клавіатура');
        await basePage.header.searchButton.click();
        await basePage.header.searchHeader.isDisplayed();
    });

    it('Side bar should contain 18 elements', async () => {
        await basePage.sidebar.verifySidebarItemsCount(18);
    });

    it('Check elements in header', async () => {
        await basePage.header.burgerMenuButton.isDisplayed();
        await basePage.header.logoButton.isDisplayed();
        await basePage.header.catalogButton.isDisplayed();
        await basePage.header.languageButton.isDisplayed();
        await basePage.header.ordersButton.isDisplayed();
        await basePage.header.notificationsButton.isDisplayed();
        await basePage.header.comparisonListButton.isDisplayed();
        await basePage.header.wishListButton.isDisplayed();
        await basePage.header.cartIcon.isDisplayed();
    });
});
