module.exports = {
    adsShouldBeDisplayed: function() {
        cy.get('.adsbygoogle').its('length').should('be.gte', 0)
    },

    titleShouldBeDisplayed: function() {
        cy.get('h1').should('have.length',1);
    },
}