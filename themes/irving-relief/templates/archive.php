<!-- wp:irving/body-area -->
	<!-- wp:irving/stack -->
		<!-- wp:core/columns -->
			<!-- wp:core/column -->
				<!-- wp:core/heading -->
					<?php the_archive_title(); ?>
				<!-- /wp:core/heading -->
			<!-- /wp:core/column -->
			<!-- wp:core/column -->
				<!-- wp:core/paragraph -->
					<p>We're not ninjas, gurus, gangsters, rock stars, or wizards. We're authentic, intelligent, experienced professionals ready to exceed your sky-high expectations. We value quality, transparency, and accountability, and build collaborative partnerships, not vendor relationships. Our high performance culture yields fast, beautiful products that stand up to the toughest demands of the Internet. The biggest names in media, non-profits, and technology entrust their digital products to us year after year because our team gets results.</p>
				<!-- /wp:core/paragraph -->
			<!-- /wp:core/column -->
		<!-- /wp:core/columns -->
		<!-- wp:core/separator /-->
		<!-- wp:core/grid {"theme":"four-up"} -->
		<?php
		while ( have_posts() ) {
			the_post();
			printf(
				'<!-- wp:irving/team-card %1$s -->',
				wp_json_encode(
					[
						'name'  => get_the_title(),
						'title' => 'Something',
					]
				)
			);
			echo '<!-- wp:core/paragraph -->';
			the_excerpt();
			echo '<!-- /wp:core/paragraph -->';

			echo '<!-- /wp:irving/team-card -->';
		}
		?>
		<!-- /wp:core/grid -->
	<!-- /wp:irving/stack -->
<!-- /wp:irving/body-area -->