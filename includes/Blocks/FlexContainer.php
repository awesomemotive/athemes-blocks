<?php

/**
 * The Container block.
 * 
 * @package aThemes_Blocks
 */

namespace AThemes_Blocks\Blocks;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

use AThemes_Blocks\Blocks\BlockBase;

class FlexContainer extends BlockBase {

    /**
     * Constructor.
     *
     */
    public function __construct() {
        $this->id = 'FlexContainer';
        $this->slug = 'flex-container';
        
        parent::__construct();
    }
}