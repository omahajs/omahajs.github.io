/**
 * @file Marionette Behavior for adding functionality to share buttons
**/
define(function(require, exports, module) {
    'use strict';

    var Backbone   = require('backbone');
    var Marionette = require('backbone.marionette');

    /**
     * @name ClipboardBehavior
     * @constructor
     * @prop {object} defaults
     * @prop {string} [defaults.successMessage='Copied to clipboard']
     * @prop {function} [defaults.getContent]
    **/
    var ClipboardBehavior = Marionette.Behavior.extend({
        defaults: {
            successMessage: 'Copied to clipboard',
            getContent: function(e) {
                return Backbone.$(e.currentTarget)
                    .parent()
                    .siblings('pre');
            }
        },
        events: {
            'click [data-action=copy-to-clipboard]': 'onCopy'
        },
        onCopy: function(e) {
            var behavior = this;
            var view = behavior.view;
            var getContent = behavior.options.getContent;
            var $content = (typeof(getContent) === 'function') ? getContent(e) : Backbone.$(e.currentTarget);
            var range = document.createRange();
            var selection = window.getSelection();
            var success;
            view.$el.one('copy', function(e) {
                var selection = window.getSelection().toString();
                success = (selection === $content.text());
                e.originalEvent.clipboardData.setData('text/plain', selection);
            });
            selection.removeAllRanges();// Clear selection from any previous data
            range.selectNodeContents($content[0]);
            selection.addRange(range);// Add that range to the selection
            document.execCommand('copy');// Copy the selection to clipboard
            selection.removeAllRanges();
            success && alert(behavior.options.successMessage);
        }
    });

    module.exports = ClipboardBehavior;
});
