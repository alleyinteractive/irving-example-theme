<?php
/**
 * Irving Example functions and definitions.
 *
 * @package Irving_Example
 */

// phpcs:disable WordPressVIPMinimum.Files.IncludingFile.IncludingFile, WordPressVIPMinimum.Files.IncludingFile.UsingCustomConstant

namespace Irving_Example;

define( 'IRVING_EXAMPLE_PATH', dirname( __FILE__ ) );
define( 'IRVING_EXAMPLE_URL', get_template_directory_uri() );

// WordPress utilities.
require_once IRVING_EXAMPLE_PATH . '/inc/class-wp-utils.php';

// Activate and customize plugins.
require_once IRVING_EXAMPLE_PATH . '/inc/plugins.php';

// Admin customizations.
if ( is_admin() ) {
	require_once IRVING_EXAMPLE_PATH . '/inc/admin.php';
}

// wp-cli command.
if ( WP_Utils::wp_cli() ) {
	require_once IRVING_EXAMPLE_PATH . '/inc/cli.php';
}

// Manage static assets (js and css).
require_once IRVING_EXAMPLE_PATH . '/inc/assets.php';

// Irving customizations.
require_once IRVING_EXAMPLE_PATH . '/inc/irving.php';

// Media includes.
require_once IRVING_EXAMPLE_PATH . '/inc/media.php';

// Query modifications and manipulations.
require_once IRVING_EXAMPLE_PATH . '/inc/query.php';

// Rewrites.
require_once IRVING_EXAMPLE_PATH . '/inc/rewrites.php';

// Search.
require_once IRVING_EXAMPLE_PATH . '/inc/search.php';

// Include sidebars and widgets.
require_once IRVING_EXAMPLE_PATH . '/inc/sidebars.php';

// Theme setup.
require_once IRVING_EXAMPLE_PATH . '/inc/theme.php';

// Theme options.
// require_once IRVING_EXAMPLE_PATH . '/inc/theme-options/branding.php';
// require_once IRVING_EXAMPLE_PATH . '/inc/theme-options/footer.php';
// require_once IRVING_EXAMPLE_PATH . '/inc/theme-options/header.php';

// Users.
require_once IRVING_EXAMPLE_PATH . '/inc/users.php';


// Content types and taxonomies should be included below. In order to scaffold
// them, leave the Begin and End comments in place.
/* Begin Data Structures */

// Fieldmanager Fields.
require_once IRVING_EXAMPLE_PATH . '/inc/fields.php';

/* End Data Structures */
