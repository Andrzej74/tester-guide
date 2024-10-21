const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    screenshotOnRunFailure: true, // Zrzuty ekranów przy błędach
    video: true, // Nagrywanie wideo podczas testów
    setupNodeEvents(on, config) {
      // konfiguracja zdarzeń
    },
  }
});
