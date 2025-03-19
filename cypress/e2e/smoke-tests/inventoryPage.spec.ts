import inventoryPage from "cypress/pageobjects/inventoryPage";
import loginPage from "cypress/pageobjects/loginPage";
import { itemsNames } from "../../fixtures/data.json";

describe("InventoryPage tests", () => {
  beforeEach(() => {
    loginPage.loginWithValidData();
  });

  it("The user should add item to the card", () => {
    inventoryPage
      .backbackItem()
      .should("have.text", itemsNames.backpackItemName);
    inventoryPage.clickBackbackAddItemButton();
    inventoryPage.assertCartLogoItems(1);
  });

  it("The user should remove item from the card", () => {
    inventoryPage
      .backbackItem()
      .should("have.text", itemsNames.backpackItemName);
    inventoryPage.clickBackbackAddItemButton();
    inventoryPage.assertCartLogoItems(1);
    inventoryPage.clickBackbackRemoveItemButton();
    inventoryPage.shoppingCartLogo().should("not.have.text");
  });

  it("The user should add multiple items to the card", () => {
    inventoryPage
      .backbackItem()
      .should("have.text", itemsNames.backpackItemName);
    inventoryPage.clickBackbackAddItemButton();
    inventoryPage.assertCartLogoItems(1);
    inventoryPage.clickBikeLightsAddItemButton();
    inventoryPage.assertCartLogoItems(2);
  });
});
