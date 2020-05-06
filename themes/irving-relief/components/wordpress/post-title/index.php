<?php
/**
 * Post title component.
 *
 * This component will return the title of a post using the global object, or a
 * postId data provider.
 *
 * @param array $data_provider['postId'] Post ID.
 *
 * @package Irving_Components
 */

use function WP_Irving\Components\register_component_from_config;

register_component_from_config(
	__DIR__ . '/component',
	[
		'callback' => function ( $component ) {

			// Use the data provider, or fallback to global.
			$post_id = $component['data_provider']['postId'] ?? get_the_ID();

			// Get the title and return if valid.
			$title = get_the_title( $post_id );
			if ( ! empty( $title ) ) {
				return html_entity_decode( $title );
			}

			return __( 'Error: no global post context found', 'wp-irving' );
		},
	]
);
