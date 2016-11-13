/**
 * @file Application Router
 * @author Jason Wohlgemuth
 * @module router
**/
define(function(require, exports, module) {
    'use strict';

    var $     = require('jquery');
    var Radio = require('backbone.radio');
    var Mn    = require('backbone.marionette');

    var CHANNEL_NAME = 'OMAHAJS';
    var CHANNEL = Radio.channel(CHANNEL_NAME);

    /**
     * @name RouterController
     * @constructor
     * @extends Marionette.Object
     * @prop {function} scrollToPost
     * @prop {function} scrollToSection
    **/
    var RouterController = Mn.Object.extend({
        initialize: function() {
            this.navigate = (new Mn.AppRouter).__proto__.__proto__.navigate;
        },
        scrollToPost: function(name) {
            var $feed = $('.feed');
            var $post = $feed.find('[data-post-name=' + name + ']');
            var top;
            if ($post.length > 0) {
                top = $post.offset().top;
            } else {
                this.navigate('feed');
                top = $feed.offset().top;
            }
            CHANNEL.trigger('window:scroll', {top: top});
        },
        scrollToSection: function(name) {
            var top = (name && typeof (name) === 'string') ? $('.content-section.' + name).offset().top : 0;
            CHANNEL.trigger('window:scroll', {top: top});
        }
    });
    /**
     * @name AppRouter
     * @description Application router
     * @constructor
     * @extends Marionette.AppRouter
     * @prop {object} appRoutes
    **/
    var AppRouter = Mn.AppRouter.extend({
        appRoutes: {
            'welcome':    'scrollToSection',
            ':name':      'scrollToSection',
            'feed/:post': 'scrollToPost'
        },
        controller: new RouterController()
    });

    module.exports = AppRouter;
});
