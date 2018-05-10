const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const ROOTDIR = path.resolve(__dirname, "../../");

let pathsToClean = '/MacData/Web/GooACP/build/';
let cleanOptions = {
    verbose:  true,
    dry:      false,
    root: ROOTDIR
};
module.exports = new CleanWebpackPlugin(pathsToClean, cleanOptions);
// console.log(pathsToClean);