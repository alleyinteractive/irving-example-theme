/**
 * See documentation in ./README.md for setting up optimizations.
 *
 * @see https://webpack.js.org/plugins/split-chunks-plugin/
 */
module.exports = function getOptimization(mode) {
  switch (mode) {
    case 'development':
      return {};

    case 'production':
    default:
      return {};
  }
};
