/// <reference types="cypress" />

    var email = `caio${Date.now()}@teste.com`

describe('Funcionalidade: Cadastro de Membros', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  afterEach(() => {
    cy.screenshot()
  })

  it('Deve fazer o cadastro de campos Obrigatórios', () => {
    cy.preencherCadastro('Caio', 'Testando', email, '31998565478', 'Teste123!')
    cy.get('#signup-response').should('be.visible')
  })

  it('Validar formato do e-mail', () => {
    cy.get('#signup-firstname').type('Caio')
    cy.get('#signup-lastname').type('Testando')
    cy.get('#signup-email').type('applicationTest1gmail.com')
    cy.get('#signup-phone').type('31998563658')
    cy.get('#signup-password').type('Teste12345!')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('have.text', '{"message":"E-mail deve ser um email válido"}')
  })

  it('Envio sem campos Obrigatórios', () => {
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('have.text', '{"message":"Nome não pode estar vazio"}')
  })

  it('Testando e-mail válido', () => {
    cy.get('#signup-firstname').type('Caio')
    cy.get('#signup-lastname').type('Testando')
    cy.get('#signup-email').type('applicationTest1gmail.com')
    cy.get('#signup-phone').type('31998563658')
    cy.get('#signup-password').type('Teste12345!@')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('have.text', '{"message":"E-mail deve ser um email válido"}')
  })

  it('E-mail já existente', () => {
    cy.get('#signup-firstname').type('Caio')
    cy.get('#signup-lastname').type('Testando')
    cy.get('#signup-email').type('applicationTest11@gmail.com')
    cy.get('#signup-phone').type('31998563658')
    cy.get('#signup-password').type('Teste12345!@')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('have.text', '{"message":"Este email já está cadastrado."}')
  })

  it('Testando a senha fraca sem Maiúscula', () => {
    cy.get('#signup-firstname').type('Caio')
    cy.get('#signup-lastname').type('Testando')
    cy.get('#signup-email').type('applicationTes@gmail.com')
    cy.get('#signup-phone').type('31998563658')
    cy.get('#signup-password').type('teste12345!')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('have.text', '{"message":"Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)"}')
  })

  it('Testando a senha fraca', () => {
    cy.get('#signup-firstname').type('Caio')
    cy.get('#signup-lastname').type('Testando')
    cy.get('#signup-email').type('applicationTes@gmail.com')
    cy.get('#signup-phone').type('31998563658')
    cy.get('#signup-password').type('teste12')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('have.text', '{"message":"Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)"}')
  })

  /* TESTE FALHANDO POR CAUSA DO SERVIDOR
  it('Testando a Política de Privacidade', () => {
      cy.contains('Política de Privacidade').click()
      cy.url().should('include', '/polices.html')
      cy.title().should('eq', 'Política de Privacidade - Golden Movie Studio')
    })
*/

  it('Senha vazia', () => {
    cy.get('#signup-firstname').type('Caio')
    cy.get('#signup-lastname').type('Testando')
    cy.get('#signup-email').type('applicationTes@gmail.com')
    cy.get('#signup-phone').type('31998563658')
    cy.get('#signup-button').click()
    cy.wait(4000)
    cy.get('#signup-response').should('have.text', '{"message":"Senha não pode estar vazia"}')
  })
  
})