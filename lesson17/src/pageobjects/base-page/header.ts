import { $ } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';

export class Header {
    public get cartIcon(): ChainablePromiseElement {
        return $('//ul[@class="header-actions"]/li[9]');
    }

    public get burgerMenuButton(): ChainablePromiseElement {
        return $('button[data-testid="menu_button"]');
    }

    public get logoButton(): ChainablePromiseElement {
        return $('//a[@class="header__logo"]');
    }

    public get catalogButton(): ChainablePromiseElement {
        return $('button[data-testid="fat_menu_btn"]');
    }

    public get languageButton(): ChainablePromiseElement {
        return $('//ul[@class="header-actions"]/li[1]');
    }

    public get ordersButton(): ChainablePromiseElement {
        return $('//ul[@class="header-actions"]/li[3]');
    }

    public get notificationsButton(): ChainablePromiseElement {
        return $('//ul[@class="header-actions"]/li[6]');
    }

    public get comparisonListButton(): ChainablePromiseElement {
        return $('//ul[@class="header-actions"]/li[7]');
    }

    public get wishListButton(): ChainablePromiseElement {
        return $('//ul[@class="header-actions"]/li[8]');
    }

    public get searchInput(): ChainablePromiseElement {
        return $('input[type="text"]');
    }

    public get searchButton(): ChainablePromiseElement {
        return $('.search-form>button');
    }

    public get searchHeader(): ChainablePromiseElement {
        return $('h2[class="search-heading"] span');
    }
}
