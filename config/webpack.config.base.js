const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js)$/,
        use: ['awesome-typescript-loader']
      },
      {
        test: /\.(woff2|ttf|svg|ico)$/,
        use: ['url-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: ['file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]', 'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: resolve(__dirname, '../public/index.html') })],
  performance: {
    hints: false
  }
}
