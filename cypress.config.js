const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // konfiguracja zdarzeń
    },
    baseUrl: 'http://localhost:3000',
  }
});
