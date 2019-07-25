const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack');
const glob = require('glob');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    vendor: ['aframe', 'aframe-environment-component', 'bootstrap'],
    app: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  stats: {
    colors: true
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        // match the entry point and spit out the file named here
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: 'vendor',
          filename: 'vendor.js',
          enforce: true,
        },
      },
    },
    runtimeChunk: true
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        include: [path.resolve(__dirname, 'src')],
        use: {
          loader: 'html-loader',
          options: {
            minimize: true,
            removeComments: true,
            collapseWhitespace: true,
          }
        }
      },
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src')],
        use: {
          loader: 'babel-loader'/*,
          options: {
            "presets": [
              ["@babel/env", {
                "modules": false,
                "targets": {
                  "browsers": [
                    "last 2 iOS major versions",
                    "last 2 Chrome versions"
                  ]
                },
                "useBuiltIns": "usage"
              }]
            ]
          }*/
        }
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      {
        from: 'src/assets',
        to: 'assets',
        ignore: ['*.js'],
      }
    ]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.$': 'jquery',
      'window.jQuery': 'jquery'
    }),
    new CleanWebpackPlugin({ verbose: true })
  ]
}
