/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
const path = require('path');
const dotenvPlugin = require('cypress-dotenv');
const dotenvConfig = require('./dotenv');
async function getConfigurationByFile(file, config) {
  const dotEnvConfig = dotenvPlugin(config, dotenvConfig, true);
  return {
    ...dotEnvConfig
  };
}

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {

  on('before:browser:launch', (browser, launchOptions) => {
    launchOptions.args.push('--disable-site-isolation-trials');
    launchOptions.args.push('--disable-web-security');
    return launchOptions;
  });

  const file = config.env.configFile || 'development';

  return getConfigurationByFile(file, config);
};
