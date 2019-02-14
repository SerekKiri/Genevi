const merge = require('webpack-merge')
const webpack = require('webpack')
const { resolve } = require('path')
const baseConfig = require('./webpack.config.base')
const protocol = process.env.HTTPS === 'true' ? 'https' : 'http'
const host = process.env.HOST || 'localhost'
const port = process.env.PORT || '5000'

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: ['react-hot-loader/patch', resolve(__dirname, '../src/index.tsx')],
  output: {
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json',
    publicPath: `http://localhost:${port}/`,
    path: resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: './',
    watchContentBase: true,
    hot: true,
    inline: true,
    watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/,
      poll: 100
    },
    // Enable HTTPS if the HTTPS environment variable is set to 'true'
    https: protocol === 'https',
    host: host,
    port: port
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin() // prints more readable module names in the browser console on HMR updates
  ]
})
