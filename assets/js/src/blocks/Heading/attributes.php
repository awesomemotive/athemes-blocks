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
    Attributes::get_typography_attributes(
        'typography',
        array(
            'fontFamily' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} h1',
                        '{{WRAPPER}} h2',
                        '{{WRAPPER}} h3',
                        '{{WRAPPER}} h4',
                        '{{WRAPPER}} h5',
                        '{{WRAPPER}} h6',
                        '{{WRAPPER}} p',
                        '{{WRAPPER}} span',
                        '{{WRAPPER}} div',
                    ),
                    'property' => 'font-family',
                )
            ),
            'fontSize' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} h1',
                        '{{WRAPPER}} h2',
                        '{{WRAPPER}} h3',
                        '{{WRAPPER}} h4',
                        '{{WRAPPER}} h5',
                        '{{WRAPPER}} h6',
                        '{{WRAPPER}} p',
                        '{{WRAPPER}} span',
                        '{{WRAPPER}} div',
                    ),
                    'property' => 'font-size',
                )
            ),
            'fontWeight' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} h1',
                        '{{WRAPPER}} h2',
                        '{{WRAPPER}} h3',
                        '{{WRAPPER}} h4',
                        '{{WRAPPER}} h5',
                        '{{WRAPPER}} h6',
                        '{{WRAPPER}} p',
                        '{{WRAPPER}} span',
                        '{{WRAPPER}} div',
                    ),
                    'property' => 'font-weight',
                )
            ),
            'fontStyle' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} h1',
                        '{{WRAPPER}} h2',
                        '{{WRAPPER}} h3',
                        '{{WRAPPER}} h4',
                        '{{WRAPPER}} h5',
                        '{{WRAPPER}} h6',
                        '{{WRAPPER}} p',
                        '{{WRAPPER}} span',
                        '{{WRAPPER}} div',
                    ),
                    'property' => 'font-style',
                )
            ),
            'textTransform' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} h1',
                        '{{WRAPPER}} h2',
                        '{{WRAPPER}} h3',
                        '{{WRAPPER}} h4',
                        '{{WRAPPER}} h5',
                        '{{WRAPPER}} h6',
                        '{{WRAPPER}} p',
                        '{{WRAPPER}} span',
                        '{{WRAPPER}} div',
                    ),
                    'property' => 'text-transform',
                )
            ),
            'textDecoration' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} h1',
                        '{{WRAPPER}} h2',
                        '{{WRAPPER}} h3',
                        '{{WRAPPER}} h4',
                        '{{WRAPPER}} h5',
                        '{{WRAPPER}} h6',
                        '{{WRAPPER}} p',
                        '{{WRAPPER}} span',
                        '{{WRAPPER}} div',
                    ),
                    'property' => 'text-decoration',
                )
            ),
            'lineHeight' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} h1',
                        '{{WRAPPER}} h2',
                        '{{WRAPPER}} h3',
                        '{{WRAPPER}} h4',
                        '{{WRAPPER}} h5',
                        '{{WRAPPER}} h6',
                        '{{WRAPPER}} p',
                        '{{WRAPPER}} span',
                        '{{WRAPPER}} div',
                    ),
                    'property' => 'line-height',
                )
            ),
            'letterSpacing' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} h1',
                        '{{WRAPPER}} h2',
                        '{{WRAPPER}} h3',
                        '{{WRAPPER}} h4',
                        '{{WRAPPER}} h5',
                        '{{WRAPPER}} h6',
                        '{{WRAPPER}} p',
                        '{{WRAPPER}} span',
                        '{{WRAPPER}} div',
                    ),
                    'property' => 'letter-spacing',
                )
            ),
        )
    ),
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