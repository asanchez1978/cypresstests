import { defineConfig } from 'cypress';
const cypressNodeEvents = require('./cypress/plugins/index.js');

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config): Promise<Cypress.PluginConfigOptions> {
      return cypressNodeEvents(on, config);
    },
    specPattern: './cypress/tests/**/*.cy.ts',
    supportFolder: './cypress/support',
    defaultCommandTimeout: 20000,
    viewportWidth: 1024,
    viewportHeight: 768,
    },
    retries: {
      runMode: 2,
      openMode: 0
    }
});