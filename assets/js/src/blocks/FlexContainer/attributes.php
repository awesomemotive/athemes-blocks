<?php
return array(
    'clientId' => array(
        'type' => 'string',
    ),
    'content' => array(
        'type' => 'string',
        'default' => '',
    ),
    
    // Type -----------------------------
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
    'equalHeight' => array(
        'type' => 'object',
        'default' => array(
            'desktop' => array(
                'value' => true,
            ),
            'tablet' => array(
                'value' => false,
            ),
            'mobile' => array(
                'value' => true,
            ),
        )
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
                'value' => 'xxx',
            ),
            'tablet' => array(
                'value' => 'ccc',
            ),
            'mobile' => array(
                'value' => 'zzz',
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

    // Layout -----------------------------
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
        'css' => array(
            'selectors' => array(
                '{{WRAPPER}} .block-editor-inner-blocks > .block-editor-block-list__layout',
            ),
            'property' => 'display',
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
                'value' => 'row',
            ),
        ),
        'css' => array(
            'selectors' => array(
                '{{WRAPPER}} .block-editor-inner-blocks > .block-editor-block-list__layout',
            ),
            'property' => 'flex-direction',
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
                '{{WRAPPER}} .block-editor-inner-blocks > .block-editor-block-list__layout',
            ),
            'property' => 'align-items',
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
                '{{WRAPPER}} .block-editor-inner-blocks > .block-editor-block-list__layout',
            ),
            'property' => 'justify-content',
        ),
    ),
    'wrap' => array(
        'type' => 'object',
        'default' => array(
            'desktop' => array(
                'value' => 'wrap',
            ),
            'tablet' => array(
                'value' => 'wrap',
            ),
            'mobile' => array(
                'value' => 'wrap',
            ),
        ),
        'css' => array(
            'selectors' => array(
                '{{WRAPPER}} .block-editor-inner-blocks > .block-editor-block-list__layout',
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
                '{{WRAPPER}} .block-editor-inner-blocks > .block-editor-block-list__layout',
            ),
            'property' => 'align-content',
        ),
    ),
);