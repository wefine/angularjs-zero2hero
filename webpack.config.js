const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname + '/app',
    entry: './index.js',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.html$/,
                loader: 'raw-loader'
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: [
                        {loader: 'css-loader', query: {sourceMap: true}},
                        {loader: 'postcss-loader'}
                    ],
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'app/index.html'),
            inject: 'body'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "app"),
        compress: true,
        port: 9000
    }
};