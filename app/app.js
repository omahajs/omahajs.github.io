/**
 * @file Application Core
 * @author Jason Wohlgemuth
 * @version 1.0.0
 * @license MIT
 * @module app
 * @exports app
**/
define(function(require, exports, module) {
    'use strict';

    var Backbone   = require('backbone');
    var Marionette = require('backbone.marionette');

    require('./shims/marionette.radio.shim');
    require('./helpers/handlebars.helpers');
    require('./helpers/jquery.extensions');
    require('./helpers/underscore.mixins');

    /**
     * @class ApplicationModel
     * @extends Backbone.Model
     * @prop {object} default
     * @prop {string} default.name='tech-project'
    **/
    var ApplicationModel = Backbone.Model.extend({
        defaults: {
            name: 'tech-project'
        }
    });
    /**
     * @class Application
     * @extends Marionette.Application
     * @prop {string} region='body'
     * @prop {ApplicationModel} model
    **/
    var Application = Marionette.Application.extend({
        region: 'body',
        model: new ApplicationModel()
    });

    module.exports = new Application();
});
