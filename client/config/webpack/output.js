const paths = require('../paths');
const themePath = require('../themename');

module.exports = function getOutput(mode) {
  switch (mode) {
    case 'development':
      return {
        path: paths.buildRoot,
        publicPath: 'https://8080-httpsproxy.alley.test/client/build/',
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[name].chunk.js',
      };

    case 'production':
    default:
      return {
        path: paths.buildRoot,
        publicPath: themePath,
        filename: 'js/[name].[chunkhash].bundle.min.js',
        chunkFilename: 'js/[name].[chunkhash].chunk.min.js',
      };
  }
};
