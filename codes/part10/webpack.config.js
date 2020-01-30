const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const path = require('path');
const Plugin1 = require('./plugin/plugin1');
const Plugin2 = require('./plugin/plugin2');

module.exports = {
  // 入口文件名称
  entry: './index.js',
  // 输出文件名称
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
			title: 'Test App',
	    }),
    new Plugin1('haha from 1'),
    new Plugin2('haha from 2')
  ]
};
