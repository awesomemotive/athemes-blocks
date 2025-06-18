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
use AThemes_Blocks\BlocksCommonCss;
use AThemes_Blocks\BlocksCommonScripts;
use AThemes_Blocks\Blocks\Helper\Settings;
use AThemes_Blocks\Integration\Themes\Sydney as SydneyIntegration;
use AThemes_Blocks\Admin\PluginDashboard\MenuPages as PluginDashboardMenuPages;
use AThemes_Blocks\Admin\PluginDashboard\Assets as PluginDashboardAssets;
use AThemes_Blocks\Admin\PluginDashboard\CustomCSS as PluginDashboardCustomCSS;
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

        // Load integration.
        $this->load_integration();

        // Load admin only stuff.
        $this->load_admin();

        // Load blocks common CSS.
        $this->load_blocks_common_css();

        // Load blocks common scripts.
        $this->load_blocks_common_scripts();
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

        // Block Editor.
        new BlockEditorAssets();
    }

    /**
     * Load blocks.
     * 
     * @return void
     */
    public function load_blocks(): void {
        $blocks = array(
            'FlexContainer',
            'Heading',
            'Text',
            'Button',
            'Icon',
            'Image',
            'Testimonials',
            // 'Team',
            'TeamMember',
            'PostGrid',
            'TaxonomyGrid',
            'GoogleMaps',
        );

        foreach ( $blocks as $block ) {
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
}