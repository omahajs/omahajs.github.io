/**
 * @file The Heart of OMAHA JS
 * @author Jason Wohlgemuth
 * @version 1.0.0
 * @license MIT
 * @module app
 * @exports app
**/
define(function(require, exports, module) {
    'use strict';

    var _          = require('underscore');
    var Backbone   = require('backbone');
    var Marionette = require('backbone.marionette');
    var logging    = require('./plugins/radio.logging');

    require('./shims/marionette.radio.shim');
    require('./helpers/handlebars.helpers');
    require('./helpers/jquery.extensions');
    require('./plugins/jquery.easing');
    require('./helpers/underscore.mixins');

    /**
     * @class ApplicationModel
     * @extends Backbone.Model
     * @prop {object} default
     * @prop {string} default.name='tech-project'
    **/
    var ApplicationModel = Backbone.Model.extend({
        defaults: {
            name: 'OMAHA JS'
        }
    });
    /**
     * @class Application
     * @extends Marionette.Application
     * @prop {string} region='body'
     * @prop {ApplicationModel} model
    **/
    var Application = Marionette.Application.extend({
        region: '.main',
        model: new ApplicationModel()
    });

    var omaha = new Application();
    _.extend(omaha, logging);

    module.exports = omaha;
});
