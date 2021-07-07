describe("GoDutch App testing", () => {
  context("Page loading ", () => {
    it("Main page should be visible with a proper title", () => {
      cy.visit("./index.html");
      cy.get(".top h1").should("be.visible").and("contain.text", "GoDutch");
    });
  });
  context("Adding new price order", () => {
    before(() => {
      cy.visit("./index.html");
    });
    it("Enter the bill price", () => {
      cy.get("input").get("#price").type("150");
    });
    it("Enter the number of people", () => {
      cy.get("input").get("#people").type("4");
    });
    it("Chosing the tip value", () => {
      cy.get("select#tip").select("15%").should("have.value", "0.15");
    });
    it("Chosing the currency", () => {
      cy.get("select#currency").select("EUR").should("have.value", "EUR");
    });
    context("Confirming the order", () => {
      it("Click on the COUNT button", () => {
        cy.get("button.count").click();
      });
    });
    context("Changing in the order", () => {
      it("Delete to number of people", () => {
        cy.get("input#people").clear();
      });
    });
  });
  context("Testing the validation of the App", () => {
    context("Changing a value in the order", () => {
      it("Delete a number of people", () => {
        cy.get("input#people").clear();
      });
    });

    context("Checking of the error info", () => {
      it("Click on the COUNT button again", () => {
        cy.get("button.count").click();
      });
    });
  });
  context("Testing the correct works of the CLEAR button", () => {
    context("Clear the all of values", () => {
      it("Click on the CLEAR button", () => {
        cy.get("button.clear").click();
      });
    });
  });
});
