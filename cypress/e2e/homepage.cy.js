import { homeActions } from '../page-object/page-action/homeActions';

describe('Home Page', () => {
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    });
    it('Verify chart button is visible', () => {
        homeActions.clickChartButton();
        homeActions.isChartImageVisible();
    });
});