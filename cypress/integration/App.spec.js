const TITLE = 'Omaha JS – Good Life. Great Code.';

const isVisible = $el => {
    const height = Cypress.$(cy.state('window')).height();
    const {bottom, top} = $el[0].getBoundingClientRect();
    expect(top).to.be.lessThan(height);
    expect(bottom).to.be.lessThan(height);
    expect(top).to.be.lessThan(height);
    expect(bottom).to.be.lessThan(height);
};
const isNotVisible = $el => {
    const height = Cypress.$(cy.state('window')).height();
    const {bottom, top} = $el[0].getBoundingClientRect();
    expect(top).to.be.greaterThan(height);
    expect(bottom).to.be.greaterThan(height);
    expect(top).to.be.greaterThan(height);
    expect(bottom).to.be.greaterThan(height);
};

describe('Homepage', function() {
    beforeEach(() => {
        cy.visit('/');
    });
    afterEach(() => {
        cy.scrollTo(0);
    });
    it('has correct title', () => {
        cy.title().should('equal', TITLE);
    });
    it('can scroll to projects after "Show Me How!" is clicked', () => {
        cy.get('a').contains('Show Me How!').as('showMeHow');
        cy.get('[name="web-app"]').as('firstProject');
        cy.get('@firstProject').then($el => {
            expect(Number($el.css('opacity'))).to.equal(0);
        });
        cy.get('@showMeHow').click();
        cy.wait(5000);
        cy.get('@firstProject').then($el => {
            expect(Number($el.css('opacity'))).to.equal(1);
        });
    });
    it('can scroll to Why section after "Why Omaha?" is clicked', () => {
        cy.get('a').contains('Why Omaha?').as('whyOmaha');
        cy.get('section div').contains('Why Omaha?').as('whyTitle');
        cy.get('@whyTitle').then(isNotVisible);
        cy.get('@whyOmaha').click();
        cy.wait(1000);
        cy.get('@whyTitle').then(isVisible);
    });
    it('has access to window.Trianglify', () => {
        cy.window().should('have.property', 'Trianglify');
    });
});
