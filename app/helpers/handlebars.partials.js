/**
 * @file Handlebars partial templates
 * @author Jason Wohlgemuth
**/
define(function(require) {
    'use strict';

    var $          = require('jquery');
    var _          = require('lodash');
    var Handlebars = require('handlebars');

    var $DIV = $('<div></div>');
    var $SPAN = $('<span></span>');
    var $IMG = $('<img></img>');
    var $UL = $('<ul></ul>');
    var $LI = $('<li></li>');

    Handlebars.registerPartial('paragraph', function(txt) {
        var $p = $('<p></p>').text(txt);
        return $p[0].outerHTML;
    });
    Handlebars.registerPartial('image', function(options) {
        var size   = _.get(options, 'size', 'cover');
        var height = _.get(options, 'height', 300);
        var bgColor = _.get(options, 'bgColor', '#3E863D');
        var bgPosition = _.get(options, 'position', 'center 0');
        var imgSrc = _.get(options, 'url', '../assets/images/cornfield.jpg');
        var altMsg = _.get(options, 'alt', 'Feed Item Image Element');
        var $div = $DIV.clone()
            .addClass('item-element-container')
            .css({
                'background-color': bgColor,
                'background-image': 'url(' + imgSrc + ')',
                'background-position': bgPosition,
                'background-size': size
            })
            .height(height);
        $IMG.clone()
            .prop('src', imgSrc)
            .prop('alt', altMsg)
            .appendTo($div);
        return $div[0].outerHTML;
    });
    Handlebars.registerPartial('quote', function(txt) {
        var $quote = $DIV.clone()
            .addClass('item-quote')
            .text(txt);
        var $span = $SPAN.clone()
            .attr('data-network', 'twitter')
            .addClass('social')
            .text('tweet')
            .appendTo($quote);
        $SPAN.clone()
            .addClass('icon')
            .html('&#xEA96;')
            .prependTo($span);
        return $quote[0].outerHTML;
    });
    Handlebars.registerPartial('list', function(title, items) {
        var $ul = $UL.clone()
            .addClass('item-list');
        $SPAN.clone()
            .addClass('item-list-title')
            .text(title)
            .appendTo($ul);
        Array.isArray(items) && items.forEach(function(item) {
            $LI.clone()
                .text(item)
                .appendTo($ul);
        });
        return $ul[0].outerHTML;
    });
});
