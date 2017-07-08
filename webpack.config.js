var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './js/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|components)/,
                loader: 'babel-loader',
                query: {presets: ['es2015', 'react']},
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};