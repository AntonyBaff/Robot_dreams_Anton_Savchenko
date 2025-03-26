import { browser } from '@wdio/globals';
import { RozetkaPage } from '../src/pageobjects/main-page/rozetka.page';
import { SideBar } from 'src/pageobjects/main-page/side-bar';
import { SmartphonesTVandElectronicsPage } from 'src/pageobjects/smartphones-tv-and-electronics.page';
import { CartModalWindow, ItemPage } from 'src/pageobjects/item.page';
import { Header } from '../src/pageobjects/main-page/header';

describe('Test case for ROZETKA', () => {
    let rozetkaPage: RozetkaPage;
    let sideBar: SideBar;
    let smartphonesTVandElectronics: SmartphonesTVandElectronicsPage;
    let itemPage: ItemPage;
    let cartModalWindow: CartModalWindow;
    let header: Header;

    before(async () => {
        await browser.maximizeWindow();
        rozetkaPage = new RozetkaPage();
        sideBar = new SideBar();
        smartphonesTVandElectronics = new SmartphonesTVandElectronicsPage();
        itemPage = new ItemPage();
        cartModalWindow = new CartModalWindow();
        header = new Header();
    });

    beforeEach(async () => {
        await rozetkaPage.goTo();
    });

    it('Check that cart has ordered item', async () => {
        await sideBar.smartphonesTVandElectronicsItem.click();
        await smartphonesTVandElectronics.smartphones.click();
        await smartphonesTVandElectronics.firstItem.click();
        await itemPage.buyButton.click();
        await cartModalWindow.continueShoppingButton.waitForExist();
        await cartModalWindow.continueShoppingButton.click();
        await header.cartIcon.click();
        await cartModalWindow.cartList.isDisplayed();
    });

    it('Check search header', async () => {
        await rozetkaPage.searchInput.setValue('Клавіатура');
        await rozetkaPage.searchButton.click();
        await rozetkaPage.searchHeader.isDisplayed();
    });

    it('Side bar should contain 18 elements', async () => {
        await sideBar.verifySidebarItemsCount(18);
    });

    it('Check elements in header', async () => {
        await header.burgerMenuButton.isDisplayed();
        await header.logoButton.isDisplayed();
        await header.catalogButton.isDisplayed();
        await header.languageButton.isDisplayed();
        await header.ordersButton.isDisplayed();
        await header.notificationsButton.isDisplayed();
        await header.comparisonListButton.isDisplayed();
        await header.wishListButton.isDisplayed();
        await header.cartIcon.isDisplayed();
    });
});
