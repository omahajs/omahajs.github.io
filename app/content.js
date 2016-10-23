/* eslint max-len:0 */
define(function(require, exports) {
    'use strict';

    var partials  = require('handlebars').partials;
    require('./helpers/handlebars.partials');
    var paragraph = partials.paragraph;
    var code      = partials.code;
    var gist      = partials.gist;
    var image     = partials.image;
    var banner    = partials.banner;
    var quote     = partials.quote;
    var list      = partials.list;

    exports.xfeed = [
        {
            type: 'post',
            postId: '1',
            name: 'intro',
            date: '201609291800',
            title: 'Introducing Omaha JS',
            subtitle: 'Good Life. Great Code.',
            body: [
                paragraph('Omaha JS is about crafting sustainable, high-quality software with modern front-end technologies.'),
                paragraph('In simple terms, Omaha JS seeks to make it easier to write tested, linted, functional code.'),
                paragraph('Anyone can get started from scratch with our <a href="#code">Omaha Yeoman generator</a> or add static analysis rules to an existing project with our <a href="#code">shareable ESLint config</a>.')
            ]
        }
    ];
    exports.feed = [
        {
            type: 'post',
            postId: '1',
            name: 'foo',
            date: '20160925',
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
                paragraph('Omaha JS seeks...'),
                quote('Writing great code is a process that must be practiced.'),
                paragraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
                quote('The process of writing great code must be sustainable in order to be viable in real-world situations.'),
                paragraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
                quote('Web technologies are awesome.'),
                code(
                    '//Expressed with functional, point-free, and fluent JS',
                    'let tech = [',
                    '\t\'JavaScript\',',
                    '\t\'Node\',',
                    '\t\'HTML\',',
                    '\t\'CSS\'',
                    '];',
                    'function isAwesome(thing) {',
                    '\treturn tech.includes(thing);',
                    '}',
                    'var WEB_TECH_IS_AWESOME = tech',
                    '\t.map(isAwesome)',
                    '\t.every(x => (x === true));',
                    'console.log(WEB_TECH_IS_AWESOME);// true'
                ),
                paragraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
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
