var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './es6/app.js',
    output: {
        path: path.resolve(__dirname, '../dist/'),
        filename: 'js/[hash].js'
    },
    module: {
        rules: [
            { 
                test: /\.css$/,
                use: [{
                        loader: MiniCSSExtractPlugin.loader
                    },
                    'css-loader'
                ]
            },
            { 
                test: /\.scss$/,
                use: [{
                        loader: MiniCSSExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({  
            filename: 'index.html',
            template: 'index.html'
        }),
        new MiniCSSExtractPlugin({
            filename: 'css/[hash].css'
        })
    ]
 };