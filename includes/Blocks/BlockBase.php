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

use AThemes_Blocks\Blocks\BlockCss;

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
        add_action( 'enqueue_block_editor_assets', array( $this, 'localize_block_attributes' ) );
        add_action( 'render_block', array( $this, 'block_css' ), 10, 2 );
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

    /**
     * Localize block attributes.
     * 
     * @return void
     */
    public function localize_block_attributes(): void {
        $attributes = require ATHEMES_BLOCKS_PATH . 'assets/js/blocks/'. $this->id .'/attributes.php';

        wp_localize_script( 'wp-block-editor', 'athemesBlocksAttributes', array(
            $this->id => array(
                'attributes' => $attributes,
            ),
        ) );
    }

    /**
     * Append the block css.
     * 
     */
    public function block_css( $block_content, $block ): string {
        if ( $block['blockName'] !== 'athemes-blocks/'. $this->id ) {
            return $block_content;
        }

        $attributes = $block['attrs'];
        $block_id = $attributes['clientId'];
        $default_attributes = require ATHEMES_BLOCKS_PATH . 'assets/js/blocks/'. $this->id .'/attributes.php';

        $css = new BlockCss( $attributes, $block_id, $default_attributes );

        return $block_content . $css->get_block_style_tag();
    }
}