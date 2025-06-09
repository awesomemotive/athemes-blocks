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

    // ### Block Controls #######################
    array(
        'align' => array(
            'type' => 'string',
            'default' => 'none'
        )
    ),
    
    // General - Content -----------------------------
    array(
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
                    'value' => 20,
                    'unit' => 'px',
                ),
                'mobile' => array(
                    'value' => 20,
                    'unit' => 'px',
                ),
            ),
        ),
        'contentGap' => array(
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
                    '{{WRAPPER}}'
                ),
                'property' => '--at-block-testimonials-content-gap',
            ),
        ),
        'alignment' => array(
            'type' => 'string',
            'default' => 'center',
        ),
        'verticalAlignment' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 'flex-start',
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
                    '{{WRAPPER}}'
                ),
                'property' => '--atb-block-testimonials-vertical-alignment',
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
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}} .at-block-testimonials__item-image'
                ),
                'property' => '--at-block-testimonials-image-width',
            ),
        ),
    ),

    // General - Carousel -----------------------------
    array(
        'displayCarouselNavigation' => array(
            'type' => 'boolean',
            'default' => true,
        ),
        'carouselPauseOnHover' => array(
            'type' => 'boolean',
            'default' => true,
        ),
        'carouselAutoplay' => array(
            'type' => 'boolean',
            'default' => false,
        ),
        'carouselAutoplaySpeed' => array(
            'type' => 'number',
            'default' => 5000,
        ),
        'carouselLoop' => array(
            'type' => 'boolean',
            'default' => true,
        ),
        'carouselAutoHeight' => array(
            'type' => 'boolean',
            'default' => false,
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
                    '{{WRAPPER}} .at-block-testimonials__item-text',
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
                        '{{WRAPPER}} .at-block-testimonials__item-text'
                    ),
                    'property' => 'font-family',
                )
            ),
            'fontSize' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__item-text'
                    ),
                    'property' => 'font-size',
                )
            ),
            'fontWeight' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__item-text'
                    ),
                    'property' => 'font-weight',
                )
            ),
            'fontStyle' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__item-text'
                    ),
                    'property' => 'font-style',
                )
            ),
            'textTransform' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__item-text'
                    ),
                    'property' => 'text-transform',
                )
            ),
            'textDecoration' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__item-text'
                    ),
                    'property' => 'text-decoration',
                )
            ),
            'lineHeight' => array(
                'default' => array(
                    'desktop' => array(
                        'value' => '',
                        'unit' => 'em',
                    ),
                    'tablet' => array(
                        'value' => '',
                        'unit' => 'em',
                    ),
                    'mobile' => array(
                        'value' => '',
                        'unit' => 'em',
                    ),
                ),
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__item-text'
                    ),
                    'property' => 'line-height',
                )
            ),
            'letterSpacing' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__item-text'
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
                    '{{WRAPPER}} .at-block-testimonials__item-text'
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
                    '{{WRAPPER}} .at-block-testimonials__item-name'
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
                        '{{WRAPPER}} .at-block-testimonials__item-name'
                    ),
                    'property' => 'font-family',
                )
            ),
            'fontSize' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__item-name'
                    ),
                    'property' => 'font-size',
                )
            ),
            'fontWeight' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__item-name'
                    ),
                    'property' => 'font-weight',
                )
            ),
            'fontStyle' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__item-name'
                    ),
                    'property' => 'font-style',
                )
            ),
            'textTransform' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__item-name'
                    ),
                    'property' => 'text-transform',
                )
            ),
            'textDecoration' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__item-name'
                    ),
                    'property' => 'text-decoration',
                )
            ),
            'lineHeight' => array(
                'default' => array(
                    'desktop' => array(
                        'value' => '',
                        'unit' => 'em',
                    ),
                    'tablet' => array(
                        'value' => '',
                        'unit' => 'em',
                    ),
                    'mobile' => array(
                        'value' => '',
                        'unit' => 'em',
                    ),
                ),
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__item-name'
                    ),
                    'property' => 'line-height',
                )
            ),
            'letterSpacing' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__item-name'
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
                    '{{WRAPPER}} .at-block-testimonials__item-name'
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
                    '{{WRAPPER}} .at-block-testimonials__item-company'
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
                        '{{WRAPPER}} .at-block-testimonials__item-company'
                    ),
                    'property' => 'font-family',
                )
            ),
            'fontSize' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__item-company'
                    ),
                    'property' => 'font-size',
                )
            ),
            'fontWeight' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__item-company'
                    ),
                    'property' => 'font-weight',
                )
            ),
            'fontStyle' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__item-company'
                    ),
                    'property' => 'font-style',
                )
            ),
            'textTransform' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__item-company'
                    ),
                    'property' => 'text-transform',
                )
            ),
            'textDecoration' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__item-company'
                    ),
                    'property' => 'text-decoration',
                )
            ),
            'lineHeight' => array(
                'default' => array(
                    'desktop' => array(
                        'value' => '',
                        'unit' => 'em',
                    ),
                    'tablet' => array(
                        'value' => '',
                        'unit' => 'em',
                    ),
                    'mobile' => array(
                        'value' => '',
                        'unit' => 'em',
                    ),
                ),
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__item-company'
                    ),
                    'property' => 'line-height',
                )
            ),
            'letterSpacing' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__item-company'
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
                    'value' => 50,
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
                    '{{WRAPPER}} .at-block-nav',
                ),
                'property' => '--at-block-nav-arrow-size',
            ),
        ),
        'arrowBorderSize' => array(
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
                    '{{WRAPPER}} .at-block-nav'
                ),
                'property' => '--at-block-nav-arrow-border-width',
            ),
        ),
        'arrowBorderRadius' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => '',
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
                    '{{WRAPPER}} .at-block-nav'
                ),
                'property' => '--at-block-nav-arrow-border-radius',
            ),
        ),
        'arrowOffset' => array(
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
                    '{{WRAPPER}} .at-block-nav'
                ),
                'property' => '--at-block-nav-arrow-offset',
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
                    '{{WRAPPER}} .at-block-nav'
                ),
                'property' => '--at-block-nav-color',
            ),
        ),
        'navigationBackgroundColor' => array(
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
                    '{{WRAPPER}} .at-block-nav'
                ),
                'property' => '--at-block-nav-background-color',
            ),
        ),
        'navigationBorderColor' => array(
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
                    '{{WRAPPER}} .at-block-nav'
                ),
                'property' => '--at-block-nav-border-color',
            ),
        ),
        'dotsOffset' => array(
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
                    '{{WRAPPER}} .swiper-pagination-bullets'
                ),
                'property' => '--at-block-dots-offset',
            ),
        ),
        'dotsColor' => array(
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
                    '{{WRAPPER}} .at-block-bullets--bullet' => '{{VALUE}}',
                ),
                'property' => '--at-block-dots-color',
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
                    '{{WRAPPER}} .at-block-testimonials__item-inner'
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
                        '{{WRAPPER}} .at-block-testimonials__item-inner'
                    ),
                    'property' => 'border-style',
                )
            ),
            'borderWidth' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__item-inner'
                    ),
                    'property' => 'border-{{DIRECTION}}-width',
                )
            ),
            'borderRadius' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__item-inner'
                    ),
                    'property' => 'border-{{DIRECTION}}-radius',
                )
            ),
            'borderColor' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-testimonials__item-inner' => '{{VALUE}}',
                        '{{WRAPPER}} .at-block-testimonials__item-inner:hover' => '{{HOVER}}',
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
                    'value' => array(
                        'top' => 50,
                        'right' => 80,
                        'bottom' => 80,
                        'left' => 80,
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
                    '{{WRAPPER}} .at-block-testimonials__item-inner'
                ),
                'property' => 'padding-{{DIRECTION}}',
            ),
        ),
        'cardMargin' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => array(
                        'top' => '',
                        'right' => '',
                        'bottom' => '',
                        'left' => '',
                    ),
                    'unit' => 'px',
                    'connect' => true,
                ),
                'tablet' => array(
                    'value' => array(
                        'top' => '',
                        'right' => '',
                        'bottom' => '',
                        'left' => '',
                    ),
                    'unit' => 'px',
                    'connect' => true,
                ),
                'mobile' => array(
                    'value' => array(
                        'top' => '',
                        'right' => '',
                        'bottom' => '',
                        'left' => '',
                    ),
                    'unit' => 'px',
                    'connect' => true,
                ),
            ),
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}} .at-block-testimonials__item-inner'
                ),
                'property' => 'margin-{{DIRECTION}}',
            ),
        ),
    ),
        
    // Advanced -----------------------------
    Attributes::get_block_advanced_panel_attributes(),
);