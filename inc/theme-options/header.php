<?php
/**
 * Header theme options.
 *
 * @package Irving_Example
 */

namespace Irving_Example;

use WP_Customize_Color_Control;
use WP_Customize_Manager;
use WP_Irving\Components;
use WP_Irving\Templates;
use WP_Irving\Theme_Options;

/**
 * Support for a fallback image that integrates with the
 * `irving/post-featured-image` component.
 *
 * @param WP_Customize_Manager $wp_customize Cutomize object.
 */
function register_header_controls( WP_Customize_Manager $wp_customize ) {

	// Register header section.
	$wp_customize->add_section(
		'header',
		[
			'title'          => __( 'Header' ),
			'description'    => __( 'Customize the global header.' ),
			'priority'       => 220,
			'capability'     => 'edit_theme_options',
		]
	);

	/**
	 * Add header settings.
	 */
	$wp_customize->add_setting(
		'header_template_part',
		[
			'default'    => 'header-default',
			'capability' => 'edit_theme_options',
			'type'       => 'theme_mod',
		]
	);

	$wp_customize->add_setting(
		'header_color_scheme',
		[
			'default'    => 'colors.brand.primary',
			'capability' => 'edit_theme_options',
			'type'       => 'theme_mod',
		]
	);

	/**
	 * Add header controls.
	 */
	$wp_customize->add_control(
		'header_template_part',
		[
			'label'    => __( 'Template', 'irving-example-theme' ),
			'section'  => 'header',
			'settings' => 'header_template_part',
			'type'     => 'select',
			'default'  => 'header-default',
			'choices'  => [
				'header-default' => __( 'Default', 'irving-example-theme' ),
				'header-center'  => __( 'Centered', 'irving-example-theme' ),
			]
		]
	);

	$wp_customize->add_control(
		'header_color_scheme',
		[
			'label'    => __( 'Color Scheme', 'irving-example-theme' ),
			'section'  => 'header',
			'settings' => 'header_color_scheme',
			'type'     => 'select',
			'default'  => 'colors.brand.primary',
			'choices'  => [
				'colors.brand.primary'   => __( 'Primary', 'irving-example-theme' ),
				'colors.brand.secondary' => __( 'Secondary', 'irving-example-theme' ),
			]
		]
	);
}
add_action( 'customize_register', __NAMESPACE__ . '\register_header_controls' );

/**
 * Merge branding into site theme.
 *
 * @param array $site_theme Site theme.
 * @return array
 */
function inject_header_options( array $site_theme ): array {
	$site_theme['header']['background_color'] = get_theme_mod( 'header_color_scheme' );
	return $site_theme;
}
add_filter( 'wp_irving_setup_site_theme', __NAMESPACE__ . '\inject_header_options' );

/**
 * Filter the `irving/header-wrapper` component to implement conditional display
 * logic in various contexts.
 *
 * @param array  $children Children.
 * @param array  $config   Config.
 * @param string $name     Name.
 * @return array
 */
function include_header_template_part( array $children, array $config, string $name ): array {
	// Not in a sidebar context.
	if ( 'irving/header-wrapper' !== $name ) {
		return $children;
	}

	$template_part_slug = get_theme_mod( 'header_template_part' );
	switch ( $template_part_slug ) {
		case 'header-default':
		default:
			$children = Templates\hydrate_template_parts( [ 'name' => 'template-parts/header-default' ] );
			break;

		case 'header-center':
			$children = Templates\hydrate_template_parts( [ 'name' => 'template-parts/header-center' ] );
			break;

		case 'header-search':
			$children = Templates\hydrate_template_parts( [ 'name' => 'template-parts/header-search' ] );
			break;
	}

	return $children;
}
add_filter( 'wp_irving_component_children', __NAMESPACE__ . '\include_header_template_part', 10, 3 );
