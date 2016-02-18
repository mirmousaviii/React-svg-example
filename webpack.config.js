var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss       = require('precss');

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/app/script.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.css$|\.pcss$/,
                loader: 'style!css?modules!postcss'
            }
        ]
    },

    postcss: function () {
        return [autoprefixer, precss];
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        contentBase: "./public",
        port: 8081,
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true
    }
}
