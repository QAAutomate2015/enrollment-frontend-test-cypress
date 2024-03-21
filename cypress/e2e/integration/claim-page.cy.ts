// claim-page.spec.ts
import { ClaimPage } from '../../pages/ClaimPage';
import { User } from '../../models/User';

describe('Claim Page', () => {
  beforeEach(() => {
    cy.fixture('user').as('user');
  });

  it('should navigate to claim page, fill form and assert terms and conditions', function () {
    const user: User = this.user;
    const hixmeBaseUrl = Cypress.env('hixmeBaseUrl');

    cy.visit(`${hixmeBaseUrl}/claim-page`);

    ClaimPage.fillClaimForm(user);
    ClaimPage.submitClaimForm();
    ClaimPage.assertTermsAndConditionsPageVisible();
  });
});