/* eslint-disable import/no-extraneous-dependencies */
// Webpack dependencies
const paths = require('./paths');

// Config requires
const getConfigService = require('./webpack');

/**
 * Primary WebPack config.
 */
module.exports = (env, argv) => {
  const { mode } = argv;
  const config = getConfigService(mode, env);

  return {
    entry: config.getEntry(),

    mode,

    // Plugins array we configured above
    plugins: config.getPlugins(),

    devtool: config.getDevtool(),

    // Define module outputs
    output: config.getOutput(),

    // @see ./README.md for additional required steps
    optimization: config.getOptimization(),

    // Where webpack resolves modules
    resolve: {
      modules: [
        paths.themeRoot,
        'node_modules',
      ],
    },

    externals: {
      // Enable require('jquery') where jquery is already a global
      jquery: 'jQuery',
    },

    // Loaders
    module: {
      rules: config.getRules(),
    },

    // Dev server setup. This is present in config as it is both easier to read
    // and allows us to configure headers
    devServer: config.getDevServer(),
  };
};
