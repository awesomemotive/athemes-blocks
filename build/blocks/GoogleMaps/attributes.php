<?php

/**
 * Attributes for the Google Maps block.
 * 
 * @package aThemes_Blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

include_once ATHEMES_BLOCKS_PATH . 'includes/Blocks/Helper/Attributes.php';

use AThemes_Blocks\Blocks\Helper\Attributes;

return array_merge(
    Attributes::get_block_core_attributes(),

    // ### Block Controls #######################
    array(
        'align' => array(
            'type' => 'string',
            'default' => 'none'
        )
    ),

    array(
        // General - Map Settings -----------------------------
        'location' => array(
            'type' => 'string',
            'default' => '400 Executive Drive, Suite 208, West Palm Beach, Florida 33401, USA',
        ),
        'zoom' => array(
            'type' => 'number',
            'default' => 12,
        ),
        'height' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 300,
                    'unit' => 'px',
                ),
                'tablet' => array(
                    'value' => '',
                    'unit' => 'px',
                ),
                'mobile' => array(
                    'value' => '',
                    'unit' => 'px',
                ),
            ),
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}}' => '{{VALUE}}{{UNIT}};',
                ),
                'property' => '--atb-google-maps-height',
            ),
        ),
        'satelliteView' => array(
            'type' => 'boolean',
            'default' => false,
        ),
        'language' => array(
            'type' => 'boolean',
            'default' => 'en',
        ),
    ),
    
    // Advanced -----------------------------
    Attributes::get_block_advanced_panel_attributes(),
);