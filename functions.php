<?php

/**
 * Enqueue styles
 *
 * @return void
 */
function viewsource_acf_enqueue_styles() {
	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css', array(), '1.0' );
	wp_enqueue_style( 'viewsource-style', get_stylesheet_directory_uri() . '/style.css', array( 'parent-style' ), '1.0' );
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

/**
 * Register native blocks
 *
 * @return void
 */
function register_native_blocks() {
	register_block_type( __DIR__ . '/build/hello-world' );
	register_block_type( __DIR__ . '/build/custom-hello-world' );
}
add_action( 'init', 'register_native_blocks' );

/**
 * Get an SVG file from the imgs/ folder in the theme, update its attributes if necessary and return it as a string.
 *
 * @param string $filename The name of the SVG file to get.
 * @param array $attributes (optional) An array of attributes to add/modify to the SVG file.
 * @param string $directory (optional) The directory to look for the SVG file in, defaults to 'imgs'.
 * @return string|WP_Error The SVG file as a string or a WP_Error object if there was an error.
 */
function get_svg( $filename, $attributes = array(), $directory = 'assets/imgs' ) {
	// Get the SVG file.
	$svg = file_get_contents( get_stylesheet_directory() . '/' . $directory . '/' . $filename . '.svg' );

	$errors = new \WP_Error();

	// If there was an error retrieving the SVG file, return a WP_Error object.
	if ( ! $svg ) {
		$svg_error_message = sprintf(
			/* translators: %1$s: SVG file name, %2$s: SVG directory */
			__( 'There was an error retrieving the SVG file "%1$s" from the "%2$s" directory.', 'tangent' ),
			$filename . '.svg',
			$directory
		);

		$errors->add(
			'svg_file_not_found',
			$svg_error_message,
			array(
				'svg_file'      => $filename . '.svg',
				'svg_directory' => $directory,
			)
		);
		return $errors;

	}

	// Initialize the SVG tag processor.
	$update_svg = new \WP_HTML_Tag_Processor( $svg );
	$update_svg->next_tag();

	// If there are attributes to add, add them.
	// TODO check if the tag we're working on is an SVG tag, if not, return a WP_Error object.
	if ( ! empty( $attributes ) ) {
		foreach ( $attributes as $attribute => $value ) {
			// If the attribute is 'class', add the class to the SVG file without overwriting the existing classes.
			if ( 'class' === $attribute ) {
				$update_svg->add_class( $value );
				continue;
			}
			// Otherwise, set/update the attribute with the new value
			$update_svg->set_attribute( $attribute, $value );
		}
	}

	// Return the SVG file.
	return $update_svg->get_updated_html();
}
