exports.data = {
    'web-app': {
        order: 0,
        url: 'https://github.com/omahajs/generator-omaha#quick-start',
        title: 'Craft a web app from scratch',
        description: 'Scaffold a composite architecture that leverages string interpolation templates and a central event aggregator (includes a build chain for linting, testing and bundling).',
        technology: [
            ['marionette', 'https://marionettejs.com/'],
            ['lodash', 'https://lodash.com/docs/4.17.10'],
            ['morphdom', 'https://github.com/patrick-steele-idem/morphdom']
        ]
    },
    'desktop-app': {
        order: 0,
        url: 'https://github.com/omahajs/generator-omaha/blob/master/GENERATORS.md#native',
        title: 'Create a desktop app from scratch',
        description: 'Employ the same Omaha web app architecture to craft a native desktop app.',
        technology: [
            ['electron', 'https://electronjs.org/']
        ]
    },
    server: {
        order: 0,
        url: 'https://github.com/omahajs/generator-omaha/blob/master/GENERATORS.md#server',
        title: 'Scaffold a secure Node.js server',
        description: 'Scaffold a light-weight Node.js with security standards "baked in"',
        technology: [
            ['express', 'https://expressjs.com/'],
            ['nsp', 'https://github.com/nodesecurity/nsp'],
            ['lusca', 'https://github.com/krakenjs/lusca'],
            ['helmet', 'https://helmetjs.github.io/'],
            ['graphql', 'https://github.com/graphql/graphql-js'],
            ['apollo', 'https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-express'],
            ['remarkable', 'https://github.com/jonschlinkert/remarkable'],
            ['ws', 'https://github.com/websockets/ws']
        ]
    },
    standards: {
        order: 0,
        url: 'https://github.com/omahajs/eslint-config-omaha-prime-grade#getting-started',
        title: 'Add standards to an existing project',
        description: 'Use the omaha-prime-grade ESLint config in any JS project',
        technology: [
            ['eslint', 'https://eslint.org/'],
            ['eslint-plugin-compat', 'https://github.com/amilajack/eslint-plugin-compat'],
            ['eslint-plugin-promise', 'https://github.com/xjamundx/eslint-plugin-promise']
        ]
    }
};
