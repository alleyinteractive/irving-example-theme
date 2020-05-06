<?php
/**
 * WordPress Menu.
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
		'callback' => function( $component ) {

			$menu_items = (array) wp_get_nav_menu_items(
				get_nav_menu_locations()[ $component['config']['slug'] ?? '' ] ?? 0
			);

			$component['children'] = array_map(
				function( \WP_Post $menu_item_post ) {
					return [
						'name' => 'material/menu-item',
						'children' => [
							[
								'name' => 'material/link',
								'config' => [
									'href' => esc_url( $menu_item_post->url ?? get_the_permalink( $menu_item_post ) ),
								],
								'children' => [
									esc_html( $menu_item_post->title ),
								],
							],
						],
					];
				},
				array_filter( $menu_items ?? [] )
			);

			$component['name'] = '';

			return $component;
		}
	]
);
