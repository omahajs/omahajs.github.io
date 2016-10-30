/**
 * @file Marionette Behavior for adding "fullscreen" functionality
**/
define(function(require, exports, module) {
    'use strict';

    var Marionette = require('backbone.marionette');

    var REQUEST_METHOD_NAMES = [
        'requestFullScreen',
        'webkitRequestFullScreen',
        'mozRequestFullScreen',
        'msRequestFullScreen'
    ];

    /**
     * @name FullscreenBehavior
     * @constructor
    **/
    var FullscreenBehavior = Marionette.Behavior.extend({
        events: {
            'click button[data-action=activate-fullscreen]': 'onActivateFullscreen'
        },
        onActivateFullscreen: function() {
            var view = this.view;
            var el = view.$('iframe')[0];
            var requestMethod = REQUEST_METHOD_NAMES.filter(function(method) {
                return typeof (el[method]) === 'function';
            });
            if (requestMethod.length > 0) {
                el[requestMethod[0]]();
            } else {
                alert('Fullscreen not supported');
            }
        }
    });

    module.exports = FullscreenBehavior;
});
