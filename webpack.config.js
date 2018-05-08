const path = require('path');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


let pathsToClean = 'dist';
let cleanOptions = {
    verbose:  true,
    dry:      false
};

module.exports = {
    mode: 'none',
    entry: {
        bundle: './src/assets/bundle.js',
        vendor: './src/assets/vendor.js'
    },
    plugins: [
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new OptimizeCSSAssetsPlugin({
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        }),
        new UglifyJsPlugin({
            cache: true,
            extractComments:false,
            sourceMap:true,
            parallel: 4,
            uglifyOptions: {
                output: {
                    comments: false,
                    beautify: true,
                },
            }
        }),
        new HTMLWebpackPlugin({
            title: "GooACP",
            filename: "index.html",
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                conservativeCollapse: true,
                removeScriptTypeAttributes:true,
                removeStyleLinkTypeAttributes:true,
                sortAttributes:true,
                sortClassName:true,
                removeEmptyAttributes:true,
                html5:true
            }
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '',
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },

}