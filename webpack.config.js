const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ReactRefreshTypeScript = require('react-refresh-typescript');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  entry: {
    main: [
      path.resolve(__dirname, 'src', 'index.tsx'),
      path.resolve(__dirname, 'cleanConsoleHMR.js'),
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  },
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    isDevelopment &&
      new ReactRefreshWebpackPlugin({
        overlay: false,
      }),
    new webpack.HotModuleReplacementPlugin({}),

    new HtmlWebpackPlugin({
      title: 'Webpack 5',
      template: path.join(__dirname, 'src', 'html', 'template.html'),
      filename: 'index.html',
      hash: true,
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              getCustomTransformers: () => ({
                before: [ReactRefreshTypeScript()].filter(Boolean),
                transpileOnly: true,
              }),
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(m?)js$/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/i,
        exclude: /node_modules/,
        type: 'asset/inline',
      },
      {
        test: /\.txt$/i,
        exclude: /node_modules/,
        type: 'asset/source',
      },
    ],
  },
};
