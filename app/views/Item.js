/**
 * @file View for items that are shown in a section on the homepage
 * @module views/Item
 * @requires models/Item
**/
define(function(require, exports, module) {
    'use strict';

    var _    = require('underscore');
    var Mn   = require('backbone.marionette');
    var JST  = require('templates');
    var Item = require('models/Item');

    var ItemView = Mn.View.extend({
        className: 'item-container',
        template: JST['content/item'],
        model: (new Item.Model()),
        events: {
            'click button.social': 'share'
        },
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
        },
        share: function(e) {
            var view = this;
            var $e = $(e.currentTarget);
            var name = $e.attr('data-social');
            var sn_root = {
                facebook: 'http://www.facebook.com/sharer/sharer.php',
                linkedin: 'https://www.linkedin.com/shareArticle',
                twitter: 'https://twitter.com/intent/tweet'
            };
            var sn = {
                root: sn_root[name],
                name: name,
                meta: view.model.get('share')[name],
                title: encodeURIComponent(view.model.get('title')),
                summary: encodeURIComponent(view.model.get('subtitle')),
                link: 'https://omaha.js.org'
            };
            // twitter text must be less than 140 characters
            var uri = {
                linkedin: sn.root + '?mini=true&url=' + sn.link + '&title=' + sn.title + '&summary=' + sn.summary + '&source=omahajs',
                facebook: sn.root + '?u=' + sn.link + '&title=' + sn.title + '',
                twitter:  sn.root + '?text=' + sn.title + '&via=omaha_js' + '&hashtags=GoodLifeGreatCode'
            };
            window.open(uri[name]);
        }
    });

    module.exports = ItemView;
});
