<?php
/**
 * CMB2 Plus
 *
 * Common utility classes for the CMB2 plugin on WordPress.
 *
 * @link  http://s3rgiosan.com/
 * @since 1.0.0
 *
 * @wordpress-plugin
 * Plugin Name:       CMB2 Plus
 * Plugin URI:        https://github.com/s3rgiosan/cmb2-plus/
 * Description:       Common utility classes for the CMB2 plugin on WordPress.
 * Version:           2.0.0
 * Author:            Sérgio Santos
 * Author URI:        http://s3rgiosan.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       cmb2-plus
 * Domain Path:       /languages
 * GitHub Plugin URI: https://github.com/s3rgiosan/cmb2-plus
 * GitHub Branch:     master
 */

namespace s3rgiosan\WP\Plugin\CMB2;

if ( file_exists( dirname( __FILE__ ) . '/vendor/autoload.php' ) ) {
	require_once dirname( __FILE__ ) . '/vendor/autoload.php';
}

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Determine if metabox should show on a static page.
 *
 * Usage:
 *   Front page: `'show_on' => array( 'key' => 'static-page', 'value' => 'page_on_front' )`
 *   Posts page: `'show_on' => array( 'key' => 'static-page', 'value' => 'page_for_posts' )`
 *
 * @since  2.0.0 Changed key name.
 * @since  1.0.0
 *
 * @param  bool  $show          Default is true, show the metabox.
 * @param  mixed $meta_box_args Array of the metabox arguments.
 * @param  mixed $cmb           The CMB2 instance.
 * @return bool
 */
function show_on_static_page( $show, $meta_box_args ) {

	if ( empty( $meta_box_args['show_on']['key'] ) ) {
		return $show;
	}

	$key = sanitize_key( $meta_box_args['show_on']['key'] );
	if ( 'static-page' !== $key ) {
		return $show;
	}

	if ( empty( $meta_box_args['show_on']['value'] ) ) {
		return $show;
	}

	$post_id = 0;

	// If we're showing it based on ID, get the current ID
	if ( isset( $_GET['post'] ) ) {
		$post_id = intval( $_GET['post'] );
	} elseif ( isset( $_POST['post_ID'] ) ) {
		$post_id = intval( $_POST['post_ID'] );
	}

	if ( ! $post_id ) {
		return false;
	}

	$value = sanitize_key( $meta_box_args['show_on']['value'] );
	if ( empty( $value ) ) { // Backward compatibility.
		$value = 'page_on_front';
	}

	if ( ! in_array( $value,  array( 'page_on_front', 'page_for_posts' ), true ) ) {
		return false;
	}

	return $post_id === intval( get_option( $value ) );
}
add_filter( 'cmb2_show_on', '\s3rgiosan\WP\Plugin\CMB2\show_on_static_page', 10, 2 );
