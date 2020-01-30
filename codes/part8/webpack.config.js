const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
    // 入口文件名称
    entry: {
        index: './index.js',
    },
    // 输出文件名称
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js',
        // 添加这个来实现动态加载
        chunkFilename: '[name].bundle.js',
    }
}
