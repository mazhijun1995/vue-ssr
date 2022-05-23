const {resolve} = require('path');

const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MininCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./webpack.base.js');
const devConfig = {
    mode: 'development',
    entry:resolve(__dirname,'../src/client/entry-client.js'),
    output:{
        filename: 'client-bundle.js'
    },
    devServer: {
        static:resolve(__dirname,'../dist'),
        port:'8080',
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use:[MininCssExtractPlugin.loader,'css-loader']
            }
        ]
    },
    plugins: [
        new MininCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template:(__dirname,'./src/client/index.template.html')
        })
    ]
}

module.exports = merge(baseConfig,devConfig)