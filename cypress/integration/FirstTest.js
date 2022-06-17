describe('My First Test', () => {

it('Verify Title Positive', () => {

cy.visit('https://frontend.nopcommerce.com/')
cy.title().should('eq', 'nopCommerce demo store')

})

it('Verify Title Negative', () => {

    cy.visit('https://frontend.nopcommerce.com/')
    cy.title().should('eq', 'nopCommerce demo')
    
    })



})