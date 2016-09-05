/**
 * @file Model and Collection for Posts
 * @module models/Post
 * @requires models/Data
**/
define(function(require, exports) {
    'use strict';

    var Data = require('models/Data');

    /**
     * @name PostModel
     * @constructor
     * @extends module:models/Data~DataModel
    **/
    var PostModel = Data.Model.extend({
        defaults: {
            title: 'New Post',
            date: null,
            body: '',
            tags: []
        }
    });
    /**
     * @name PostCollection
     * @constructor
     * @extends module:models/Data~DataCollection
     * @prop {PostModel} model
    **/
    var PostCollection = Data.Collection.extend({
        model: PostModel
    });

    exports.Model = PostModel;
    exports.Collection = PostCollection;
});
