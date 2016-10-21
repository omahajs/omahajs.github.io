/**
 * @file Marionette Behavior for adding functionality to share buttons
**/
define(function(require, exports, module) {
    'use strict';

    var Marionette = require('backbone.marionette');

    var ClipboardBehavior = Marionette.Behavior.extend({
        events: {
            'click [data-action=copy-to-clipboard]': 'onCopy'
        },
        onCopy: function(e) {
            var $code = $(e.currentTarget).parent().siblings('pre');
            var range = document.createRange();
            var selection = window.getSelection();
            // Clear selection from any previous data.
            selection.removeAllRanges();
            // Make the range select the entire content of the contentHolder paragraph.
            range.selectNodeContents($code[0]);
            // Add that range to the selection.
            selection.addRange(range);
            // Copy the selection to clipboard.
            document.execCommand('copy');
            // Clear selection if you want to.
            selection.removeAllRanges();
        }
    });

    module.exports = ClipboardBehavior;
});
