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
 * Register customizer controls.
 *
 * @param WP_Customize_Manager $wp_customize Customize object.
 */
function register_header_controls( WP_Customize_Manager $wp_customize ) {

	// Register header section.
	$wp_customize->add_section(
		'header',
		[
			'title'       => __( 'Header', 'irving-example' ),
			'description' => __( 'Customize the global header.', 'irving-example' ),
			'priority'    => 220,
			'capability'  => 'edit_theme_options',
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

	$wp_customize->add_setting(
		'header_font_family',
		[
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
			'label'    => __( 'Template', 'irving-example' ),
			'section'  => 'header',
			'settings' => 'header_template_part',
			'type'     => 'select',
			'default'  => 'header-default',
			'choices'  => [
				'header-default' => __( 'Default', 'irving-example' ),
				'header-center'  => __( 'Centered', 'irving-example' ),
			],
		]
	);

	$wp_customize->add_control(
		'header_color_scheme',
		[
			'label'    => __( 'Color Scheme', 'irving-example' ),
			'section'  => 'header',
			'settings' => 'header_color_scheme',
			'type'     => 'select',
			'default'  => 'colors.brand.primary',
			'choices'  => [
				'colors.brand.primary'   => __( 'Primary', 'irving-example' ),
				'colors.brand.secondary' => __( 'Secondary', 'irving-example' ),
			],
		]
	);

	$wp_customize->add_control(
		'header_font_family',
		[
			'label'    => __( 'Font Family', 'irving-example' ),
			'section'  => 'header',
			'settings' => 'header_font_family',
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
	$site_theme['header']['font_family']      = get_theme_mod( 'header_font_family' );
	$site_theme['header']['template_part']    = get_theme_mod( 'header_template_part' );
	return $site_theme;
}
add_filter( 'wp_irving_setup_site_theme', __NAMESPACE__ . '\inject_header_options' );
