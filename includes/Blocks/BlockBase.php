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
use AThemes_Blocks\Blocks\Helper\Attributes;

abstract class BlockBase {

    /**
     * Block ID.
     * 
     * @var string
     */
    protected $id;

    /**
     * Block slug.
     * 
     * @var string
     */
    protected $slug;

    /**
     * Constructor.
     * 
     */
    public function __construct() {
        add_action( 'init', array( $this, 'register_block_type' ) );
        add_action( 'enqueue_block_editor_assets', array( $this, 'localize_block_attributes' ) );
        add_filter( 'render_block', array( $this, 'block_css' ), 10, 2 );
    }

    /**
     * Register block type.
     * 
     * @return void
     */
    public function register_block_type(): void {
        register_block_type_from_metadata( 
			ATHEMES_BLOCKS_PATH . 'build/blocks/'. $this->id .'/block.json',
            array()
		);
    }

    /**
     * Localize block attributes.
     * 
     * @return void
     */
    public function localize_block_attributes(): void {
        $attributes = require ATHEMES_BLOCKS_PATH . 'build/blocks/'. $this->id .'/attributes.php';

        wp_localize_script( 'wp-block-editor', $this->id . 'BlockData', array(
            'attributes' => $attributes,
        ) );
    }

    /**
     * Append the block css.
     * 
     * @param string $block_content Block content.
     * @param array<string, mixed> $block Block.
     * 
     * @return string Block content.
     */
    public function block_css( $block_content, $block ): string {
        if ( $block['blockName'] !== 'athemes-blocks/'. $this->slug ) {
            return $block_content;
        }

        $attributes = $block['attrs'];
        $block_id = $attributes['clientId'] ?? '';
        $default_attributes = require ATHEMES_BLOCKS_PATH . 'build/blocks/'. $this->id .'/attributes.php';

        $css = new BlockCss( $attributes, $block_id, $default_attributes );
        $style_tag = $css->get_block_style_tag();

        // Insert the style tag inside the block content.
        if ( ! empty( $style_tag ) ) {
            $wrapper_class = 'at-block-' . $block_id;
            $wrapper_pos = strpos( $block_content, $wrapper_class );
            
            if ( $wrapper_pos !== false ) {
                $closing_bracket_pos = strpos( $block_content, '>', $wrapper_pos );

                if ( $closing_bracket_pos !== false ) {
                    $block_content = substr_replace( $block_content, $style_tag, $closing_bracket_pos + 1, 0 );
                }
            }
        }

        return $block_content;
    }
}