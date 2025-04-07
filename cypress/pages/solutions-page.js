export class SolutionsPage {
  solutionsTitle() {
    return cy.get(".c-fGbiyG > .c-PJLV");
  }
  useCasesButton() {
    return cy.get("#7nZfryiE5nWZ5TSwg6oaYx");
  }
  useCasesSectionTitle() {
    return cy.xpath("//strong[@class='c-PJLV c-fNZqWL']");
  }
  filterButton() {
    return cy.get("[id*='Rqdrdm']");
  }
  travelFilter() {
    return cy.get("input[name='Travel-and-hospitality']");
  }
  closeFilterIcon() {
    return cy.get(".PJLV.c-gruYud");
  }
  selectedFilterButton() {
    return cy.get("button[id*='Rqdrdm'] > .c-PJLV.c-ihLeEO");
  }
  accountNotificationsLink() {
    return cy.get(
      ":nth-child(1) > .c-ciZnv > .c-flfFMq > .c-ewUecD > .c-khZXrc > .c-PJLV-gxwHoW-noUnderline-false"
    );
  }

  solutionsPageVisit() {
    cy.visit("/solutions");
  }
  useCasesButtonClick() {
    this.useCasesButton().click({force: true});
  }
  filterButtonClick() {
    this.filterButton().click({force: true});
  }
  travelFilterSelected() {
    this.travelFilter().click({force: true});
  }
  closeFilter() {
    this.closeFilterIcon().click({force: true});
  }
  accountNotificationsClick() {
    this.accountNotificationsLink().click({force: true});
  }
}
