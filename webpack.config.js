const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const tailwindcss = require('tailwindcss');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const glob = require('glob-all');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const webpack = require('webpack');
const IfPlugin = require('if-webpack-plugin');

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

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
        },
        {
          test: /\.(png|svg|jpg|gif|jpeg)/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[name].[ext]'
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65
                },
                // optipng.enabled: false will disable optipng
                optipng: {
                  enabled: false
                },
                pngquant: {
                  quality: '65-90',
                  speed: 4
                },
                gifsicle: {
                  interlaced: false
                },
                // the webp option will enable WEBP
                webp: {
                  quality: 75
                }
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
        filename: '[name].css'
      }),
      new IfPlugin(devMode, new webpack.HotModuleReplacementPlugin()),
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, 'src/*.js'),
          path.join(__dirname, 'src/components/*.js')
        ]),
        extractors: [
          {
            extractor: TailwindExtractor,

            // Specify the file extensions to include when scanning for
            // class names.
            extensions: ['html', 'js', 'php', 'vue']
          }
        ],
        whitelist: ['body', 'html']
      })
    ]
  };
};
