const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: false,
              name: '[name].[ext]',
              outputPath:'assets'
            }
          },
          'css-loader',
          {
            loader: 'postcss-loader', // Run postcss actions
            options: {
              plugins: function () { // postcss plugins, can be exported to postcss.config.js
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          'sass-loader',
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
    new MiniCssExtractPlugin({
      filename: `styles/[name].css`
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'head',
      chunksSortMode: 'none'
    })    
  ]
})
