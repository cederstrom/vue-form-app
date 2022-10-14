const { defineConfig } = require("cypress");

module.exports = defineConfig({
  fixturesFolder: "tests/e2e/fixtures",
  screenshotsFolder: "tests/e2e/output/screenshots",
  videosFolder: "tests/e2e/output/videos",
  e2e: {
    baseUrl: "http://localhost:8080",
    specPattern: "tests/e2e/specs/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "tests/e2e/support/index.js",
  },
});
