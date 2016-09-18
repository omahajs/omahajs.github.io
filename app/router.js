/**
 * @file Application Router
 * @author Jason Wohlgemuth
 * @module router
**/
define(function(require, exports, module) {
    'use strict';

    var $  = require('jquery');
    var Mn = require('backbone.marionette');

    /**
     * @name RouterController
     * @constructor
     * @extends Marionette.Object
     * @prop {function} foo Example callback function to be called by ExampleAppRouter
    **/
    var RouterController = Mn.Object.extend({
        scrollTo: function(name) {
            var top = (name && typeof (name) === 'string') ? $('.content-section.' + name).offset().top : 0;
            var duration = 300;
            $('html, body').animate({scrollTop: top}, duration);
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
            'welcome': 'scrollTo',
            ':name':   'scrollTo'
        },
        controller: new RouterController()
    });

    module.exports = AppRouter;
});
