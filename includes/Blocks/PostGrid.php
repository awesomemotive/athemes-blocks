<?php

/**
 * The Post Grid block.
 * 
 * @package aThemes_Blocks
 */

namespace AThemes_Blocks\Blocks;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

use AThemes_Blocks\Blocks\BlockBase;

class PostGrid extends BlockBase {

    /**
     * Constructor.
     *
     */
    public function __construct() {
        $this->id = 'PostGrid';
        $this->slug = 'post-grid';
        
        parent::__construct();
    }
}