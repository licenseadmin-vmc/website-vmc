const path = require('path')
const webpack = require('webpack')

const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// Compression is GZIP by default but Brotli and other options are available https://www.npmjs.com/package/compression-webpack-plugin
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = env => {
  return require(`./webpack.config.${env}.js`)
}

module.exports = {
  // Enabling devtool source map will disable 'devtools' notice in console but it forces prod build and adds 10 seconds to build time in development mode
  // devtool: "source-map",
  entry: {
    main: ['./src/index.js'],
    styles: ['./src/main.scss']
  },
  plugins: [
    new MiniCssExtractPlugin(),

    new webpack.DefinePlugin({
      APP_VERSION: JSON.stringify(require('./package.json').version),
      APP_NAME: JSON.stringify(require('./package.json').name),
      APP_REPO: JSON.stringify(require('./package.json').repository.url),
      APP_TEST: JSON.stringify(require('./package.json').scripts.test)
    }),

    // USE FOR GENERAL IGNORE
    // new webpack.IgnorePlugin({
    // 	resourceRegExp: /^\.\/locale$/,
    // 	contextRegExp: /moment$/
    // }),

    // USE FOR IGNORE WITH PARAMS
    // new webpack.ContextReplacementPlugin(
    //   // eslint-disable-next-line no-useless-escape
    //   /moment[\/\\]locale$/,
    //   /en|es|fr|it|tr/
    // ),

    // USE FOR COMPRESSION
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i
    })
  ],
  cache: false,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: false
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false
            }
          }
        ]
      }
    ]
  },
  performance: {
    maxAssetSize: 700000,
    maxEntrypointSize: 700000,
    hints: false
    // USE FOR PRODUCTION
    // hints: "warning"
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all'
    },
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  watch: false,
  mode: 'development',
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, '../docs/js')
  }
}
