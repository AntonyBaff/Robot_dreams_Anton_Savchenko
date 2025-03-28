import { browser } from '@wdio/globals';
import { BasePage } from './base-page';

export class MainPage extends BasePage {
    public async goTo(): Promise<void> {
        await browser.url('https://rozetka.com.ua/');
    }
}
