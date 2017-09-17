const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: slsw.lib.entries,
  externals: [nodeExternals()],
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: __dirname,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin()
  ]
};
