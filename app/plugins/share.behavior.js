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

    var ShareBehavior = Marionette.Behavior.extend({
        events: {
            'click .social': 'share'
        },
        onDomRefresh: function() {
            var view = this.view;
            view.$('span.social')
                .mouseenter(function() {
                    view.$el.addClass('tweet');
                })
                .mouseleave(function() {
                    view.$el.removeClass('tweet');
                });
        },
        share: function(e) {
            var view = this.view;
            var $e = $(e.currentTarget);
            var name = $e.attr('data-network');
            var data = {
                title: encodeURIComponent(view.model.get('title')),
                summary: encodeURIComponent(view.model.get('subtitle')),
                url: encodeURIComponent(window.location.href + '/' + view.model.get('name'))
            };
            var CUSTOM_SHARE_LINK = FORMAT_TYPE[name](data);
            window.open(CUSTOM_SHARE_LINK);
        }
    });

    module.exports = ShareBehavior;
});
