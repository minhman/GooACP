const path = require('path');
const env = require('../env');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = new CopyWebpackPlugin([
    {
        from : path.join(env.paths.src, 'assets/statics/images'),
        to   : path.join(env.paths.build, 'assets/statics/images/[name].[ext]'),
        toType: 'template',
        ignore: [ '*.js' ]
    },
]);