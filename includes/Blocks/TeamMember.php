<?php

/**
 * The Team Member block.
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

class TeamMember extends BlockBase {

    use WithGoogleFonts;

    /**
     * Constructor.
     *
     */
    public function __construct() {
        $this->id = 'TeamMember';
        $this->slug = 'team-member';
        
        parent::__construct();

        // Initialize Google Fonts service.
        $this->init_google_fonts();
    }
}