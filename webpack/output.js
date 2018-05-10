const env = require('./env');
const output = {
        path: env.paths.build,
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[id].[hash].chunk.js',
        sourceMapFilename: '[file].map',
        publicPath: '',
};
module.exports = output;
