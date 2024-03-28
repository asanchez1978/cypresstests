const path = require('path');

const { ENVIRONMENT = 'development.local' } = process.env;

module.exports = {
  path: path.resolve(process.cwd(), `./cypress/config/.env.${ENVIRONMENT}`),
  debug: ENVIRONMENT === 'development.local' ? true : null,
};
