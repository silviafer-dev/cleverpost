/// <reference types="cypress" />
// @ts-check
type Url = string;
describe("when you try to get the app", () => {
  it("will directly send you to the Login page", () => {
    const url: Url = "http://localhost:3000/cleverpost";
    cy.visit(url);
    cy.url().should("include", "/login");
  });
});
describe("when we try to login with wrong password", () => {
  it("you get a error message", () => {
    cy.get(".username").type("tim").should("have.value", "tim");
    cy.get(".password").type("124");
    cy.get(".login__form").submit();
    cy.url().should("include", "/cleverpost");
  });
});

describe("when we try to login with correct username and password", () => {
  it("you get access to the home page", () => {
    cy.reload();
    cy.get(".username").type("tim").should("have.value", "tim");
    cy.get(".password").type("123");
    cy.get(".login__form").submit();
  });
});

describe("when we try to search a card and you get no match", () => {
  it("will show a no matching page", () => {
    cy.get(".header__input").type("crcr").should("have.value", "crcr");
    cy.contains("No matching posts found");
    cy.get(".header__input").clear().should("have.value", "");
  });
});

describe("when we click in the sign out button", () => {
  it("will send to the login page", () => {
    cy.get(".logout").click();
    cy.visit("http://localhost:3000/cleverpost/login");
    cy.url().should("include", "/login");
  });
});
