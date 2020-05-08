<?php
/**
 * Card Media.
 *
 * @package Irving_Components
 */

if ( ! function_exists( '\WP_Irving\Components\register_component_from_config' ) ) {
	return;
}

/**
 * Register the component and callback.
 */
\WP_Irving\Components\register_component_from_config(
	__DIR__ . '/component',
	[
		'callback' => function ( array $component ): array {

			if ( ! empty( $component['config']['image'] ?? '' ) ) {
				return $component;
			}

			$component['config']['image'] = get_the_post_thumbnail_url( $component['data_provider']['postId'] ?? get_the_ID() );
			return $component;
		},
	]
);
