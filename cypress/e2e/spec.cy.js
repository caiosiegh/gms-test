/// <reference types="cypress" />

describe('Funcionalidade: Cadastro de Membros', () => {
  it('Deve fazer o cadastro de campos Obrigatórios', () => {
    cy.visit('http://192.168.100.5:8080')
    cy.get('#signup-firstname').type('Caio')
    cy.get('#signup-lastname').type('Testando')
    cy.get('#signup-email').type('applicationTest1@gmail.com')
    cy.get('#signup-phone').type('31998563658')
    cy.get('#signup-password').type('Teste12345!')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('be.visible')
  })
})