<?php

/**
 * The Heading block.
 * 
 * @package aThemes_Blocks
 */

namespace AThemes_Blocks\Blocks;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

use AThemes_Blocks\Blocks\BlockBaseText;

class Heading extends BlockBaseText {

    /**
     * Constructor.
     *
     */
    public function __construct() {
        $this->id = 'Heading';
        $this->slug = 'heading';

        parent::__construct();

        // Register Google Fonts hooks.
        $this->register_google_fonts_hooks();
    }
}