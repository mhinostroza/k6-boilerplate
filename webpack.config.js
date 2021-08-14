const path = require('path');

module.exports = {
  mode: 'production',
  watch: true,
  watchOptions: {
    ignored: ['**/files/**/*.js', '**/node_modules'],
  },
  entry: {
    index: './src/tests/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    libraryTarget: 'commonjs',
    filename: '[name].bundle.js',
  },
  resolve: {
    alias: {
      core: path.resolve(__dirname, 'src/core/'),
      data: path.resolve(__dirname, 'src/data/'),
      tests: path.resolve(__dirname, 'src/tests/'),
    },
  },
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader' }],
  },
  stats: {
    colors: true,
  },
  target: 'web',
  externals: /k6(\/.*)?/,
  devtool: 'source-map',
};
