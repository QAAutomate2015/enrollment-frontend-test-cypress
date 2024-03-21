// ClaimPage.ts
import { User } from '../models/User';

export class ClaimPage {
  private readonly emailInputSelector = '#email';
  private readonly last4SSNInputSelector = '#last-4-ssn';
  private readonly dobInputSelector = '#dob';
  private readonly zipCodeInputSelector = '#zip-code';
  private readonly telephoneInputSelector = '#telephone';
  private readonly submitButtonSelector = 'button[type="submit"]';
  private readonly termsAndConditionsSelector = '.terms-and-conditions';

  fillClaimForm(user: User): void {
    this.enterEmail(user.email);
    this.enterLast4SSN(user.last4ssn);
    this.enterDOB(user.dob);
    this.enterZipCode(user.zipCode);
    this.enterTelephone(user.telephone);
  }

  submitClaimForm(): void {
    cy.get(this.submitButtonSelector).click();
  }

  assertTermsAndConditionsPageVisible(): void {
    cy.get(this.termsAndConditionsSelector).should('be.visible');
  }

  private enterEmail(email: string): void {
    cy.get(this.emailInputSelector).type(email);
  }

  private enterLast4SSN(last4ssn: string): void {
    cy.get(this.last4SSNInputSelector).type(last4ssn);
  }

  private enterDOB(dob: string): void {
    cy.get(this.dobInputSelector).type(dob);
  }

  private enterZipCode(zipCode: string): void {
    cy.get(this.zipCodeInputSelector).type(zipCode);
  }

  private enterTelephone(telephone: string): void {
    cy.get(this.telephoneInputSelector).type(telephone);
  }
}