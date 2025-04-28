/// <reference types="cypress" />

describe('Funcionalidade: Filmes', () => {

  beforeEach(() => {
    cy.visit('')
  })

  afterEach(() => {
    cy.screenshot()
  })


    it('Buscar Filme com palavra-chave válida', () => {
      cy.get('#search-input').type('Jurassic')
      cy.get('#search-button').click()
      cy.get('#results-section').should('contain.text', "Jurassic")
    })

    it('Buscar Filme sem resultado', () => {
        cy.get('#search-input').type('hsjfhayu')
        cy.get('#search-button').click()
        cy.get('#results-section').should('have.text', 'Filme não encontrado.')
      })

      it('Funcionalidade Limpar Buscar', () => {
        cy.get('#search-input').type('Jurassic')
        cy.get('#search-button').click()
        cy.get('#results-section').should('be.visible')
        cy.get('#clear-button').click()
        cy.get('#results-section').should('be.empty')
      })  
})