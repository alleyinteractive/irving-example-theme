<?php
/**
 * Branding theme options.
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
 * @param WP_Customize_Manager $wp_customize Cutomize object.
 */
function register_branding_controls( WP_Customize_Manager $wp_customize ) {

	// Register branding section.
	$wp_customize->add_section(
		'branding',
		[
			'title'          => __( 'Branding' ),
			'description'    => __( 'Modify your theme\'s colors, fonts, and other global branding settings.' ),
			'priority'       => 200,
			'capability'     => 'edit_theme_options',
		]
	);

	/**
	 * Add branding settings.
	 */
	$wp_customize->add_setting(
		'primary_color',
		[
			'default'    => '#BC3855',
			'capability' => 'edit_theme_options',
			'type'       => 'theme_mod',
		]
	);

	$wp_customize->add_setting(
		'secondary_color',
		[
			'default'    => '#8f3b84',
			'capability' => 'edit_theme_options',
			'type'       => 'theme_mod',
		]
	);

	/**
	 * Add branding controls.
	 */
	$wp_customize->add_control(
		new WP_Customize_Color_Control(
			$wp_customize,
			'primary_color',
			[
				'label'     => __( 'Primary Color', 'irving-example-theme' ),
				'section'   => 'branding',
				'primary_color',
			]
		)
	);

	$wp_customize->add_control(
		new WP_Customize_Color_Control(
			$wp_customize,
			'secondary_color',
			[
				'label'     => __( 'Secondary Color', 'irving-example-theme' ),
				'section'   => 'branding',
				'secondary_color',
			]
		)
	);
}
add_action( 'customize_register', __NAMESPACE__ . '\register_branding_controls' );

/**
 * Inject the branding options into the Site Theme provider.
 *
 * @param array $site_theme Site theme array.
 * @return array
 */
function inject_branding( array $site_theme ): array {
	$site_theme['colors']['brand']['primary']   = get_theme_mod( 'primary_color', '#BC3855' );
	$site_theme['colors']['brand']['secondary'] = get_theme_mod( 'secondary_color', '#8f3b84' );
	return $site_theme;
}
add_filter( 'wp_irving_setup_site_theme', __NAMESPACE__ . '\inject_branding' );
