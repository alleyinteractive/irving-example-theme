<?php
/**
 * Featured media.
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

			$post_id = $component['data_provider']['postId'] ?? get_the_ID();

			// Get and validate image url.
			$image_url = get_the_post_thumbnail_url( $post_id );
			if ( empty( $image_url ) ) {
				$component['name'] = ''; // Don't render anything.
				return $component;
			}

			$component = [
				'name'     => 'material/card-content',
				'config'   => [
					'gutterBottom' => true,
				],
				'children' => [
					[
						'name'   => 'material/card-media',
						'config' => [
							'image' => $image_url,
							'style' => [
								'height' => '450px',
							],
						],
					],
				],
			];

			$caption = wp_get_attachment_caption( get_post_thumbnail_id( $post_id ) );
			if ( ! empty( $caption ) ) {
				$component['children'][] = [
					'name'     => 'material/typography',
					'config'   => [
						'color'     => 'textSecondary',
						'variant'   => 'body2',
						'component' => 'p',
					],
					'children' => [
						$caption,
					],
				];
			}

			return $component;
		},
	]
);
