/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const jsonImporter = require('node-sass-json-importer');
const paths = require('../paths');
const sassCoreResources = require('./sassCoreResources');

const exclude = [
  /node_modules/,
  /\.min\.js$/,
];

const cssUse = [
  'css-loader',
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: true,
      config: {
        path: path.join(paths.config, 'postcss.config.js'),
      },
    },
  },
  {
    loader: 'sass-loader',
    options: {
      sourceMap: true,
      sassOptions: {
        importer: jsonImporter(),
      },
    },
  },
  {
    loader: 'sass-resources-loader',
    options: {
      resources: sassCoreResources,
    },
  },
];

const defaultRules = [
  {
    enforce: 'pre',
    test: /\.js$/,
    exclude,
    use: 'eslint-loader',
  },
  {
    test: /\.js$/,
    exclude,
    use: 'babel-loader',
  },
  {
    test: /\.s?css$/,
    include: paths.appRoot,
    use: ['style-loader', ...cssUse],
  },
  {
    test: [
      /\.png$/,
      /\.jpg$/,
      /\.svg$/,
      /\.woff2?$/,
      /\.ttf$/,
    ],
    use: {
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'media/[name].[ext]',
      },
    },
  },
  {
    test: [
      /\.min\.js$/,
    ],
    exclude: [
      /node_modules/,
    ],
    use: {
      loader: 'file-loader',
      options: {
        name: 'static/[name].[ext]',
      },
    },
  },
];

module.exports = function getEntry(mode) {
  switch (mode) {
    case 'development':
      return [
        {
          test: /\.s?css$/,
          exclude: paths.appRoot,
          use: [
            'style-loader',
            ...cssUse,
          ],
        },
        ...defaultRules,
      ];

    case 'production':
    default:
      return [
        {
          test: /\.s?css$/,
          exclude: paths.appRoot,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../',
              },
            },
            ...cssUse,
          ],
        },
        ...defaultRules,
      ];
  }
};
