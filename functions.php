<?php

/**
 * Enqueue styles
 *
 * @return void
 */
function viewsource_acf_enqueue_styles() {
	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css', array(), '1.0' );
	// enqueue child theme style
	wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array( 'parent-style' ), '1.0' );
}

add_action( 'wp_enqueue_scripts', 'viewsource_acf_enqueue_styles' );

/**
 * Register ACF Blocks
 *
 * @return void
 */
function register_acf_blocks() {
	register_block_type( __DIR__ . '/acf-blocks/hello-world' );
}

add_action( 'init', 'register_acf_blocks' );


// add an acf options page called Custom Date inside the Posts menu on init
function vs_custom_date_options_page() {
	if ( function_exists( 'acf_add_options_page' ) ) {
		acf_add_options_page(
			array(
				'page_title'  => 'Custom Date',
				'menu_title'  => 'Custom Date',
				'menu_slug'   => 'custom-date',
				'capability'  => 'edit_posts',
				'parent_slug' => 'edit.php',
				'position'    => 20,
				'icon_url'    => 'dashicons-calendar-alt',
				'redirect'    => false,
			)
		);
	}
}
add_action( 'init', 'vs_custom_date_options_page' );



/**
 * Add a custom date to the content of the post
 *
 * @param string $content
 * @return string $content
 */
function vs_custom_date_info( $content ) {
	if ( is_single() ) {
		$post_id = get_the_ID();
		// get the date from the post
		$post_date = get_the_date( 'F j, Y', $post_id );
		// get the modified date from the post
		$post_modified_date = get_the_modified_date( 'F j, Y', $post_id );
		// get the custom date options
		$custom_date = get_field( 'date_labels' );

		$date = '';

		foreach ( $custom_date as $key => $value ) {
			$day         = $value['day'];
			$date_output = 'published' === $value['date_output'] ? $post_date : $post_modified_date;
			$custom      = 'custom' === $date_output ? $value['custom'] : false;
			if ( gmdate( 'N' ) === $day && get_the_date( 'N', $post_id ) === gmdate( 'N' ) ) {

				$date = sprintf( '<p class="custom-date-section">%s</p>', $custom ? $custom : $date_output );
			}
		}

		$content = $date . $content;

	}

	return $content;
}
add_filter( 'the_content', 'vs_custom_date_info' );
