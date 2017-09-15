const ExtractWebpackPlugin = require('extract-text-webpack-plugin')
    ;

/**
 * @param {Object} options
 * @param {Boolean} options.extract
 */
function styleLoaders(options) {
    var output = {};
    output.test = /\.css$/;
    var loaders = ['style-loader', 'css-loader'];
    output.use = options.extract ? ExtractWebpackPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
    }) : loaders;
    return output;
}

module.exports = styleLoaders;