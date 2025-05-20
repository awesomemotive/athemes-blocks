<?php 

/**
 * Sydney Theme Integration.
 * 
 * @package aThemes_Blocks
 */

namespace AThemes_Blocks\Integration\Themes;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Sydney {

    /**
     * Constructor.
     * 
     */
    public function __construct() {

        // Check if the Sydney theme is active.
        $theme = wp_get_theme();
        if ( 'Sydney' !== $theme->name ) {
            return;
        }

        // Setup athemes blocks filters.
        add_filter( 'athemes_blocks_flex_container_content_box_width_desktop', array( $this, 'get_content_box_width_desktop' ) );
        add_filter( 'athemes_blocks_flex_container_content_box_width_tablet', array( $this, 'get_content_box_width_tablet' ) );
        add_filter( 'athemes_blocks_flex_container_content_box_width_mobile', array( $this, 'get_content_box_width_mobile' ) );
    }

    /**
     * Get the content box width for the desktop.
     * 
     * @return int
     */
    public function get_content_box_width_desktop(): int {
        return 1140;
    }

    /**
     * Get the content box width for the tablet.
     * 
     * @return int
     */
    public function get_content_box_width_tablet(): int {
        return 1024;
    }

    /**
     * Get the content box width for the mobile.
     * 
     * @return int
     */
    public function get_content_box_width_mobile(): int {
        return 767;
    }
}