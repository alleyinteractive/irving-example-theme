<!-- wp:irving/body-area -->
	<!-- wp:material/container {"maxWidth": "lg"} -->
		<!-- wp:material/typography {"gutterBottom":true, "variant":"h2", "component": "h2"} -->
			<?php the_title(); ?>
		<!-- /wp:material/typography -->
		<!-- wp:material/typography {"gutterBottom":true, "variant":"h6", "component": "h4"} -->
			<!-- wp:material/avatar {"alt":"Jamess", "src":"https://images.unsplash.com/photo-1520813792240-56fc4a3765a7"} /-->
			Written by User
		<!-- /wp:material/typography -->
		<!-- wp:material/grid {"container": true, "gutterBottom": true, "spacing": 2} -->
		<?php
		global $post;
		echo $post->post_content;
		?>
		<!-- /wp:material/grid -->
		<!-- wp:material/typography {"gutterBottom":true, "variant":"h3", "component": "h2"} -->
			<?php esc_html_e( 'Related Content', 'wp-irving' ); ?>
		<!-- /wp:material/typography -->
		<!-- wp:material/grid {"container": true, "spacing": 2} -->
		<?php
		// Display the 10 most recent posts.
		$related_posts = new \WP_Query(
			[
				'posts_per_page' => 6,
				'post_type'      => 'post',
			]
		);

		while ( $related_posts->have_posts() ) {
			$related_posts->the_post();
			include STYLESHEETPATH . '/template-parts/related-content-card.php';
		}
		wp_reset_postdata();
		?>
		<!-- /wp:material/grid -->
	<!-- /wp:material/container -->
<!-- /wp:irving/body-area -->