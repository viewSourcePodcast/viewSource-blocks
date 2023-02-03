<?php
/**
 * Hello World Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during backend preview render.
 * @param   int $post_id The post ID the block is rendering content against.
 *          This is either the post ID currently being displayed inside a query loop,
 *          or the post ID of the post hosting this block.
 * @param   array $context The context provided to the block by the post or it's parent block.
 */

// Support custom "anchor" values.
$anchor = '';
if ( ! empty( $block['anchor'] ) ) {
	$anchor = 'id="' . esc_attr( $block['anchor'] ) . '" ';
}
// Create class attribute allowing for custom "className" and "align" values.
$class_name       = 'hello-world-block';
$background_class = $block['backgroundColor'] ? 'has-' . $block['backgroundColor'] . '-background-color' : '';
$text_color_class = $block['textColor'] ? 'has-' . $block['textColor'] . '-color' : '';
if ( ! empty( $block['className'] ) ) {
	$class_name .= ' ' . $block['className'];
}
if ( ! empty( $block['align'] ) ) {
	$class_name .= ' align' . $block['align'];
}
if ( ! empty( $block['backgroundColor'] ) ) {
	$class_name .= ' ' . $background_class;
}
if ( ! empty( $block['textColor'] ) ) {
	$class_name .= ' ' . $text_color_class;
}
// Load values and assign defaults.
$text  = get_field( 'heading' ) ? get_field( 'heading' ) : 'Your Heading.';
$image = get_field( 'image' );
// echo '<pre>' . var_export( $block, true ) . '</pre>';
?>
<div <?php echo $anchor; ?>class="<?php echo esc_attr( $class_name ); ?>">
	<div class="hello-world-image">
		<?php echo wp_get_attachment_image( $image['id'], 'medium' ); ?>
	</div>
	<h3 class="hello-world-text"><?php echo esc_html( $text ); ?></h3>

</div>
