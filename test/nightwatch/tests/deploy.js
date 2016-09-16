module.exports = {
    disabled: true,
    tags: ['sanity', 'deploy'],
    'Deployment Check': function(client) {
        'use strict';

        var omahajs = client.page.omaha();

        omahajs.navigate()
            .assert.title('Good Life. Great Code.')
            .assert.visible('.omaha-home');

        client.end();
    }
};
