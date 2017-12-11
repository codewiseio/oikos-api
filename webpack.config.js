const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var outputDir =  path.join(__dirname, "docs");
module.exports = {
    entry: "./src/main.js",
    output: {
        path:  outputDir,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'src/index.html'}),
        new CopyWebpackPlugin([
            { from: 'src/openapi.yaml' }
        ])
    ],
    devServer: {
      contentBase:  outputDir,
      compress: true,
      port: 9000
    }
};