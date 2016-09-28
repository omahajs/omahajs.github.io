/**
 * @file Application Router
 * @author Jason Wohlgemuth
 * @module router
**/
define(function(require, exports, module) {
    'use strict';

    var $  = require('jquery');
    var Mn = require('backbone.marionette');

    var SCROLL_DURATION = 300;

    /**
     * @name RouterController
     * @constructor
     * @extends Marionette.Object
     * @prop {function} scrollToPost
     * @prop {function} scrollToSection
    **/
    var RouterController = Mn.Object.extend({
        initialize: function(options) {
            this.navigate = (new Mn.AppRouter).__proto__.__proto__.navigate;
        },
        scrollToPost: function(id) {
            var $feed = $('.feed');
            var $post = $feed.find('[data-post-id=' + id + ']');
            var top;
            if ($post.length > 0) {
                top = $post.offset().top;
            } else {
                this.navigate('feed');
                top = $feed.offset().top;
            }
            $('html, body').animate({scrollTop: top}, SCROLL_DURATION);
        },
        scrollToSection: function(name) {
            var top = (name && typeof (name) === 'string') ? $('.content-section.' + name).offset().top : 0;
            $('html, body').animate({scrollTop: top}, SCROLL_DURATION);
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
