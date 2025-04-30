<?php

/**
 * The Testimonials block.
 * 
 * @package aThemes_Blocks
 */

namespace AThemes_Blocks\Blocks;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

use AThemes_Blocks\Blocks\BlockBase;

class Testimonials extends BlockBase {

    /**
     * Constructor.
     *
     */
    public function __construct() {
        $this->id = 'Testimonials';
        $this->slug = 'testimonials';
        
        parent::__construct();
    }
}