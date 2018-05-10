const path = require('path');
const env = require('../env');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = new CopyWebpackPlugin([
    {
        from : path.join(env.paths.src, 'assets/statics'),
        to   : path.join(env.paths.build, 'assets/statics/[name].[sha512:hash:base64:10].[ext]'),
        toType: 'template',
        ignore: [ '*.js' ]
    },
]);