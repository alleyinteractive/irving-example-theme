const paths = require('./paths');

// Get name of wordpress theme directory (equivalent to cwd usually)
const themename = paths.themeRoot.match(/([^/]*)\/*$/)[1];

module.exports = `/wp-content/themes/${themename}/client/build/`;
