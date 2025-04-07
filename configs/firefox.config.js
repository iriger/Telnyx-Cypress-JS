const baseConfig = require("../cypress.config");

module.exports = {
  ...baseConfig,
  e2e: {
    ...baseConfig.e2e,
    baseUrl: process.env.CYPRESS_BASE_URL || "https://telnyx.com",
    viewportWidth: 1366,
    viewportHeight: 768,
    browser: "firefox",
  },
};
