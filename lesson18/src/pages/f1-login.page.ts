import { Locator, Page } from '@playwright/test';

export class F1LoginPage {
    private signInSelector = '//nav[@aria-label="Global Navigation Menu"]//div//a[1]';

    private get emailInput(): Locator {
        return this.page.locator('//input[@name="Login"]');
    }

    private get passwordInput(): Locator {
        return this.page.locator('//input[@name="Password"]');
    }

    private get loggedInButton(): Locator {
        return this.page.locator('//nav//button[@data-event="myProfileClick"]');
    }

    public get signInButton(): Locator {
        return this.page.locator('//nav[@aria-label="Global Navigation Menu"]//div//a[1]');
    }

    public constructor(private page: Page) {}

    private async loginSignInButton(): Promise<void> {
        await this.page.getByRole('button', { name: 'Sign In' }).click();
    }

    public async goTo(): Promise<void> {
        await this.page.goto('https://www.formula1.com/');
    }

    public async login(): Promise<void> {
        const username = process.env.LOGIN;
        const password = process.env.PASSWORD;

        if (!username || !password) {
            throw new Error('Environment variables LOGIN and PASSWORD must be defined.');
        }

        await this.signInButton.click();
        await this.emailInput.click();
        await this.emailInput.pressSequentially('savchenko3337@gmail.com', {
            delay: 50,
            timeout: 60000
        });
        await this.passwordInput.pressSequentially('Qwerty24!', {
            delay: 50,
            timeout: 60000
        });
        await this.loginSignInButton();

        await this.loggedInButton.waitFor();
    }
}
