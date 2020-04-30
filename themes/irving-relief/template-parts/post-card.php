<!-- wp:material/grid {"item": true, "xs": 12, "sm": 6, "md": 3} -->
	<!-- wp:material/link {"href": "<?php the_permalink(); ?>", "underline": "none"} -->
		<!-- wp:material/card {"style": {"max-width": "100%"}} -->
			<!-- wp:material/card-action-area -->
				<!-- wp:material/card-media {"image":"<?php the_post_thumbnail_url(); ?>", "style": {"height": "250px"}} /-->
				<!-- wp:material/card-content -->
					<!-- wp:material/typography {"gutterBottom":true, "variant":"h5", "component": "h2"} -->
						<!-- wp:irving/html {"content": "<?php the_title(); ?>"} /-->
					<!-- /wp:material/typography -->
					<?php if ( has_excerpt() ) : ?>
					<!-- wp:material/typography {"color":"textSecondary", "variant":"body2", "component": "p"} -->
						<?php echo esc_html( substr( get_the_excerpt(), 30 ) ); ?>
					<!-- /wp:material/typography -->
					<?php endif; ?>
				<!-- /wp:material/card-content -->
			<!-- /wp:material/card-action-area -->
		<!-- /wp:material/card -->
	<!-- /wp:material/link -->
<!-- /wp:material/grid -->