/*
    打包的代码给谁用？ 给服务端使用 ，node
    target:node
    commonjs
    webpack-node-externals
    css的问题？ null-loader  ignore-loader 忽略掉css依赖处理
*/

const {resolve} = require('path');
const nodeExternals = require('webpack-node-externals');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const serverConfig = {
    mode: 'development',
    entry: resolve(__dirname,'../src/client/entry-server.js'),
    output: {
        filename: 'server-bundle.js',
        libraryTarget: "commonjs"
    },
    target: "node",
    externals: nodeExternals(),
    module: {
        rules: [
            {
                test: /\.css$/,
                use:"ignore-loader"
            }
        ]
    }
}

module.exports = merge(baseConfig,serverConfig)