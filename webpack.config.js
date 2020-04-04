const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require html-webpack-plugin plugin
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';

const SRC = path.join(__dirname, "src");
const PUBLIC = path.join(__dirname, "/public");
const ASSETS = path.join(PUBLIC, "assets");

module.exports = {
  mode: isProd ? `production` : `development`,
  context: SRC,
  entry: {
    bundle: path.join(__dirname, "/src/index.js"),
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: '[name].js',
    publicPath: isProd ? `./` : `/`,
  },
  module: { // where we defined file patterns and their loaders
    rules: [{
        test: /\.(js|jsx)$/i,
        exclude: `/node_modules/`,
        use: [`babel-loader`],
      },
      {
        test: /\.(css|scss)$/,
        exclude: `/node_modules/`,
        use: [{
            loader: isProd ? MiniCssExtractPlugin.loader : `style-loader`,
        }, {
            loader: `css-loader`,
            options: {
              url: false,
            },
        }, {
            loader: `sass-loader` // compiles Sass to CSS
        }]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [{
          loader: `file-loader`,
          
        }, ],
      },
    ]
  },
  plugins: [ // Array of plugins to apply to build chunk
    new HtmlWebpackPlugin({
      //filename: `index.html`,
      template: path.join(__dirname, "/src/index.html"),
    }),
    new CopyWebpackPlugin([{
        flatten: true,
        context: SRC,
        from: '**/*.{jp?(e)g,png,svg,gif,webp}',
        to: path.join(ASSETS, 'img')
      },
      {
        flatten: true,
        context: SRC,
        from: '**/*.ttf',
        to: path.join(ASSETS, 'fonts')
      },
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devServer: {
    port: 7700,
    writeToDisk: isProd ? true : false,
  },
  optimization: {
    noEmitOnErrors: true,
    splitChunks: {
      chunks: 'all',
      minChunks: 2,
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          enforce: true,
        }
      }
    }
  }
};