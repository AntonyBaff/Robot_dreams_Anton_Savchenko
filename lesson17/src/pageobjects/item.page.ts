import { $ } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';

export class ItemPage {
    public get buyButton (): ChainablePromiseElement {
        return $('rz-buy-button.mode-slim.toOrder button');
    }
}

export class CartModalWindow {
    public get continueShoppingButton (): ChainablePromiseElement {
        return $('//button[@data-testid="continue-shopping-link"]');
    }

    public get cartList (): ChainablePromiseElement {
        return $('//div[@class="cart-list"]');
    }
}
