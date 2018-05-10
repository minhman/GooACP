const fontLoader = {
    test: /\.(woff|woff2|eot|ttf|svg)$/,
    loader: 'url-loader?limit=100000'
}

module.exports = fontLoader;