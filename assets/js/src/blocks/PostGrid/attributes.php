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
    
    // ### General #######################

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
            'default' => 'all'
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
        'offsetStartingPoint' => array(
            'type' => 'number',
            'default' => 0
        ),
        'orderBy' => array(
            'type' => 'string',
            'default' => 'date'
        ),
        'order' => array(
            'type' => 'string',
            'default' => 'DESC'
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
            'default' => 'ajax'
        ),
        'paginationPrevText' => array(
            'type' => 'string',
            'default' => 'Previous'
        ),
        'paginationNextText' => array(
            'type' => 'string',
            'default' => 'Next'
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
    // --- Read More Button ---------------
    // ------------------------------------
    array(
        'displayReadMore' => array(
            'type' => 'boolean',
            'default' => true,
        ),
        'readMoreOpenInNewTab' => array(
            'type' => 'boolean',
            'default' => false,
        ),
        'readMoreText' => array(
            'type' => 'string',
            'default' => __( 'Read More', 'athemes-blocks' ),
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
                        '{{WRAPPER}} .at-block-post-grid__item'
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
                    '{{WRAPPER}} .at-block-post-grid__item'
                ),
                'property' => 'background-color',
            ),
        ),
        'cardPadding' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => array(
                        'top' => 20,
                        'right' => 20,
                        'bottom' => 20,
                        'left' => 20,
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
                    '{{WRAPPER}} .at-block-post-grid__item'
                ),
                'property' => 'padding-{{DIRECTION}}',
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
                    '{{WRAPPER}} .at-block-post-grid__title'
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
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__title'
                    ),
                    'property' => 'font-size',
                )
            ),
            'fontWeight' => array(
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
                        'value' => 1.3,
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
                    '{{WRAPPER}} .at-block-post-grid__title'
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
                    '{{WRAPPER}} .at-block-post-grid__meta'
                ),
                'property' => 'color',
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
                    '{{WRAPPER}} .at-block-post-grid__excerpt'
                ),
                'property' => 'margin-bottom',
            ),
        ),
    ),

    // ------------------------------------
    // --- Read More Button ---------------
    // ------------------------------------
    array(
        'readMoreButtonColor' => array(
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
                    '{{WRAPPER}} .at-block-post-grid__read-more' => '{{VALUE}}',
                    '{{WRAPPER}} .at-block-post-grid__read-more:hover' => '{{HOVER}}',
                ),
                'property' => 'color',
            ),
        ),
    ),
    Attributes::get_typography_attributes(
        'readMoreButtonTypography',
        array(
            'fontFamily' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__read-more'
                    ),
                    'property' => 'font-family',
                )
            ),
            'fontSize' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__read-more'
                    ),
                    'property' => 'font-size',
                )
            ),
            'fontWeight' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__read-more'
                    ),
                    'property' => 'font-weight',
                )
            ),
            'fontStyle' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__read-more'
                    ),
                    'property' => 'font-style',
                )
            ),
            'textTransform' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-button__wrapper',
                        '{{WRAPPER}} .at-block-button__wrapper > a'
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
                        '{{WRAPPER}} .at-block-post-grid__read-more'
                    ),
                    'property' => 'text-decoration',
                )
            ),
            'lineHeight' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__read-more'
                    ),
                    'property' => 'line-height',
                )
            ),
            'letterSpacing' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__read-more'
                    ),
                    'property' => 'letter-spacing',
                )
            ),
        )
    ),
    array(
        'readMoreButtonBackgroundColor' => array(
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
                    '{{WRAPPER}} .at-block-post-grid__read-more' => '{{VALUE}}',
                    '{{WRAPPER}} .at-block-post-grid__read-more:hover' => '{{HOVER}}',
                ),
                'property' => 'background-color',
            ),
        ),
    ),
    Attributes::get_border_attributes(
        'readMoreButtonBorder',
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
                        '{{WRAPPER}} .at-block-post-grid__read-more'
                    ),
                    'property' => 'border-style',
                )
            ),
            'borderWidth' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__read-more'
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
                        '{{WRAPPER}} .at-block-post-grid__read-more'
                    ),
                    'property' => 'border-{{DIRECTION}}-radius',
                )
            ),
            'borderColor' => array(
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}} .at-block-post-grid__read-more' => '{{VALUE}}',
                        '{{WRAPPER}} .at-block-post-grid__read-more:hover' => '{{HOVER}}',
                    ),
                    'property' => 'border-color',
                )
            ),
        )
    ),
    array(
        'readMoreButtonPadding' => array(
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
                    '{{WRAPPER}} .at-block-post-grid__read-more',
                ),
                'property' => 'padding-{{DIRECTION}}',
            ),
        ),
        'readMoreButtonBottomSpacing' => array(
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
                    '{{WRAPPER}} .at-block-post-grid__read-more'
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
        ),
    ),

    // ------------------------------------
    // --- Image --------------------------
    // ------------------------------------
    array(
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
    ),

    // Advanced -----------------------------
    Attributes::get_block_advanced_panel_attributes(),
);