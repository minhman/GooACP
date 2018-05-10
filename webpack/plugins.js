const env = require('./env');

const plugins = [];

plugins.push(
    require('./plugins/CleanWebpackPlugin'),
    require('./plugins/HTMLWebpackPlugin'),
    require('./plugins/MiniCssExtractPlugin'),
    require('./plugins/UglifyJsPlugin'),
    require('./plugins/CopyWebpackPlugin'),
);
if (env.IS_DEVELOPMENT){
    plugins.push(require('./plugins/BrowserSyncPlugin'));
    // console.log("BrowserSyncPlugin");
}
if (env.IS_PRODUCTION){
    plugins.push(require('./plugins/OptimizeCSSAssetsPlugin'));
    // console.log("OptimizeCSSAssetsPlugin");
}

// console.log(plugins);
module.exports = plugins;
