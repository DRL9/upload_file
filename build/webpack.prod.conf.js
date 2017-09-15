const webpack = require('webpack')
    , path = require('path')
    , baseWebpackConfig = require('./webpack.base..conf')
    , merge = require('webpack-merge')
    , CleanWebpackPlugin = require('clean-webpack-plugin')
    , ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
    , UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
    , styleLoaders = require('./style-loaders')
    ;

module.exports = merge(baseWebpackConfig, {
    output: {
        path: path.resolve('dist'),
        filename: 'scripts/[name].[chunkhash].js'
    },
    module: {
        rules: [
            styleLoaders({ extract: true })
        ]
    },
    plugins: [
        new CleanWebpackPlugin('./dist', {
            root: path.resolve('./')
        }),
        new UglifyjsWebpackPlugin(),
        new ExtractTextWebpackPlugin({
            filename: 'css/[name].[contenthash].css'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        }),
        new webpack.HashedModuleIdsPlugin()
    ]
});

