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
        add_filter( 'athemes_blocks_flex_container_attributes_values', array( $this, 'set_flex_container_attributes_values' ) );
    }

    /**
     * Set the flex container attributes values.
     * 
     * @param array<mixed> $attributes_values The attributes values.
     * @return array<mixed> The filtered attributes values.
     */
    public function set_flex_container_attributes_values( array $attributes_values ): array {
        
        // Content box width.
        $attributes_values['contentBoxWidth']['desktop'] = 1140;
        $attributes_values['contentBoxWidth']['tablet'] = 1024;
        $attributes_values['contentBoxWidth']['mobile'] = 767;

        // Columns gap.
        $attributes_values['columnsGap']['desktop'] = 15;
        $attributes_values['columnsGap']['tablet'] = 15;
        $attributes_values['columnsGap']['mobile'] = 15;

        // Rows gap.
        $attributes_values['rowsGap']['desktop'] = 15;
        $attributes_values['rowsGap']['tablet'] = 15;
        $attributes_values['rowsGap']['mobile'] = 15;
        
        return $attributes_values;
    }
}