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
    Attributes::get_block_core_attributes(
        array(
            'content' => array(
                'type' => 'string',
                'default' => __( 'Click here', 'athemes-blocks' ),
            ),
        )
    ),
    
    // General - Presets -----------------------------
    array(
        'layout' => array(
            'type' => 'string',
            'default' => 'default',
        ),
    ),

    // General - Content -----------------------------
    array(
        'link' => array(
            'type' => 'object',
            'default' => array(
                'innerSettings' => array(
                    'linkUrl' => array(
                        'default' => '',
                    ),
                    'linkTarget' => array(
                        'default' => false,
                    ),
                    'linkNoFollow' => array(
                        'default' => false,
                    ),
                ),
            ),
        ),
        'enableIcon' => array(
            'type' => 'boolean',
            'default' => false,
        ),
        // 'icon' => array(
        //     'type' => 'object',
        //     'default' => array(
        //         'innerSettings' => array(
        //             'icon' => array(
        //                 'default' => 'arrow-right',
        //             ),
        //             'iconPosition' => array(
        //                 'default' => 'before',
        //             ),
        //             'iconGap' => array(
        //                 'default' => array(
        //                     'desktop' => array(
        //                         'value' => 4,
        //                         'unit' => 'px',
        //                     ),
        //                     'tablet' => array(
        //                         'value' => 4,
        //                         'unit' => 'px',
        //                     ),
        //                     'mobile' => array(
        //                         'value' => 4,
        //                         'unit' => 'px',
        //                     ),
        //                 )
        //             ),
        //         ),
        //     ),
        // ),
        'icon' => array(
            'type' => 'object',
            'default' => array(
                'library' => 'font-awesome',
                'category' => 'regular',
                'icon' => 'bxl500px',
            ),
        ),
        'buttonId' => array(
            'type' => 'string',
            'default' => '',
        ),
    ),

    // Style - Content -----------------------------
    array(
        'alignment' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 'flex-start',
                ),
                'tablet' => array(
                    'value' => 'center',
                ),
                'mobile' => array(
                    'value' => 'flex-end',
                ),
            ),
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}}',
                ),
                'property' => 'justify-content',
            ),
        ),
    ),

    // Style - Text -----------------------------
    Attributes::get_typography_attributes(
        'typography',
        array(
            'fontFamily' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} > a'
                    ),
                    'property' => 'font-family',
                )
            ),
            'fontSize' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} > a'
                    ),
                    'property' => 'font-size',
                )
            ),
            'fontWeight' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} > a'
                    ),
                    'property' => 'font-weight',
                )
            ),
            'fontStyle' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} > a'
                    ),
                    'property' => 'font-style',
                )
            ),
            'textTransform' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} > a'
                    ),
                    'property' => 'text-transform',
                )
            ),
            'textDecoration' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} > a'
                    ),
                    'property' => 'text-decoration',
                )
            ),
            'lineHeight' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} > a'
                    ),
                    'property' => 'line-height',
                )
            ),
            'letterSpacing' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} > a'
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
                    '{{WRAPPER}} > a' => '{{VALUE}}',
                    '{{WRAPPER}} > a:hover' => '{{HOVER}}',
                ),
                'property' => 'color',
            ),
        ),
    ),

    // Style - Background -----------------------------
    array(
        'buttonBackgroundColor' => array(
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
                    '{{WRAPPER}} > a' => '{{VALUE}}',
                    '{{WRAPPER}} > a:hover' => '{{HOVER}}',
                ),
                'property' => 'background-color',
            ),
        ),
    ),

    // Style - Border -----------------------------
    Attributes::get_border_attributes(
        'buttonBorder',
        array(
            'borderStyle' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} > a'
                    ),
                    'property' => 'border-style',
                )
            ),
            'borderWidth' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} > a'
                    ),
                    'property' => 'border-{{DIRECTION}}-width',
                )
            ),
            'borderRadius' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} > a'
                    ),
                    'property' => 'border-{{DIRECTION}}-radius',
                )
            ),
            'borderColor' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} > a' => '{{VALUE}}',
                        '{{WRAPPER}} > a:hover' => '{{HOVER}}',
                    ),
                    'property' => 'border-color',
                )
            ),
        )
    ),

    // Style - Spacing -----------------------------
    array(
        'buttonPadding' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => array(
                        'top' => '',
                        'right' => '',
                        'bottom' => '',
                        'left' => '',
                    ),
                    'connect' => true,
                    'unit' => 'px',
                ),
                'tablet' => array(
                    'value' => array(
                        'top' => '',
                        'right' => '',
                        'bottom' => '',
                        'left' => '',
                    ),
                    'connect' => true,
                    'unit' => 'px',
                ),
                'mobile' => array(
                    'value' => array(
                        'top' => '',
                        'right' => '',
                        'bottom' => '',
                        'left' => '',
                    ),
                    'connect' => true,
                    'unit' => 'px',
                ),
            ),
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}} > a',
                ),
                'property' => 'padding-{{DIRECTION}}',
            ),
        ),
    ),

    // Advanced -----------------------------
    Attributes::get_block_advanced_panel_attributes(),
);