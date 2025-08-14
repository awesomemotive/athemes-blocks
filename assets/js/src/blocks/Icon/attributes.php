<?php

/**
 * Attributes for the Icon block.
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
    
    // General - Content -----------------------------
    array(
        'icon' => array(
            'type' => 'object',
            'default' => array(
                'innerSettings' => array(
                    'iconData' => array(
                        'default' => array(
                            'library' => 'box-icons',
                            'type' => 'regular',
                            'icon' => 'bx-star-regular',
                        ),
                    ),
                ),
            ),
        ),
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
    ),
    
    // Style - Content -----------------------------
    array(
        'alignment' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 'center',
                ),
                'tablet' => array(
                    'value' => '',
                ),
                'mobile' => array(
                    'value' => '',
                ),
            ),
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}}',
                ),
                'property' => 'justify-content',
            ),
        ),
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
                    '{{WRAPPER}} .at-block-icon__icon svg' => '{{VALUE}}',
                    '{{WRAPPER}} .at-block-icon__icon:hover svg' => '{{HOVER}}',
                ),
                'property' => 'fill',
            ),
        ),
        'size' => array(
            'default' => array(
                'desktop' => array(
                    'value' => 60,
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
                    '{{WRAPPER}}'
                ),
                'property' => 'font-size',
            ),
        ),
        'rotate' => array(
            'default' => array(
                'desktop' => array(
                    'value' => 0,
                    'unit' => 'deg',
                ),
                'tablet' => array(
                    'value' => '',
                    'unit' => 'deg',
                ),
                'mobile' => array(
                    'value' => '',
                    'unit' => 'deg',
                ),
            ),
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}} .at-block-icon__icon' => 'rotate({{VALUE}}{{UNIT}});',
                ),
                'property' => 'transform',
            ),
        ),
        'iconWrapperBackgroundColor' => array(
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
                    '{{WRAPPER}} .at-block-icon__icon' => '{{VALUE}};',
                    '{{WRAPPER}} .at-block-icon__icon:hover' => '{{HOVER}};',
                ),
                'property' => 'background-color',
            ),
        ),
        'iconWrapperWidth' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => '',
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
                    '{{WRAPPER}} .at-block-icon__icon' => '{{VALUE}}{{UNIT}};',
                ),
                'property' => 'width',
            ),
        ),
        'iconWrapperHeight' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => '',
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
                    '{{WRAPPER}} .at-block-icon__icon' => '{{VALUE}}{{UNIT}};',
                ),
                'property' => 'height',
            ),
        ),
    ),
    Attributes::get_border_attributes( 'iconWrapperBorder', array(
        'borderStyle' => array(
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}} .at-block-icon__icon',
                ),
                'property' => 'border-style',
            ),
        ),
        'borderWidth' => array(
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}} .at-block-icon__icon',
                ),
                'property' => 'border-{{DIRECTION}}-width',
            ),
        ),
        'borderRadius' => array(
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}} .at-block-icon__icon',
                ),
                'property' => 'border-{{DIRECTION}}-radius',
            ),
        ),
        'borderColor' => array(
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}} .at-block-icon__icon' => '{{VALUE}}',
                    '{{WRAPPER}} .at-block-icon__icon:hover' => '{{HOVER}}',
                ),
                'property' => 'border-color',
            ),
        ),
    ) ),

    // Advanced -----------------------------
    Attributes::get_block_advanced_panel_attributes(),
);