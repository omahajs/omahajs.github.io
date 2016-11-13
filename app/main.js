/**
 * @file Main entry point for application
 * @author Jason Wohlgemuth
 * @requires app
 * @requires router
 * @requires views/Home
**/
define(function(require) {
    'use strict';

    var Backbone         = require('backbone');
    var omaha            = require('app');
    var Router           = require('router');
    var WindowController = require('controllers/Window');
    var Home             = require('views/Home');

    omaha.on('before:start', function() {
        omaha.info('Starting...');
        omaha.control = {
            window: new WindowController()
        };
        omaha.router = new Router();
    });
    omaha.on('start', function() {
        omaha.showView(new Home(), {replaceElement: true});
        Backbone.history.start();
        omaha.info('Started!');
    });
    if (typeof (define) === 'undefined') {
        //Not AMD ==> Bundled with Browserify
        document.addEventListener('DOMContentLoaded', function() {
            omaha.start();
        });
    } else {
        //AMD == > Bundled with r.js
        omaha.start();
        omaha.vent.trigger('window:open');
    }
});
