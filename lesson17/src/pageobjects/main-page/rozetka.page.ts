import { $, browser } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';

export class RozetkaPage {
    public async goTo(): Promise<void> {
        await browser.url('https://rozetka.com.ua/');
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
