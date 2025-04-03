<?php
return array(
    'clientId' => array(
        'type' => 'string',
    ),
    'content' => array(
        'type' => 'string',
        'default' => '',
    ),
    
    // General - Type -----------------------------
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
        'css' => array(
            'selectors' => array(
                '{{WRAPPER}} > .block-editor-inner-blocks > .block-editor-block-list__layout',
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
                '{{WRAPPER}} > .block-editor-inner-blocks > .block-editor-block-list__layout',
            ),
            'property' => 'flex-direction',
        ),
    ),
    'columnsGap' => array(
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
            'property' => '--atb-container-columns-gap',
        ),
    ),
    'rowsGap' => array(
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
                '{{WRAPPER}} > .block-editor-inner-blocks > .block-editor-block-list__layout',
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
    'border' => array(
        'type' => 'object',
        'default' => array(
            'innerSettings' => array(
                'borderStyle' => array(
                    'default' => array(
                        'desktop' => array(
                            'value' => 'default'
                        ),
                        'tablet' => array(
                            'value' => 'default'
                        ),
                        'mobile' => array(
                            'value' => 'default'
                        ),
                    ),
                    'css' => array(
                        'selectors' => array(
                            '{{WRAPPER}}',
                        ),
                        'property' => 'border-style',
                    )
                ),
                'borderWidth' => array(
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
                            '{{WRAPPER}}',
                        ),
                        'property' => 'border-{{DIRECTION}}-width',
                    )
                ),
                'borderRadius' => array(
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
                            '{{WRAPPER}}',
                        ),
                        'property' => 'border-{{DIRECTION}}-radius',
                    )
                ),
                'borderColor' => array(
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
                        'property' => 'border-color',
                    )
                ),
            ),
        ),
    ),

    // Advanced -----------------------------
    'padding' => array(
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
                '{{WRAPPER}}',
            ),
            'property' => 'padding-{{DIRECTION}}',
        ),
    ),
    'margin' => array(
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
                '{{WRAPPER}}',
            ),
            'property' => 'margin-{{DIRECTION}}',
        ),
    ),
);