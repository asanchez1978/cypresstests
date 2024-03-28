declare namespace Cypress {
    interface Chainable {
      loginCRM(username: string, password: string, url: string): void;
    }
  }