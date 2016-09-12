/**
 * @file Generic view for items that are shown in a section on the homepage
 * @module views/Item
 * @requires models/Data
**/
define(function(require, exports, module) {
    'use strict';

    var Mn   = require('backbone.marionette');
    var JST  = require('templates');
    var Data = require('models/Data');

    var ItemView = Mn.View.extend({
        template: JST.item,
        model: (new Data.Model())
    });

    module.exports = ItemView;
});
