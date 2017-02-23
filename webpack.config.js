const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: [
            // TODO: doesn't work functionality, may fix it in the future.
            // 'bootstrap-loader/lib/bootstrap.loader?extractStyles&configFilePath='+__dirname+'/.bootstraprc!bootstrap-loader/no-op.js',
            './index.js'
        ],
        vendor: [
            'bootstrap',
            'angular'
        ]
    },
    output: {
        path: __dirname + '/app',
        filename: '[hash].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['style-loader', 'css-loader', 'resolve-url-loader']
                })
            },
            {
                test: /\.png$/,
                loader: "file-loader"
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'app/index.html'),
            inject: 'body'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: '[hash].vendor.js'}),
        new AddAssetHtmlPlugin({
            filepath: require.resolve('./node_modules/bootstrap/dist/css/bootstrap.css'),
            typeOfAsset: 'css'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "app"),
        compress: true,
        host: "0.0.0.0",
        port: 9000
    }
};