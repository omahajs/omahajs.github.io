/**
 * @file Example MarionetteJS View module
 * @author Jason Wohlgemuth
 * @module views/example
 * @requires models/example
**/
define(function(require, exports, module) {
    'use strict';

    var Marionette = require('backbone.marionette');
    var JST        = require('templates');
    var Data       = require('models/Data');

    /**
     * @name HomeView
     * @description View for home page
     * @constructor
     * @extends Marionette.View
    **/
    var HomeView = Marionette.View.extend({
        //view code goes here
        template: JST.home,
        model: new Data.Model()
    });

    module.exports = HomeView;
});
