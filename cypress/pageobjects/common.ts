abstract class Common {
  openPage(pageEndpoint: string) {
    cy.visit(pageEndpoint);
  }
}
export default Common;
