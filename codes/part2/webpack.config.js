const path = require('path');

module.exports = {
  // 入口文件名称
  entry: './index.js',
  // 输出文件名称
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: path.resolve('./loader/loader1.js'),
            options: { customOption: '哈哈' }
          },
          { loader: path.resolve('./loader/loader2.js') }
        ]
      }
    ]
  }
};
