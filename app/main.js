/**
 * @file Main entry point for application
 * @author Jason Wohlgemuth
 * @requires app
 * @requires router
 * @requires views/Home
**/
define(function(require) {
    'use strict';

    var Backbone   = require('backbone');
    var Marionette = require('backbone.marionette');
    var omaha    = require('app');
    var Router     = require('router');
    var Home       = require('views/Home');

    omaha.on('before:start', function() {
        omaha.info('Starting...');
        omaha.router = new Router();
    });
    omaha.on('start', function() {
        Backbone.history.start();
        omaha.info('Started!');
        omaha.getRegion().show(new Home());
    });
    if (typeof (define) === 'undefined') {
        //Not AMD ==> Bundled with Browserify
        document.addEventListener('DOMContentLoaded', function() {
            omaha.start();
        });
    } else {
        //AMD == > Bundled with r.js
        omaha.start();
    }
});
