/**
 * @file View for Posts
 * @module views/Post
 * @requires models/Post
**/
define(function(require, exports, module) {
    'use strict';

    var JST  = require('templates');
    var Item = require('views/Item');
    var Post = require('models/Post');

    /**
     * @name PostView
     * @constructor
     * @extends module:views/Item
    **/
    var PostView = Item.extend({
        template: JST.post,
        model: (new Post.Model())
    });

    module.exports = PostView;
});
