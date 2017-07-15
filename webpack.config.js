var path = require('path');
var webpack = require('webpack');

const PATH = {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

module.exports = {
    entry: path.join(PATH.src, 'main.js'),
    output: {
        path: PATH.build,
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
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: PATH.build,
        hot: true,
        inline: true,
        historyApiFallback: true
    }
};