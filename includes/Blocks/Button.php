<?php

/**
 * The Button block.
 * 
 * @package aThemes_Blocks
 */

namespace AThemes_Blocks\Blocks;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

use AThemes_Blocks\Blocks\BlockBaseText;

class Button extends BlockBaseText {

    /**
     * Constructor.
     *
     */
    public function __construct() {
        $this->id = 'Button';
        $this->slug = 'button';

        parent::__construct();

        // Register Google Fonts hooks.
        $this->register_google_fonts_hooks();
    }
}