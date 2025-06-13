<?php
/**
 * Blocks common Scripts.
 * Handles the addition of scripts for blocks that are common to all blocks.
 *
 * @package aThemes_Blocks
 */

namespace AThemes_Blocks\Blocks\Common;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class CommonScripts {

    /**
     * Constructor.
     * 
     */
    public function __construct() {
        add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
        // add_action( 'enqueue_block_assets', array( $this, 'enqueue_scripts' ) );
    }

    /**
     * Enqueue scripts.
     * 
     * @return void
     */
    public function enqueue_scripts(): void {
        wp_enqueue_script( 'athemes-blocks-entrance-effects', ATHEMES_BLOCKS_URL . 'assets/js/entrance-effects.js', array(), ATHEMES_BLOCKS_VERSION, true );
    }
}