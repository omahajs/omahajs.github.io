module.exports = {
    disabled: false,
    tags: ['sanity', 'deploy'],
    'Deployment Check': function(client) {
        'use strict';

        var omahajs = client.page.omaha();

        omahajs.navigate()
            .assert.title('Good Life. Great Code.')
            .waitForElementVisible('.omaha-home', 3000)
            .assert.visible('@main');

        client.end();
    }
};
