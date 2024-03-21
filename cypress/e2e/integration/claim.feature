Feature: User claims page submission

Scenario: Submit claim with user data
  Given a user is created via API and saved to a file
  When the user navigates to the claim page and submits the form with saved data
  Then the user should see the terms and conditions page