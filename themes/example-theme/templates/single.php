<!-- wp:irving/body-area {"themeName": "gray"} -->
	<!-- wp:material/container {"maxWidth": "sm"} -->
		<!-- wp:irving/stack -->
			<!-- wp:material/typography {"variant":"h1", "color":"inherit"} -->
				<!-- wp:irving/html --><?php the_title(); ?><!-- /wp:irving/html -->
			<!-- /wp:material/typography -->
			<?php
			global $post;
			echo $post->post_content;
			?>
		<!-- /wp:irving/stack -->
	<!-- /wp:irving/container -->
<!-- /wp:irving/body-area -->