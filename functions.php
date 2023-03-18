<?php

/**
 * Enqueue styles
 *
 * @return void
 */
function viewsource_acf_enqueue_styles() {
	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css', array(), '1.0' );
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
 * Enqueue a script to the frontend of WordPress
 *
 * @return void
 */
function vs_add_accordion_scripts() {

	$asset_file = include get_stylesheet_directory() . '/build/accordion/index.asset.php';
	$dependencies = $asset_file['dependencies'];
	wp_enqueue_script(
		'vs-accordion-script',
		get_stylesheet_directory_uri() . '/build/accordion/index.js',
		$dependencies,
		$asset_file['version'],
		true,
	);

	wp_enqueue_style( 'vs-accordion-styles', get_stylesheet_directory_uri() . '/build/accordion/style-index.css', false, $asset_file['version'] );

}
add_action( 'wp_enqueue_scripts', 'vs_add_accordion_scripts' );
