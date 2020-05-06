<?php
/**
 * Archive title.
 *
 * @package Irving_Components
 *
 * @todo Reference the Gutenberg Content component in wp-components to
 *       determine some better logic around this process.
 *
 * @param array $component['data_provider']['postId'] Post ID, defaults to global.
 * @return array
 */

use function WP_Irving\Components\register_component_from_config;

register_component_from_config(
	__DIR__ . '/component',
	[
		'callback' => 'get_the_archive_title',
	]
);
