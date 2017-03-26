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

    var _          = require('lodash');
    var Mn         = require('backbone.marionette');
    var omaha      = require('app');
    var content    = require('content');
    var JST        = require('templates');
    var StaticView = require('views/Static');
    var Section    = require('views/Section');
    var Item       = require('models/Item');
    var Data       = require('models/Data');

    function regionObject(selector) {
        return {
            el: selector,
            replaceElement: true
        };
    }

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
     * @name HomeView
     * @description View for home page
     * @constructor
     * @extends Marionette.View
    **/
    var HomeView = Mn.View.extend({
        tagName: 'section',
        className: 'omaha-home',
        template: JST.main,
        model: new Data.Model(),
        regions: {
            navigation: 'nav',
            projects:  regionObject('#first-section'),
            mission: regionObject('#last-section')
        },
        ui: {
            scrollButton: 'button.scroll-to-top'
        },
        events: {
            'click nav button': 'onClickNavigationButton'
        },
        initialize: function() {
            var home = this;
            omaha.banner = new BannerView();
            omaha.model.set('sections', _.without(Object.keys(home.regions), 'navigation'));
        },
        onRender: function() {
            this
                .initSectionViews()
                .initScrollButton();
            // Footer is hidden until after render to avoid jitter during scroll
            $('footer').css('display', 'flex');
        },
        initSectionViews: function() {
            var home = this;
            omaha.model.get('sections').forEach(function(section) {
                home.showChildView(section, new Section({
                    title: section,
                    collection: new Item.Collection(content[section])
                }));
            });
            return home;
        },
        initScrollButton: function() {
            var scrollButton = this.ui.scrollButton.toggleClass('hidden', (window.scrollY < 100));
            $(window).scroll(function() {
                scrollButton.toggleClass('hidden', (window.scrollY < 100));
            });
            scrollButton.click(function() {
                omaha.router.navigate('welcome');
                omaha.vent.trigger('window:scroll', {top: 0});
            });
            return this;
        },
        onClickNavigationButton: function(e) {
            var section = $(e.currentTarget).attr('data-section');
            omaha.router.navigate(section, {trigger: true});
        }
    });

    module.exports = HomeView;
});
