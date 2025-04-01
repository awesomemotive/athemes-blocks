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
            'property' => 'padding',
        ),
    ),
);