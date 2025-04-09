<?php

/**
 * Attributes for the Flex Container block.
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
    
    // General - Heading -----------------------------
    array(
        'htmlTag' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 'h2',
                ),
                'tablet' => array(
                    'value' => 'h2',
                ),
                'mobile' => array(
                    'value' => 'h2',
                ),
            ),
        ),
    ),
    
    // Style - Heading -----------------------------
    array(
        'alignment' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 'left',
                ),
                'tablet' => array(
                    'value' => 'left',
                ),
                'mobile' => array(
                    'value' => 'left',
                ),
            ),
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}}',
                ),
                'property' => 'text-align',
            ),
        ),
    ),
    Attributes::get_typography_attributes(),
    array(
        'color' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => array(
                        'defaultState' => '',
                        'hoverState' => ''
                    )
                ),
                'tablet' => array(
                    'value' => array(
                        'defaultState' => '',
                        'hoverState' => ''
                    )
                ),
                'mobile' => array(
                    'value' => array(
                        'defaultState' => '',
                        'hoverState' => ''
                    )
                ),
            ),
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}}' => '{{VALUE}}',
                    '{{WRAPPER}}:hover' => '{{HOVER}}',
                ),
                'property' => 'color',
            ),
        ),
    ),

    // Style - Link -----------------------------
    array(
        'linkColor' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => array(
                        'defaultState' => '',
                        'hoverState' => ''
                    )
                ),
                'tablet' => array(
                    'value' => array(
                        'defaultState' => '',
                        'hoverState' => ''
                    )
                ),
                'mobile' => array(
                    'value' => array(
                        'defaultState' => '',
                        'hoverState' => ''
                    )
                ),
            ),
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}} a' => '{{VALUE}}',
                    '{{WRAPPER}} a:hover' => '{{HOVER}}',
                ),
                'property' => 'color',
            ),
        ),
    ),
    
    // Advanced -----------------------------
    Attributes::get_block_advanced_panel_attributes(),
);