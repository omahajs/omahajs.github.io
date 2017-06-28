define(function(require, exports, module) {
    'use strict';

    var _          = require('lodash');
    var Backbone   = require('backbone');
    var Marionette = require('backbone.marionette');

    function createJqueryElement(tag) {
        return Backbone.$(_.template('<<%= tag %>></<%= tag %>>')({tag: tag}));
    }
    function createGistUrl(id) {
        return 'https://gist.github.com/jhwohlgemuth/' + id;
    }
    function getArguments() {
        return Array.prototype.slice.apply(arguments);
    }

    var dom = [
        'div',
        'span',
        'img',
        'button',
        'pre',
        'code',
        'ul',
        'li',
        'p',
        'a'
    ];
    var $el = _.zipObject(dom, dom.map(function(tag) {return createJqueryElement(tag);}));
    var $wrapper = $el.div.clone().addClass('item-element-container');

    var ElementBuilder = Marionette.Object.extend({
        paragraph: function(txt) {
            var $p = $el.p.clone().html(txt);
            return $p[0].outerHTML;
        },
        quote: function(txt) {
            var $quote = $el.div.clone()
                .addClass('item-quote')
                .text(txt);
            var $span = $el.span.clone()
                .attr('data-network', 'twitter')
                .addClass('social')
                .text('click to tweet')
                .appendTo($quote);
            $el.span.clone()
                .addClass('icon')
                .html('&#xEA96;')
                .prependTo($span);
            return $quote[0].outerHTML;
        },
        list: function(title, items) {
            var markdownUrlPattern = new RegExp('\[[\w\s]*\]\(.*\)', 'i');
            var protocolHostPattern = new RegExp('^https?:\/\/', 'i');
            var $ul = $el.ul.clone()
                .addClass('item-list');
            $el.span.clone()
                .addClass('item-list-title')
                .text(title)
                .appendTo($ul);
            Array.isArray(items) && items.forEach(function(item) {
                var $item;
                if (markdownUrlPattern.test(item)) {
                    $item = $el.a.clone()
                        .attr('href', item.split('(')[1].replace(')', ''))
                        .prop('target', '_blank')
                        .text(item.split('[')[1].split(']')[0]);
                } else if (protocolHostPattern.test(item)) {
                    $item = $el.a.clone()
                        .attr('href', item)
                        .prop('target', '_blank')
                        .text(item);
                } else {
                    $item = $el.span.clone().text(item);
                }
                $el.li.clone()
                    .append($item)
                    .appendTo($ul);
            });
            return $ul[0].outerHTML;
        },
        gist: function(id) {
            var GIST_URL = createGistUrl(id);
            var $pre = $el.pre.clone();
            var $wrap = $wrapper.clone()
                .addClass('code-block')
                .attr('data-gist-id', id)
                .append($pre);
            $el.code.clone()
                .text(GIST_URL)
                .appendTo($pre);
            $el.div.clone()
                .addClass('button-container')
                .addClass('code-buttons')
                .append($el.button.clone()
                    .addClass('open-gist')
                    .attr('data-gist-url', GIST_URL)
                    .attr('data-network', 'github')
                    .text('view on github'))
                .appendTo($wrap);
            return $wrap[0].outerHTML;
        },
        code: _.flow(getArguments, function(code) {
            var $pre = $el.pre.clone();
            var $wrap = $wrapper.clone()
                .addClass('code-block')
                .append($pre);
            $el.code.clone()
                .text(code.join('\n'))
                .appendTo($pre);
            $el.div.clone()
                .addClass('button-container')
                .addClass('code-buttons')
                .append($el.button.clone()
                    .attr('data-action', 'copy-to-clipboard')
                    .text('copy to clipboard'))
                .appendTo($wrap);
            return $wrap[0].outerHTML;
        }),
        image: function(imgSrc, options) {
            var DEFAULT_IMAGE_HEIGHT = '500';
            var src = imgSrc || '../assets/images/cornfield.jpg';
            var alt = _.get(options, 'alt', 'Feed Item Image Element');
            var $div = $wrapper.clone()
                .addClass('image-element')
                .height(_.get(options, 'height', DEFAULT_IMAGE_HEIGHT));
            $el.img.clone()
                .prop('src', src)
                .prop('alt', alt)
                .appendTo($div);
            return $div[0].outerHTML;
        },
        banner: function(imgSrc, options) {
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
        },
        demo: function(options) {
            var DEFAULT_HEIGHT = 300;
            var BRING_TO_FRONT = 1e8;
            var height = _.get(options, 'height', DEFAULT_HEIGHT);
            var $pre = $el.pre.clone()
                .height(height);
            var $iframe = $('<iframe></iframe>')
                .attr('allowfullscreen', true)
                .attr('data-url', _.get(options, 'url', 'http://www.example.com'))
                .css('z-index', BRING_TO_FRONT)
                .height('100%')
                .hide();
            var $wrap = $wrapper.clone()
                .addClass('code-block')
                .addClass('demo')
                .height(height)
                .append($pre)
                .append($iframe);
            $el.div.clone()
                .addClass('button-container')
                .addClass('demo-buttons')
                .append($el.button.clone()
                    .attr('data-action', 'activate-demo')
                    .text('Activate Demo'))
                .appendTo($wrap);
            $el.div.clone()
                .addClass('button-container')
                .addClass('active-demo-buttons')
                .append($el.button.clone()
                    .attr('data-action', 'activate-fullscreen')
                    .text('fullscreen'))
                .appendTo($wrap)
                .hide();
            return $wrap[0].outerHTML;
        }
    });

    module.exports = ElementBuilder;
});
