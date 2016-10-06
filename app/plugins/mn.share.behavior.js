/**
 * @file Marionette Behavior for adding functionality to share buttons
**/
define(function(require, exports, module) {
    'use strict';

    var Mn = require('backbone.marionette');

    var ShareBehavior = Mn.Behavior.extend({
        events: {
            'click button.social': 'share'
        },
        share: function(e) {
            var view = this.view;
            var $e = $(e.currentTarget);
            var name = $e.attr('data-network');
            var sn_root = {
                facebook: 'http://www.facebook.com/sharer/sharer.php',
                linkedin: 'https://www.linkedin.com/shareArticle',
                twitter: 'https://twitter.com/intent/tweet'
            };
            var sn = {
                root: sn_root[name],
                name: name,
                title: encodeURIComponent(view.model.get('title')),
                summary: encodeURIComponent(view.model.get('subtitle')),
                url: encodeURIComponent(window.location.href + '/' + view.model.get('name'))
            };
            // twitter text must be less than 140 characters
            var uri = {
                linkedin: sn.root + '?mini=true&url=' + sn.url + '&title=' + sn.title + '&summary=' + sn.summary + '&source=omahajs',
                facebook: sn.root + '?u=' + sn.url + '&title=' + sn.title + '',
                twitter:  sn.root + '?text=' + sn.title + '&via=omaha_js' + '&hashtags=GoodLifeGreatCode' + '&url=' + sn.url
            };
            window.open(uri[name]);
        }
    });

    module.exports = ShareBehavior;
});
