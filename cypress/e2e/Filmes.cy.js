/// <reference types="cypress" />

describe('Funcionalidade: Filmes', () => {
    it('Buscar Filme com palavra-chave válida', () => {
      cy.visit('http://192.168.100.5:8080')
      cy.get('#search-input').type('Jurassic')
      cy.get('#search-button').click()
      cy.get('#results-section').should('be.visible')
    })

    it('Buscar Filme sem resultado', () => {
        cy.visit('http://192.168.100.5:8080')
        cy.get('#search-input').type('hsjfhayu')
        cy.get('#search-button').click()
        cy.get('#results-section').should('have.text', 'Filme não encontrado.')
      })

      it('Funcionalidade Limpar Buscar', () => {
        cy.visit('http://192.168.100.5:8080')
        cy.get('#search-input').type('Jurassic')
        cy.get('#search-button').click()
        cy.get('#results-section').should('be.visible')
        cy.get('#clear-button').click()
        cy.get('#results-section').should('be.empty')
      })  
})