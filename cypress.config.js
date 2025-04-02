const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "pjypo8",
  e2e: {
    viewportWidth: 1440,
    baseUrl: "http://telnyx.com",
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
