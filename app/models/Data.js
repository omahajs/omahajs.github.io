/**
 * @file Generic data model and collection module
 * @author Jason Wohlgemuth
 * @module models/Data
 * @requires app
**/
define(function(require, exports) {
    'use strict';

    var Backbone = require('backbone');
    var omaha  = require('app');

    /**
     * @name DataModel
     * @description Generic data model
     * @constructor
     * @extends Backbone.Model
     * @prop {objects} defaults
     * @prop {string} defaults.name
    **/
    var DataModel = Backbone.Model.extend({
        defaults: {
            name: omaha.model.get('name')
        }
    });
    /**
     * @name DataCollection
     * @description Generic data collection
     * @constructor
     * @extends Backbone.Collection
     * @prop {DataModel} model
    **/
    var DataCollection = Backbone.Collection.extend({
        model: DataModel
    });

    exports.Model = DataModel;
    exports.Collection = DataCollection;
});
