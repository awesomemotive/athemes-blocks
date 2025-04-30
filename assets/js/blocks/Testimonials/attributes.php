<?php

/**
 * Attributes for the Testimonials block.
 * 
 * @package aThemes_Blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

include_once ATHEMES_BLOCKS_PATH . 'includes/Blocks/Helper/Attributes.php';

use AThemes_Blocks\Blocks\Helper\Attributes;

/**
 * Filter the number of testimonials.
 * 
 * @param int $number_of_testimonials The number of testimonials.
 * @return int The number of testimonials.
 */
$number_of_testimonials = apply_filters( 'atblocks_testimonials_max_amount', 40 );

// Testimonials content attributes.
$testimonials_content_attributes = array();
for ( $i = 1; $i <= $number_of_testimonials; $i++ ) {
    $testimonials_content_attributes['image' . $i] = array(
        'type' => 'object',
        'default' => array(
            'innerSettings' => array(
                'image' => array(
                    'default' => '',
                ),
            ),
        ),
    );

    $testimonials_content_attributes['testimonialText' . $i] = array(
        'type' => 'string',
        'default' => '',
    );

    $testimonials_content_attributes['name' . $i] = array(
        'type' => 'string',
        'default' => '',
    );

    $testimonials_content_attributes['company' . $i] = array(
        'type' => 'string',
        'default' => '',
    );
}

