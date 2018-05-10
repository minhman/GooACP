const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = new OptimizeCSSAssetsPlugin({
    cssProcessorOptions: {discardComments: {removeAll: true}},
    canPrint: true
});