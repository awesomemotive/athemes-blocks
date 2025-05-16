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
    
    // General - Type -----------------------------
    array(
        'containerWidth' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 'full-width',
                ),
                'tablet' => array(
                    'value' => 'full-width',
                ),
                'mobile' => array(
                    'value' => 'full-width',
                ),
            ),
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}}',
                ),
                'property' => '',
            ),
        ),
        'contentWidth' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 'boxed',
                ),
                'tablet' => array(
                    'value' => 'boxed',
                ),
                'mobile' => array(
                    'value' => 'boxed',
                ),
            ),
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}}',
                ),
                'property' => '',
            ),
        ),
        'contentBoxWidth' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 1140,
                    'unit' => 'px',
                ),
                'tablet' => array(
                    'value' => 1024,
                    'unit' => 'px',
                ),
                'mobile' => array(
                    'value' => 767,
                    'unit' => 'px',
                ),
            ),
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}}' => '{{VALUE}}{{UNIT}};',
                ),
                'property' => '--atb-content-box-width',
            ),
        ),
        'customWidth' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 100,
                    'unit' => '%',
                ),
                'tablet' => array(
                    'value' => 100,
                    'unit' => '%',
                ),
                'mobile' => array(
                    'value' => 100,
                    'unit' => '%',
                ),
            ),
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}}' => '{{VALUE}}{{UNIT}};',
                ),
                'property' => '--atb-container-custom-width',
            ),
        ),
        'minHeight' => array(
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
                'property' => '--atb-min-height',
            ),
        ),
        'htmlTag' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 'div',
                ),
                'tablet' => array(
                    'value' => 'div',
                ),
                'mobile' => array(
                    'value' => 'div',
                ),
            ),
        ),
        'htmlTagLink' => array(
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
        ),
        'htmlTagLinkOpenInNewWindow' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => false,
                ),
                'tablet' => array(
                    'value' => false,
                ),
                'mobile' => array(
                    'value' => false,
                ),
            ),
        ),
        'overflow' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 'visible',
                ),
                'tablet' => array(
                    'value' => 'visible',
                ),
                'mobile' => array(
                    'value' => 'visible',
                ),
            ),
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}}',
                ),
                'property' => 'overflow',
            ),
        ),

        // General - Layout -----------------------------
        'layout' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 'flex',
                ),
                'tablet' => array(
                    'value' => 'flex',
                ),
                'mobile' => array(
                    'value' => 'flex',
                ),
            ),
        ),
        'layoutGridColumns' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 3,
                ),
                'tablet' => array(
                    'value' => 3,
                ),
                'mobile' => array(
                    'value' => 3,
                ),
            ),
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}}',
                ),
                'property' => '--atb-layout-grid-columns',
            ),
        ),
        'direction' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 'row',
                ),
                'tablet' => array(
                    'value' => 'row',
                ),
                'mobile' => array(
                    'value' => 'column',
                ),
            ),
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}}',
                    '{{WRAPPER}} > .at-block-flex-container__inner-blocks-wrapper',
                    '{{WRAPPER}} > .at-block-flex-container__inner-blocks-wrapper > .block-editor-inner-blocks > .block-editor-block-list__layout',
                    '{{WRAPPER}} > .block-editor-inner-blocks > .block-editor-block-list__layout',
                ),
                'property' => 'flex-direction',
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
                    '{{WRAPPER}}' => '{{VALUE}}{{UNIT}};',
                ),
                'property' => '--atb-container-columns-gap',
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
                    '{{WRAPPER}}' => '{{VALUE}}{{UNIT}};',
                ),
                'property' => '--atb-container-rows-gap',
            ),
        ),
        'childrenWidth' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 'equal',
                ),
                'tablet' => array(
                    'value' => 'equal',
                ),
                'mobile' => array(
                    'value' => 'equal',
                ),
            ),
        ),
        'alignItems' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 'flex-start',
                ),
                'tablet' => array(
                    'value' => 'flex-start',
                ),
                'mobile' => array(
                    'value' => 'flex-start',
                ),
            ),
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}}',
                    '{{WRAPPER}} > .at-block-flex-container__inner-blocks-wrapper',
                    '{{WRAPPER}} > .at-block-flex-container__inner-blocks-wrapper > .block-editor-inner-blocks > .block-editor-block-list__layout',
                    '{{WRAPPER}} > .block-editor-inner-blocks > .block-editor-block-list__layout',
                ),
                'property' => 'align-items',
            ),
        ),
        'justifyItems' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 'start',
                ),
                'tablet' => array(
                    'value' => 'start',
                ),
                'mobile' => array(
                    'value' => 'start',
                ),
            ),
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}}',
                    '{{WRAPPER}} > .at-block-flex-container__inner-blocks-wrapper',
                    '{{WRAPPER}} > .at-block-flex-container__inner-blocks-wrapper > .block-editor-inner-blocks > .block-editor-block-list__layout',
                    '{{WRAPPER}} > .block-editor-inner-blocks > .block-editor-block-list__layout',
                ),
                'property' => 'justify-items',
            ),
        ),
        'justifyContent' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 'flex-start',
                ),
                'tablet' => array(
                    'value' => 'flex-start',
                ),
                'mobile' => array(
                    'value' => 'flex-start',
                ),
            ),
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}}',
                    '{{WRAPPER}} > .at-block-flex-container__inner-blocks-wrapper',
                    '{{WRAPPER}} > .at-block-flex-container__inner-blocks-wrapper > .block-editor-inner-blocks > .block-editor-block-list__layout',
                    '{{WRAPPER}} > .block-editor-inner-blocks > .block-editor-block-list__layout',
                ),
                'property' => 'justify-content',
            ),
        ),
        'wrap' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 'nowrap',
                ),
                'tablet' => array(
                    'value' => 'nowrap',
                ),
                'mobile' => array(
                    'value' => 'nowrap',
                ),
            ),
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}}',
                    '{{WRAPPER}} > .at-block-flex-container__inner-blocks-wrapper',
                    '{{WRAPPER}} > .at-block-flex-container__inner-blocks-wrapper > .block-editor-inner-blocks > .block-editor-block-list__layout',
                    '{{WRAPPER}} > .block-editor-inner-blocks > .block-editor-block-list__layout',
                ),
                'property' => 'flex-wrap',
            ),
        ),
        'alignContent' => array(
            'type' => 'object',
            'default' => array(
                'desktop' => array(
                    'value' => 'flex-start',
                ),
                'tablet' => array(
                    'value' => 'flex-start',
                ),
                'mobile' => array(
                    'value' => 'flex-start',
                ),
            ),
            'css' => array(
                'selectors' => array(
                    '{{WRAPPER}}',
                    '{{WRAPPER}} > .at-block-flex-container__inner-blocks-wrapper',
                    '{{WRAPPER}} > .at-block-flex-container__inner-blocks-wrapper > .block-editor-inner-blocks > .block-editor-block-list__layout',
                    '{{WRAPPER}} > .block-editor-inner-blocks > .block-editor-block-list__layout',
                ),
                'property' => 'align-content',
            ),
        ),

        // Style - Background -----------------------------
        'backgroundColor' => array(
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
                ),
                'property' => 'background-color',
            ),
        ),
        'textColor' => array(
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
            )
        ),
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
            )
        ),
        Attributes::get_border_attributes( 'border' ),
    ),

    // Advanced -----------------------------
    Attributes::get_block_advanced_panel_attributes(),
);