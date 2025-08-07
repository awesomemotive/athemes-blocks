<?php
/**
 * REST API endpoints for plugin management
 *
 * @package aThemes Blocks
 */

namespace AThemes_Blocks\Services\PluginInstaller;

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

use AThemes_Blocks\Services\PluginInstaller\Utils\SilentUpgradeSkin;

class InstallPlugin {

    private string $plugin_slug;

    public function __construct( string $plugin_slug ) {
        $this->plugin_slug = $plugin_slug;
    }


    /**
     * Install plugin.
     * 
     * @return \WP_REST_Response|\WP_Error
     */
    public function install_plugin() {
        if ( ! function_exists( 'plugins_api' ) ) {
            require_once wp_normalize_path( ABSPATH . 'wp-admin/includes/plugin-install.php' );
        }

        if ( ! class_exists( 'WP_Upgrader' ) ) {
            require_once wp_normalize_path( ABSPATH . 'wp-admin/includes/class-wp-upgrader.php' );
        }

        if ( ! function_exists( 'request_filesystem_credentials' ) ) {
            require_once wp_normalize_path( ABSPATH . 'wp-admin/includes/file.php' );
        }

        $upgrader = new \Plugin_Upgrader( new SilentUpgradeSkin() );
        
        // Get plugin information first
        $api = plugins_api('plugin_information', array(
            'slug' => dirname($this->plugin_slug),
            'fields' => array(
                'sections' => false,
                'tags' => false,
            ),
        ));
        
        if ( is_wp_error( $api ) ) {
            return new \WP_Error('plugin_api_error', $api->get_error_message(), array('status' => 400));
        }
        
        if ( ! is_object( $api ) || ! isset( $api->download_link ) ) {
            return new \WP_Error('plugin_api_error', __('Invalid plugin information received.', 'athemes-blocks'), array('status' => 400));
        }
        
        $result = $upgrader->install($api->download_link);
        if ( is_wp_error( $result ) ) {
            return new \WP_Error( 'plugin_installation_failed', $result->get_error_message(), array( 'status' => 400 ) );
        }

        return new \WP_REST_Response( array( 'message' => __( 'Plugin installed successfully.', 'athemes-blocks' ), 'status' => 'success' ), 200 );
    }
}