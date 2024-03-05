const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      apiUrl:"https://demoqa.com",
      apiBooks:"BookStore/v1/Books",
      generateUser:"/Account/v1/User",
      generateToken:"/Account/V1/GenerateToken",
      loginAPI:"/Account/V1/Login"
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
