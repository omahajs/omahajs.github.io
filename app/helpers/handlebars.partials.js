/**
 * @file Handlebars partial templates
 * @author Jason Wohlgemuth
**/
define(function(require) {
    'use strict';

    var $          = require('jquery');
    var _          = require('lodash');
    var Handlebars = require('handlebars');

    Handlebars.registerPartial('image', function(options) {
        var imgSrc = _.get(options, 'url', '../assets/images/cornfield.jpg');
        return '<img src="' + imgSrc + '" alt="test"></img>';
    });
    Handlebars.registerPartial('quote', function(txt) {
        return '<i>' + txt + '</i>';
    });
    Handlebars.registerPartial('list', function(items) {
        var $ul = $('<ul></ul>');
        var $li = $('<li></li>');
        Array.isArray(items) && items.forEach(function(item) {
            $li.clone()
                .text(item)
                .appendTo($ul);
        });
        return $ul.html();
    });
});
