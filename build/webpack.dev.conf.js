const webpack = require('webpack')
    , merge = require('webpack-merge')
    , baseWebpackConfig = require('./webpack.base..conf')
    , styleLoaders = require('./style-loaders')
    ;

const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true&timeout=10000';

Object.keys(baseWebpackConfig.entry).forEach((name) => {
    baseWebpackConfig.entry[name] = [hotMiddlewareScript, baseWebpackConfig.entry[name]]
})

module.exports = merge(baseWebpackConfig, {
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            styleLoaders({ extract: false })
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});
