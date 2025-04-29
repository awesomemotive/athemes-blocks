<?php

/**
 * Attributes for the Image block.
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
        'image' => array(
            'type' => 'object',
            'default' => array(
                'innerSettings' => array(
                    'image' => array(
                        'default' => '',
                    ),
                    'disableLazyLoad' => array(
                        'default' => false,
                    ),
                    'size' => array(
                        'default' => 'large',
                    ),
                    'caption' => array(
                        'default' => 'none',
                    ),
                    'captionText' => array(
                        'default' => '',
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
                    'value' => '',
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
        'width' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 100,
                    'unit' => '%',
                ),
                'tablet' => array(
                    'value' => '',
                    'unit' => '%',
                ),
                'mobile' => array(
                    'value' => '',
                    'unit' => '%',
                ),
            ),
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}}' => '{{VALUE}}{{UNIT}};',
                ),
                'property' => '--atb-image-width',
            ),
        ),
        'maxWidth' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 100,
                    'unit' => '%',
                ),
                'tablet' => array(
                    'value' => '',
                    'unit' => '%',
                ),
                'mobile' => array(
                    'value' => '',
                    'unit' => '%',
                ),
            ),
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}}' => '{{VALUE}}{{UNIT}};',
                ),
                'property' => '--atb-image-max-width',
            ),
        ),
        'height' => array(
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
                    '{{WRAPPER}}' => '{{VALUE}}{{UNIT}};',
                ),
                'property' => '--atb-image-height',
            ),
        ),
    ),
    // array(
    //     'hoverAnimation' => array(
    //         'type' => 'object',
    //         'default' => array(
    //             'desktop' => array(
    //                 'value' => '',
    //             ),
    //             'tablet' => array(
    //                 'value' => '',
    //             ),
    //             'mobile' => array(
    //                 'value' => '',
    //             ),
    //         ),
    //         'css' => array(
    //             'selectors' => array(
    //                 '{{WRAPPER}} .at-block-image__image:hover' => '{{VALUE}} 250ms ease-in-out forwards',
    //             ),
    //             'property' => 'animation',
    //         ),
    //     ),
    // ),
    Attributes::get_border_attributes(
        'imageBorder',
        array(
            'borderStyle' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-image__image'
                    ),
                    'property' => 'border-style',
                )
            ),
            'borderWidth' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-image__image'
                    ),
                    'property' => 'border-{{DIRECTION}}-width',
                )
            ),
            'borderRadius' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-image__image'
                    ),
                    'property' => 'border-{{DIRECTION}}-radius',
                )
            ),
            'borderColor' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-image__image' => '{{VALUE}}',
                        '{{WRAPPER}} .at-block-image__image:hover' => '{{HOVER}}',
                    ),
                    'property' => 'border-color',
                )
            ),
        )
    ),

    // Style - Caption -----------------------------
    array(
        'captionAlignment' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => '',
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
                    '{{WRAPPER}} .at-block-image__caption',
                ),
                'property' => 'text-align',
            ),
        ),
        'captionTextColor' => array(
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
                    '{{WRAPPER}} .at-block-image__caption-text' => '{{VALUE}}',
                    '{{WRAPPER}} .at-block-image__caption-text:hover' => '{{HOVER}}',
                ),
                'property' => 'color',
            ),
        ),
        'captionBackgroundColor' => array(
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
                    '{{WRAPPER}} .at-block-image__caption' => '{{VALUE}}',
                    '{{WRAPPER}} .at-block-image__caption:hover' => '{{HOVER}}',
                ),
                'property' => 'background-color',
            ),
        ),
    ),
    Attributes::get_border_attributes(
        'captionBorder',
        array(
            'borderStyle' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-image__caption'
                    ),
                    'property' => 'border-style',
                )
            ),
            'borderWidth' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-image__caption'
                    ),
                    'property' => 'border-{{DIRECTION}}-width',
                )
            ),
            'borderRadius' => array(
                'default' => array(
                    'desktop' => array(
                        'value' => array(
                            'top' => 4,
                            'right' => 4,
                            'bottom' => 4,
                            'left' => 4,
                        ),
                        'unit' => 'px',
                    ),
                    'tablet' => array(
                        'value' => array(
                            'top' => '',
                            'right' => '',
                            'bottom' => '',
                            'left' => '',
                        ),
                        'unit' => 'px',
                    ),
                    'mobile' => array(
                        'value' => array(
                            'top' => '',
                            'right' => '',
                            'bottom' => '',
                            'left' => '',
                        ),
                        'unit' => 'px',
                    ),
                ),
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-image__caption'
                    ),
                    'property' => 'border-{{DIRECTION}}-radius',
                )
            ),
            'borderColor' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-image__caption' => '{{VALUE}}',
                        '{{WRAPPER}} .at-block-image__caption:hover' => '{{HOVER}}',
                    ),
                    'property' => 'border-color',
                )
            ),
        )
    ),
    Attributes::get_typography_attributes(
        'captionTypography',
        array(
            'fontFamily' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-image__caption'
                    ),
                    'property' => 'font-family',
                )
            ),
            'fontSize' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-image__caption'
                    ),
                    'property' => 'font-size',
                )
            ),
            'fontWeight' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-image__caption'
                    ),
                    'property' => 'font-weight',
                )
            ),
            'fontStyle' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-image__caption'
                    ),
                    'property' => 'font-style',
                )
            ),
            'textTransform' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-image__caption'
                    ),
                    'property' => 'text-transform',
                )
            ),
            'textDecoration' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-image__caption'
                    ),
                    'property' => 'text-decoration',
                )
            ),
            'lineHeight' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-image__caption'
                    ),
                    'property' => 'line-height',
                )
            ),
            'letterSpacing' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-image__caption'
                    ),
                    'property' => 'letter-spacing',
                )
            ),
        )
    ),
    array(
        'captionSpacing' => array(
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
                    '{{WRAPPER}} .at-block-image__caption' => '{{VALUE}}{{UNIT}};',
                ),
                'property' => 'margin-top',
            ),
        ),
    ),

    // Advanced -----------------------------
    Attributes::get_block_advanced_panel_attributes(),
);