const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname + '/public',
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
      contentBase: path.join(__dirname, "public"),
      compress: true,
      port: 9000
    }
};