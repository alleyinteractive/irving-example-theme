<?php
/**
 * Footer theme options.
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
function register_footer_controls( WP_Customize_Manager $wp_customize ) {

	// Register footer section.
	$wp_customize->add_section(
		'footer',
		[
			'title'       => __( 'Footer', 'irving-example' ),
			'description' => __( 'Customize the global footer.', 'irving-example' ),
			'priority'    => 260,
			'capability'  => 'edit_theme_options',
		]
	);

	/**
	 * Add footer settings.
	 */
	$wp_customize->add_setting(
		'footer_slim_template_part',
		[
			'default'    => 'footer-default',
			'capability' => 'edit_theme_options',
			'type'       => 'theme_mod',
		]
	);

	/**
	 * Add footer controls.
	 */
	$wp_customize->add_control(
		'footer_slim_template_part',
		[
			'label'    => __( 'Template', 'irving-example' ),
			'section'  => 'footer',
			'settings' => 'footer_slim_template_part',
			'type'     => 'select',
			'default'  => 'footer-copyright',
			'choices'  => [
				''                 => __( 'None', 'irving-example' ),
				'footer-copyright' => __( 'Slim', 'irving-example' ),
			],
		]
	);
}
add_action( 'customize_register', __NAMESPACE__ . '\register_footer_controls' );

/**
 * Merge branding into site theme.
 *
 * @param array $site_theme Site theme.
 * @return array
 */
function inject_footer_options( array $site_theme ): array {
	$site_theme['footer']['template_part'] = get_theme_mod( 'footer_slim_template_part', 'footer-copyright' );
	$site_theme['footer']['copyright_text'] = sprintf(
		__( 'Copyright %1$s', 'irving-example' ),
		esc_html( date('Y') )
	);
	return $site_theme;
}
add_filter( 'wp_irving_setup_site_theme', __NAMESPACE__ . '\inject_footer_options' );
