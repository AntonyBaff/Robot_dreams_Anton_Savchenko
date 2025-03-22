import 'cypress-xpath';

describe('template spec', () => {
    it('Test Case #1', () => {
        cy.visit('https://rozetka.com.ua/');
        cy.get('ul[class="sidebar-theme"] li:nth-child(2)>a').click();
        cy.get('a[title="Мобільні телефони"].tile-cats__picture').click();
        cy.xpath('//rz-category-goods/*[1] //div[@class="goods-tile__picture"]').click();
        cy.wait(1000);
        cy.get('rz-buy-button[class="mode-slim toOrder"]>button').click();
        cy.xpath('//button[@data-testid="continue-shopping-link"]').click();
        cy.xpath('//button[@class="header-cart__button"]').click();
        cy.get('div[class="cart cart-se"]').find('ul[class="cart-list"]').should('exist');
    });

    it('Test Case #2', () => {
        cy.visit('https://rozetka.com.ua/');
        cy.get('input[type="text"]').type('Клавіатура');
        cy.get('.search-form>button').click();
        cy.get('h2[class="search-heading"] span').should('exist');
    });

    it('Test Case #3', () => {
        cy.visit('https://rozetka.com.ua/');
        cy.xpath('//ul[@class="sidebar-theme"]/li').should('have.length', 18);
    });

    it('Test Case #4', () => {
        cy.visit('https://rozetka.com.ua/');
        cy.get('button[data-testid="menu_button"]').should('exist');
        cy.xpath('//a[@class="header__logo"]').should('exist');
        cy.get('button[data-testid="fat_menu_btn"]').should('exist');
        cy.xpath('//ul[@class="header-actions"]/li[1]').should('exist');
        cy.xpath('//ul[@class="header-actions"]/li[3]').should('exist');
        cy.xpath('//ul[@class="header-actions"]/li[6]').should('exist');
        cy.xpath('//ul[@class="header-actions"]/li[7]').should('exist');
        cy.xpath('//ul[@class="header-actions"]/li[8]').should('exist');
        cy.xpath('//ul[@class="header-actions"]/li[9]').should('exist');
    });
});
