/**
 * @file View for items that are shown in a section on the homepage
 * @module views/Item
 * @requires models/Item
**/
define(function(require, exports, module) {
    'use strict';

    var _     = require('underscore');
    var Mn    = require('backbone.marionette');
    var Share = require('plugins/mn.share.behavior');
    var JST   = require('templates');
    var Item  = require('models/Item');

    var ItemView = Mn.View.extend({
        className: 'item-container',
        template: JST['content/item'],
        model: (new Item.Model()),
        behaviors: [Share],
        templateContext: function() {
            return {
                uriEncode: function(str) {
                    return encodeURIComponent(str);
                }
            };
        },
        onRender: function() {
            var view = this;
            var parent = view._parent;
            if (parent && parent.collection) {
                var type = _.chain(view._parent.collection.pluck('type'))
                    .uniq()
                    .first()
                    .value();
                view.$el.attr('data-type', type);
            }
        }
    });

    module.exports = ItemView;
});
