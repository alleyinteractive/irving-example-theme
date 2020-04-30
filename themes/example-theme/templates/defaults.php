<!-- wp:irving/header-area {"themeName":"fullBleed"} -->
	<!-- wp:material/toolbar -->
		<!-- wp:material/box {"style": {"flexGrow": 1, "display": "flex", "align-items": "center"}} -->
			<!-- wp:material/typography {"variant":"h6", "color":"inherit"} -->
				<!-- wp:material/link {"href": "/"} -->
					<?php bloginfo( 'name' ); ?>
				<!-- /wp:material/link -->
			<!-- /wp:material/typography -->
			<!-- wp:material/typography {"variant":"body1", "color":"inherit", "style": {"margin": "0 0 0 2.4rem"}} -->
				<?php bloginfo( 'description' ); ?>
			<!-- /wp:material/typography -->
		<!-- /wp:material/box -->
		<?php include get_stylesheet_directory() . '/template-parts/primary-menu.php'; ?>
	<!-- /wp:material/toolbar -->
<!-- /wp:irving/header-area -->
<!-- wp:irving/body-area {"theme_name": "fulWidth"} -->
	<!-- wp:material/typography {"variant":"h3", "color":"inherit"} -->
		<?php esc_html_e( 'Loading...', 'wp-irving' ); ?>
	<!-- /wp:material/typography -->
<!-- /wp:irving/body-area -->
<!-- wp:irving/footer-area --><!-- /wp:irving/footer-area -->