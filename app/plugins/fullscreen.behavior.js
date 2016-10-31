/**
 * @file Marionette Behavior for adding "fullscreen" functionality
**/
define(function(require, exports, module) {
    'use strict';

    var Marionette = require('backbone.marionette');

    /**
     * @name FullscreenBehavior
     * @constructor
    **/
    var FullscreenBehavior = Marionette.Behavior.extend({
        events: {
            'click button[data-action=activate-fullscreen]': 'onActivateFullscreen'
        },
        getRequestFullscreenMethodName: function() {
            var REQUEST_METHOD_NAMES = [
                'requestFullScreen',
                'webkitRequestFullScreen',
                'mozRequestFullScreen',
                'msRequestFullScreen'
            ];
            return REQUEST_METHOD_NAMES.filter(function(method) {
                return typeof (document.body[method]) === 'function';
            })[0];
        },
        onActivateFullscreen: function() {
            var el = this.view.$('iframe')[0];
            var method = el[this.getRequestFullscreenMethodName()];
            if (typeof (method) === 'function') {
                method.call(el);
            } else {
                alert('Fullscreen not supported');
            }
        }
    });

    module.exports = FullscreenBehavior;
});
