define(function(require, exports, module) {
    'use strict';

    var $        = require('jquery');
    var Mn       = require('backbone.marionette');
    var omaha    = require('app');
    var Router   = require('router');
    var HomeView = require('views/Home');
    var Data     = require('models/Data');

    describe('Home View', function() {
        var $fixture = $('<div></div>').attr('id', 'test-fixture');
        var $container;
        var $home;
        var TestLayoutView;
        var testLayout;
        var view;
        beforeEach(function() {
            $container = $fixture.clone();
            $home = $container.clone().attr('id', 'test-home');
            $('body').prepend([$container, $home]);
            TestLayoutView = Mn.View.extend({
                el: '#test-fixture',
                template: false,
                regions: {
                    test: {
                        el: '#test-home'
                    }
                }
            });
            testLayout = new TestLayoutView();
            testLayout.render();
            omaha.router = new Router();
            view = new HomeView();
        });
        afterEach(function() {
            $container.remove();
            view.destroy();
        });
        it('can be initialized', function() {
            expect(view.model instanceof Data.Model).toBeTruthy();
            expect(Object.keys(view.regions)).toEqual([
                'navigation',
                'feed',
                'code',
                'about'
            ]);
        });
        it('can render', function() {
            spyOn(view, 'showChildView').and.callThrough();
            spyOn(view, 'initSectionViews').and.callThrough();
            spyOn(view, 'initScrollButton').and.callThrough();
            view.render();
            expect(view.showChildView).toHaveBeenCalledWith('navigation', omaha.navigation);
            expect(view.initSectionViews).toHaveBeenCalled();
            expect(view.initScrollButton).toHaveBeenCalled();
        });
        xit('can execute router routes when navigation menu items are clicked', function() {
            testLayout.showChildView('test', view);
        });
        it('can initialize a scroll-to-top button with scroll and click listeners', function() {
            function scrollTo(y) {
                window.scrollY = y;
                $(window).scroll();
            }
            spyOn(omaha.router, 'navigate');
            view.render();
            var $scrollButton = view.$(view.ui.scrollButton);
            expect($scrollButton.hasClass('hidden')).toBeTruthy();
            scrollTo(101);
            expect($scrollButton.hasClass('hidden')).not.toBeTruthy();
            scrollTo(99);
            expect($scrollButton.hasClass('hidden')).toBeTruthy();
            scrollTo(101);
            $scrollButton.click();
            expect(omaha.router.navigate).toHaveBeenCalledWith('welcome');
        });
    });
})
