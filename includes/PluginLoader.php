<?php

/**
 * The plugin loader class.
 * 
 * @package aThemes_Blocks
 */

namespace AThemes_Blocks;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

use AThemes_Blocks\Admin\BlockEditorAssets;
use AThemes_Blocks\Blocks\Common\CommonCss as BlocksCommonCss;
use AThemes_Blocks\Blocks\Common\CommonScripts as BlocksCommonScripts;
use AThemes_Blocks\Blocks\Common\RegisterBlocksCategory;
use AThemes_Blocks\Blocks\Helper\Settings;
use AThemes_Blocks\Blocks\Helper\Functions as BlocksHelper;
use AThemes_Blocks\Integration\Themes\Sydney as SydneyIntegration;
use AThemes_Blocks\Admin\PluginDashboard\MenuPages as PluginDashboardMenuPages;
use AThemes_Blocks\Admin\PluginDashboard\Assets as PluginDashboardAssets;
use AThemes_Blocks\Admin\PluginDashboard\CustomCSS as PluginDashboardCustomCSS;
use AThemes_Blocks\Admin\PluginDashboard\NotificationsSidebar as PluginDashboardNotificationsSidebar;
use AThemes_Blocks\Services\PluginInstaller\Loader as PluginInstallerLoader;
use AThemes_Blocks\Services\Settings\Loader as SettingsLoader;

class PluginLoader {

    /**
     * Constructor.
     * 
     */
    public function __construct() {

        // Load translation textdomain
        $this->load_textdomain();

        // Load services.
        $this->load_services();

        // Load blocks.
        $this->load_blocks();

        // Apply plugin settings.
        $this->apply_plugin_settings();

        // Load integration.
        $this->load_integration();

        // Load admin only stuff.
        $this->load_admin();

        // Load blocks common CSS.
        $this->load_blocks_common_css();

        // Load blocks common scripts.
        $this->load_blocks_common_scripts();

        // Load blocks category.
        $this->load_blocks_category();

        // Load legacy v1 blocks for backward compatibility.
        $this->load_legacy_v1_blocks();
    }

    /**
     * Apply plugin settings.
     * 
     * @return void
     */
    public function apply_plugin_settings(): void {
        $settings = get_option( 'athemes_blocks_dashboard_settings' );
        if ( ! $settings ) {
            return;
        }

        $settings_list = json_decode( $settings, true );
        if ( ! $settings_list ) {
            return;
        }

        // Container block.
        add_filter( 'athemes_blocks_flex_container_attributes_values', function( $attributes_values ) use ( $settings_list ) {

            // Content box width.
            if ( isset( $settings_list['editor_options']['container_content_width'] ) ) {
                $attributes_values['contentBoxWidth']['desktop'] = (int) $settings_list['editor_options']['container_content_width'];
            }

            // Columns gap.
            if ( isset( $settings_list['editor_options']['container_columns_gap'] ) ) {
                $attributes_values['columnsGap']['desktop'] = (int) $settings_list['editor_options']['container_columns_gap'];
            }

            // Rows gap.
            if ( isset( $settings_list['editor_options']['container_rows_gap'] ) ) {
                $attributes_values['rowsGap']['desktop'] = (int) $settings_list['editor_options']['container_rows_gap'];
            }

            return $attributes_values;
        } );
    }

    /**
     * Load integration.
     * 
     * @return void
     */
    public function load_integration(): void {

        // Sydney.
        new SydneyIntegration();
    }

    /**
     * Load textdomain.
     * 
     * @return void
     */
    public function load_textdomain(): void {
        load_plugin_textdomain( 'athemes-blocks', false, dirname( plugin_basename( ATHEMES_BLOCKS_FILE ) ) . '/languages' );
    }

    /**
     * Load services.
     * 
     * @return void
     */
    public function load_services(): void {
        new PluginInstallerLoader();
        new SettingsLoader();
    }

    /**
     * Load admin only stuff.
     * 
     * @return void
     */
    public function load_admin(): void {
        
        // Plugin Dashboard (not only admin).
        new PluginDashboardMenuPages();

        if ( ! is_admin() ) {
            return;
        }

        // Plugin Dashboard.
        new PluginDashboardAssets();
        new PluginDashboardCustomCSS();
        new PluginDashboardNotificationsSidebar();

        // Block Editor.
        new BlockEditorAssets();
    }

    /**
     * Load blocks.
     * 
     * @return void
     */
    public function load_blocks(): void {
        $enabled_blocks = BlocksHelper::get_enabled_blocks_list();

        foreach ( $enabled_blocks as $block ) {
            $block_class = 'AThemes_Blocks\Blocks\\' . $block;
            new $block_class();
        }
    }

    /**
     * Load blocks common CSS.
     * 
     * @return void
     */
    public function load_blocks_common_css(): void {
        new BlocksCommonCss();
    }

    /**
     * Load blocks common scripts.
     * 
     * @return void
     */
    public function load_blocks_common_scripts(): void {
        new BlocksCommonScripts();
    }

    /**
     * Load blocks category.
     * 
     * @return void
     */
    public function load_blocks_category(): void {
        new RegisterBlocksCategory();
    }

    /**
     * Load legacy v1 blocks for backward compatibility.
     * 
     * @return void
     */
    public function load_legacy_v1_blocks(): void {
        $v1_path = plugin_dir_path( ATHEMES_BLOCKS_FILE ) . 'v1/';
        
        // Define v1 constants if they don't exist.
        if ( ! defined( 'ATBLOCKS_FILE' ) ) {
            define( 'ATBLOCKS_FILE', $v1_path . 'athemes-blocks.php' );
        }
        if ( ! defined( 'ATBLOCKS_VERSION' ) ) {
            define( 'ATBLOCKS_VERSION', '1.0.13' );
        }
        if ( ! defined( 'ATBLOCKS_URL' ) ) {
            define( 'ATBLOCKS_URL', plugin_dir_url( ATHEMES_BLOCKS_FILE ) . 'v1/' );
        }
        if ( ! defined( 'ATBLOCKS_DIR' ) ) {
            define( 'ATBLOCKS_DIR', $v1_path );
        }

        // Include v1 classes.
        require_once $v1_path . 'classes/class-athemes-blocks-helpers.php';
        require_once $v1_path . 'classes/class-athemes-blocks-css.php';
        require_once $v1_path . 'classes/class-athemes-blocks-init.php';
    }
}