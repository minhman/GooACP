const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = new UglifyJsPlugin({
    cache: true,
    extractComments: false,
    sourceMap: true,
    parallel: 4,
    uglifyOptions: {
        output: {
            comments: false,
            beautify: true,
        },
    }
});