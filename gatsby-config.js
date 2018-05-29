module.exports = {
    siteMetadata: {
        title: 'Omaha JS – Good Life. Great Code.'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-emotion', {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'img',
                path: `${__dirname}/src/images`
            }
        }, {
            resolve: 'gatsby-plugin-drift',
            options: {
                appId: 'wesbmvp2s8n6'
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp'
    ]
}
