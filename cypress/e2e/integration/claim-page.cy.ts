// claim-page.spec.ts
import { ClaimPage } from '../../pages/ClaimPage';
import { User } from '../../models/User';
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('the user is on the claim page', () => {
    const hixmeBaseUrl = Cypress.env('hixmeBaseUrl');
    cy.visit(`${hixmeBaseUrl}/claim-page`);
});

When('the user enters information from the saved file', () => {
    const user: User = this.user;
    ClaimPage.fillClaimForm(user);
});

When('the user submits the form', () => {
    ClaimPage.submitClaimForm();
});

Then('the user should see the terms and conditions page', () => {
    ClaimPage.assertTermsAndConditionsPageVisible();
});
  
