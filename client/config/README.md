<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [WP starter theme front-end build configuration files](#irving-example-front-end-build-configuration-files)
  - [Using This Directory](#using-this-directory)
  - [Additional configurations](#additional-configurations)
  - [Enabling `splitChunks`](#enabling-splitchunks)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# WP starter theme front-end build configuration files

This directory contains configurations for webpack and its constituent modules.

## Using This Directory

The Webpack configurations (`dev` & `build`) contain a lot of common elements, each of which is housed in its own JS module. These modules, generally speaking, are split up by concern (or roughly by Webpack configuration property):

* `webpack/devServer.js` - Webpack Dev Server configuration.
* `webpack/devtool.js` - Determines the sourcemap plugin to use.
* `webpack/entry.js` - Config and functions for managing entry points.
* `webpack/index.js` - Imports config settings. 
* `webpack/optimization.js` - Build optimization config. 
* `webpack/output.js` - Determines the output paths and naming. 
* `webpack/plugins.js` - webpack plugins used across the configs. This contains a set of default plugins used in all builds (`plugins`), and smaller sets used only conditionally in `development` and `production`.
* `webpack/rules.js` - Common Webpack `rules` configs. 
* `webpack/wpAssets.js` - Writes out hashed filesnames to be consumed by assets.php. 
* `getDirectories.js` - Collects `src/entries` directories and add them to the entries object.
* `paths.js` - Path definitions used to point to entry point files, output directories, etc.
* `themename.js` - Logic for determining the name of the current WordPress theme for use in pointing Webpack to the appropriate location for built files.
* `breakpoints.json` - A JSON object of breakpoint name and unitless px value pairs. Breakpoints defined here are available across the frontend stack. **Note:** When adding to this file, a reference must also be added to the `$bp-values` Map in `client/src/scss/core/_breakpoints.scss`.

## Additional configurations

* `postcss.config.js` - Config for the `postcss-loader`. Any additional postcss plugins should be added to this file.

## Enabling `splitChunks`

Edit `./webpack/optimizations.js` to add the following as the `return` statement for the `default` case, which also applies to the `production` case:

```js
// optimizations.js

return {
	splitChunks: {
		name: 'common',
		chunks: (chunk) => (! chunk.name.includes('admin')),
		minChunks: 2, // a good starting value - update as needed
	},
};
```


Add the following to the top of the `enqueue_assets` function in `assets.php`, taking care to update the project domain:

```php
// assets.php

if ( ! is_dev() ) {
	// Common bundle is a production-only optimization to allow page-specific entry points to hot reload properly.
	wp_enqueue_script( 'irving-example-common-js', ai_get_versioned_asset_path( 'common.js' ), [ 'jquery' ], '1.0', true );
	wp_enqueue_style( 'irving-example-common-js', ai_get_versioned_asset_path( 'common.css' ), [], '1.0' );
}
```
