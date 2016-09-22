/**
 * @file View for items that are shown in a section on the homepage
 * @module views/Item
 * @requires models/Item
**/
define(function(require, exports, module) {
    'use strict';

    var Mn   = require('backbone.marionette');
    var JST  = require('templates');
    var Item = require('models/Item');

    var ItemView = Mn.View.extend({
        className: 'item-container',
        template: JST['content/item'],
        model: (new Item.Model())
    });

    module.exports = ItemView;
});
