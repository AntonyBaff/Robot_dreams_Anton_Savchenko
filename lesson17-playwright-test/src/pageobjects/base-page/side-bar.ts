import { $, $$, expect } from '@wdio/globals';
import { ChainablePromiseArray, ChainablePromiseElement } from 'webdriverio';

export class SideBar {
    public get smartphonesTVandElectronicsItem(): ChainablePromiseElement {
        return $('ul[class="sidebar-theme"] li:nth-child(2)>a');
    }

    public get totalItemsInSideBar(): ChainablePromiseArray {
        return $$('//ul[@class="sidebar-theme"]/li');
    }

    public async verifySidebarItemsCount(expectedCount: number): Promise<void> {
        const items = await this.totalItemsInSideBar;
        await expect(items).toHaveLength(expectedCount);
    }
}
