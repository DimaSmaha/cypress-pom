import { getValidUserData } from "../support/getEnvVariables.helper";
import Common from "./common";
class LoginPage extends Common {
  usernameInput = () => cy.getByTestId("username");
  passwordInput = () => cy.getByTestId("password");
  loginButton = () => cy.getByTestId("login-button");
  loginError = () => cy.getByTestId("error");

  fillUserNameInput = (userName: string) => {
    this.usernameInput().type(userName);
  };

  fillPasswordInput = (password: string) => {
    this.passwordInput().type(password);
  };

  clickLoginButton = () => this.loginButton().click();

  loginWithValidData() {
    super.openPage("/");
    this.fillUserNameInput(getValidUserData.validUserLogin);
    this.fillPasswordInput(getValidUserData.validUserPassword);
    this.clickLoginButton();
  }
}

export default new LoginPage();
