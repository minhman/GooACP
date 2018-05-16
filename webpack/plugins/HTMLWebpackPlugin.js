const env = require('../env');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const minifies = {
    inject: true,
    removeComments: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    sortAttributes: true,
    sortClassName: true,
    removeEmptyAttributes: true,
    html5: true
};
const minify = env.IS_PRODUCTION ? minifies: false;


module.exports = new HTMLWebpackPlugin({
    template: './src/index.html',
    filename: "index.html",
    minify
});

