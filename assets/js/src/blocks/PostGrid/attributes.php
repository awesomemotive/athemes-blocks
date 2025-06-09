<?php

/**
 * Attributes for the Post Grid block.
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

    // ### General #######################

    // ------------------------------------
    // --- Post Card Layout ---------------
    // ------------------------------------
    array(
        'postCardLayout' => array(
            'type' => 'string',
            'default' => 'default'
        )
    ),

    // ------------------------------------
    // --- Query Settings -----------------
    // ------------------------------------
    array(
        'postType' => array(
            'type' => 'string',
            'default' => 'post'
        ),
        'taxonomy' => array(
            'type' => 'string',
            'default' => 'category'
        ),
        'taxonomyTerm' => array(
            'type' => 'string',
            'default' => 'all'
        ),
        'postsPerPage' => array(
            'type' => 'number',
            'default' => 6
        ),
        'excludeCurrentPost' => array(
            'type' => 'boolean',
            'default' => false
        ),
        'stickyPosts' => array(
            'type' => 'string',
            'default' => 'ignore'
        ),
        'offsetStartingPoint' => array(
            'type' => 'boolean',
            'default' => false
        ),
        'offsetStartingPointValue' => array(
            'type' => 'number',
            'default' => 1
        ),
        'orderBy' => array(
            'type' => 'string',
            'default' => 'modified'
        ),
        'order' => array(
            'type' => 'string',
            'default' => 'asc'
        ),
    ),

    // ------------------------------------
    // --- Carousel -----------------------
    // ------------------------------------
    array(
        'displayCarousel' => array(
            'type' => 'boolean',
            'default' => false,
        ),
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

    // ------------------------------------
    // --- Pagination ---------------------
    // ------------------------------------
    array(
        'pagination' => array(
            'type' => 'boolean',
            'default' => false
        ),
        'paginationPageLimit' => array(
            'type' => 'number',
            'default' => 10
        ),
        'paginationType' => array(
            'type' => 'string',
            'default' => 'default'
        ),
        'paginationAlignment' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 'center',
                ),
                'tablet' => array(
                    'value' => 'center',
                ),
                'mobile' => array(
                    'value' => 'center',
                ),
            ),
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}} .at-block-post-grid__pagination'
                ),
                'property' => 'justify-content',
            ),
        ),
    ),

    // ------------------------------------
    // --- Image --------------------------
    // ------------------------------------
    array(
        'displayImage' => array(
            'type' => 'boolean',
            'default' => true
        ),
        'imageRatio' => array(
            'type' => 'string',
            'default' => 'default'
        ),
        'imageSize' => array(
            'type' => 'string',
            'default' => 'full'
        ),
        'imagePosition' => array(
            'type' => 'string',
            'default' => 'top'
        ),
    ),

    // ------------------------------------
    // --- Content ------------------------
    // ------------------------------------
    array(
        'displaySaleBadge' => array(
            'type' => 'boolean',
            'default' => true
        ),
        'displayTitle' => array(
            'type' => 'boolean',
            'default' => true
        ),
        'titleTag' => array(
            'type' => 'string',
            'default' => 'h4'
        ),
        'displayAuthor' => array(
            'type' => 'boolean',
            'default' => true
        ),
        'displayDate' => array(
            'type' => 'boolean',
            'default' => true
        ),
        'displayComments' => array(
            'type' => 'boolean',
            'default' => true
        ),
        'displayReviewsRating' => array(
            'type' => 'boolean',
            'default' => true
        ),
        'displayPrice' => array(
            'type' => 'boolean',
            'default' => true
        ),
        'displayTaxonomy' => array(
            'type' => 'boolean',
            'default' => true,
        ),
        'displayMetaIcon' => array(
            'type' => 'boolean',
            'default' => true,
        ),
        'displayExcerpt' => array(
            'type' => 'boolean',
            'default' => true,
        ),
        'excerptMaxWords' => array(
            'type' => 'number',
            'default' => 15,
        ),
    ),

    // ------------------------------------
    // --- Button -------------------------
    // ------------------------------------
    array(
        'displayButton' => array(
            'type' => 'boolean',
            'default' => true,
        ),
        'buttonOpenInNewTab' => array(
            'type' => 'boolean',
            'default' => false,
        ),
    ),

    // ### Style #######################
    
    // ------------------------------------
    // --- Layout -------------------------
    // ------------------------------------
    array(
        'columns' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 3,
                ),
                'tablet' => array(
                    'value' => 2,
                ),
                'mobile' => array(
                    'value' => 1,
                ),
            ),
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}}'
                ),
                'property' => '--atb-post-grid-columns',
            ),
        ),
        'columnsGap' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 15,
                    'unit' => 'px',
                ),
                'tablet' => array(
                    'value' => 15,
                    'unit' => 'px',
                ),
                'mobile' => array(
                    'value' => 15,
                    'unit' => 'px',
                ),
            ),
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}}'
                ),
                'property' => '--atb-post-grid-columns-gap',
            ),
        ),
        'rowsGap' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 15,
                    'unit' => 'px',
                ),
                'tablet' => array(
                    'value' => 15,
                    'unit' => 'px',
                ),
                'mobile' => array(
                    'value' => 15,
                    'unit' => 'px',
                ),
            ),
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}}'
                ),
                'property' => '--atb-post-grid-rows-gap',
            ),
        ),
    ),
    Attributes::get_border_attributes(
        'cardBorder',
        array(
            'borderStyle' => array(
                'default' => array(
                    'desktop' => array(
                        'value' => 'default',
                    ),
                    'tablet' => array(
                        'value' => 'default',
                    ),
                    'mobile' => array(
                        'value' => 'default',
                    ),
                ),
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__item'
                    ),
                    'property' => 'border-style',
                )
            ),
            'borderWidth' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__item'
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
                        '{{WRAPPER}} .at-block-post-grid__item',
                        '{{WRAPPER}}.has-image-overlay .at-block-post-grid__image:before'
                    ),
                    'property' => 'border-{{DIRECTION}}-radius',
                )
            ),
            'borderColor' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__item' => '{{VALUE}}',
                    ),
                    'property' => 'border-color',
                )
            ),
        )
    ),
    array(
        'cardBackgroundColor' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => array(
                        'defaultState' => '#f5f5f5',
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
                    '{{WRAPPER}} .at-block-post-grid__item'
                ),
                'property' => 'background-color',
            ),
        ),
        'cardHorizontalAlignment' => array(
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
                    '{{WRAPPER}} .at-block-post-grid__item',
                ),
                'property' => 'text-align',
            ),
        ),
        'cardVerticalAlignment' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 'stretch',
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
                    '{{WRAPPER}} .at-block-post-grid__items'
                ),
                'property' => 'align-items',
            ),
        ),
        'cardPadding' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => array(
                        'top' => 30,
                        'right' => 30,
                        'bottom' => 30,
                        'left' => 30,
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
                    '{{WRAPPER}}.card-padding .at-block-post-grid__item',
                    '{{WRAPPER}}.content-padding .at-block-post-grid__item .at-block-post-grid__content',
                ),
                'property' => 'padding-{{DIRECTION}}',
            ),
        ),
        'cardPaddingToContentOnly' => array(
            'type' => 'boolean',
            'default' => false,
        ),
        'carouselPadding' => array(
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
                    '{{WRAPPER}} .at-block-post-grid__swiper .swiper-slide'
                ),
                'property' => 'padding-{{DIRECTION}}',
            ),
        ),
    ),

    // ------------------------------------
    // --- Carousel navigation ------------
    // ------------------------------------
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
                    'value' => 0,
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

    // ------------------------------------
    // --- Image --------------------------
    // ------------------------------------
    array(
        'imageWidth' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 35,
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
                    '{{WRAPPER}}'
                ),
                'property' => '--atb-post-grid-image-width',
            ),
        ),
        'imageGap' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 15,
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
                'property' => '--atb-post-grid-image-gap',
            ),
        ),
        'imageBorderRadius' => array(
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
                    '{{WRAPPER}} .at-block-post-grid__image',
                    '{{WRAPPER}} .at-block-post-grid__image img'
                ),
                'property' => 'border-{{DIRECTION}}-radius',
            ),
        ),
        'imageBottomSpacing' => array(
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
                    '{{WRAPPER}} .at-block-post-grid__image'
                ),
                'property' => 'margin-bottom',
            ),
        ),
        'imageOverlay' => array(
            'type' => 'boolean',
            'default' => false,
        ),
        'imageOverlayColor' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => array(
                        'defaultState' => '#212121',
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
                    '{{WRAPPER}}',
                ),
                'property' => '--atb-image-overlay-color',
            )
        ),
        'imageOverlayOpacity' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 0.5,
                    'unit' => '',
                ),
                'tablet' => array(
                    'value' => '',
                    'unit' => '',
                ),
                'mobile' => array(
                    'value' => '',
                    'unit' => '',
                ),
            ),
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}}',
                ),
                'property' => '--atb-image-overlay-opacity',
            )
        ),
    ),

    // ------------------------------------
    // --- Sale Badge ---------------------
    // ------------------------------------
    array(
        'saleBadgePosition' => array(
            'type' => 'string',
            'default' => 'top-left',
        ),
        'saleBadgeColor' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => array(
                        'defaultState' => '#FFF',
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
                    '{{WRAPPER}}'
                ),
                'property' => '--atb-post-grid-sale-badge-text-color',
            ),
        ),
        'saleBadgeBackgroundColor' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => array(
                        'defaultState' => '#212121',
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
                    '{{WRAPPER}}'
                ),
                'property' => '--atb-post-grid-sale-badge-background-color',
            ),
        ),
    ),
    Attributes::get_typography_attributes(
        'saleBadgeTypography',
        array(
            'fontFamily' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .onsale'
                    ),
                    'property' => 'font-family',
                )
            ),
            'fontSize' => array(
                'default' => array(
                    'desktop' => array(
                        'value' => 0.9,
                        'unit' => 'rem',
                    ),
                    'tablet' => array(
                        'value' => '',
                        'unit' => 'rem',
                    ),
                    'mobile' => array(
                        'value' => '',
                        'unit' => 'rem',
                    ),
                ),
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .onsale'
                    ),
                    'property' => 'font-size',
                )
            ),
            'fontWeight' => array(
                'default' => array(
                    'desktop' => array(
                        'value' => 400,
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
                        '{{WRAPPER}} .onsale'
                    ),
                    'property' => 'font-weight',
                )
            ),
            'fontStyle' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .onsale'
                    ),
                    'property' => 'font-style',
                )
            ),
            'textTransform' => array(
                'default' => array(
                    'desktop' => array(
                        'value' => 'uppercase',
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
                        '{{WRAPPER}} .onsale'
                    ),
                    'property' => 'text-transform',
                )
            ),
            'textDecoration' => array(
                'default' => array(
                    'desktop' => array(
                        'value' => 'none',
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
                        '{{WRAPPER}} .onsale'
                    ),
                    'property' => 'text-decoration',
                )
            ),
            'lineHeight' => array(
                'default' => array(
                    'desktop' => array(
                        'value' => 1,
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
                        '{{WRAPPER}} .onsale'
                    ),
                    'property' => 'line-height',
                )
            ),
            'letterSpacing' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .onsale'
                    ),
                    'property' => 'letter-spacing',
                )
            ),
        )
    ),
    Attributes::get_border_attributes(
        'saleBadgeBorder',
        array(
            'borderStyle' => array(
                'default' => array(
                    'desktop' => array(
                        'value' => 'none',
                    ),
                    'tablet' => array(
                        'value' => 'none',
                    ),
                    'mobile' => array(
                        'value' => 'none',
                    ),
                ),
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .onsale'
                    ),
                    'property' => 'border-style',
                )
            ),
            'borderWidth' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .onsale'
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
                        '{{WRAPPER}} .onsale'
                    ),
                    'property' => 'border-{{DIRECTION}}-radius',
                )
            ),
            'borderColor' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .onsale' => '{{VALUE}}',
                        '{{WRAPPER}} .onsale:hover' => '{{HOVER}}',
                    ),
                    'property' => 'border-color',
                )
            ),
        )
    ),
    array(
        'saleBadgePadding' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => array(
                        'top' => 10,
                        'right' => 20,
                        'bottom' => 10,
                        'left' => 20,
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
                    '{{WRAPPER}} .onsale',
                ),
                'property' => 'padding-{{DIRECTION}}',
            ),
        ),
        'saleBadgeOffset' => array(
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
                    '{{WRAPPER}}',
                ),
                'property' => '--atb-post-grid-sale-badge-offset',
            ),
        ),

    ),

    // ------------------------------------
    // --- Title --------------------------
    // ------------------------------------
    array(
        'titleColor' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => array(
                        'defaultState' => '#212121',
                        'hoverState' => '#757575'
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
                    '{{WRAPPER}} .at-block-post-grid__title a' => '{{VALUE}}',
                    '{{WRAPPER}} .at-block-post-grid__title a:hover' => '{{HOVER}}'
                ),
                'property' => 'color',
            ),
        ),
    ),
    Attributes::get_typography_attributes(
        'titleTypography',
        array(
            'fontFamily' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__title'
                    ),
                    'property' => 'font-family',
                )
            ),
            'fontSize' => array(
                'default' => array(
                    'desktop' => array(
                        'value' => '',
                        'unit' => 'rem',
                    ),
                    'tablet' => array(
                        'value' => '',
                        'unit' => 'rem',
                    ),
                    'mobile' => array(
                        'value' => '',
                        'unit' => 'rem',
                    ),
                ),
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__title'
                    ),
                    'property' => 'font-size',
                )
            ),
            'fontWeight' => array(
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
                        '{{WRAPPER}} .at-block-post-grid__title'
                    ),
                    'property' => 'font-weight',
                )
            ),
            'fontStyle' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__title'
                    ),
                    'property' => 'font-style',
                )
            ),
            'textTransform' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__title'
                    ),
                    'property' => 'text-transform',
                )
            ),
            'textDecoration' => array(
                'default' => array(
                    'desktop' => array(
                        'value' => 'none',
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
                        '{{WRAPPER}} .at-block-post-grid__title'
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
                        '{{WRAPPER}} .at-block-post-grid__title'
                    ),
                    'property' => 'line-height',
                )
            ),
            'letterSpacing' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__title'
                    ),
                    'property' => 'letter-spacing',
                )
            ),
        )
    ),
    array(
        'titleBottomSpacing' => array(
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
                    '{{WRAPPER}} .at-block-post-grid__title' => '{{VALUE}}{{UNIT}} !important;'
                ),
                'property' => 'margin-bottom',
            ),
        ),
    ),

    // ------------------------------------
    // --- Product Reviews Rating ---------
    // ------------------------------------
    array(
        'reviewsRatingColor' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => array(
                        'defaultState' => '#FFA534',
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
                    '{{WRAPPER}} .at-block-post-grid__reviews-rating .atb-star-rating span:before'
                ),
                'property' => 'color',
            ),
        ),
    ),
    array(
        'reviewsRatingBackgroundColor' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => array(
                        'defaultState' => '#ededed',
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
                    '{{WRAPPER}} .at-block-post-grid__reviews-rating .atb-star-rating::before'
                ),
                'property' => 'color',
            ),
        ),
    ),
    array(
        'reviewsRatingBottomSpacing' => array(
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
                    '{{WRAPPER}} .at-block-post-grid__reviews-rating'
                ),
                'property' => 'margin-bottom',
            ),
        ),
    ),

    // ------------------------------------
    // --- Meta ---------------------------
    // ------------------------------------
    array(
        'metaColor' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => array(
                        'defaultState' => '#444',
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
                    '{{WRAPPER}} .at-block-post-grid__meta'
                ),
                'property' => 'color',
            ),
        ),
        'metaIconColor' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => array(
                        'defaultState' => '#444',
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
                    '{{WRAPPER}} .at-block-post-grid__meta-icon svg'
                ),
                'property' => 'fill',
            ),
        ),
    ),
    Attributes::get_typography_attributes(
        'metaTypography',
        array(
            'fontFamily' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__meta'
                    ),
                    'property' => 'font-family',
                )
            ),
            'fontSize' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__meta'
                    ),
                    'property' => 'font-size',
                )
            ),
            'fontWeight' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__meta'
                    ),
                    'property' => 'font-weight',
                )
            ),
            'fontStyle' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__meta'
                    ),
                    'property' => 'font-style',
                )
            ),
            'textTransform' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__meta'
                    ),
                    'property' => 'text-transform',
                )
            ),
            'textDecoration' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__meta'
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
                        '{{WRAPPER}} .at-block-post-grid__meta'
                    ),
                    'property' => 'line-height',
                )
            ),
            'letterSpacing' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__meta'
                    ),
                    'property' => 'letter-spacing',
                )
            ),
        )
    ),
    array(
        'metaBottomSpacing' => array(
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
                    '{{WRAPPER}} .at-block-post-grid__meta'
                ),
                'property' => 'margin-bottom',
            ),
        ),
    ),

    // ------------------------------------
    // --- Excerpt ------------------------
    // ------------------------------------
    array(
        'excerptColor' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => array(
                        'defaultState' => '#444',
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
                    '{{WRAPPER}} .at-block-post-grid__excerpt'
                ),
                'property' => 'color',
            ),
        ),
    ),
    Attributes::get_typography_attributes(
        'excerptTypography',
        array(
            'fontFamily' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__excerpt'
                    ),
                    'property' => 'font-family',
                )
            ),
            'fontSize' => array(
                'default' => array(
                    'desktop' => array(
                        'value' => '',
                        'unit' => 'rem',
                    ),
                    'tablet' => array(
                        'value' => '',
                        'unit' => 'rem',
                    ),
                    'mobile' => array(
                        'value' => '',
                        'unit' => 'rem',
                    ),
                ),
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__excerpt'
                    ),
                    'property' => 'font-size',
                )
            ),
            'fontWeight' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__excerpt'
                    ),
                    'property' => 'font-weight',
                )
            ),
            'fontStyle' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__excerpt'
                    ),
                    'property' => 'font-style',
                )
            ),
            'textTransform' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__excerpt'
                    ),
                    'property' => 'text-transform',
                )
            ),
            'textDecoration' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__excerpt'
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
                        '{{WRAPPER}} .at-block-post-grid__excerpt'
                    ),
                    'property' => 'line-height',
                )
            ),
            'letterSpacing' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__excerpt'
                    ),
                    'property' => 'letter-spacing',
                )
            ),
        )
    ),
    array(
        'excerptBottomSpacing' => array(
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
                    '{{WRAPPER}} .at-block-post-grid__excerpt'
                ),
                'property' => 'margin-bottom',
            ),
        ),
    ),

    // ------------------------------------
    // --- Price --------------------------
    // ------------------------------------
    array(
        'priceColor' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => array(
                        'defaultState' => '#212121',
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
                    '{{WRAPPER}} .at-block-post-grid__price'
                ),
                'property' => 'color',
            ),
        ),
    ),
    Attributes::get_typography_attributes(
        'priceTypography',
        array(
            'fontFamily' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__price'
                    ),
                    'property' => 'font-family',
                )
            ),
            'fontSize' => array(
                'default' => array(
                    'desktop' => array(
                        'value' => '',
                        'unit' => 'rem',
                    ),
                    'tablet' => array(
                        'value' => '',
                        'unit' => 'rem',
                    ),
                    'mobile' => array(
                        'value' => '',
                        'unit' => 'rem',
                    ),
                ),
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__price'
                    ),
                    'property' => 'font-size',
                )
            ),
            'fontWeight' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__price'
                    ),
                    'property' => 'font-weight',
                )
            ),
            'fontStyle' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__price'
                    ),
                    'property' => 'font-style',
                )
            ),
            'textTransform' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__price'
                    ),
                    'property' => 'text-transform',
                )
            ),
            'textDecoration' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__price'
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
                        '{{WRAPPER}} .at-block-post-grid__price'
                    ),
                    'property' => 'line-height',
                )
            ),
            'letterSpacing' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__price'
                    ),
                    'property' => 'letter-spacing',
                )
            ),
        )
    ),
    array(
        'priceBottomSpacing' => array(
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
                    '{{WRAPPER}} .at-block-post-grid__price'
                ),
                'property' => 'margin-bottom',
            ),
        ),
    ),

    // ------------------------------------
    // --- Button -------------------------
    // ------------------------------------
    array(
        'buttonColor' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => array(
                        'defaultState' => '#fff',
                        'hoverState' => '#fff'
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
                    '{{WRAPPER}} .at-block-post-grid__button-button' => '{{VALUE}}',
                    '{{WRAPPER}} .at-block-post-grid__button-button:hover' => '{{HOVER}}',
                ),
                'property' => '--atb-post-grid-button-color',
            ),
        ),
    ),
    Attributes::get_typography_attributes(
        'buttonTypography',
        array(
            'fontFamily' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__button-button'
                    ),
                    'property' => 'font-family',
                )
            ),
            'fontSize' => array(
                'default' => array(
                    'desktop' => array(
                        'value' => '',
                        'unit' => 'rem',
                    ),
                    'tablet' => array(
                        'value' => '',
                        'unit' => 'rem',
                    ),
                    'mobile' => array(
                        'value' => '',
                        'unit' => 'rem',
                    ),
                ),
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__button-button'
                    ),
                    'property' => 'font-size',
                )
            ),
            'fontWeight' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__button-button'
                    ),
                    'property' => 'font-weight',
                )
            ),
            'fontStyle' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__button-button'
                    ),
                    'property' => 'font-style',
                )
            ),
            'textTransform' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__button-button'
                    ),
                    'property' => 'text-transform',
                )
            ),
            'textDecoration' => array(
                'default' => array(
                    'desktop' => array(
                        'value' => 'none',
                    ),
                    'tablet' => array(
                        'value' => 'none',
                    ),
                    'mobile' => array(
                        'value' => 'none',
                    ),
                ),
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__button-button'
                    ),
                    'property' => 'text-decoration',
                )
            ),
            'lineHeight' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__button-button'
                    ),
                    'property' => 'line-height',
                )
            ),
            'letterSpacing' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__button-button'
                    ),
                    'property' => 'letter-spacing',
                )
            ),
        )
    ),
    array(
        'buttonBackgroundColor' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => array(
                        'defaultState' => '#212121',
                        'hoverState' => '#757575'
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
                    '{{WRAPPER}} .at-block-post-grid__button-button' => '{{VALUE}}',
                    '{{WRAPPER}} .at-block-post-grid__button-button:hover' => '{{HOVER}}',
                ),
                'property' => 'background-color',
            ),
        ),
    ),
    Attributes::get_border_attributes(
        'buttonBorder',
        array(
            'borderStyle' => array(
                'default' => array(
                    'desktop' => array(
                        'value' => 'default',
                    ),
                    'tablet' => array(
                        'value' => 'default',
                    ),
                    'mobile' => array(
                        'value' => 'default',
                    ),
                ),
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__button-button'
                    ),
                    'property' => 'border-style',
                )
            ),
            'borderWidth' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__button-button'
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
                        '{{WRAPPER}} .at-block-post-grid__button-button'
                    ),
                    'property' => 'border-{{DIRECTION}}-radius',
                )
            ),
            'borderColor' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__button-button' => '{{VALUE}}',
                        '{{WRAPPER}} .at-block-post-grid__button-button:hover' => '{{HOVER}}',
                    ),
                    'property' => 'border-color',
                )
            ),
        )
    ),
    array(
        'buttonPadding' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => array(
                        'top' => 13,
                        'right' => 25,
                        'bottom' => 13,
                        'left' => 25,
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
                    '{{WRAPPER}} .at-block-post-grid__button-button',
                ),
                'property' => 'padding-{{DIRECTION}}',
            ),
        ),
        'buttonBottomSpacing' => array(
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
                    '{{WRAPPER}} .at-block-post-grid__button'
                ),
                'property' => 'margin-bottom',
            ),
        ),
    ),

    // ------------------------------------
    // --- Pagination --------------------
    // ------------------------------------
    array(
        'paginationTextColor' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => array(
                        'defaultState' => '#212121',
                        'hoverState' => '#757575'
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
                    '{{WRAPPER}} .at-block-post-grid__pagination-numbers .page-numbers' => '{{VALUE}}',
                    '{{WRAPPER}} .at-block-post-grid__pagination-numbers .page-numbers:hover' => '{{HOVER}}',
                ),
                'property' => '--atb-post-grid-pagination-text-color',
            ),
        ),
        'paginationActiveBackgroundColor' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => array(
                        'defaultState' => '#212121',
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
                ),
                'property' => '--atb-post-grid-pagination-active-background-color',
            ),
        ),
        'paginationActiveTextColor' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => array(
                        'defaultState' => '#FFF',
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
                ),
                'property' => '--atb-post-grid-pagination-active-text-color',
            ),
        ),
    ),
    Attributes::get_border_attributes(
        'paginationBorder',
        array(
            'borderStyle' => array(
                'default' => array(
                    'desktop' => array(
                        'value' => 'default',
                    ),
                    'tablet' => array(
                        'value' => 'default',
                    ),
                    'mobile' => array(
                        'value' => 'default',
                    ),
                ),
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__pagination-numbers .page-numbers'
                    ),
                    'property' => 'border-style',
                )
            ),
            'borderWidth' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__pagination-numbers .page-numbers'
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
                        '{{WRAPPER}} .at-block-post-grid__pagination-numbers .page-numbers'
                    ),
                    'property' => 'border-{{DIRECTION}}-radius',
                )
            ),
            'borderColor' => array(
                'default' => array(
                    'desktop' => array(
                        'value' => array(
                            'defaultState' => '#212121',
                            'hoverState' => '#757575',
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
                        '{{WRAPPER}} .at-block-post-grid__pagination-numbers .page-numbers' => '{{VALUE}}',
                        '{{WRAPPER}} .at-block-post-grid__pagination-numbers .page-numbers:hover' => '{{HOVER}}',
                    ),
                    'property' => 'border-color',
                )
            ),
        )
    ),
    array(
        'paginationItemsGap' => array(
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
                'property' => '--atb-post-grid-pagination-items-gap',
            ),
        ),
        'paginationButtonBackgroundColor' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => array(
                        'defaultState' => '#212121',
                        'hoverState' => '#757575'
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
                    '{{WRAPPER}} .at-block-post-grid__pagination-button' => '{{VALUE}}',
                    '{{WRAPPER}} .at-block-post-grid__pagination-button:hover' => '{{HOVER}}',
                ),
                'property' => 'background-color',
            ),
        ),
        'paginationButtonTextColor' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => array(
                        'defaultState' => '#FFF',
                        'hoverState' => '#FFF'
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
                    '{{WRAPPER}} .at-block-post-grid__pagination-button' => '{{VALUE}}',
                    '{{WRAPPER}} .at-block-post-grid__pagination-button:hover' => '{{HOVER}}',
                ),
                'property' => 'color',
            ),
        ),
    ),
    Attributes::get_border_attributes(
        'paginationButtonBorder',
        array(
            'borderStyle' => array(
                'default' => array(
                    'desktop' => array(
                        'value' => 'none',
                    ),
                    'tablet' => array(
                        'value' => 'none',
                    ),
                    'mobile' => array(
                        'value' => 'none',
                    ),
                ),
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__pagination-button'
                    ),
                    'property' => 'border-style',
                )
            ),
            'borderWidth' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__pagination-button'
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
                        '{{WRAPPER}} .at-block-post-grid__pagination-button'
                    ),
                    'property' => 'border-{{DIRECTION}}-radius',
                )
            ),
            'borderColor' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__pagination-button' => '{{VALUE}}',
                        '{{WRAPPER}} .at-block-post-grid__pagination-button:hover' => '{{HOVER}}',
                    ),
                    'property' => 'border-color',
                )
            ),
        )
    ),
    array(
        'paginationButtonPadding' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => array(
                        'top' => 10,
                        'right' => 25,
                        'bottom' => 10,
                        'left' => 25,
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
                    '{{WRAPPER}} .at-block-post-grid__pagination-button',
                ),
                'property' => 'padding-{{DIRECTION}}',
            ),
        ),
        'paginationTopSpacing' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 30,
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
                    '{{WRAPPER}} .at-block-post-grid__pagination'
                ),
                'property' => 'margin-top',
            ),
        ),
    ),

    // Advanced -----------------------------
    Attributes::get_block_advanced_panel_attributes(),
);