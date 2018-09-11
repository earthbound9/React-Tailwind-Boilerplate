const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const tailwindcss = require('tailwindcss');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const glob = require('glob');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const webpack = require('webpack');
const IfPlugin = require('if-webpack-plugin');

module.exports = (env, argv) => {
  const devMode = argv.mode === 'development';
  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].bundle.js'
    },
    optimization: {
      usedExports: true,
      sideEffects: true,
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      },
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true // set to true if you want JS source maps
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.s?css$/,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  tailwindcss('./tailwind.config.js'),
                  require('autoprefixer')
                ]
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.css']
    },
    devtool: devMode ? 'source-map' : 'none',
    devServer: {
      port: 3000,
      contentBase: './dist',
      hot: true,
      overlay: true
    },
    plugins: [
      new HtmlWebpackPlugin({ inject: true, template: 'src/index.html' }),
      new MiniCssExtractPlugin({
        filename: '[name].style.css'
      }),
      new PurgecssPlugin({
        paths: glob.sync(path.join(__dirname, 'src/*'))
      }),
      new IfPlugin(devMode, new webpack.HotModuleReplacementPlugin())
    ]
  };
};
