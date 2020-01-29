 1、安装webpack
 npm install webpack -g
 npm install webpack-cli -g
 2、编译index.js
 webpack index.js 输出的编译后文件在dist目录下，默认是混淆过的
 3、开发者模式禁用混淆，更多参数https://webpack.docschina.org/api/cli/
 webpack --mode development index.js