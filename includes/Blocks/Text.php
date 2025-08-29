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

use AThemes_Blocks\Blocks\BlockBase;
use AThemes_Blocks\Blocks\Traits\WithGoogleFonts;

class Text extends BlockBase {

    use WithGoogleFonts;

    /**
     * Constructor.
     *
     */
    public function __construct() {
        $this->id = 'Text';
        $this->slug = 'text';

        parent::__construct();

        // Initialize Google Fonts service.
        $this->init_google_fonts();
    }
}