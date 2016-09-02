/**
 * @file Application Router
 * @author Jason Wohlgemuth
 * @module router
**/
define(function(require, exports, module) {
    'use strict';

    var Marionette = require('backbone.marionette');

    /**
     * @name RouterController
     * @constructor
     * @extends Marionette.Object
     * @prop {function} foo Example callback function to be called by ExampleAppRouter
     */
    var RouterController = Marionette.Object.extend({
        foo: function() {
            //console.log('bar');
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
    var AppRouter = Marionette.AppRouter.extend({
        appRoutes: {
            'foo': 'foo'
        },
        controller: new RouterController()
    });

    module.exports = AppRouter;
});
