/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
import "@testing-library/cypress/add-commands";

Cypress.on(
  "uncaught:exception",
  () =>
    // returning false here prevents Cypress from
    // failing the test
    false
);

const getById = (id: string): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get(`[id='${id}']`);

const getByTestId = (testid: string): Cypress.Chainable<JQuery<HTMLElement>> =>
  cy.get(`[data-test='${testid}']`);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      getById: typeof getById;
      getByTestId: typeof getByTestId;
      findByDataTestId(testid: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}

Cypress.Commands.add("getById", getById);
Cypress.Commands.add("getByTestId", getByTestId);
Cypress.Commands.add(
  "findByDataTestId",
  { prevSubject: true },
  (subject, testid: string) => cy.wrap(subject).find(`[data-cy='${testid}']`)
);

export {};
