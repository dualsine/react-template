const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  entry: {
    'app': [
      'babel-polyfill',
      './src/index'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{ 
    	test: /\.jsx?$/, 
    	exclude: /node_modules/, 
    	loader: 'babel-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ],
  devServer: {
    port: 3000,
    disableHostCheck: true,
    hot: true,
    inline: true,
    host: '0.0.0.0',
    public: 'dev.ikaar.pl'
  }
}