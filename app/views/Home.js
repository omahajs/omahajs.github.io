/**
 * @file Home
 * @author Jason Wohlgemuth
 * @module views/Home
 * @requires app
 * @requires views/Banner
 * @requires views/Static
 * @requires models/Data
**/
define(function(require, exports, module) {
    'use strict';

    var Mn          = require('backbone.marionette');
    var omaha       = require('app');
    var content     = require('content');
    var JST         = require('templates');
    var StaticView  = require('views/Static');
    var Section     = require('views/Section');
    var Data        = require('models/Data');

    /**
     * @name BannerView
     * @constructor
     * @extends module:views/Static
    **/
    var BannerView = StaticView.extend({
        el: '.sunshine.banner',
        template: JST.banner
    });

    /**
     * @name NavigationMenu
     * @constructor
     * @extends module:views/Static
    **/
    var NavigationMenu = StaticView.extend({
        el: 'nav'
        // template: JST.navigation
    });

    /**
     * @name HomeView
     * @description View for home page
     * @constructor
     * @extends Marionette.View
    **/
    var HomeView = Mn.View.extend({
        className: 'sections-container',
        template: JST.main,
        model: new Data.Model(),
        regions: {
            news:      '.news-section-wrapper',
            about:     '.about-section-wrapper',
            projects:  '.projects-section-wrapper',
            resources: '.resources-section-wrapper'
        },
        initialize: function() {
            omaha.model.set('sections', Object.keys(this.regions));
            omaha.log(content.news[0]);
        },
        onRender: function() {
            var home = this;
            omaha.banner = new BannerView();
            omaha.navigation = new NavigationMenu();
            omaha.model.get('sections').forEach(function(section) {
                home.showChildView(section, new Section({
                    title: section,
                    collection: new Data.Collection(content[section])
                }));
            });
        }
    });

    module.exports = HomeView;
});
