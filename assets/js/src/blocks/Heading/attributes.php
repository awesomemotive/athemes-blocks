<?php
return array(
    'clientId' => array(
        'type' => 'string',
    ),
    'content' => array(
        'type' => 'string',
        'default' => '',
    ),
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
                '{{WRAPPER}} .test'
            ),
            'property' => 'text-align',
        )
    ),
    'fontSize' => array(
        'type' => 'object',
        'default' => array(
            'desktop' => array(
                'value' => 40,
                'unit' => 'px',
            ),
            'tablet' => array(
                'value' => 30,
                'unit' => 'px',
            ),
            'mobile' => array(
                'value' => 20,
                'unit' => 'px',
            ),
        ),
        'css' => array(
            'selectors' => array(
                '{{WRAPPER}} h1',
                '{{WRAPPER}} .test2'
            ),
            'property' => 'font-size',
        )
    ),
    'fontSizeTwo' => array(
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
                '{{WRAPPER}} h2',
                '{{WRAPPER}} .test3'
            ),
            'property' => 'font-size',
        )
    ),
    'fontFamily' => array(
        'type' => 'object',
        'default' => array(
            'desktop' => array(
                'value' => 'Arial',
            ),
            'tablet' => array(
                'value' => 'Helvetica',
            ),
            'mobile' => array(
                'value' => 'Times New Roman',
            ),
        ),
        'css' => array(
            'selectors' => array(
                '{{WRAPPER}} h1',
            ),
            'property' => 'font-family',
        )
    ),
    'showBorder' => array(
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
                '{{WRAPPER}} h1' => '{{VALUE}}',
                '{{WRAPPER}}:hover h1' => '{{HOVER}}',
            ),
            'property' => 'color',
        )
    ),
    'textTypography' => array(
        'type' => 'object',
        'default' => array(
            'innerSettings' => array(
                'fontFamily' => array(
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
                            '{{WRAPPER}} h1',
                            '{{WRAPPER}} .test3'
                        ),
                        'property' => 'font-family',
                    )
                ),
                'fontSize' => array(
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
                            '{{WRAPPER}} h1',
                            '{{WRAPPER}} .test3'
                        ),
                        'property' => 'font-size',
                    )
                ),
                'fontWeight' => array(
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
                            '{{WRAPPER}} h1',
                            '{{WRAPPER}} .test4'
                        ),
                        'property' => 'font-weight',
                    )
                ),
                'fontStyle' => array(
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
                            '{{WRAPPER}} h1',
                            '{{WRAPPER}} .test4'
                        ),
                        'property' => 'font-style',
                    )
                ),
                'textTransform' => array(
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
                            '{{WRAPPER}} h1',
                            '{{WRAPPER}} .test4'
                        ),
                        'property' => 'text-transform',
                    )
                ),
                'textDecoration' => array(
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
                            '{{WRAPPER}} h1',
                            '{{WRAPPER}} .test4'
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
                            'value' => 1,
                            'unit' => 'em',
                        ),
                        'mobile' => array(
                            'value' => 1,
                            'unit' => 'em',
                        ),
                    ),
                    'css' => array(
                        'selectors' => array(
                            '{{WRAPPER}} h1',
                            '{{WRAPPER}} .test3'
                        ),
                        'property' => 'line-height',
                    )
                ),
                'letterSpacing' => array(
                    'default' => array(
                        'desktop' => array(
                            'value' => 0,
                            'unit' => 'px',
                        ),
                        'tablet' => array(
                            'value' => 0,
                            'unit' => 'px',
                        ),
                        'mobile' => array(
                            'value' => 0,
                            'unit' => 'px',
                        ),
                    ),
                    'css' => array(
                        'selectors' => array(
                            '{{WRAPPER}} h1',
                            '{{WRAPPER}} .test3444'
                        ),
                        'property' => 'letter-spacing',
                    )
                ),
            ),
        ),
    ),
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
                'unit' => 'px',
                'connect' => false,
            ),
            'tablet' => array(
                'value' => array(
                    'top' => '',
                    'right' => '',
                    'bottom' => '',
                    'left' => '',
                ),
                'unit' => 'px',
                'connect' => false,
            ),
            'mobile' => array(
                'value' => array(
                    'top' => '',
                    'right' => '',
                    'bottom' => '',
                    'left' => '',
                ),
                'unit' => 'px',
                'connect' => false,
            ),
        ),
        'css' => array(
            'selectors' => array(
                '{{WRAPPER}} h1',
                '{{WRAPPER}} .test2',
            ),
            'property' => 'padding-{{DIRECTION}}',
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
    'hideOnDesktop' => array(
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
    'hideOnTablet' => array(
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
    'hideOnMobile' => array(
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
    'zIndex' => array(
        'type' => 'object',
        'default' => array(
            'desktop' => array(
                'value' => 0,
            ),
            'tablet' => array(
                'value' => 0,
            ),
            'mobile' => array(
                'value' => 0,
            ),
        ),
        'css' => array(
            'selectors' => array(
                '{{WRAPPER}}',
            ),
            'property' => 'z-index',
        ),
    ),
);
