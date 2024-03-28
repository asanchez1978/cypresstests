// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { orange_crm } from "../projects/orangeCRM/pages/orangeCRMPages";


Cypress.Commands.add('loginCRM', (username: string, password: string, url: string) => {
// This command goes to an url and look for the logo of the company, then perform the login to the company CRM
    cy.visit(url)
    orange_crm.companyLogo.should('be.visible');
    orange_crm.companyUsername.click().type(username);
    orange_crm.companyPassword.click().type(password);
    orange_crm.companyLoginButton.click()
  });