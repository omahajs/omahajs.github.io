/**
 * @file Handlebars partial templates
 * @author Jason Wohlgemuth
**/
define(function(require) {
    'use strict';

    var $          = require('jquery');
    var Handlebars = require('handlebars');

    Handlebars.registerPartial('image', function(url) {
        return '<img src="' + url + '" alt="test"></img>';
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
