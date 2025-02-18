<?php

/**
 * The base class for all blocks.
 * 
 * @package aThemes_Blocks
 */

namespace AThemes_Blocks\Blocks;

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

abstract class BlockBase {

    /**
     * Block ID.
     * 
     * @var string
     */
    protected $id;

    /**
     * Constructor.
     * 
     */
    public function __construct() {
        add_action( 'init', array( $this, 'register_block_type' ) );
    }

    /**
     * Register block type.
     * 
     * @return void
     */
    public function register_block_type(): void {
        register_block_type_from_metadata( 
			ATHEMES_BLOCKS_PATH . 'assets/js/blocks/'. $this->id .'/block.json',
            array()
		);
    }
}