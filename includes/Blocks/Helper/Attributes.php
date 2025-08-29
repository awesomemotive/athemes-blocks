<?php

/**
 * Attributes helper for blocks.
 * 
 * @package aThemes Blocks
 */

namespace AThemes_Blocks\Blocks\Helper;

class Attributes {

    /**
     * Get block core attributes.
     * 
     * @param array<string, mixed> $attributes_to_replace
     * @return array<string, mixed>
     */
    public static function get_block_core_attributes( $attributes_to_replace = array() ) {
        $attributes = array(
            'clientId' => array(
                'type' => 'string',
            ),
            'content' => array(
                'type' => 'string',
                'default' => '',
            ),
        );

        if ( ! empty( $attributes_to_replace ) ) {
            foreach ( $attributes_to_replace as $key => $value ) {
                if ( isset( $attributes[$key] ) ) {
                    $attributes[$key] = $value;
                }
            }
        }

        return $attributes;
    }

    /**
     * Get typography attributes.
     * 
     * @param string $setting_id
     * @param array<string, mixed> $attributes_to_replace
     * @return array<string, mixed>
     */
    public static function get_typography_attributes( $setting_id, $attributes_to_replace = array() ) {
        $attributes = array(
            $setting_id => array(
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
                                    '{{WRAPPER}}',
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
                                    '{{WRAPPER}}',
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
                                    '{{WRAPPER}}',
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
                                    '{{WRAPPER}}',
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
                                    '{{WRAPPER}}',
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
                                    '{{WRAPPER}}',
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
                                    '{{WRAPPER}}',
                                ),
                                'property' => 'line-height',
                            )
                        ),
                        'letterSpacing' => array(
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
                                    '{{WRAPPER}}',
                                ),
                                'property' => 'letter-spacing',
                            )
                        ),
                    ),
                ),
            ),
        );

        if ( ! empty( $attributes_to_replace ) ) {
            foreach ( $attributes_to_replace as $key => $value ) {
                if ( isset( $attributes[$setting_id]['default']['innerSettings'][$key] ) ) {
                    if ( isset( $value['default'] ) ) {
                        $attributes[$setting_id]['default']['innerSettings'][$key]['default'] = $value['default'];
                    }
                    
                    if ( isset( $value['css'] ) ) {
                        $attributes[$setting_id]['default']['innerSettings'][$key]['css'] = $value['css'];
                    }
                }
            }
        }

        return $attributes;
    }

    /**
     * Get border attributes.
     * 
     * @param string $setting_id
     * @param array<string, mixed> $attributes_to_replace
     * @return array<string, mixed>
     */
    public static function get_border_attributes( $setting_id, $attributes_to_replace = array() ) {
        $attributes = array(
            $setting_id => array(
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
        );

        if ( ! empty( $attributes_to_replace ) ) {
            foreach ( $attributes_to_replace as $key => $value ) {
                if ( isset( $attributes[$setting_id]['default']['innerSettings'][$key] ) ) {
                    if ( isset( $value['default'] ) ) {
                        $attributes[$setting_id]['default']['innerSettings'][$key]['default'] = $value['default'];
                    }
                    
                    if ( isset( $value['css'] ) ) {
                        $attributes[$setting_id]['default']['innerSettings'][$key]['css'] = $value['css'];
                    }
                }
            }
        }

        return $attributes;
    }

    /**
     * Get color advanced attributes.
     * 
     * @param string $setting_id
     * @param array<string, mixed> $attributes_to_replace
     * @return array<string, mixed>
     */
    public static function get_color_advanced_attributes( $setting_id, $attributes_to_replace = array() ) {
        $attributes = array(
            $setting_id => array(
                'type' => 'object',
                'default' => array(
                    'innerSettings' => array(
                        'type' => array(
                            'default' => 'color',
                        ),
                        'color' => array(
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
                                    '{{WRAPPER}}',
                                ),
                                'property' => 'color',
                            )
                        ),
                        'gradient' => array(
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
                                    '{{WRAPPER}}',
                                ),
                                'property' => 'background-image',
                            )
                        ),
                       'backgroundImage' => array(
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
                                'property' => 'background-image',
                            )
                        ),
                        'backgroundImagePosition' => array(
                            'default' => array(
                                'desktop' => array(
                                    'value' => array(
                                        'x' => 0.5,
                                        'y' => 0.5,
                                    ),
                                ),
                                'tablet' => array(
                                    'value' => array(
                                        'x' => 0.5,
                                        'y' => 0.5,
                                    ),
                                ),
                                'mobile' => array(
                                    'value' => array(
                                        'x' => 0.5,
                                        'y' => 0.5,
                                    ),
                                ),
                            ),
                            'css' => array(
                                'selectors' => array(
                                    '{{WRAPPER}}',
                                ),
                                'property' => 'background-position',
                            )
                        ),
                        'backgroundImageAttachment' => array(
                            'default' => array(
                                'desktop' => array(
                                    'value' => 'scroll'
                                ),
                                'tablet' => array(
                                    'value' => 'scroll'
                                ),
                                'mobile' => array(
                                    'value' => 'scroll'
                                ),
                            ),
                            'css' => array(
                                'selectors' => array(
                                    '{{WRAPPER}}',
                                ),
                                'property' => 'background-attachment',
                            )
                        ),
                        'backgroundImageRepeat' => array(
                            'default' => array(
                                'desktop' => array(
                                    'value' => 'repeat'
                                ),
                                'tablet' => array(
                                    'value' => 'repeat'
                                ),
                                'mobile' => array(
                                    'value' => 'repeat'
                                ),
                            ),
                            'css' => array(
                                'selectors' => array(
                                    '{{WRAPPER}}',
                                ),
                                'property' => 'background-repeat',
                            )
                        ),
                        'backgroundImageSize' => array(
                            'default' => array(
                                'desktop' => array(
                                    'value' => 'cover'
                                ),
                                'tablet' => array(
                                    'value' => 'cover'
                                ),
                                'mobile' => array(
                                    'value' => 'cover'
                                ),
                            ),
                            'css' => array(
                                'selectors' => array(
                                    '{{WRAPPER}}',
                                ),
                                'property' => 'background-size',
                            )
                        ),
                        'backgroundImageOverlay' => array(
                            'default' => false,
                        ),
                        'backgroundImageOverlayColor' => array(
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
                                'property' => '--atb-background-image-overlay-color',
                            )
                        ),
                        'backgroundImageOverlayOpacity' => array(
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
                                'property' => '--atb-background-image-overlay-opacity',
                            )
                        ),
                    ),
                ),
            ),
        );

        if ( ! empty( $attributes_to_replace ) ) {
            foreach ( $attributes_to_replace as $key => $value ) {
                if ( isset( $attributes[$setting_id]['default']['innerSettings'][$key] ) ) {
                    if ( isset( $value['default'] ) ) {
                        $attributes[$setting_id]['default']['innerSettings'][$key]['default'] = $value['default'];
                    }
                    
                    if ( isset( $value['css'] ) ) {
                        $attributes[$setting_id]['default']['innerSettings'][$key]['css'] = $value['css'];
                    }
                }
            }
        }

        return $attributes;
    }
    
    /**
     * Get block advanced panel attributes.
     * 
     * @return array<string, mixed>
     */
    public static function get_block_advanced_panel_attributes() {
        return array(
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
                    'important' => true,
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
                        '{{WRAPPER}}:hover' => '{{HOVER}}',
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
            'animation' => array(
                'type' => 'object',
                'default' => array(
                    'innerSettings' => array(
                        'entranceAnimation' => array(
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
                        ),
                        'animationDuration' => array(
                            'default' => array(
                                'desktop' => array(
                                    'value' => 'normal'
                                ),
                                'tablet' => array(
                                    'value' => 'normal'
                                ),
                                'mobile' => array(
                                    'value' => 'normal'
                                ),
                            ),
                        ),
                        'animationDelay' => array(
                            'default' => array(
                                'desktop' => array(
                                    'value' => 750
                                ),
                                'tablet' => array(
                                    'value' => 750
                                ),
                                'mobile' => array(
                                    'value' => 750
                                ),
                            ),
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
                        'value' => '',
                    ),
                    'mobile' => array(
                        'value' => '',
                    ),
                ),
                'css' => array(
                    'selectors' => array(
                        '{{WRAPPER}}' => '{{VALUE}}{{UNIT}}; position: relative;',
                    ),
                    'property' => 'z-index',
                ),
            ),
            'cssID' => array(
                'type' => 'string',
                'default' => '',
            ),
        );
    }
}