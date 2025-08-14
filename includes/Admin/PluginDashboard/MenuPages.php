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

use AThemes_Blocks\Blocks\Helper\Functions as BlocksHelperFunctions;

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

        add_action( 'admin_footer', array( $this, 'adjust_menu_items_display' ) );
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
            ATHEMES_BLOCKS_URL . 'assets/img/dashboard/admin-logo.svg',
            58.9
        );

        add_submenu_page(
            'at-blocks',
            esc_html__('Blocks', 'athemes-blocks'), 
            esc_html__('Blocks', 'athemes-blocks'), 
            'manage_options',
            'at-blocks&path=blocks',
            array( $this, 'render_menu_page' ),
            0
        );

        add_submenu_page(
            'at-blocks',
            esc_html__('Settings', 'athemes-blocks'), 
            esc_html__('Settings', 'athemes-blocks'), 
            'manage_options',
            'at-blocks&path=settings&section=editor-options',
            array( $this, 'render_menu_page' ),
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
				'default'           => wp_json_encode( BlocksHelperFunctions::get_enabled_blocks_default_list() ),
			)
		);

        register_setting(
            'general',
            'athemes_blocks_dashboard_settings',
            array(
                'type'              => 'string',
                'description'       => __( 'The settings data.', 'athemes-blocks' ),
                'sanitize_callback' => function( $input ) {
                    return $input;
                },
                'show_in_rest'      => true,
                'default'           => wp_json_encode( array(
                    'editor_options' => array(
                        'container_content_width' => 1200,
                        'container_columns_gap' => 15,
                        'container_rows_gap' => 15,
                    ),
                    'performance' => array(
                        'load_google_fonts_locally' => true,
                    ),
                ) ),
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

        /**
         * Action hook to render anything after the menu page content.
         * 
         * @return void
         */
        do_action( 'athemes_blocks_after_render_menu_page' );
    }

    /**
     * Adjust menu items display.
     * 
     * @return void
     */
    public function adjust_menu_items_display(): void {
        $css = '
            #toplevel_page_at-blocks a[href="admin.php?page=at-blocks"] {
                display: none;
            }
        ';

        if ( isset( $_GET['path'] ) && $_GET['path'] === 'blocks' ) {
            $css .= '
                #toplevel_page_at-blocks a[href="admin.php?page=at-blocks&path=blocks"] {
                    font-weight: 600;
                    color: #FFF;
                }
            ';
        }
        
        if ( isset( $_GET['path'] ) && $_GET['path'] === 'settings' && isset( $_GET['section'] ) && $_GET['section'] === 'editor-options' ) {
            $css .= '
                #toplevel_page_at-blocks a[href="admin.php?page=at-blocks&path=settings&section=editor-options"] {
                    font-weight: 600;
                    color: #FFF;
                }
            ';
        }

        ?>
        <style>
            <?php echo $css; ?>
        </style>
        <?php
    }
}