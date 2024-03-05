describe('search clover career at Bing', () => {

    it('opening bing and search clover career',() => {
        cy.clearCookies();
        cy.visit("https://www.google.com/"); // open the URL
        cy.get('#APjFqb').type('clover careers{enter}'); // locating the search box and type text
        cy.get('.lv7K9c > .sjVJQd').click();
        cy.get('#rso > :nth-child(1) > .g > .N54PNb > .jGGQ5e > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb')
        .should('include.text', 'Search our Job Opportunities at Clover');
    })
}) ;