module.exports = function getDevtool(mode) {
  switch (mode) {
    case 'development':
      return 'cheap-module-eval-source-map';

    case 'production':
    default:
      return 'source-map';
  }
};
