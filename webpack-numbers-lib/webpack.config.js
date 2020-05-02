const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers-lib.js',
    // 指定在导入（import）这个模块时候，将 library 暴露成一个 webpackNumbersLib 全局变量
    library: 'webpackNumbersLib',
    // amd / commonjs
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
  // 指定 library 需要一个`lodash` 依赖,不需要打包 `lodash` 了
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      var: '_'
    }
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
