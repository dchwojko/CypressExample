# CypressExample

# Setup
1. npm init
2. npm install cypress --save-dev
3. npx cypress open
4. Select E2E Testing; The following files are generated
    - cypress.config.js : The Cypress config file for E2E testing.
    - cypress/support/e2e.js : The support file that is bundled and loaded before each E2E spec
    - cypress/support/command.js : a support file that is useful for creating custom Cypress commands and overwriting existing ones.
    - cypress/fixtures/example.json : added an example fixtures file/folder
5