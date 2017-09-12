const path = require('path')
    , webpack = require('webpack')


module.exports = {
    devtool: 'eval-source-map',
    entry: path.join(__dirname, 'src/main.js'),
    output: {
        path: path.join(__dirname, 'public/scripts'),
        filename: 'site.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 8010,
        inline: true,
        open: true,
        openPage: 'upload.html'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules'
            }
        ]
    }
}