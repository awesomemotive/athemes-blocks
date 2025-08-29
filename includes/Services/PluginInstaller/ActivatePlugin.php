<?php
/**
 * REST API endpoints for plugin activation
 *
 * @package aThemes Blocks
 */

namespace AThemes_Blocks\Services\PluginInstaller;

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

class ActivatePlugin {
    /**
     * The plugin slug to activate
     *
     * @var string
     */
    private string $plugin_slug;

    /**
     * Constructor.
     *
     * @param string $plugin_slug The plugin slug to activate.
     */
    public function __construct( string $plugin_slug ) {
        $this->plugin_slug = $plugin_slug;
    }

    /**
     * Activate the plugin
     *
     * @return \WP_REST_Response|\WP_Error
     */
    public function activate_plugin() {
        if ( ! function_exists( 'activate_plugin' ) ) {
            require_once wp_normalize_path( ABSPATH . 'wp-admin/includes/plugin.php' );
        }

        $result = activate_plugin( $this->plugin_slug );
        if ( is_wp_error( $result ) ) {
            return new \WP_Error( 'plugin_activation_failed', $result->get_error_message(), array( 'status' => 400 ) );
        }

        return new \WP_REST_Response( array( 'message' => __( 'Plugin activated successfully.', 'athemes-blocks' ), 'status' => 'success' ), 200 );
    }
}
