import { homeActions } from '../page-object/page-action/homeActions';
const data = require('../fixtures/example.json');

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit(data.URL);
  });
  it('Verify chart button is visible', () => {
    homeActions.clickChartButton();
    homeActions.isChartImageVisible();
  }),
  it('Verify user can add item to cart', () => {
    homeActions.clickItem1();
  });
  it('Verify user can see item count in cart', () => {
    homeActions.clickItem1();
    homeActions.getChartCount();
    homeActions.clickChartButton();
  });
  it.only('Verify chart page is visible', () => {
    homeActions.clickItem1();
    homeActions.clickChartButton();
    homeActions.clickProceedToCheckoutButton();
    homeActions.isPlaceOrderButtonVisible();
    homeActions.isPromoCodeInputVisible();
    homeActions.isPromoCodeApplyButtonVisible();
    homeActions.isTotalAmountVisible();
    homeActions.isCartTableVisible();
  });
});