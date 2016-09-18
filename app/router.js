/**
 * @file Application Router
 * @author Jason Wohlgemuth
 * @module router
**/
define(function(require, exports, module) {
    'use strict';

    var $     = require('jquery');
    var Mn    = require('backbone.marionette');
    var omaha = require('app');

    /**
     * @name RouterController
     * @constructor
     * @extends Marionette.Object
     * @prop {function} foo Example callback function to be called by ExampleAppRouter
    **/
    var RouterController = Mn.Object.extend({
        scrollTo: function(name) {
            var top;
            var duration;
            console.log(name);
            if (name && typeof(name) === 'string') {
                var $section = $('.content-section.' + name);
                var offset = $section.offset();
                top = offset.top;
                duration = 200;
            } else {
                top = 0;
                duration = 100;
            }
            $('html, body').animate({scrollTop: top}, duration);
        }
    });
    /**
     * @name AppRouter
     * @description Application router
     * @constructor
     * @extends Marionette.AppRouter
     * @prop {object} appRoutes
     * @prop {string} appRoutes.foo
    **/
    var AppRouter = Mn.AppRouter.extend({
        appRoutes: {
            'welcome': 'scrollTo',
            ':name':   'scrollTo'
        },
        controller: new RouterController()
    });

    module.exports = AppRouter;
});
