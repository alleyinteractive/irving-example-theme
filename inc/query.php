<?php
/**
 * One-off query modifications and manipulations (e.g. through pre_get_posts).
 * Modifications tied to a larger features should reside with the rest of the
 * code for that feature.
 *
 * @package Irving_Example
 */

namespace Irving_Example;

/**
 * Modify all archives to have 12 posts per page.
 *
 * @param \WP_Query $wp_query \WP_Query object.
 */
function modify_archives( \WP_Query $wp_query ) {

	if ( is_admin() ) {
		return;
	}

	if ( $wp_query->is_archive() || $wp_query->is_search() ) {
		$wp_query->set( 'posts_per_page', 12 );
	}
}
add_action( 'pre_get_posts', __NAMESPACE__ . '\modify_archives' );
