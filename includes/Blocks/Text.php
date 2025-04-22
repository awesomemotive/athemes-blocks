<?php

/**
 * The Text block.
 * 
 * @package aThemes_Blocks
 */

namespace AThemes_Blocks\Blocks;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

use AThemes_Blocks\Blocks\BlockBaseText;

class Text extends BlockBaseText {

    /**
     * Constructor.
     *
     */
    public function __construct() {
        $this->id = 'Text';
        $this->slug = 'text';

        parent::__construct();

        // Register Google Fonts hooks.
        $this->register_google_fonts_hooks();
    }
}