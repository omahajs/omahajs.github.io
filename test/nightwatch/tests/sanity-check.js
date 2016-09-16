var chai = require('chai');
var assert = chai.assert;

module.exports = {
    tags: ['sanity'],
    'Sanity Check': function(browser) {
        'use strict';

        browser
            .url(browser.launch_url)
            .resizeWindow(1200, 1000)
            .waitForElementVisible('.omaha-home', 1000)
            .assert.title('Good Life. Great Code.')
            .getLocation('footer', function(result) {
                assert.equal(1, 1);
            })
            .end();
    }
};
