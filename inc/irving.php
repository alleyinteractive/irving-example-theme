<?php
/**
 * Irving modifications.
 *
 * @package Irving_Example
 */

namespace Irving_Example;

/**
 * Modify the JWT token cookie domain for WP Irving.
 *
 * @param string $domain Domain.
 * @return string
 */
function wp_irving_jwt_token_cookie_domain( $domain ) {
	return strstr( home_url(), 'alley.test' ) ? '.alley.test' : '.irvingjs.com';
}
add_filter( 'wp_irving_jwt_token_cookie_domain', __NAMESPACE__ . '\wp_irving_jwt_token_cookie_domain' );

/**
 * Filter the path for the Site Theme JSON directory.
 *
 * @param string $path Path to Site Theme JSON directory.
 * @return string
 */
function wp_irving_site_theme_json_directory_path( $path ) {
	return get_stylesheet_directory() . '/site-theme/';
}
add_filter( 'wp_irving_site_theme_json_directory_path', __NAMESPACE__ . '\wp_irving_site_theme_json_directory_path' );
