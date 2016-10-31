/**
 * @file Marionette Behavior for adding "fullscreen" functionality
**/
define(function(require, exports, module) {
    'use strict';

    var Marionette = require('backbone.marionette');

    function getRequestFullscreenMethodName() {
        var REQUEST_METHOD_NAMES = [
            'requestFullScreen',
            'webkitRequestFullScreen',
            'mozRequestFullScreen',
            'msRequestFullScreen'
        ];
        var methodArray = REQUEST_METHOD_NAMES.filter(function(method) {
            return typeof (document.body[method]) === 'function';
        });
        return methodArray.length > 0 ? methodArray[0] : undefined;
    }

    /**
     * @name FullscreenBehavior
     * @constructor
    **/
    var FullscreenBehavior = Marionette.Behavior.extend({
        ui: {
            element: '.item-element-container',
            fullscreenButton: 'button[data-action=activate-fullscreen]'
        },
        events: {
            'click @ui.fullscreenButton': 'onActivateFullscreen'
        },
        onDomRefresh: function() {
            var behavior = this;
            var view = behavior.view;
            if (!this.fullscreenSupported()) {
                view.$el
                    .find(':hidden')
                    .filter(behavior.ui.fullscreenButton)
                    .remove();
            }
        },
        onActivateFullscreen: function() {
            var view = this.view;
            var el = view.$(view.ui.element).find('[allowfullscreen]')[0];
            var method = el[getRequestFullscreenMethodName()];
            if (typeof (method) === 'function') {
                method.call(el);
            } else {
                alert('Fullscreen not supported');
            }
        },
        fullscreenSupported: function() {
            return typeof(getRequestFullscreenMethodName()) !== 'undefined';
        }
    });

    module.exports = FullscreenBehavior;
});
