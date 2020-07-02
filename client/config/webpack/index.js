const getEntry = require('./entry');
const getRules = require('./rules');
const getOutput = require('./output');
const getPlugins = require('./plugins');
const getDevtool = require('./devtool');
const getDevServer = require('./devServer');
const getOptimization = require('./optimization');

module.exports = function getConfigService(mode, env) {
  return {
    getEntry: () => getEntry(mode, env),
    getRules: () => getRules(mode),
    getOutput: () => getOutput(mode),
    getPlugins: () => getPlugins(mode),
    getDevtool: () => getDevtool(mode),
    getDevServer: () => getDevServer(mode, env),
    getOptimization: () => getOptimization(mode),
  };
};
