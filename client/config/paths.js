const path = require('path');

module.exports = {
  themeRoot: path.join(__dirname, '../../'),
  appRoot: path.join(__dirname, '../src/js'),
  scss: path.join(__dirname, '../src/scss'),
  sourceRoot: path.join(__dirname, '../src'),
  buildRoot: path.join(__dirname, '../build'),
  entries: path.join(__dirname, '../src/entries'),
  config: __dirname,
};
