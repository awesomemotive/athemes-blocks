<?php
/**
 * Rest API endpoint for plugin installation status.
 *
 * @package aThemes Blocks
 */

namespace AThemes_Blocks\Services\PluginInstaller\Rest;

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

use AThemes_Blocks\Services\PluginInstaller\Helpers\Plugin as PluginInstallerHelper;

class PluginInstallationStatusRoute {
    /**
     * Constructor.
     * 
     * @return void
     */
    public function __construct() {
        add_action( 'rest_api_init', array( $this, 'register_routes' ) );
    }

    /**
     * Register the REST routes
     * 
     * @return void
     */
    public function register_routes(): void {
        register_rest_route(
            'athemes-blocks/v1',
            '/plugin-installer/plugin-status',
            array(
                'methods'             => 'GET',
                'callback'            => array( $this, 'route_callback' ),
                'permission_callback' => array( $this, 'check_permission' ),
                'args'                => array(
                    'plugin' => array(
                        'required'          => true,
                        'type'              => 'string',
                        'sanitize_callback' => 'sanitize_text_field',
                    ),
                ),
            )
        );
    }

    /**
     * Check if the user has permission to manage plugins
     * 
     * @return bool
     */
    public function check_permission(): bool {
        return current_user_can( 'activate_plugins' );
    }

    /**
     * Handle the plugin action
     * 
     * @param \WP_REST_Request<array<string, string>> $request The request object.
     * @return \WP_REST_Response|\WP_Error
     */
    public function route_callback( \WP_REST_Request $request ) {
        $plugin_slug = $request->get_param( 'plugin' );
        $plugin_status = PluginInstallerHelper::get_plugin_status( $plugin_slug );

        return new \WP_REST_Response( array( 'status' => $plugin_status ), 200 );
    }
}
