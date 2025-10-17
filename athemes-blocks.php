<?php
/**
 * Plugin Name:       aThemes Blocks
 * Description:       aThemes Blocks is a Gutenberg plugin extending the WordPress editor with awesome blocks.
 * Version:           1.1.3
 * Author:            aThemes
 * Author URI:        https://athemes.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       athemes-blocks
 * Domain Path:       /languages
 *
 * @package aThemes_Blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use AThemes_Blocks\PluginLoader;

define( 'ATHEMES_BLOCKS_VERSION', '1.1.2' );
define( 'ATHEMES_BLOCKS_FILE', __FILE__ );
define( 'ATHEMES_BLOCKS_PATH', plugin_dir_path( ATHEMES_BLOCKS_FILE ) );
define( 'ATHEMES_BLOCKS_URL', plugin_dir_url( ATHEMES_BLOCKS_FILE ) );

// Plugin Loader.
if ( ! version_compare( PHP_VERSION, '5.6', '>=' ) ) {
	add_action( 'admin_notices', 'athemes_blocks_incompatible_php_version' );
} elseif ( ! version_compare( get_bloginfo( 'version' ), '4.7', '>=' ) ) {
	add_action( 'admin_notices', 'athemes_blocks_incompatible_wp_version' );
} else {
    require_once ATHEMES_BLOCKS_PATH . 'vendor/autoload.php';

    new PluginLoader();
}

/**
 * Incompatible PHP version notice
 * 
 * @return void
 */
function athemes_blocks_incompatible_php_version(): void {
	$message = sprintf( 
        /* Translators: 1. WordPress version */
        esc_html__( 'aThemes Blocks plugin requires PHP version %s+. Please update your server PHP version to get the plugin working.', 'athemes-blocks' ), 
        '5.6' 
    );

	$message_output = sprintf( '<div class="error">%s</div>', wpautop( $message ) );

	echo wp_kses_post( $message_output );
}

/**
 * Incompatible WP version notice
 * 
 * @return void
 */
function athemes_blocks_incompatible_wp_version(): void {
	$message = sprintf( 
        /* Translators: 1. WordPress version */
        esc_html__( 'aThemes Blocks plugin requires WordPress version %s+. Please update the WordPress version to get the plugin working.', 'athemes-blocks' ), 
        '5.5' 
    );

	$message_output = sprintf( '<div class="error">%s</div>', wpautop( $message ) );
    
	echo wp_kses_post( $message_output );
}