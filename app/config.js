/* global requirejs */
/**
 * @file RequireJS configuration file
 * @author Jason Wohlgemuth
**/
requirejs.config({
    baseUrl: '',
    //urlArgs is used to cache bust.
    //development should use timestamp, production should use version
    urlArgs: 'bust=' + (new Date()).getTime(),
    deps: ['main'],
    paths: {
        //Project Dependencies
        bluebird:   '../node/_modules/bluebird/js/browser/bluebird.min',
        handlebars: '../node_modules/handlebars/dist/handlebars',
        moment:     '../node_modules/moment/min/moment-with-locales.min',
        //Backbone Libraries, Frameworks and Dependencies
        jquery:                '../node_modules/jquery/dist/jquery',
        lodash:                '../node_modules/lodash/lodash.min',
        underscore:            '../node_modules/underscore/underscore',
        'backbone':            '../node_modules/backbone/backbone',
        'backbone.radio':      '../node_modules/backbone.radio/build/backbone.radio',
        'backbone.marionette': '../node_modules/backbone.marionette/lib/backbone.marionette',
        //Helpers and extensions
        'handlebars.helpers': './helpers/handlebars.helpers',
        'jquery.extensions':  './helpers/jquery.extensions',
        'underscore.mixins':  './helpers/underscore.mixins',
        //Spies, Stubs, and fake servers (Jasmine is loaded by Karma plugin)
        sinon: '../node_modules/sinon/pkg/sinon'
    }
});
