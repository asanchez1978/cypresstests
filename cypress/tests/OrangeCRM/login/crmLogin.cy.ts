/// <reference types="Cypress" />
import { orange_crm } from '../../../projects/orangeCRM/pages/orangeCRMPages';

describe("OrangeCRM Login basic tests", () => {

    beforeEach(() => {
        //cy.loginCRM(Cypress.env('ORANGE_CRM_USERNAME'),Cypress.env('ORANGE_CRM_PASSWORD'),Cypress.env('ORANGE_CRM_URL'));
        cy.visit(Cypress.env('ORANGE_CRM_URL'));
        cy.title().should("eq", "OrangeHRM");
        orange_crm.companyUsername.type(Cypress.env('ORANGE_CRM_USERNAME'));
      })

    it("Login to OrangeCRM with valid credentials", () => {

        orange_crm.companyPassword.type(Cypress.env('ORANGE_CRM_PASSWORD'));
        orange_crm.companyLoginButton.should('be.visible').click();
        orange_crm.companyMainDashboard("Dashboard").should('be.visible');
    });
    it("Login to OrangeCRM with invalid credentials", () => {
        orange_crm.companyPassword.type(Cypress.env('ORANGE_CRM_BAD_PASSWORD'));
        orange_crm.companyLoginButton.should('be.visible').click();
        orange_crm.companyLoginIncorrectPassword.should('be.visible');
    });

    it("Reset the password for a username", () => {
        orange_crm.companyLoginResetPassword.should('be.visible').click();
        orange_crm.companyUsername.type(Cypress.env('ORANGE_CRM_USERNAME'));
        orange_crm.companyLoginSubmitResetPassword.should('be.visible').click();
        orange_crm.companyLoginSuccessResetPassword.should('be.visible')

    });
})