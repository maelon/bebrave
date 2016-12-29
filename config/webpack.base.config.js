'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        baselib: ['react', 'react-dom'],
        app: [path.join(__dirname, '../src/main')]
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '',
        pathInfo: false
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'pages': path.resolve(__dirname, '../src/pages'),
            'services': path.resolve(__dirname, '../src/services'),
            'components': path.resolve(__dirname, '../src/components')
        }
    },
    devtool: 'inline-source-map',
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: path.join('static', 'images/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: path.join('static', 'fonts/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.mp3$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'file',
                query: {
                    name: path.join('static', 'audio/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
};
