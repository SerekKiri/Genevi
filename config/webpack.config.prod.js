const merge = require('webpack-merge')
const { resolve } = require('path')

const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: './index.tsx',
  output: {
    filename: 'js/bundle.[hash].min.js',
    path: resolve(__dirname, '../../dist'),
    publicPath: '/'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    }),
    new UglifyJsPlugin()
  ]
})
