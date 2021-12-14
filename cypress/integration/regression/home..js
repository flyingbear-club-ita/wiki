import { sanityCheckWiki } from '../../support/steps'

describe('Homepage', () => {
    it('Sanity Check', () => {
      cy.visit('/');
      sanityCheckWiki();
    })
    it('Should contain nav bar items', ()=>{
        cy.get('.navbar__item').should('have.length', 7)
    })
  })