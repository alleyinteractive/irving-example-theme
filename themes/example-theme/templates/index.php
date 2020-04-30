<!-- wp:irving/body-area -->
	<!-- wp:material/container {"maxWidth": "lg"} -->
		<!-- wp:material/grid {"container": true, "spacing": 4} -->
			<!-- wp:material/grid {"item": true, "xs": 12, "sm": 4} -->
				<!-- wp:material/typography {"variant": "h3", "component": "h2", "m": 12, "style": {"margin-top": "1em", "font-weight": "600"}} -->
					Covid-19 Relief
				<!-- /wp:material/typography -->
				<!-- wp:material/typography {"variant": "body1", "component": "p", "style": {"line-height": "1.5", "font-size": "1.1875em", "font-weight": "200"} } -->
					Making sure the courage of health workers on the front lines is honored with meaningful support, and the people most at risk in this pandemic are cared for – regardless of politics, religion, or ability to pay.
				<!-- /wp:material/typography -->
			<!-- /wp:material/grid -->
			<!-- wp:material/grid {"item": true, "xs": 12, "sm": 8} -->
				<!-- wp:material/card-media {"image": "https://i1.wp.com/www.directrelief.org/wp-content/uploads/2018/01/20200327_zap_by1_005-2-scaled.jpg", "style": {"height": "450px"}} -->
				<!-- /wp:material/card-media -->
			<!-- /wp:material/grid -->
		<!-- /wp:material/grid -->
	<!-- /wp:material/container -->
	<!-- wp:material/typography {"gutterBottom":true, "variant":"h2", "component": "h2"} -->
		<?php esc_html_e( 'Latest Posts', 'wp-irving' ); ?>
	<!-- /wp:material/typography -->
	<!-- wp:material/grid {"container": true, "spacing": 2} -->
	<?php
	// Display the 10 most recent posts.
	$home_posts = new \WP_Query(
		[
			'posts_per_page' => 8,
			'post_type'      => 'post',
		]
	);

	while ( $home_posts->have_posts() ) {
		$home_posts->the_post();
		include get_stylesheet_directory() . '/template-parts/post-card.php';
	}
	wp_reset_postdata();
	?>
	<!-- /wp:material/grid -->
<!-- /wp:irving/body-area -->