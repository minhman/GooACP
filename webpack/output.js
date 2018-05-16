const env = require('./env');
const output = {
        path: env.paths.build,
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
        sourceMapFilename: '[name].map',
        publicPath: '',
};
module.exports = output;
