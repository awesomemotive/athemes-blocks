<?php

/**
 * Menu Pages.
 * This class is responsible for creating the plugin menu pages.
 * 
 * @package AThemes Blocks
 */

namespace AThemes_Blocks\Admin\PluginDashboard;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class MenuPages {

    /**
     * Constructor.
     * 
     */
    public function __construct() {
        $this->init_hooks();
    }

    /**
     * Init hooks.
     * 
     * @return void
     */
    public function init_hooks(): void {
        add_action( 'admin_menu', array( $this, 'add_menu_pages' ), 99 );
        add_action( 'admin_init', array( $this, 'register_settings' ) );
		add_action( 'rest_api_init', array( $this, 'register_settings' ) );
    }

    /**
     * Add the options page to the admin menu.
     * 
     * @return void
     */
    public function add_menu_pages(): void {

        add_menu_page(
            esc_html__('aThemes Blocks', 'athemes-blocks'), 
            esc_html__('aThemes Blocks', 'athemes-blocks'), 
            'manage_options', 
            'at-blocks', 
            array( $this, 'render_menu_page' ),
            'dashicons-admin-generic',
            58.9
        );

        add_submenu_page(
            'at-blocks',
            esc_html__('Dashboard', 'athemes-blocks'), 
            esc_html__('Dashboard', 'athemes-blocks'), 
            'manage_options',
            get_admin_url() . 'admin.php?page=at-blocks&path=dashboard',
            '',
            0
        );

        add_submenu_page(
            'at-blocks',
            esc_html__('Blocks', 'athemes-blocks'), 
            esc_html__('Blocks', 'athemes-blocks'), 
            'manage_options',
            get_admin_url() . 'admin.php?page=at-blocks&path=blocks',
            '',
            1
        );
    }

    /**
	 * Register settings.
	 * 
	 * @return void
	 */
	public function register_settings() {

        // The general settings data.
		register_setting(
			'general',
			'athemes_blocks_enabled_blocks',
			array(
				'type'              => 'string',
				'description'       => __( 'The enabled blocks data.', 'athemes-blocks' ),
				'sanitize_callback' => function( $input ) {
					return $input;
				},
				'show_in_rest'      => true,
				'default'           => wp_json_encode( array( 'flex-container', 'text', 'heading' ) ),
			)
		);
	}

    /**
     * Render the options page.
     * 
     * @return void
     */
    public function render_menu_page(): void {
        echo '<div id="at-blocks-root"></div>';
    }
}