/// <reference types="Cypress"/>

describe("Alert Example", () => {


/*it("Handling Alerts",() => {

cy.visit("https://mail.rediff.com/")

cy.get(".signin").click()



cy.get("input[type=submit]").click()

cy.on("window:alert",(Str) => {


    expect(Str).to.equal("Please enter a valid user name")



})
})*/

it("Confirm Alert",() => {

cy.visit("https://testautomationpractice.blogspot.com/")
cy.get("#HTML9 > div.widget-content > button").click()

cy.on("window:confirm", (str) => {


expect(str).to.equal("Press a button!")

})

})





})




