/**
 * @file View for items that are shown in a section on the homepage
 * @module views/Item
 * @requires app
 * @requires models/Item
**/
define(function(require, exports, module) {
    'use strict';

    var _      = require('underscore');
    var Mn     = require('backbone.marionette');
    var omaha  = require('app');
    var Share  = require('plugins/share.behavior');
    var moment = require('moment');
    var JST    = require('templates');
    var Item   = require('models/Item');

    var ItemView = Mn.View.extend({
        className: 'item-container',
        template: JST['content/item'],
        model: (new Item.Model()),
        behaviors: [Share],
        events: {
            'click .item-title': 'onClickTitle'
        },
        templateContext: function() {
            return {
                fromNow: function(str) {
                    return moment(str).fromNow();
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
                view.$el
                    .attr('data-post-id', view.model.get('postId'))
                    .attr('data-post-name', view.model.get('name'));
            }
            (type === 'post') && console.log(view.model.get('body'));
        },
        onClickTitle: function() {
            var view = this;
            var type = view.$el.attr('data-type');
            if (type === 'post') {
                var name = view.$el.attr('data-post-name');
                omaha.router.navigate('feed/' + name, {trigger: true});
            }
        }
    });

    module.exports = ItemView;
});
