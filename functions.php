<?php
	add_action( 'wp_enqueue_scripts', 'viewsource_acf_enqueue_styles' );
function viewsource_acf_enqueue_styles() {
	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css', array(), '1.0' );
}

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
