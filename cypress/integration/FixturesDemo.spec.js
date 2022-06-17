/// <reference types= "Cypress"/>

describe("My Test Suite",() => {

    before(() => {

     cy.fixture("example.json").then(function (data) {

      this.Data = data


     })

    })

    it("Fixtures", () => {
    
    cy.visit("https://admin-demo.nopcommerce.com/login")
    cy.get("#Email").clear().type(this.Data.email)
    cy.get("#Password").clear().type(this.Data.password)
    cy.get("button[type=submit]").click()

    
    })
    
    
    })