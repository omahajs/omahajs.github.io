/**
 * @file Main entry point for application
 * @author Jason Wohlgemuth
 * @requires app
 * @requires router
 * @requires views/Home
**/
define(function(require) {
    'use strict';

    var Backbone = require('backbone');
    var omahajs  = require('app');
    var Router   = require('router');
    var View     = require('views/Home');

    omahajs.on('before:start', function() {
        omahajs.info('Starting...');
        omahajs.router = new Router();
    });
    omahajs.on('start', function() {
        Backbone.history.start();
        omahajs.info('Started!');
        omahajs.getRegion().show(new View());
    });
    if (typeof (define) === 'undefined') {
        //Not AMD ==> Bundled with Browserify
        document.addEventListener('DOMContentLoaded', function() {
            omahajs.start();
        });
    } else {
        //AMD == > Bundled with r.js
        omahajs.start();
    }
});
