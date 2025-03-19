import { getValidUserData } from "../../support/getEnvVariables.helper";
import inventoryPage from "cypress/pageobjects/inventoryPage";
import loginPage from "cypress/pageobjects/loginPage";
import { itemsNames, errorTexts } from "../../fixtures/data.json";

describe("Login tests", () => {
  beforeEach(() => {
    loginPage.openPage("/");
  });

  it("The user should login with valid data", () => {
    loginPage.fillUserNameInput(getValidUserData.validUserLogin);
    loginPage.fillPasswordInput(getValidUserData.validUserPassword);
    loginPage.clickLoginButton();
    inventoryPage
      .backbackItem()
      .should("have.text", itemsNames.backpackItemName);
  });

  it("The application should show an error with invalid password", () => {
    loginPage.fillUserNameInput(getValidUserData.validUserLogin);
    loginPage.fillPasswordInput("111111");
    loginPage.clickLoginButton();
    loginPage.loginError().should("be.visible");
    loginPage.loginError().should("have.text", errorTexts.loginErrorText);
  });
});
