const path = require('path')
    , webpack = require('webpack')
    , HtmlWebpackPlugin = require('html-webpack-plugin')
    ;

const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true&timeout=10000';

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app: [
            './src/main.js',
            hotMiddlewareScript
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'scripts/app.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(ttf|woff|woff2|otf|eot)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'upload.html',
            template: 'src/upload.html'
        })
    ]
}