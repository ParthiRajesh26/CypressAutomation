/// <reference types="Cypress"/>

describe("UI Interactions", () => {  


it("Tour_booking_Automation", ()=> {


    cy.visit("https://demo.guru99.com/test/newtours/")

    cy.url().should("include","newtours")

    cy.get("input[name=userName]").should("be.visible").should("be.enabled").type('mercury')
    cy.get("input[name=password]").should("be.visible").should("be.enabled").type("mercury")

    cy.get("input[type=submit]").should("be.visible").click()

    cy.title().should("eq","Login: Mercury Tours")

   cy.get("table:nth-child(2) tbody:nth-child(1) tr.mouseOut:nth-child(2) td:nth-child(2) > a:nth-child(1)").click()

   cy.get("input[value=roundtrip]").should("be.visible").should("be.checked")

   cy.get("input[value=oneway]").should("be.visible").should("not.be.checked").click()

   cy.get("input[name=findFlights]").should("be.visible").click()

   cy.title().should("eq","Find a Flight: Mercury Tours:")

})



})