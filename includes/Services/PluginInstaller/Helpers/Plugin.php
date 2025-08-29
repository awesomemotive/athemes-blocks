<?php

/**
 * Helpers for the plugin installer.
 * 
 * @package aThemes Blocks
 */

namespace AThemes_Blocks\Services\PluginInstaller\Helpers;

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

class Plugin {

    /**
     * Get the status of a plugin.
     * 
     * @param string $plugin_path The path to the plugin.
     * @return string The status of the plugin.
     */
    public static function get_plugin_status( string $plugin_path ): string {
        if ( ! function_exists( 'is_plugin_active_for_network' ) ) {
            require_once wp_normalize_path( ABSPATH . 'wp-admin/includes/plugin.php' );
        }

        if ( ! file_exists( WP_PLUGIN_DIR . '/' . $plugin_path ) ) {
            return 'not_installed';
        } elseif ( in_array( $plugin_path, (array) get_option( 'active_plugins', array() ) ) || is_plugin_active_for_network( $plugin_path ) ) {
            return 'active';
        } else {
            return 'inactive';
        }
    }
}