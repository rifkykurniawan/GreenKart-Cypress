const Locator = require('../page-element/locator.json');

export const homeActions = {
    clickChartButton: () => {
        cy.get(Locator.HomePage.chartButton).click();
    },
    isChartImageVisible: () => {
        cy.get(Locator.HomePage.chartImage).should('be.visible');
    },
    clickItem1: () => {
        cy.get(Locator.HomePage.item1).click();
    },
    getChartCount: () => {
        cy.get(Locator.HomePage.chartCount).should('have.text', '1');
    },
    clickProceedToCheckoutButton: () => {
        cy.get(Locator.HomePage.proceedToCheckoutButton).click();
    },
    isPlaceOrderButtonVisible: () => {
        cy.get(Locator.ChartPage.placeOrderButton).should('be.visible');
    },
    isPromoCodeInputVisible: () => {
        cy.get(Locator.ChartPage.promoCodeInput).should('be.visible');
    },
    isPromoCodeApplyButtonVisible: () => {
        cy.get(Locator.ChartPage.promoCodeApplyButton).should('be.visible');
    },
    isTotalAmountVisible: () => {
        cy.get(Locator.ChartPage.totalAmount).should('be.visible');
    },
    isCartTableVisible: () => {
        cy.get(Locator.ChartPage.cartTable).should('be.visible');
    }

}