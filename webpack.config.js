var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname + '/public/build/',
        publicPath: "build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query:{
                    presets:['react']
                },
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.css$/,
                loader:'style-loader!css-loader!sass-loader',
                // use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.scss$/,
                loader:'style-loader!css-loader!sass-loader',
                // use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] }),
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.gif$/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            },
            {
                test: /\.jpg$/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            },
            {
                test: /\.svg/,
                loader: "url-loader?limit=26000&mimetype=image/svg+xml"
            },
            {
                test: /\.jsx$/,
                loader: "babel-loader",
                query:{
                    presets:['react']
                },
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    },
    devServer: {
      hot: true,
      port: 9000
    },
    plugins: [
        // new ExtractTextPlugin('common.css'),
        new webpack.HotModuleReplacementPlugin()
    ]
}