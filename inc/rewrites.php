<?php
/**
 * Custom rewrite modifications
 *
 * @package Irving_Example
 */

namespace Irving_Example;

/**
 * Modify the rewrite rules.
 */
function modify_rewrites() {
	add_rewrite_rule( '^search/?$', 'index.php?s=', 'top' );
	add_rewrite_rule( '^search/page/?([0-9]{1,})/?$', 'index.php?s=&paged=$matches[1]', 'top' );
}
add_action( 'init', __NAMESPACE__ . '\modify_rewrites' );
