import { $ } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';
import { BasePage } from './base-page/base-page';

export class SmartphonesTVandElectronicsPage extends BasePage {
    public get smartphones(): ChainablePromiseElement {
        return $('a[title="Мобільні телефони"].tile-cats__picture');
    }

    public get firstItem(): ChainablePromiseElement {
        return $('//rz-category-goods/*[1] //div[@class="goods-tile__picture"]');
    }
}
