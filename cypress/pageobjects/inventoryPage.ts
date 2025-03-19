import Common from "./common";

class InventoryPage extends Common {
  backbackItem = () => cy.get("#item_4_title_link");
  backbackAddItemButton = () =>
    cy.getByTestId("add-to-cart-sauce-labs-backpack");
  bikeLightsAddItemButton = () =>
    cy.getByTestId("add-to-cart-sauce-labs-bike-light");
  backbackRemoveItemButton = () => cy.getByTestId("remove-sauce-labs-backpack");
  shoppingCartLogo = () => cy.get("#shopping_cart_container");

  clickBackbackAddItemButton = () => this.backbackAddItemButton().click();

  clickBikeLightsAddItemButton = () => this.bikeLightsAddItemButton().click();

  clickBackbackRemoveItemButton = () => this.backbackRemoveItemButton().click();

  assertCartLogoItems = (itemsNum: number) =>
    this.shoppingCartLogo().should("have.text", itemsNum);
}

export default new InventoryPage();
