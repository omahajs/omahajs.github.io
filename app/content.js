/* eslint max-len:0 */
define(function(require, exports) {
    'use strict';

    var partial = require('handlebars').partials;
    var paragraph = partial.paragraph;
    var image     = partial.image;
    var quote     = partial.quote;
    var list      = partial.list;

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
                image(),
                quote('Watashi no namae wa, Jason desu.'),
                paragraph('...that is some quote'),
                list(
                    'List Title',
                    [
                        'foo',
                        'bar',
                        'baz'
                    ]
                ),
                paragraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
                paragraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
                quote('Watashi no namae wa, Jason desu.'),
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
});
