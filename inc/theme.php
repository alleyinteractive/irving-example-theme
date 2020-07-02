<?php
/**
 * Theme setup.
 *
 * @package Irving_Example
 */

namespace Irving_Example;

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which runs
 * before the init hook. The init hook is too late for some features, such as
 * indicating support post thumbnails.
 */
function theme_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 *
	 * load_theme_textdomain( 'irving-example', THEME_PATH . '/languages' );
	 */

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	// Add styles to visual editor.
	add_editor_style( 'client/build/css/editor.css' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
	 */
	add_theme_support( 'post-thumbnails' );

	// Set up theme's use of wp_nav_menu().
	register_nav_menus(
		[
			'primary'       => __( 'Primary', 'irving-example' ),
			'footer-left'   => __( 'Footer Left', 'irving-example' ),
			'footer-center' => __( 'Footer Center', 'irving-example' ),
			'footer-right'  => __( 'Footer Right', 'irving-example' ),
		]
	);

	// Enable support for HTML5 components.
	add_theme_support( 'html5', [ 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ] );

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	/**
	 * Add support for core's custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		[
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		]
	);
}
add_action( 'after_setup_theme', __NAMESPACE__ . '\theme_setup' );

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function body_classes( $classes ) {
	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	// Adds a class of no-sidebar when there is no sidebar present.
	if ( ! is_active_sidebar( 'sidebar-1' ) ) {
		$classes[] = 'no-sidebar';
	}

	return $classes;
}
add_filter( 'body_class', __NAMESPACE__ . '\body_classes' );

/**
 * Add a fe-dev toggle to the WP Adminbar.
 *
 * @param object $admin_bar The Adminbar object.
 */
function add_toolbar_items( $admin_bar ) {
	// FE_DEV_ADMINBAR_TOGGLE should be defined in wp-config.php.
	if ( defined( 'FE_DEV_ADMINBAR_TOGGLE' ) && true === FE_DEV_ADMINBAR_TOGGLE ) {
		global $wp;

		if ( is_dev() ) {
			$title = __( 'Turn off Dev Mode', 'irving-example' );
		} else {
			$title = __( 'Turn on Dev Mode', 'irving-example' );
		}

		$admin_bar->add_menu(
			[
				'id'    => 'fe-dev-toggle',
				'title' => $title,
				'href'  => add_query_arg(
					'fe-dev',
					is_dev() ? 'off' : 'on',
					home_url( $wp->request )
				),
			]
		);
	}

	return $admin_bar;
}
add_action( 'admin_bar_menu', __NAMESPACE__ . '\add_toolbar_items', 100, 1 );
