<?php

/**
 * Register blocks category.
 * 
 * @package AThemes_Blocks
 */

namespace AThemes_Blocks\Blocks\Common;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class RegisterBlocksCategory {

    /**
     * Constructor.
     * 
     */
    public function __construct() {
        add_filter( 'block_categories_all', array( $this, 'register_blocks_category' ) );
    }

    /**
     * Register blocks category.
     * 
     * @param array<array<string, string>> $categories
     * @return array<array<string, string>>
     */
    public function register_blocks_category( $categories ): array {
        $categories[] = array(
            'slug' => 'athemes-blocks',
            'title' => __( 'aThemes Blocks', 'athemes-blocks' ),
        );

        return $categories;
    }
}