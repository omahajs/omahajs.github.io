module.exports = {
    'Demo test Google' : function (browser) {
      browser
        .url(browser.launch_url)
        .waitForElementVisible('body', 1000)
        .pause(1000)
        .end();
    }
};
