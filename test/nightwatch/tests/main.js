var chai = require('chai');
var assert = chai.assert;

module.exports = {
    tags: ['sanity', 'navigation'],
    'Sanity Check': function(browser) {
        browser
            .url(browser.launch_url)
            .resizeWindow(1200, 1000)
            .waitForElementVisible('.omaha-home', 5000)
            .assert.title('Good Life. Great Code.');
    },
    'Scroll to Top': function(browser) {
        browser
            .assert.cssClassPresent('.scroll-to-top', 'hidden')
            .execute('scrollTo(0, 3000)')
            .assert.cssClassNotPresent('.scroll-to-top', 'hidden')
            .execute('scrollTo(0, 0)')
            .assert.cssClassPresent('.scroll-to-top', 'hidden');
    },
    'End': function(browser) {
        browser.end();
    }
};
