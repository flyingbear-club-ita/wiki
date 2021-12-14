import { adsShouldBeDisplayed } from '../../support/assertions';

describe('Upgrades', () => {
    it('Should be displayed', () => {
      cy.visit('/upgrades')
      adsShouldBeDisplayed();
      cy.get('.adsbygoogle') // command
      .should('have.length', 3)
    })
  })