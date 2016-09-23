/**
 * @file Container view for each section of the homepage
 * @module views/Section
 * @requires views/Item
 * @requires models/Data
**/
define(function(require, exports, module) {
    'use strict';

    var Mn   = require('backbone.marionette');
    var JST  = require('templates');
    var Item = require('views/Item');
    var Data = require('models/Data');

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
        emptyView: EmptyView
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
            'click .item-container': 'onClickItem'
        },
        initialize: function(options) {
            var section = this;
            var title  = (options && options.title) ? options.title : section.model.get('title');
            section.$el
                .addClass(title)
                .addClass('content-section');
            (title === 'news') && section.$el.attr('data-layout', 'card');
            (title === 'code') && section.$el.attr('data-layout', 'card');
            section.model.set('title', title);
        },
        onRender: function() {
            var section = this;
            section.showChildView('items', new SectionItems({
                collection: section.collection
            }));
        },
        onClickItem: function(e) {
            var url = $(e.currentTarget).find('.item-content').attr('data-url');
            window.open(url);
        }
    });

    module.exports = SectionView;
});
