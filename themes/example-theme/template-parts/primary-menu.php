<?php
array_map(
	function( \WP_Post $menu_item_post ) {
		printf(
			'<!-- wp:material/menu-item --><!-- wp:material/link {"href": "%2$s"} -->%1$s<!-- /wp:material/link --><!-- /wp:material/menu-item -->',
			$menu_item_post->title,
			esc_url( $menu_item_post->url ?? get_the_permalink( $menu_item_post ) )
		);
	},
	(array) wp_get_nav_menu_items( get_nav_menu_locations()['primary_menu'] ?? 0 )
);