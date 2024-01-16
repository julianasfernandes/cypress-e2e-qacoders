/// <reference types="cypress" />
const element = require("../fixtures/login.json")

beforeEach(() => {
  cy.visit('https://automacao.qacoders-academy.com.br/login')
});

afterEach(() => {
  cy.screenshot();
});

describe('Login', () => {
  it('Login com sucesso', () => {
    const email = Cypress.env('EMAIL');
    const password = Cypress.env('PASSWORD');
    cy.Login(email, password);
  });

  it('Login com email válido e passe inválida', () => {
    cy.get(element.input_email).type(Cypress.env('EMAIL'));
    cy.get(element.input_password).type(Cypress.env('PASSWORD_INVALIDO'));
    cy.get(element.btn_login).click().screenshot('btn_entrar');

    cy.MsgLoginFalho()
  });

  it('Login com email inválido e passe válida', () => {
    cy.get(element.input_email).type(Cypress.env('EMAIL_INVALIDO'));
    cy.get(element.input_password).type(Cypress.env('PASSWORD'));
    cy.get(element.btn_login).click();

    cy.MsgLoginFalho()
  });

});