return array_merge(
    Attributes::get_block_core_attributes(),
    
    // General - Content -----------------------------
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
                    '{{WRAPPER}} .at-block-testimonials__wrapper',
                ),
                'property' => 'justify-content',
            ),
        ),
        'testimonialsAmount' => array(
            'type' => 'number',
            'default' => 3,
        ),
        'columns' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 1,
                ),
                'tablet' => array(
                    'value' => 1,
                ),
                'mobile' => array(
                    'value' => 1,
                ),
            ),
        ),
        'columnsGap' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 20,
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
                    '{{WRAPPER}} .at-block-testimonials__item'
                ),
                'property' => 'margin-right',
            ),
        ),
    ),
  
    // General - Images -----------------------------
    $testimonials_content_attributes,
    array(
        'imagePosition' => array(
            'type' => 'string',
            'default' => 'top',
        ),
        'imageStyle' => array(
            'type' => 'string',
            'default' => 'circle',
        ),
        'imageSize' => array(
            'type' => 'string',
            'default' => 'thumbnail',
        ),
        'imageWidth' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 85,
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
        ),
    ),

    // General - Carousel -----------------------------
    array(
        'carouselPauseOnHover' => array(
            'type' => 'boolean',
            'default' => true,
        ),
        'carouselAutoplay' => array(
            'type' => 'boolean',
            'default' => true,
        ),
        'carouselAutoplaySpeed' => array(
            'type' => 'number',
            'default' => 3000,
        ),
        'carouselLoop' => array(
            'type' => 'boolean',
            'default' => true,
        ),
        'carouselTransitionDuration' => array(
            'type' => 'number',
            'default' => 1000,
        ),
        'carouselNavigation' => array(
            'type' => 'string',
            'default' => 'both',
        ),
    ),

    // Style - Content -----------------------------
    array(
        'contentColor' => array(
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
                    '{{WRAPPER}} .at-block-testimonials__content',
                    '{{WRAPPER}} .at-block-testimonials__content:hover',
                ),
                'property' => 'color',
            ),
        ),
    ),
    Attributes::get_typography_attributes(
        'contentTypography',
        array(
            'fontFamily' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__content'
                    ),
                    'property' => 'font-family',
                )
            ),
            'fontSize' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__content'
                    ),
                    'property' => 'font-size',
                )
            ),
            'fontWeight' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__content'
                    ),
                    'property' => 'font-weight',
                )
            ),
            'fontStyle' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__content'
                    ),
                    'property' => 'font-style',
                )
            ),
            'textTransform' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__content'
                    ),
                    'property' => 'text-transform',
                )
            ),
            'textDecoration' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__content'
                    ),
                    'property' => 'text-decoration',
                )
            ),
            'lineHeight' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__content'
                    ),
                    'property' => 'line-height',
                )
            ),
            'letterSpacing' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__content'
                    ),
                    'property' => 'letter-spacing',
                )
            ),
        )
    ),
    array(
        'contentBottomSpacing' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 25,
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
                    '{{WRAPPER}} .at-block-testimonials__content'
                ),
                'property' => 'margin-bottom',
            ),
        ),
    ),

    // Style - Name -----------------------------
    array(
        'nameColor' => array(
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
                    '{{WRAPPER}} .at-block-testimonials__name'
                ),
                'property' => 'color',
            ),
        )
    ),
    Attributes::get_typography_attributes(
        'nameTypography',
        array(
            'fontFamily' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__name'
                    ),
                    'property' => 'font-family',
                )
            ),
            'fontSize' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__name'
                    ),
                    'property' => 'font-size',
                )
            ),
            'fontWeight' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__name'
                    ),
                    'property' => 'font-weight',
                )
            ),
            'fontStyle' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__name'
                    ),
                    'property' => 'font-style',
                )
            ),
            'textTransform' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__name'
                    ),
                    'property' => 'text-transform',
                )
            ),
            'textDecoration' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__name'
                    ),
                    'property' => 'text-decoration',
                )
            ),
            'lineHeight' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__name'
                    ),
                    'property' => 'line-height',
                )
            ),
            'letterSpacing' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__name'
                    ),
                    'property' => 'letter-spacing',
                )
            ),
        )
    ),
    array(
        'nameBottomSpacing' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 10,
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
                    '{{WRAPPER}} .at-block-testimonials__name'
                ),
                'property' => 'margin-bottom',
            ),
        ),
    ),

    // Style - Company -----------------------------
    array(
        'companyColor' => array(
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
                    '{{WRAPPER}} .at-block-testimonials__company'
                ),
                'property' => 'color',
            ),
        )
    ),
    Attributes::get_typography_attributes(
        'companyTypography',
        array(
            'fontFamily' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__company'
                    ),
                    'property' => 'font-family',
                )
            ),
            'fontSize' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__company'
                    ),
                    'property' => 'font-size',
                )
            ),
            'fontWeight' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__company'
                    ),
                    'property' => 'font-weight',
                )
            ),
            'fontStyle' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__company'
                    ),
                    'property' => 'font-style',
                )
            ),
            'textTransform' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__company'
                    ),
                    'property' => 'text-transform',
                )
            ),
            'textDecoration' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__company'
                    ),
                    'property' => 'text-decoration',
                )
            ),
            'lineHeight' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__company'
                    ),
                    'property' => 'line-height',
                )
            ),
            'letterSpacing' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__company'
                    ),
                    'property' => 'letter-spacing',
                )
            ),
        )
    ),

    // Style - Navigation -----------------------------
    array(
        'arrowSize' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 24,
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
                    '{{WRAPPER}} .at-block-testimonials__nav-arrow'
                ),
                'property' => 'font-size',
            ),
        ),
        'arrowBorderSize' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 2,
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
                    '{{WRAPPER}} .at-block-testimonials__nav-arrow'
                ),
                'property' => 'border-width',
            ),
        ),
        'arrowBorderRadius' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 50,
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
                    '{{WRAPPER}} .at-block-testimonials__nav-arrow'
                ),
                'property' => 'border-radius',
            ),
        ),
        'dotsVerticalSpacing' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 10,
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
                    '{{WRAPPER}} .at-block-testimonials__dots'
                ),
                'property' => 'margin-top',
            ),
        ),
        'navigationColor' => array(
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
                    '{{WRAPPER}} .at-block-testimonials__nav-arrow'
                ),
                'property' => 'color',
            ),
        ),
    ),

    // Style - Background -----------------------------
    array(
        'cardBackgroundColor' => array(
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
                    '{{WRAPPER}} .at-block-testimonials__wrapper'
                ),
                'property' => 'background-color',
            ),
        ),
    ),

    // Style - Border -----------------------------
    Attributes::get_border_attributes(
        'cardBorder',
        array(
            'borderStyle' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__wrapper'
                    ),
                    'property' => 'border-style',
                )
            ),
            'borderWidth' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__wrapper'
                    ),
                    'property' => 'border-{{DIRECTION}}-width',
                )
            ),
            'borderRadius' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__wrapper'
                    ),
                    'property' => 'border-{{DIRECTION}}-radius',
                )
            ),
            'borderColor' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__wrapper' => '{{VALUE}}',
                        '{{WRAPPER}} .at-block-testimonials__wrapper:hover' => '{{HOVER}}',
                    ),
                    'property' => 'border-color',
                )
            ),
        )
    ),

    // Style - Spacing -----------------------------
    array(
        'cardPadding' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 20,
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
                    '{{WRAPPER}} .at-block-testimonials__item'
                ),
                'property' => 'padding',
            ),
        ),
    ),
        
    // Advanced -----------------------------
    Attributes::get_block_advanced_panel_attributes(),
);