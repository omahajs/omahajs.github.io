var chalk = require('chalk');
var infoSymbol = String.fromCharCode('9432');

exports.command = function(message, callback) {
    var browser = this;
    browser.perform(function() {
        console.log(' ' + chalk.blue.bold(infoSymbol) + ' ' + message);
    });
    if (typeof(callback) === 'function') {
        callback.call(this);
    }
    return this;
}
