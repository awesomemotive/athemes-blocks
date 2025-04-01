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

use AThemes_Blocks\Blocks\BlockBase;

class Heading extends BlockBase {

    /**
     * Constructor.
     *
     */
    public function __construct() {
        $this->id = 'Heading';
        
        parent::__construct();
    }
}