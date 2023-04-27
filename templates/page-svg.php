<?php
/**
 * Template Name: SVG
 * Template Post Type: page
 */
?>

<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<?php
	$block_content = do_blocks(
		'
		<!-- wp:group {"tagName":"main","style":{"spacing":{"margin":{"top":"var:preset|spacing|50"}}}} -->
		<main class="wp-block-group" style="margin-top:var(--wp--preset--spacing--50)">
			<!-- wp:group {"layout":{"type":"constrained"}} -->
			<div class="wp-block-group">
				<!-- wp:post-featured-image {"overlayColor":"contrast","dimRatio":50,"align":"wide","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|50","top":"calc(-1 * var(--wp--preset--spacing--50))"}}}} /-->
				<!-- wp:post-title {"level":1,"style":{"spacing":{"margin":{"bottom":"var:preset|spacing|40"}}}} /-->
			</div>
			<!-- /wp:group -->

			<!-- wp:post-content {"layout":{"type":"constrained"}} /-->
		</main>
		<!-- /wp:group -->
		'
	);
	?>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<div class="wp-site-blocks">
		<header class="wp-block-template-part site-header">
			<?php block_header_area(); ?>
		</header>
		<?php echo wp_kses_post( $block_content ); ?>

		<footer class="wp-block-template-part site-footer">
			<?php block_footer_area(); ?>
			<div class="svg">
				<?php
				echo get_svg( // phpcs:ignore WordPress.Security.EscapeOutput
					'viewsource-mark',
					array(
						'class'  => 'site-footer__viewsource-mark',
						'height' => '',
						'width'  => '200px',
					)
				);
				?>
			</div>
		</footer>
	</div>
	<?php
	wp_footer();
	?>

</body>
</html>
