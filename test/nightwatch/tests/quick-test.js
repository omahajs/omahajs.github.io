module.exports = {
    'Quick Check' : function (browser) {
      browser
        .url(browser.launch_url)
        .waitForElementVisible('.omaha-home', 1000)
        .getTitle(function(title) {
            this.assert.equal(title, 'Good Life. Great Code.');
        })
        .end();
    }
};
