/**
 * @file View for items that are shown in a section on the homepage
 * @module views/Item
 * @requires app
 * @requires models/Item
**/
define(function(require, exports, module) {
    'use strict';

    var $         = require('jquery');
    var _         = require('underscore');
    var hljs      = require('highlightjs');
    var Mn        = require('backbone.marionette');
    var omaha     = require('app');
    var Share     = require('plugins/share.behavior');
    var Clipboard = require('plugins/clipboard.behavior');
    var moment    = require('moment');
    var JST       = require('templates');
    var Item      = require('models/Item');

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
        behaviors: [Share, Clipboard],
        ui: {
            element: '.item-element-container'
        },
        events: {
            'click .item-title': 'onClickTitle',
            'click [data-network=github]': 'onClickGithubButton',
            'click [data-action=activate-demo]': 'onActivateDemo',
            'click [data-action=activate-fullscreen]': 'onActivateFullscreen'
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
        onActivateDemo: function(e) {
            var view = this;
            var $el = $(e.currentTarget);
            var $element = $el
                .closest(view.ui.element)
                .addClass('active');
            $el.remove();
            var $btn = $('<button></button>')
                .attr('data-action', 'activate-fullscreen')
                .text('fullscreen');
            $('<div></div>')
                .addClass('button-container')
                .addClass('active-demo-buttons')
                .append($btn)
                .appendTo($element);
        },
        onActivateFullscreen: function(e) {
            var view = this;
            var $el = $(e.currentTarget);
            var $element = $el.closest(view.ui.element);
            $element.find('pre')
                .width('100vw')
                .height('100vh')
                .css({
                    'z-index': 999999999
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
        onClickGithubButton: function(e) {
            var url = e.currentTarget.getAttribute('data-gist-url');
            window.open(url);
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
