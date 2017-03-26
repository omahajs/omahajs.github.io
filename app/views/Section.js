/**
 * @file Container view for each section of the homepage
 * @module views/Section
 * @requires app
 * @requires views/Item
 * @requires models/Data
**/
define(function(require, exports, module) {
    'use strict';

    var _     = require('lodash');
    var Mn    = require('backbone.marionette');
    var omaha = require('app');
    var JST   = require('templates');
    var Item  = require('views/Item');
    var Data  = require('models/Data');

    var SectionModel = Data.Model.extend({
        defaults: {
            title: 'New Section'
        }
    });

    var EmptyView = Mn.View.extend({
        className: 'no-items',
        template: JST.empty
    });

    var SectionItems = Mn.CollectionView.extend({
        tagName: 'div',
        className: 'items-container',
        childView: Item,
        emptyView: EmptyView,
        viewComparator: function(model) {
            return -model.get('order');
        },
        childViewEvents: function() {
            return {
                render: function(view) {
                    view.$el.attr('data-url', view.model.get('url'));
                }
            };
        }
    });

    var SectionView = Mn.View.extend({
        tagName: 'section',
        template: JST['content/section'],
        model: new SectionModel(),
        regions: {
            items: {
                el: '.items-container',
                replaceElement: true
            }
        },
        events: {
            'click .section-title': 'onClickTitle',
            'click .item-container .item-content[data-type=project] header': 'onClickProject'
        },
        initialize: function(options) {
            var section = this;
            var title  = (options && options.title) ? options.title : section.model.get('title');
            section.$el
                .addClass(title)
                .addClass('content-section');
            section.model.set('title', title);
        },
        onRender: function() {
            var section = this;
            section.showChildView('items', new SectionItems({
                collection: section.collection
            }));
        },
        onClickTitle: function() {
            var view = this;
            var section = view.$el.attr('class').toString().split(' ')[0];
            if (_.includes(omaha.model.get('sections'), section)) {
                omaha.router.navigate(section, {trigger: true});
            }
        },
        onClickProject: function(e) {
            var $e = $(e.currentTarget).closest('.item-container');
            var url = $e.attr('data-url');
            omaha.vent.trigger('window:open', {url: url});
        }
    });

    module.exports = SectionView;
});
