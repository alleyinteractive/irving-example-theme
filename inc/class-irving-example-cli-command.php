<?php
/**
 * Class file for Irving_Example_CLI_Command.
 *
 * @package Irving_Example
 *
 * phpcs:disable WordPressVIPMinimum.Classes.RestrictedExtendClasses.wp_cli
 */

WP_CLI::add_command( 'irving-example', 'Irving_Example_CLI_Command' );

/**
 * Irving Example CLI commands.
 */
class Irving_Example_CLI_Command extends WP_CLI_Command {

	/**
	 * Prevent memory leaks from growing out of control
	 */
	public function contain_memory_leaks() {
		global $wpdb, $wp_object_cache;

		// Reset the queries.
		$wpdb->queries = [];

		// Check for valid $wp_object_cache.
		if ( ! is_object( $wp_object_cache ) ) {
			return;
		}

		// Reset cache.
		$wp_object_cache->group_ops      = [];
		$wp_object_cache->stats          = [];
		$wp_object_cache->memcache_debug = [];
		$wp_object_cache->cache          = [];

		if ( method_exists( $wp_object_cache, '__remoteset' ) ) {
			$wp_object_cache->__remoteset();
		}
	}
}
