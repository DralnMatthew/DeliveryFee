/// <reference types="cypress" />

describe('Delivery Fee Calculator', () => {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened correctly', function() {
    cy.contains('Delivery Fee Calculator')
    cy.contains('Delivery price').should('not.exist')
  })

  it('delivery fee 1 can be calculated correctly', function() {
    cy.get('#value').type('3')
    cy.get('#distance').type('800')
    cy.get('#amount').type('4')
    cy.get('#time').type('2023-01-23T22:00')
    cy.get('#calculate-button').click()

    cy.contains('9.00')
  })

  it('delivery fee 2 can be calculated correctly', function() {
    cy.get('#value').type('8.9')
    cy.get('#distance').type('1501')
    cy.get('#amount').type('13')
    cy.get('#time').type('2023-01-20T18:30')
    cy.get('#calculate-button').click()

    cy.contains('12.96')
  })

  it('delivery fee 3 can be calculated correctly', function() {
    cy.get('#value').type('10.0')
    cy.get('#distance').type('1500')
    cy.get('#amount').type('12')
    cy.get('#time').type('2023-01-21T18:30')
    cy.get('#calculate-button').click()

    cy.contains('7.00')
  })

  it('wrong value input format', function() {
    cy.get('#value').type('gqrwg')
    cy.get('#distance').type('1500')
    cy.get('#amount').type('12')
    cy.get('#time').type('2023-01-21T18:30')
    cy.get('#calculate-button').click()

    cy.contains('Value should be more than 0 and shouldn\'t include any characters except digits')
  })

  it('wrong amount input format', function() {
    cy.get('#value').type('gqrwg')
    cy.get('#distance').type('1500')
    cy.get('#amount').type('12.3')
    cy.get('#time').type('2023-01-21T18:30')
    cy.get('#calculate-button').click()

    cy.contains('Amount should be an integer larger than 0')
  })

  it('wrong distance input format', function() {
    cy.get('#value').type('gqrwg')
    cy.get('#distance').type('-1500')
    cy.get('#amount').type('12')
    cy.get('#time').type('2023-01-21T18:30')
    cy.get('#calculate-button').click()

    cy.contains('Distance should be more than 0 and shouldn\'t include any characters except digits')
  })
});