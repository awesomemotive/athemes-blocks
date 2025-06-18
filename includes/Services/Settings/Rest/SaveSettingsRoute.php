<?php
/**
 * Rest API endpoint for saving settings.
 *
 * @package aThemes Blocks
 */

namespace AThemes_Blocks\Services\Settings\Rest;

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

class SaveSettingsRoute {
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
            '/settings/save',
            array(
                'methods'             => 'POST',
                'callback'            => array( $this, 'route_callback' ),
                'permission_callback' => array( $this, 'check_permission' ),
                'args'                => array(
                    'setting_group' => array(
                        'required'          => true,
                        'type'              => 'string',
                        'sanitize_callback' => 'sanitize_text_field'
                    ),
                    'setting_id' => array(
                        'required'          => true,
                        'type'              => 'string',
                        'sanitize_callback' => 'sanitize_text_field'
                    ),
                    'value' => array(
                        'required'          => true,
                        'type'              => 'string',
                        'sanitize_callback' => 'sanitize_text_field'
                    ),
                ),
            )
        );
    }

    /**
     * Check if the user has permission to manage settings
     * 
     * @return bool
     */
    public function check_permission(): bool {
        return current_user_can( 'manage_options' );
    }

    /**
     * Handle the settings save action
     * 
     * @param \WP_REST_Request<array<string, string>> $request The request object.
     * @return \WP_REST_Response|\WP_Error
     */
    public function route_callback( \WP_REST_Request $request ) {
        $setting_group = $request->get_param( 'setting_group' );
        $setting_id = $request->get_param( 'setting_id' );
        $value = $request->get_param( 'value' );

        $settings = json_decode( get_option( 'athemes_blocks_dashboard_settings' ), true );
        $settings[ $setting_group ][ $setting_id ] = $value;
        update_option( 'athemes_blocks_dashboard_settings', json_encode( $settings ) );

        return new \WP_REST_Response( array( 'status' => 'success', 'updated_settings' => $settings ), 200 );
    }
}
