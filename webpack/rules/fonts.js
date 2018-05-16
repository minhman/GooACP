const fontLoader = {
    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    loader: 'url-loader?limit=100000&outputPath=assets/statics/fonts/'
}

module.exports = fontLoader;