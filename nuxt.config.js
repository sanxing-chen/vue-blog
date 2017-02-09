module.exports = {
    css: [
        { src: '~assets/common.stylus', lang: 'stylus' }
    ],
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' }
        ]
    },
    generate: {
        routeParams: {
            '/p/:p': [
                { p :'Markdown-Demo' } //for static deployment
            ]
        }
    }
}