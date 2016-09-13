/**
 * @file View for static content like the navigation bar and banner
 * @module views/Static
 * @requires models/Data
 * @see http://marionettejs.com/docs/master/marionette.view.html#managing-an-existing-page
**/
define(function(require, exports, module) {
    'use strict';

    var JST  = require('templates');
    var Item = require('views/Item');
    var Data = require('models/Data');

    /**
     * @name StaticView
     * @constructor
     * @extends module:views/Item
    **/
    var StaticView = Item.extend({
        template: JST.empty,
        model: (new Data.Model()),
        initialize: function() {
            this.render();
        }
    });

    module.exports = StaticView;
});
