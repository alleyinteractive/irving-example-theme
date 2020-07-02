const path = require('path');
const paths = require('../paths');

/**
 * The list of core Sass resources to include in all Sass partials.
 *
 * Before including additional core resources read the tips as outlined in the tips
 * section of the sass-resources-loader github repo.
 *
 * @see https://github.com/shakacode/sass-resources-loader
 *
 * @type {Array}
 */
const sassCoreResources = [
  'core/_utilities.scss',
  'core/_breakpoints.scss',
  'core/_colors.scss',
  'core/_fonts.scss',
  'core/_typography.scss',
  'core/_a11y.scss',
  'core/_layout.scss',
].map((file) => path.resolve(`${paths.scss}`, file));

module.exports = sassCoreResources;
