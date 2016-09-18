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
        // template: JST['content/empty']
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
        initialize: function(options) {
            var section = this;
            var title  = (options && options.title) ? options.title : {name: 'New Section'};
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
        }
    });

    module.exports = SectionView;
});
