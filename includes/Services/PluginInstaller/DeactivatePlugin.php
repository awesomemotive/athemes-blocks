<?php
/**
 * REST API endpoints for plugin deactivation
 *
 * @package aThemes Blocks
 */

namespace AThemes_Blocks\Services\PluginInstaller;

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

class DeactivatePlugin {
    /**
     * The plugin slug to deactivate
     *
     * @var string
     */
    private string $plugin_slug;

    /**
     * Constructor.
     *
     * @param string $plugin_slug The plugin slug to deactivate.
     */
    public function __construct( string $plugin_slug ) {
        $this->plugin_slug = $plugin_slug;
    }

    /**
     * Deactivate the plugin
     *
     * @return \WP_REST_Response|\WP_Error
     */
    public function deactivate_plugin() {
        if ( ! function_exists( 'deactivate_plugins' ) ) {
            require_once wp_normalize_path( ABSPATH . 'wp-admin/includes/plugin.php' );
        }

        deactivate_plugins( $this->plugin_slug );

        return new \WP_REST_Response( array( 'message' => __( 'Plugin deactivated successfully.', 'athemes-blocks' ), 'status' => 'success' ), 200 );
    }
}
