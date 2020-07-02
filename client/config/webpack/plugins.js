/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const StylelintPlugin = require('stylelint-bare-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const StatsPlugin = require('webpack-stats-plugin').StatsWriterPlugin;
const createWriteWpAssetManifest = require('./wpAssets');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = function getPlugins(mode) {
  const plugins = [
    new StylelintPlugin(),
    new StatsPlugin({
      transform: createWriteWpAssetManifest(mode),
      fields: ['assetsByChunkName', 'hash'],
      filename: 'assetMap.json',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ];

  switch (mode) {
    case 'development':
      return [
        new webpack.HotModuleReplacementPlugin({
          multiStep: true,
        }),
        ...plugins,
      ];

    case 'production':
    default:
      return [
        new MiniCssExtractPlugin({
          filename: 'css/[name].[contenthash].min.css',
          chunkFilename: 'css/[name].[contenthash].chunk.min.css',
        }),
        new CleanWebpackPlugin(),
        new OptimizeCssAssetsPlugin({}),
        ...plugins,
      ];
  }
};
