/**
 * @file Marionette Behavior for adding functionality to share buttons
**/
define(function(require, exports, module) {
    'use strict';

    var Marionette = require('backbone.marionette');

    var SOCIAL_NETWORK_URL_ROOT = {
        facebook: 'http://www.facebook.com/sharer/sharer.php',
        linkedin: 'https://www.linkedin.com/shareArticle',
        twitter: 'https://twitter.com/intent/tweet'
    };
    var FORMAT_TYPE = {
        linkedin: linkedinFormat,
        facebook: facebookFormat,
        twitter:  twitterFormat
    };
    function linkedinFormat(options) {
        return [SOCIAL_NETWORK_URL_ROOT.linkedin]
            .concat(['?url=', options.url])
            .concat(['&title=', options.title])
            .concat(['&summary=', options.summary])
            .concat(['&source=omahajs'])
            .concat(['&mini=true'])
            .join('');
    }
    function facebookFormat(options) {
        return [SOCIAL_NETWORK_URL_ROOT.facebook]
            .concat(['?u=', options.url])
            .concat(['&title=', options.title])
            .join('');
    }
    function twitterFormat(options) {
        return [SOCIAL_NETWORK_URL_ROOT.twitter]
            .concat(['?url=', options.url])
            .concat(['&text=', options.title])// must be less than 140 characters
            .concat(['&hashtags=GoodLifeGreatCode'])
            .concat(['&via=omaha_js'])
            .join('');
    }
    function share(url) {
        window.open(url);
    }
    var ShareBehavior = Marionette.Behavior.extend({
        events: {
            'click .social': 'onClickShare'
        },
        onDomRefresh: function() {
            var view = this.view;
            view.$('span.social')
                .mouseenter(function(e) {$(e.currentTarget).parent().addClass('tweet');})
                .mouseleave(function(e) {$(e.currentTarget).parent().removeClass('tweet');});
        },
        onClickShare: function(e) {
            var view = this.view;
            var $e = $(e.currentTarget);
            var network = $e.attr('data-network');
            if (this.isQuote(e)) {
                var txt = $e.parent('div').text();
                var quote = txt.substr(0, txt.length - 6);
                this.tweet(quote);
            } else {
                this.shareWith(network);
            }
        },
        isQuote: function(e) {
            var view = this.view;
            var $e = $(e.currentTarget);
            return $e.parent().hasClass('item-quote')
        },
        shareWith: function(network) {
            var view = this.view;
            var data = {
                title: encodeURIComponent(view.model.get('title')),
                summary: encodeURIComponent(view.model.get('subtitle')),
                url: encodeURIComponent(window.location.href + '/' + view.model.get('name'))
            };
            var CUSTOM_SHARE_LINK = FORMAT_TYPE[network](data);
            share(CUSTOM_SHARE_LINK);
        },
        tweet: function(txt) {
            var data = {
                title: encodeURIComponent(txt)
            };
            var CUSTOM_SHARE_LINK = FORMAT_TYPE.twitter(data);
            share(CUSTOM_SHARE_LINK);
        }
    });

    module.exports = ShareBehavior;
});
