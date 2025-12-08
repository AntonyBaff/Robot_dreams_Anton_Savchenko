import { $ } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';
import { BasePage } from './base-page/base-page';

export class ItemPage extends BasePage {
    public get buyButton(): ChainablePromiseElement {
        return $('rz-buy-button.mode-slim.toOrder button');
    }
}
