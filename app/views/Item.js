/**
 * @file View for items that are shown in a section on the homepage
 * @module views/Item
 * @requires app
 * @requires models/Item
**/
define(function(require, exports, module) {
    'use strict';

    var $      = require('jquery');
    var _      = require('underscore');
    var hljs   = require('highlightjs');
    var Mn     = require('backbone.marionette');
    var omaha  = require('app');
    var Share  = require('plugins/share.behavior');
    var moment = require('moment');
    var JST    = require('templates');
    var Item   = require('models/Item');

    var GITHUB_API_URL = 'https://api.github.com/gists/';
    function getGist(id) {
        return $.ajax({
            url: GITHUB_API_URL + id
        }).then(function(data) {
            var files = data.files;
            return files[Object.keys(files)[0]].content;
        });
    }

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
        initialize: function() {
            hljs.configure({
                tabReplace: '    ',
                languages: ['javascript', 'html', 'css']
            });
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
            view.renderGists();
        },
        onDomRefresh: function() {
            $('pre code').each(function(i, block) {
                hljs.highlightBlock(block);
            });
        },
        onClickTitle: function() {
            var view = this;
            var type = view.$el.attr('data-type');
            if (type === 'post') {
                var name = view.$el.attr('data-post-name');
                omaha.router.navigate('feed/' + name, {trigger: true});
            }
        },
        renderGists: function() {
            var view = this;
            view.$('[data-gist-id]').each(function(i, gist) {
                var $gist = $(gist);
                var id = $gist.attr('data-gist-id');
                getGist(id).done(function(code) {
                    $gist.find('code').text(code);
                    view.triggerMethod('dom:refresh');
                });
            });
        }
    });

    module.exports = ItemView;
});
