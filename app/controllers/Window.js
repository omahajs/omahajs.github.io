/**
 * @file Window controller module using Marionette
 * @author Jason Wohlgemuth
 * @module controllers/Window
 */
define(function(require, exports, module) {
    'use strict';

    var $     = require('jquery');
    var _     = require('lodash');
    var Mn    = require('backbone.marionette');
    var Radio = require('backbone.radio');

    var CHANNEL_NAME = 'OMAHAJS';
    var CHANNEL = Radio.channel(CHANNEL_NAME);

    var SCROLL_DURATION = 800;
    var SCROLL_ANIMATION = 'easeInOutQuart';

    /**
     * @name WindowController
     * @description Controller for window actions such scrolling and opening new windows
     * @constructor
     * @extends Marionette.Object
    **/
    var WindowController = Mn.Object.extend({
        initialize: function() {
            var controller = this;
            controller.listenTo(CHANNEL, 'window:scroll', controller.scrollTo);
        },
        scrollTo: function(options) {
            var top = _.get(options, 'top', 0);
            $('html, body').animate({scrollTop: top}, {
                duration: SCROLL_DURATION,
                easing: SCROLL_ANIMATION
            });
        }
    });

    module.exports = WindowController;
});
