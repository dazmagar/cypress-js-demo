const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "512wyz",
  e2e: {
    setupNodeEvents(on, config) {
      config.blockHosts = ["*.google-analytics.com", "*.googletagmanager.com"];
      return config;
    },
    supportFile: 'cypress/support/e2e.js',
    viewportWidth: 1920,
    viewportHeight: 1080,
    experimentalPromptCommand: true
  },
});
