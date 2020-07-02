<?php
/**
 * Manage static assets.
 *
 * @package Irving_Example
 */

namespace Irving_Example;

/**
 * Check if we're in FE development mode
 *
 * @return bool whether or not we're in development mode
 */
function is_dev() {
	return (
		( ! empty( $_GET['fe-dev'] ) && 'on' === $_GET['fe-dev'] ) || // phpcs:ignore WordPress.Security.NonceVerification.NoNonceVerification, WordPress.VIP.SuperGlobalInputUsage.AccessDetected, WordPress.Security.NonceVerification.Recommended
		! empty( $_COOKIE['fe-dev'] ) // phpcs:ignore WordPress.VIP.RestrictedVariables.cache_constraints___COOKIE, WordPress.VIP.SuperGlobalInputUsage.AccessDetected, WordPressVIPMinimum.Variables.RestrictedVariables.cache_constraints___COOKIE
	);
}

/**
 * Set cookie to truthy value if fe-dev param is set to 'on', otherwise set coookie to falsy value
 */
function set_dev_cookie() {
	if ( ! empty( $_GET['fe-dev'] ) && 'off' === $_GET['fe-dev'] ) { // phpcs:ignore WordPress.Security.NonceVerification.NoNonceVerification, WordPress.VIP.SuperGlobalInputUsage.AccessDetected, WordPress.Security.NonceVerification.Recommended
		setcookie( 'fe-dev', '0', 0, COOKIEPATH, COOKIE_DOMAIN, is_ssl() ); // phpcs:ignore WordPressVIPMinimum.Functions.RestrictedFunctions.cookies_setcookie
		$_COOKIE['fe-dev'] = null; // phpcs:ignore WordPress.VIP.RestrictedVariables.cache_constraints___COOKIE, WordPressVIPMinimum.Variables.RestrictedVariables.cache_constraints___COOKIE, WordPressVIPMinimum.Functions.RestrictedFunctions.cookies_setcookie
	} elseif ( is_dev() ) {
		setcookie( 'fe-dev', '1', 0, COOKIEPATH, COOKIE_DOMAIN, is_ssl() ); // phpcs:ignore WordPressVIPMinimum.Functions.RestrictedFunctions.cookies_setcookie
	}
}
add_action( 'init', __NAMESPACE__ . '\set_dev_cookie' );

/**
 * Get the version for a given asset.
 *
 * @param string $asset_path Entry point and asset type separated by a '.'.
 * @return string The asset version.
 */
function ai_get_versioned_asset_path( $asset_path ) {
	static $asset_map;

	// Create public path.
	$base_path = is_dev() ?
		'//8080-httpsproxy.alley.test/client/build/' :
		IRVING_EXAMPLE_URL . '/client/build/';

	if ( ! isset( $asset_map ) ) {
		$asset_map_file = IRVING_EXAMPLE_PATH . '/client/build/assetMap.json';

		if ( file_exists( $asset_map_file ) && 0 === validate_file( $asset_map_file ) ) {
			ob_start();
			include $asset_map_file; // phpcs:ignore WordPressVIPMinimum.Files.IncludingFile.IncludingFile, WordPressVIPMinimum.Files.IncludingFile.UsingVariable
			$asset_map = json_decode( ob_get_clean(), true );
		} else {
			$asset_map = [];
		}
	}

	/*
	 * Appending a '.' ensures the explode() doesn't generate a notice while
	 * allowing the variable names to be more readable via list().
	 */
	list( $entrypoint, $type ) = explode( '.', "$asset_path." );
	$versioned_path            = isset( $asset_map[ $entrypoint ][ $type ] ) ? $asset_map[ $entrypoint ][ $type ] : false;

	if ( $versioned_path ) {
		return $base_path . $versioned_path;
	}

	return '';
}

/**
 * Enqueues scripts and styles for the frontend
 */
function enqueue_assets() {
	wp_enqueue_style( 'irving-example-global-css', ai_get_versioned_asset_path( 'global.css' ), [], '1.0' );
	wp_enqueue_script( 'irving-example-global-js', ai_get_versioned_asset_path( 'global.js' ), [], '1.0', true );
}
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_assets' );

/**
 * Enqueues scripts and styles for admin screens
 */
function enqueue_admin() {
	wp_enqueue_script( 'irving-example-admin-js', ai_get_versioned_asset_path( 'admin.js' ), [], '1.0', true );
	wp_enqueue_style( 'irving-example-admin-css', ai_get_versioned_asset_path( 'admin.css' ), [], '1.0' );
}
add_action( 'admin_enqueue_scripts', __NAMESPACE__ . '\enqueue_admin' );

/**
 * Removes scripts that could potentially cause style conflicts
 */
function dequeue_scripts() {
	wp_dequeue_style( 'jetpack-slideshow' );
	wp_dequeue_style( 'jetpack-carousel' );
}
add_action( 'wp_print_scripts', __NAMESPACE__ . '\dequeue_scripts' );
