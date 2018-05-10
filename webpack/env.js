const
    NODE_ENV       = process.env.NODE_ENV || 'development',
    IS_DEVELOPMENT = NODE_ENV === 'development',
    IS_PRODUCTION  = NODE_ENV === 'production';

const path = require('path');
const dir = src => path.join(__dirname, src);
const paths = {
    src   : dir('../src'),
    build : dir('../build'),
};

module.exports = {
    paths,
    NODE_ENV,
    IS_DEVELOPMENT,
    IS_PRODUCTION
}

