var webpack = require('webpack')
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
    build: {
        analyze: true,
        plugins: [
            new webpack.ContextReplacementPlugin(
                /highlight\.js\/lib\/languages$/,
                new RegExp(`^./(${['javascript', 'css', 'bash', 'stylus', 'cpp'].join('|')})$`)
            )
        ]
    },
    generate: {
        routeParams: {
            '/p/:p': function (callback) {
                // auto generate dynamic router according to the static/*.md when generate static pages
                var fs = require('fs')
                var params
                fs.readdir('./static', function (e, f) {
                    params = f.map((v) => {
                        if (/.+\.md/.test(v)) { return { p: v.substr(0, v.length - 3) } }
                    }).filter((v) => {
                        return v !== undefined
                    })
                    callback(null, params)
                })
            }
        }
    }

}
