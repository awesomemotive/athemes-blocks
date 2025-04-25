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

class PluginLoader {

    /**
     * Constructor.
     * 
     */
    public function __construct() {

        // Load translation textdomain
        $this->load_textdomain();

        // Load blocks.
        $this->load_blocks();

        // Load admin only stuff.
        $this->load_admin();

        // Load blocks common CSS.
        $this->load_blocks_common_css();

        // Load blocks common scripts.
        $this->load_blocks_common_scripts();
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
     * Load admin only stuff.
     * 
     * @return void
     */
    public function load_admin(): void {
        if ( ! is_admin() ) {
            return;
        }

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