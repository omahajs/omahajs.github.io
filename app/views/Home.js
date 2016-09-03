/**
 * @file Home
 * @author Jason Wohlgemuth
 * @module views/Home
 * @requires views/Banner
 * @requires models/Data
**/
define(function(require, exports, module) {
    'use strict';

    var Marionette = require('backbone.marionette');
    var omahajs    = require('app');
    var JST        = require('templates');
    var Data       = require('models/Data');

    /**
     * @name BannerView
     * @constructor
     * @extends Marionette.View
    **/
    var BannerView = Marionette.View.extend({
        el: '.banner',
        template: JST.banner,
        model: new Data.Model()
    });

    /**
     * @name HomeView
     * @description View for home page
     * @constructor
     * @extends Marionette.View
    **/
    var HomeView = Marionette.View.extend({
        template: JST.main,
        model: new Data.Model(),
        onRender: function() {
            omahajs.banner = new BannerView();
            omahajs.banner.render();
        }
    });

    module.exports = HomeView;
});
