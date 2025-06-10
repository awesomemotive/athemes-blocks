<?php

/**
 * The Google Maps block.
 * 
 * @package aThemes_Blocks
 */

namespace AThemes_Blocks\Blocks;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

use AThemes_Blocks\Blocks\BlockBase;

class GoogleMaps extends BlockBase {

    /**
     * Constructor.
     *
     */
    public function __construct() {
        $this->id = 'GoogleMaps';
        $this->slug = 'google-maps';
        
        parent::__construct();
    }
}