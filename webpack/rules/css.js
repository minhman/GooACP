const CssExtractPlugin = require("mini-css-extract-plugin");
const cssLoader = {
    test: /\.(scss|css)$/,
    use: [
        CssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
    ]
};

module.exports = cssLoader;