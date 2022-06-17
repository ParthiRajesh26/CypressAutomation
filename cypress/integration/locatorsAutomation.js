/// <reference types="Cypress" />

describe("First Cypress Automation", () => {

it("Locators", ()=>  {


    cy.visit("https://demo.nopcommerce.com/")

    cy.get("#small-searchterms").type("Apple Macbook Pro 13-inch")

    cy.get("button[type=submit]").click()

    cy.get(".product-box-add-to-cart-button").click()

    cy.get("#product_enteredQuantity_4").clear().type("3")

    cy.get("#add-to-cart-button-4").click()

    cy.wait(4000)

    cy.get("#topcartlink > a > span.cart-label").click()

    cy.get("#shopping-cart-form > div.table-wrapper > table > tbody > tr > td.subtotal > span")
    .contains("$5,400.00")

    



})


})

