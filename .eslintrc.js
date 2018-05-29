module.exports = {
    env: {
        commonjs: true,
        es6: true
    },
    globals: {
        graphql: true
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    extends: ['omaha-prime-grade', 'plugin:react/recommended']
};
