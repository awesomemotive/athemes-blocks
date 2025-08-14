<?php

/**
 * The Icon block.
 * 
 * @package aThemes_Blocks
 */

namespace AThemes_Blocks\Blocks;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

use AThemes_Blocks\Blocks\BlockBase;

class Icon extends BlockBase {

    /**
     * Constructor.
     *
     */
    public function __construct() {
        $this->id = 'Icon';
        $this->slug = 'icon';
        
        parent::__construct();
    }
}