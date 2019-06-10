const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    contentBase: path.resolve(__dirname),
    watchContentBase: true,
    port: 8081
  },
  module: {
    rules: [

      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader', // inject CSS to page
          }, {
            loader: 'css-loader', // translates CSS into CommonJS modules
          }, {
            loader: 'postcss-loader', // Run postcss actions
            options: {
              plugins: function () { // postcss plugins, can be exported to postcss.config.js
                return [
                  require('autoprefixer')
                ];
              }
            }
          }, {
            loader: 'resolve-url-loader', // translates CSS into CommonJS modules
          }, {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'to-string-loader',
          'css-loader',
          'resolve-url-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|eot|gbl)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff2' } },
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff' } },
      { test: /\.(ttf|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'file-loader' }     
    ]
  },
  plugins: [
/*     new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: '../webpack-analizer/report.html'
    }), */
    new webpack.HotModuleReplacementPlugin(), 
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'head',
      chunksSortMode: 'none'
    })    
  ]
})
