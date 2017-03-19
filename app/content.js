/* eslint max-len:0 */
define(function(require, exports) {
    'use strict';

    var Builder   = require('./helpers/element.builder');
    var element   = new Builder();
    var paragraph = element.paragraph;
    var quote     = element.quote;
    var list      = element.list;
    var code      = element.code;
    var image     = element.image;

    exports.projects = [
        {
            order: 2,
            type: 'project',
            tags: ['yeoman', 'scaffold', 'CLI'],
            technology: 'yeoman',
            date: '',
            name: 'generator-omaha',
            url: 'https://github.com/omahajs/generator-omaha',
            title: 'Omaha Generator',
            // subtitle: 'Yeoman generator for projects, web apps, and servers',
            example: code(
                'npm install --global yo generator-omaha &&',
                'mkdir my-project &&',
                'cd my-project &&',
                'yo omaha'
            )
        },
        {
            order: 1,
            type: 'project',
            tags: ['eslint', 'linting', 'quality'],
            technology: 'eslint',
            date: '',
            name: 'eslint-config-omaha-prime-grade',
            url: 'https://github.com/omahajs/eslint-config-omaha-prime-grade',
            title: 'Code Quality',
            // subtitle: '"Prime Grade" ESLint Shareable Config',
            example: code(
                '// .eslintrc.js',
                '// -> Curated selection of rules',
                '// -> Maximum auto-fix capability',
                '// -> Secure coding practices baked in',
                'module.exports = {',
                '\textends: \'omaha-prime-grade\'',
                '};'
            )
        },
        {
            order: 0,
            type: 'project',
            tags: ['mathematics', 'library'],
            technology: 'javascript',
            date: '',
            name: 'applied.js',
            url: 'https://applied.js.org',
            title: 'Applied JS',
            // subtitle: 'Applied mathematics toolkit (client & server)',
            example: code(
                'const applied = require(\'applied\');',
                '',
                'var geo = applied.geodetic;',
                'var val = [\'32\', \'49\', \'49.0800\'];',
                'var dd = geo.convert.toDecimalDegrees(val);',
                'console.log(dd);// 32.8303',
                '',
                'var atm = applied.atmosphere',
                'var speed = atm.calculate.speedOfSound(86000);',
                'console.log(speed);// 274.6 m/s'
            )
        }
    ];
    exports.mission = [
        {
            type: 'about',
            body: [
                paragraph('Omaha JS is about crafting sustainable, high-quality software with modern front-end technologies.  In simple terms, software is sustainable when it can be maintained indefinitely. Omaha JS seeks to help make creating sustainable software more attainable in real-world settings.'),
                paragraph('With this mission in mind, we have some key ideals driving us:'),
                quote('Writing quality code is a process that must be practiced.'),
                paragraph('Writing sustainable code is not always easy and like most things that are worth doing, practice is required. When it comes to crafting code, writing more of it usually helps.  However, just writing code is not enough! You must also read, research, experiment, download, install, configure, execute, upload, contribute, comment, clone, fork, discuss, persevere, review, follow, and grow.'),
                quote('Practice patterns before plug-ins.'),
                paragraph('Software developers encode the patterns of reality.  We should understand patterns to accomplish tasks and have the ability to choose the appropiate tool for any task.  As tools change, it is the skill and privilege of software developers to learn and adapt, as required.'),
                quote('The process of writing quality code must be sustainable in order to be viable in real-world situations.'),
                paragraph('"A developer went out to craft some code.  As he wrote his code, some of it was un-used and became dead code.  Other code was used right away.  But the code did not have tests and soon became impossible to change as requirements evolved.  Other code was added to old production code that was bloated, and not well-maintained.  The legacy code smothered the tender new code and it became un-used.  Still other code was added to a well-maintained code base with numerous well-written tests and quality metrics.  The code grew and was re-factored to be thirty, sixty, and even a hundred times more useful than when it was first written."'),
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
