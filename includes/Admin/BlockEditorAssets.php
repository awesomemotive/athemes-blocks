<?php

/**
 * Block editor assets.
 * This class is responsible for enqueuing block editor assets.
 * 
 * @package aThemes_Blocks
 */

namespace AThemes_Blocks\Admin;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class BlockEditorAssets {

    /**
     * Constructor.
     * 
     */
    public function __construct() {
        add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_block_editor_assets' ) );
    }

    /**
     * Enqueue block editor assets.
     * 
     * @return void
     */
    public function enqueue_block_editor_assets(): void {
        wp_enqueue_style(
            'athemes-blocks-block-editor',
            ATHEMES_BLOCKS_URL . 'assets/css/block-editor.css',
            array( 'wp-edit-blocks' ),
            ATHEMES_BLOCKS_VERSION
        );

        wp_enqueue_script(
            'athemes-blocks-block-editor',
            ATHEMES_BLOCKS_URL . 'assets/js/block-editor/at-blocks-block-editor.js',
            array('wp-hooks', 'wp-edit-post', 'wp-data', 'wp-components', 'wp-element', 'wp-block-editor'),
            ATHEMES_BLOCKS_VERSION,
            true
        );
    }
}