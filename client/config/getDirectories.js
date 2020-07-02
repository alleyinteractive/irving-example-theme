const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');

// Filter callback to check that the item is a directory.
const isDirectory = (source) => lstatSync(source).isDirectory();

/**
 * Get a list of directories within a given path.
 *
 * @param {string} source The path from in which to check.
 *
 * @return {array}
 */
const getDirectories = (source) => readdirSync(source)
  .map((name) => join(source, name)).filter(isDirectory);

module.exports = getDirectories;
