export class HomePage {
  pricingLink() {
    return cy.get("a > .c-ghTrAK > .c-swQxl");
  }
  productsLink() {
    return cy.get("#main-menu-content > button:first");
  }
  productsButton() {
    return cy.get("#main-menu-content > button:first > .c-swQxl");
  }
  productsModal() {
    return cy.get(".c-jLWzSx");
  }
  solutionsButton() {
    return cy.get("#main-menu-content > button").eq(1);
  }
  solutionsModal() {
    return cy.get(".c-jLWzSx");
  }
  allSolutionsLink() {
    return cy.xpath("//p[normalize-space()='See all solutions']");
  }

  visitHomePage() {
    cy.visit("/");
  }
  navigateToPricingPage() {
    this.pricingLink().click({force: true});
  }
  productsLinkClick() {
    this.productsLink().click({force: true});
  }
  solutionsButtonClick() {
    this.solutionsButton().click({force: true});
  }
  allSolutionsLinkClick() {
    this.allSolutionsLink().click({force: true});
  }
}
