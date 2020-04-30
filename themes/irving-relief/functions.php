<?php // Silence is golden.


// Set the domain for cross-domain cookies.
add_filter(
	'wp_irving_jwt_token_cookie_domain',
	function( $domain ) {

		if ( defined( 'WPCOM_IS_VIP_ENV' ) && WPCOM_IS_VIP_ENV ) {
			return '.technologyreview.com';
		}

		return '.alley.test';
	}
);

add_action(
	'after_setup_theme',
	function() {

		// Theme support.
		add_theme_support( 'align-wide' );
		add_theme_support( 'menus' );
		add_theme_support( 'post-thumbnails' );

		/**
		 * Add support for core's custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);

		// Menus
		register_nav_menus(
			[
				'primary_menu' => __( 'Primary Menu', 'wp-admin' ),
				'footer_menu'  => __( 'Footer Menu', 'wp-admin' ),
			]
		);
	}
);


/**
 * Registers a new post type
 * @uses $wp_post_types Inserts new post type object into the list
 *
 * @param string  Post type key, must not exceed 20 characters
 * @param array|string  See optional args description above.
 * @return object|WP_Error the registered post type object, or an error object
 */
function alley_register_team() {

	$labels = array(
		'name'               => __( 'Team Members', 'example-theme' ),
		'singular_name'      => __( 'Team Membber', 'example-theme' ),
		'add_new'            => _x( 'Add New Team Member', 'example-theme', 'example-theme' ),
		'add_new_item'       => __( 'Add New Team Member', 'example-theme' ),
		'edit_item'          => __( 'Edit Team Member', 'example-theme' ),
		'new_item'           => __( 'New Team Member', 'example-theme' ),
		'view_item'          => __( 'View Team Member', 'example-theme' ),
		'search_items'       => __( 'Search Team Members', 'example-theme' ),
		'not_found'          => __( 'No Team Members found', 'example-theme' ),
		'not_found_in_trash' => __( 'No Team Members found in Trash', 'example-theme' ),
		'parent_item_colon'  => __( 'Parent Team Member:', 'example-theme' ),
		'menu_name'          => __( 'Team Members', 'example-theme' ),
	);

	$args = array(
		'labels'              => $labels,
		'hierarchical'        => false,
		'description'         => 'description',
		'taxonomies'          => array(),
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_admin_bar'   => true,
		'menu_position'       => null,
		'menu_icon'           => null,
		'show_in_nav_menus'   => true,
		'publicly_queryable'  => true,
		'exclude_from_search' => false,
		'has_archive'         => true,
		'query_var'           => true,
		'can_export'          => true,
		'rewrite'             => true,
		'capability_type'     => 'post',
		'supports'            => array(
			'title',
			'author',
			'thumbnail',
			'excerpt',
			'revisions',
		),
	);

	register_post_type( 'team', $args );
}

add_action( 'init', 'alley_register_team' );
