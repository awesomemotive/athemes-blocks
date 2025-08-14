<?php
/**
 * REST API endpoints for plugin management
 *
 * @package aThemes Blocks
 */

namespace AThemes_Blocks\Services\PluginInstaller\Rest;

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

use AThemes_Blocks\Services\PluginInstaller\Helpers\Plugin as PluginInstallerHelper;
use AThemes_Blocks\Services\PluginInstaller\InstallPlugin;
use AThemes_Blocks\Services\PluginInstaller\ActivatePlugin;
use AThemes_Blocks\Services\PluginInstaller\DeactivatePlugin;

class PluginInstallerOperationsRoute {
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
            '/plugin-installer',
            array(
                'methods'             => 'POST',
                'callback'            => array( $this, 'route_callback' ),
                'permission_callback' => array( $this, 'check_permission' ),
                'args'                => array(
                    'plugin' => array(
                        'required'          => true,
                        'type'              => 'string',
                        'sanitize_callback' => 'sanitize_text_field',
                    ),
                    'action' => array(
                        'required'          => true,
                        'type'              => 'string',
                        'sanitize_callback' => 'sanitize_text_field',
                        'enum'              => array( 'activate', 'deactivate', 'install' ),
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
        $action = $request->get_param( 'action' );
        $plugin_status = PluginInstallerHelper::get_plugin_status( $plugin_slug );

        if ( 'install' === $action || $action === 'activate' ) {
            if ( 'not_installed' === $plugin_status ) {
                $install = new InstallPlugin( $plugin_slug );
                $install_result = $install->install_plugin();

                if ( is_wp_error( $install_result ) ) {
                    return $install_result;
                }

                $activate = new ActivatePlugin( $plugin_slug );
                $activate_result = $activate->activate_plugin();
                if ( is_wp_error( $activate_result ) ) {
                    return $activate_result;
                }

                return new \WP_REST_Response( array( 'message' => __( 'Plugin installed and activated successfully.', 'athemes-blocks' ), 'status' => 'success' ), 200 );
            } else if ( 'inactive' === $plugin_status ) {
                $activate = new ActivatePlugin( $plugin_slug );
                $activate_result = $activate->activate_plugin();

                return $activate_result;
            }

            if ( 'active' === $plugin_status ) {
                return new \WP_REST_Response( array( 'message' => __( 'Plugin is already active.', 'athemes-blocks' ), 'status' => 'success' ), 200 );
            }
        } else if ( 'deactivate' === $action ) {
            $deactivate = new DeactivatePlugin( $plugin_slug );
            $deactivate_result = $deactivate->deactivate_plugin();

            return $deactivate_result;
        }

        return new \WP_Error( 'invalid_action', __( 'Invalid action.', 'athemes-blocks' ), array( 'status' => 400 ) );
    }
}
