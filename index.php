<?php
/**
 * Plugin Name: Example blocks
 * Version: 1.0.0
 * Author: Kamil Wyremski
 */

defined( 'ABSPATH' ) || exit;

function example_blocks_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	register_block_type( __DIR__ );
	
	wp_register_style('example_blocks', plugins_url('style.css',__FILE__ ));
	wp_enqueue_style('example_blocks');

}
add_action( 'init', 'example_blocks_register_block' );
