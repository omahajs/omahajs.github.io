/**
 * @file Handlebars partial templates
 * @author Jason Wohlgemuth
**/
define(function(require) {
    'use strict';

    var $          = require('jquery');
    var _          = require('lodash');
    var Handlebars = require('handlebars');

    var $DIV    = $('<div></div>');
    var $SPAN   = $('<span></span>');
    var $IMG    = $('<img></img>');
    var $BUTTON = $('<button></button>');
    var $PRE    = $('<pre></pre>');
    var $CODE   = $('<code></code>');
    var $UL     = $('<ul></ul>');
    var $LI     = $('<li></li>');
    var $A      = $('<a></a>');

    var $wrapper = $DIV.clone().addClass('item-element-container');

    function getArguments() {
        return Array.prototype.slice.apply(arguments);
    }

    Handlebars.registerPartial('paragraph', function(txt) {
        var $p = $('<p></p>').text(txt);
        return $p[0].outerHTML;
    });
    Handlebars.registerPartial('gist', function(id) {
        var GIST_URL = 'https://gist.github.com/jhwohlgemuth/' + id;
        var $pre = $PRE.clone();
        var $wrap = $wrapper.clone()
            .addClass('code-block')
            .attr('data-gist-id', id)
            .append($pre);
        $CODE.clone()
            .text(GIST_URL)
            .appendTo($pre);
        $DIV.clone()
            .addClass('button-container')
            .addClass('code-buttons')
            .append($BUTTON.clone()
                .addClass('open-gist')
                .attr('data-gist-url', GIST_URL)
                .attr('data-network', 'github')
                .text('view on github'))
            .appendTo($wrap);
        return $wrap[0].outerHTML;
    });
    Handlebars.registerPartial('code', _.flow(getArguments, function(code) {
        var $pre = $PRE.clone();
        var $wrap = $wrapper.clone()
            .addClass('code-block')
            .append($pre);
        $CODE.clone()
            .text(code.join('\n'))
            .appendTo($pre);
        $DIV.clone()
            .addClass('button-container')
            .addClass('code-buttons')
            .append($BUTTON.clone()
                .attr('data-action', 'copy-to-clipboard')
                .text('copy to clipboard'))
            .appendTo($wrap);
        return $wrap[0].outerHTML;
    }));
    Handlebars.registerPartial('demo', function(options) {
        var height = _.get(options, 'height', 300);
        var $pre = $PRE.clone()
            .height(height);
        var $iframe = $('<iframe></iframe>')
            .attr('allowfullscreen', true)
            .attr('data-url', _.get(options, 'url', 'http://www.example.com'))
            .css('z-index', 1e8)
            .height('100%')
            .hide();
        var $wrap = $wrapper.clone()
            .addClass('code-block')
            .addClass('demo')
            .height(height)
            .append($pre)
            .append($iframe);
        $DIV.clone()
            .addClass('button-container')
            .addClass('demo-buttons')
            .append($BUTTON.clone()
                .attr('data-action', 'activate-demo')
                .text('Activate Demo'))
            .appendTo($wrap);
        $DIV.clone()
            .addClass('button-container')
            .addClass('active-demo-buttons')
            .append($BUTTON.clone()
                .attr('data-action', 'activate-fullscreen')
                .text('fullscreen'))
            .appendTo($wrap)
            .hide();
        return $wrap[0].outerHTML;
    });
    Handlebars.registerPartial('image', function(imgSrc, options) {
        var DEFAULT_IMAGE_HEIGHT = '500';
        var src = imgSrc || '../assets/images/cornfield.jpg';
        var alt = _.get(options, 'alt', 'Feed Item Image Element');
        var $div = $wrapper.clone()
            .addClass('image-element')
            .height(_.get(options, 'height', DEFAULT_IMAGE_HEIGHT));
        $IMG.clone()
            .prop('src', src)
            .prop('alt', alt)
            .appendTo($div);
        return $div[0].outerHTML;
    });
    Handlebars.registerPartial('banner', function(imgSrc, options) {
        var DEFAULT_BANNER_HEIGHT = '15vh';
        var url = imgSrc || '../assets/images/cornfield.jpg';
        var $banner = $wrapper.clone()
            .height(_.get(options, 'height', DEFAULT_BANNER_HEIGHT))
            .css({
                'min-height':         '200px',
                'background-image':   'url(' + url + ')',
                'background-color':    _.get(options, 'bgColor', '#3E863D'),
                'background-position': _.get(options, 'position', 'center 0'),
                'background-size':     _.get(options, 'size', 'cover')
            });
        _.get(options, 'width') && $banner.css('background-size', options.width + 'px auto');
        return $banner[0].outerHTML;
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
        var markdownUrlPattern = new RegExp('\[[\w\s]*\]\(.*\)', 'i');
        var protocolHostPattern = new RegExp('^https?:\/\/', 'i');
        var $ul = $UL.clone()
            .addClass('item-list');
        $SPAN.clone()
            .addClass('item-list-title')
            .text(title)
            .appendTo($ul);
        Array.isArray(items) && items.forEach(function(item) {
            var $item;
            if (markdownUrlPattern.test(item)) {
                $item = $A.clone()
                    .attr('href', item.split('(')[1].replace(')', ''))
                    .prop('target', '_blank')
                    .text(item.split('[')[1].split(']')[0]);
            } else if (protocolHostPattern.test(item)) {
                $item = $A.clone()
                    .attr('href', item)
                    .prop('target', '_blank')
                    .text(item);
            } else {
                $item = $SPAN.clone().text(item);
            }
            $LI.clone()
                .append($item)
                .appendTo($ul);
        });
        return $ul[0].outerHTML;
    });
});
