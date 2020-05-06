<?php
/**
 * Site name.
 *
 * @package Irving_Components
 *
 * @param array $component Component.
 * @return string
 */

use function WP_Irving\Components\register_component_from_config;

register_component_from_config(
	__DIR__ . '/component',
	[
		'callback' => function( $component ) {
			return get_bloginfo( 'name' );
		},
	]
);
