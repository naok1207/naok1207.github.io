const path = require('path')
const TailwindCss = require('tailwindcss')
const Autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, args) => {
  const { mode } = args
  const sourceMap = mode === 'development'

  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'docs'),
      filename: 'index.js'
    },
    devtool: 'source-map',
    module: {
      rules: [
         {
           test: /\.css$/,
           use: [
             MiniCssExtractPlugin.loader,
             {
               loader: 'css-loader',
               options: {
                 sourceMap
               }
             },
             {
               loader: 'postcss-loader',
               options: {
                 postcssOptions: {
                   plugins: [
                     TailwindCss,
                     Autoprefixer
                   ]
                 }
               }
             }
           ]
         }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, 'docs'),
      host: '0.0.0.0',
      hot: true,
      // port: 3000,
      open: true,
      watchOptions: {
        aggregateTimeout: 600,
        poll: 1000
      },
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.css'
      }),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'docs', 'index.html')
      })
    ]
  }
}
