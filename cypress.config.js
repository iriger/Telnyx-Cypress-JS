const { defineConfig } = require("cypress");
const dotenv = require('dotenv');
dotenv.config();

module.exports = defineConfig({
  projectId: "pjypo8",
  e2e: {
    viewportWidth: 1440,
    baseUrl: process.env.CYPRESS_BASE_URL,
    // baseUrl: "http://telnyx.com",
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
