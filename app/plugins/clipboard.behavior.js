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
            var view = this.view;
            var $code = $(e.currentTarget).parent().siblings('pre');
            var range = document.createRange();
            var selection = window.getSelection();
            view.$el.one('copy', function(e){
                e.preventDefault();
                var selection = window.getSelection().toString();
                (selection === $code.text()) && alert('Code copied to clipboard');
                e.originalEvent.clipboardData.setData('text/plain', selection);
            });
            selection.removeAllRanges();// Clear selection from any previous data
            range.selectNodeContents($code[0]);
            selection.addRange(range);// Add that range to the selection
            document.execCommand('copy');// Copy the selection to clipboard
            selection.removeAllRanges();
        }
    });

    module.exports = ClipboardBehavior;
});
