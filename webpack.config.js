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
        hot: true,
        open: true,
        openPage: 'upload.html',
        proxy: {
            '/api': {
                target: 'http://localhost:8006',
                pathRewrite: { '^/api': '' }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}