/* eslint max-len:0 */
define(function(require, exports) {
    'use strict';

    var partials  = require('handlebars').partials;
    require('./helpers/handlebars.partials');
    var paragraph = partials.paragraph;
    var code      = partials.code;
    var gist      = partials.gist;
    var demo      = partials.demo;
    var image     = partials.image;
    var banner    = partials.banner;
    var quote     = partials.quote;
    var list      = partials.list;

    exports.feed = [
        {
            type: 'post',
            postId: '1',
            name: 'coming-soon',
            date: '20161106',
            title: 'Coming Soon',
            subtitle: 'A source for quality content about code and quality code for making content',
            body: [
                quote('A source for quality content about code and quality code for making content'),
                paragraph('We are working on meaningful content to make the world better.'),
                paragraph('When we are ready to share, we will post it here in the Omaha JS Feed.  Keep us in mind, and check back soon.'),
                paragraph('Before you leave, please check out our <a href="#code">code section</a>!'),
                image(null, {height: 300})
            ]
        }
    ];
    exports.code = [
        {
            order: 1,
            type: 'project',
            tags: ['yeoman', 'node', 'CLI', 'scaffold'],
            technology: 'yeoman',
            date: '',
            name: 'generator-omaha',
            url: 'https://github.com/omahajs/generator-omaha',
            title: 'Omaha Generator',
            subtitle: 'Yeoman generator for projects, web apps, and servers'
        },
        {
            order: 2,
            type: 'project',
            tags: ['eslint', 'linting', 'quality'],
            technology: 'eslint',
            date: '',
            name: 'eslint-config-omaha-prime-grade',
            url: 'https://github.com/omahajs/eslint-config-omaha-prime-grade',
            title: 'Code Quality Rules',
            subtitle: '"Prime Grade" ESLint Shareable Config'
        }
    ];
    exports.about = [
        {
            type: 'about',
            body: [
                paragraph('Omaha JS is about crafting sustainable, high-quality software with modern front-end technologies.  In simple terms, software is sustainable when it can be maintained indefinitely and Omaha JS seeks to help make creating sustainable software more attainable in real-world settings.'),
                paragraph('With this mission in mind, we have some key ideals driving us:'),
                quote('Writing quality code is a process that must be practiced.'),
                paragraph('Writing sustainable code is not always easy and like most things that are worth doing, practice is required. When it comes to crafting code, writing more of it usually helps.  However, just writing code is not enough! You must also read, research, experiment, download, install, configure, execute, upload, contribute, comment, clone, fork, discuss, persevere, review, follow, and grow.'),
                quote('Practice patterns before plug-ins.'),
                paragraph('Software developers encode the patterns of reality.  We should understand patterns to accomplish tasks and have the ability to choose the appropiate tool for any task.  As tools change, it is the skill and privilege of software developers to learn and adapt, as required.'),
                quote('The process of writing quality code must be sustainable in order to be viable in real-world situations.'),
                paragraph('"A developer went out to craft some code.  As he wrote his code, some of it was un-used and became dead code.  Other code was used right away.  But the code did not have tests and soon became impossible to change as requirements evolved.  Other code was added to old production code that was bloated, and not well-maintained.  The legacy code smothered the tender new code and it became un-used.  Still other code was added to a well-maintained code base with numerous well-written tests and quality metrics.  The code grew and was re-factored to be thirty, sixty, and even a hundred times more useful than when it was written."'),
                list('Credits',
                    [
                        '[Nebraska Font by Daniel Heikkinen](http://www.dafont.com/nebraska.font)',
                        '[IcoMoon Icon font](http://www.icomoon.io)',
                        '[SVG Hero Patterns](http://www.heropatterns.com/)',
                        '[highlight.js (syntax highlighting for code blocks)](https://highlightjs.org/)'
                    ]
                ),
                image('../assets/images/cornjs.png', {height: 250})
            ]
        }
    ];
});
