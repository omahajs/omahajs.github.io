/**
 * @file Data model for content items (posts, projects, etc...)
 * @author Jason Wohlgemuth
 * @module models/Item
 * @requires app
 * @requires models/Data
**/
define(function(require, exports) {
    'use strict';

    var Data = require('models/Data');

    /**
     * @name ItemModel
     * @description Item model
     * @constructor
     * @extends Data.Model
     * @prop {objects} defaults
    **/
    var ItemModel = Data.Model.extend({
        defaults: {
            order: null,
            type: '',
            tags: [],
            date: '',
            title: '',
            subtitle: '',
            image: '',
            desciption: ''
        }
    });
    /**
     * @name ItemCollection
     * @description Item collection
     * @constructor
     * @extends Data.Collection
     * @prop {ItemModel} model
    **/
    var ItemCollection = Data.Collection.extend({
        model: ItemModel
    });

    exports.Model = ItemModel;
    exports.Collection = ItemCollection;
});
