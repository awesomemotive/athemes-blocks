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
        'icon' => array(
            'type' => 'object',
            'default' => array(
                'innerSettings' => array(
                    'iconData' => array(
                        'default' => array(
                            'library' => '',
                            'type' => '',
                            'icon' => '',
                        ),
                    ),
                    'iconPosition' => array(
                        'default' => 'before',
                    ),
                    'iconGap' => array(
                        'default' => array(
                            'desktop' => array(
                                'value' => 10,
                                'unit' => 'px',
                            ),
                            'tablet' => array(
                                'value' => 10,
                                'unit' => 'px',
                            ),
                            'mobile' => array(
                                'value' => 10,
                                'unit' => 'px',
                            ),
                        ),
                        'css' => array(
                            'selectors' => array(
                                '{{WRAPPER}} .at-block-button__wrapper'
                            ),
                            'property' => 'gap',
                        ),
                    ),
                ),
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
                        '{{WRAPPER}} .at-block-button__wrapper > a'
                    ),
                    'property' => 'font-family',
                )
            ),
            'fontSize' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-button__wrapper > a'
                    ),
                    'property' => 'font-size',
                )
            ),
            'fontWeight' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-button__wrapper > a'
                    ),
                    'property' => 'font-weight',
                )
            ),
            'fontStyle' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-button__wrapper > a'
                    ),
                    'property' => 'font-style',
                )
            ),
            'textTransform' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-button__wrapper > a'
                    ),
                    'property' => 'text-transform',
                )
            ),
            'textDecoration' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-button__wrapper > a'
                    ),
                    'property' => 'text-decoration',
                )
            ),
            'lineHeight' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-button__wrapper > a'
                    ),
                    'property' => 'line-height',
                )
            ),
            'letterSpacing' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-button__wrapper > a'
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
                    '{{WRAPPER}} .at-block-button__wrapper > a' => '{{VALUE}}',
                    '{{WRAPPER}} .at-block-button__wrapper > a:hover' => '{{HOVER}}',
                ),
                'property' => 'color',
            ),
        ),
    ),

    // Style - Icon -----------------------------
    array(
        'iconColor' => array(
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
                    '{{WRAPPER}} .at-block-button__wrapper > a > svg' => '{{VALUE}}',
                    '{{WRAPPER}} .at-block-button__wrapper > a:hover > svg' => '{{HOVER}}',
                ),
                'property' => 'fill',
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
                    '{{WRAPPER}} .at-block-button__wrapper' => '{{VALUE}}',
                    '{{WRAPPER}} .at-block-button__wrapper:hover' => '{{HOVER}}',
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
                        '{{WRAPPER}} .at-block-button__wrapper'
                    ),
                    'property' => 'border-style',
                )
            ),
            'borderWidth' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-button__wrapper'
                    ),
                    'property' => 'border-{{DIRECTION}}-width',
                )
            ),
            'borderRadius' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-button__wrapper'
                    ),
                    'property' => 'border-{{DIRECTION}}-radius',
                )
            ),
            'borderColor' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-button__wrapper' => '{{VALUE}}',
                        '{{WRAPPER}} .at-block-button__wrapper:hover' => '{{HOVER}}',
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
                    '{{WRAPPER}} .at-block-button__wrapper',
                ),
                'property' => 'padding-{{DIRECTION}}',
            ),
        ),
    ),

    // Advanced -----------------------------
    Attributes::get_block_advanced_panel_attributes(),
);