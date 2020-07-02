<?php
/**
 * Fieldmanager fields
 *
 * @package Irving_Example
 */

/* begin fm:theme-settings */
/**
 * `irving-example-settings` Fieldmanager fields.
 */
function irving_example_fm_theme_settings() {
	$fm = new Fieldmanager_Group(
		[
			'name'     => 'irving-example-settings',
			'tabbed'   => 'vertical',
			'children' => [
				'templates' => new Fieldmanager_Group(
					[
						'label'    => __( 'Theme Templates', 'irving-example' ),
						'children' => [
							'header' => new Fieldmanager_Group(
								[
									'label'    => __( 'Header', 'irving-example' ),
									'children' => [
										'layout' => new Fieldmanager_Select(
											[
												'default_value' => 'header-left',
												'options'       => [
													'header-left'   => __( 'Left Aligned', 'irving-example' ),
													'header-center' => __( 'Center Aligned', 'irving-example' ),
												],
											]
										),
									],
								]
							),
						],
					]
				),
			],
		]
	);
	$fm->activate_submenu_page();
}
add_action( 'fm_submenu_irving-example-settings', 'irving_example_fm_theme_settings' );
if ( function_exists( 'fm_register_submenu_page' ) ) {
	fm_register_submenu_page( 'irving-example-settings', 'options-general.php', __( 'Theme Settings', 'irving-example' ), __( 'Theme Settings', 'irving-example' ) );
}
/* end fm:theme-settings */
