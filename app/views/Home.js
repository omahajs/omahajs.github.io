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

    var SCROLL_DURATION = 300;

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
     * @name NavigationMenu
     * @constructor
     * @extends module:views/Static
    **/
    var NavigationMenu = Mn.View.extend({
        className: 'menu-container',
        model: (new Data.Model()),
        template: JST.navigation,
        events: {
            'click .menu-item': 'onClickItem',
            'touchend': 'onClickItem'
        },
        onClickItem: function(e) {
            var $e = $(e.currentTarget);
            var name = $e.find('.title').text();
            omaha.router.navigate(name, {trigger: true});
        },
        updateUnreadPosts: function(num) {
            var $title = this.$('.menu-item').first().find('.title');
            var hasUnreadPosts = (_.isNumber(num) && num > 0);
            if (hasUnreadPosts) {
                $title.attr('data-unread-posts', num);
            }
            $title.toggleClass('show-badge', hasUnreadPosts);
        }
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
            feed:  regionObject('#first-section'),
            code:  regionObject('#second-section'),
            about: regionObject('#last-section')
        },
        ui: {
            scrollButton: 'button.scroll-to-top'
        },
        initialize: function() {
            var home = this;
            omaha.banner = new BannerView();
            omaha.navigation = new NavigationMenu();
            omaha.model.set('sections', Object.keys(home.regions).filter(function(region) {
                return region !== 'navigation';
            }));
        },
        onRender: function() {
            this
                .initNavigationMenu()
                .initSectionViews()
                .initScrollButton();
            // Footer is hidden until after render to avoid jitter during scroll
            $('footer').css('display', 'flex');
        },
        initNavigationMenu: function() {
            this.showChildView('navigation', omaha.navigation);
            return this;
        },
        initSectionViews: function() {
            var home = this;
            omaha.model.get('sections').forEach(function(section) {
                home.showChildView(section, new Section({
                    title: section,
                    collection: new Item.Collection(content[section])
                }));
            });
            omaha.navigation.updateUnreadPosts(/*count unread posts*/);
            return home;
        },
        initScrollButton: function() {
            var scrollButton = this.ui.scrollButton.toggleClass('hidden', (window.scrollY < 100));
            $(window).scroll(function() {
                scrollButton.toggleClass('hidden', (window.scrollY < 100));
            });
            scrollButton.click(function() {
                omaha.router.navigate('welcome');
                $('html, body').animate({scrollTop: 0}, SCROLL_DURATION);
            });
            return this;
        }
    });

    module.exports = HomeView;
});
