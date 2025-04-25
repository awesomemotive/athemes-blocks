<?php

/**
 * The Image block.
 * 
 * @package aThemes_Blocks
 */

namespace AThemes_Blocks\Blocks;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

use AThemes_Blocks\Blocks\BlockBase;

class Image extends BlockBase {

    /**
     * Constructor.
     *
     */
    public function __construct() {
        $this->id = 'Image';
        $this->slug = 'image';
        
        parent::__construct();
    }
}