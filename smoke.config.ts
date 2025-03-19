require("dotenv").config();
import { defineConfig } from "cypress";

const env = {
  BASE_URL: process.env.BASE_URL,
  VALID_USER_LOGIN: process.env.VALID_USER_LOGIN,
  VALID_USER_PASSWORD: process.env.VALID_USER_PASSWORD,
};

const getBaseUrl = () => process.env.BASE_URL;

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 10000,
  e2e: {
    baseUrl: `${getBaseUrl()}`,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/smoke-tests/*.spec.ts",
    video: true,
  },
  retries: {
    runMode: 3,
    openMode: 0,
  },
  env,
});
