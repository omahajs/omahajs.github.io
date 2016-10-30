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
            name: 'foo',
            date: '201609291800',
            title: 'Really Long Test Announcement #1',
            subtitle: 'This is a test of the news section',
            body: [
                paragraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
            ]
        },
        {
            type: 'post',
            postId: '2',
            name: 'bar',
            date: '20160926',
            title: 'Test Announcement #2',
            subtitle: 'This is a test of the news section',
            body: [
                paragraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
                paragraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
                paragraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
            ]
        },
        {
            type: 'post',
            postId: '3',
            name: 'baz',
            date: '20160927',
            title: 'Test Announcement #3',
            subtitle: 'This is a test of the news section',
            body: [
                // banner('../assets/images/banners/clouds.jpg'),
                demo({url: 'http://www.example.com'}),
                gist('80b30714c33b197df0b6'),
                // banner('../assets/images/banners/corn.jpg'),
                code('var boom = \'dynamite\''),
                quote('If you are not growing, you are dying.'),
                code(
                    'function getArgs() {',
                    '\treturn Array.prototype.slice.apply(arguments);',
                    '}',
                    'var printArgs = _.flow(getArgs, console.log);',
                    '',
                    'printArgs(1, 2, 3); // [1, 2, 3]'
                ),
                paragraph('...that is some quote'),
                image(null, {height: 300}),
                banner('../assets/images/clouds.jpg'),
                list('List Title',
                    [
                        '[Google](https://google.com)',
                        'https://google.com',
                        'My favorite color is Red'
                    ]
                ),
                paragraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
                paragraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
                quote('Watashi no namae wa, Jason desu.'),
                image(null, {position: 'center bottom'}),
                paragraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
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
