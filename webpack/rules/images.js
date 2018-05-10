const { imageminLoader } = require("imagemin-webpack");
const imageminGifsicle = require("imagemin-gifsicle");

const imagesLoader = {
    test: /\.(jpe?g|png|gif)$/i,
    exclude : /(node_modules)/,
    use: [{
            loader: "file-loader" // Or `url-loader` or your other loader
        },
        {
            loader: imageminLoader,
            options: {
                cache: true,
                bail: false, // Ignore errors on corrupted images
                name: "[name].[sha512:hash:base64:10].[ext]",
                imageminOptions: {
                    plugins: [imageminGifsicle()]
                }
            }
        }]
};
module.exports = imagesLoader;