<?php
/**
 * $attributes (array): The block attributes.
 * $content (string): The block default content.
 * $block (WP_Block): The block instance.
 */

// use regex to get the contents between heading tags in $content
preg_match( '/<h.*?>(.*?)<\/h.*>/s', $content, $matches );
$heading_content = $matches[1];

// get everything but the heading tags from $content
$panel_content = preg_replace( '/<h.*?>.*?<\/h.*>/s', '', $content );
?>

<div <?php echo get_block_wrapper_attributes(); //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped in the function ?>>
	<h3 class="accordion-header">
		<button id="<?php echo esc_attr( $attributes['id'] . '-button' ); ?>" aria-expanded="false" aria-controls="<?php echo esc_attr( $attributes['id'] . '-panel' );?>">
			<?php echo wp_kses_post( $heading_content ); ?>
		</button>
	</h3>
	<div class="accordion-panel" id="<?php echo esc_attr( $attributes['id'] . '-panel' ); ?>" aria-labelledby="<?php echo esc_attr( $attributes['id'] . '-heading' ); ?>">
		<?php echo wp_kses_post( $panel_content ); ?>
	</div>
</div>
