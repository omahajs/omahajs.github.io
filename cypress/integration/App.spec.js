const TITLE = 'Omaha JS – Good Life. Great Code.';

describe('Homepage', function() {
    beforeEach(() => {
        cy.visit('/');
    });
    it('has correct title', () => {
        cy.title().should('equal', TITLE);
    });
});
