const plugins   = require('./webpack/plugins');
const entry = require('./webpack/entries');
const output = require('./webpack/output');
const optimization = require('./webpack/optimization');
const rules = require('./webpack/rules');
const env = require('./webpack/env');


module.exports = {
    mode: env.NODE_ENV,
    devtool: 'source-map',
    watch: env.IS_DEVELOPMENT,
    entry,
    plugins,
    output,
    optimization,
    module: {
        rules
    },
};
