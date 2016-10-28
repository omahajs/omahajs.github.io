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
        onActivateFullscreen: function(e) {
            var view = this.view;
            var el = view.$('iframe')[0];
            var requestMethod = REQUEST_METHOD_NAMES.filter(function(method) {
                return _.isFunction(el[method]);
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
