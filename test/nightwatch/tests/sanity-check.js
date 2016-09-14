module.exports = {
    tags: ['sanity'],
    'Sanity Check': function(browser) {
        'use strict';

        browser
            .url(browser.launch_url)
            .waitForElementVisible('.omaha-home', 1000)
            .assert.title('Good Life. Great Code.')
            .end();
    }
};
