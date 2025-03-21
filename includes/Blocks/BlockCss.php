<?php

/**
 * The Block CSS helper.
 * 
 * @package aThemes_Blocks
 */

namespace AThemes_Blocks\Blocks;

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

class BlockCss {

    // TODO: Make this a singleton.

    /**
     * @var string
     */
    private $block_id = '';
    
    /**
     * @var array<string, string>
     */
    private $default_attributes = array();
    
    /**
     * @var array<string, string>
     */
    private $block_attributes = array();

    /**
     * Constructor.
     *
     * @param array<string, string>  $attributes Block attributes.
     * @param string $block_id Block ID.
     * @param array<string, string> $default_attributes Default block attributes.
     */
    public function __construct( $attributes, $block_id, $default_attributes ) {
        $this->block_id = $block_id;
        $this->default_attributes = $default_attributes;
        $this->block_attributes = $attributes;
    }

    public function get_block_style_tag(): string {
        $custom_css = self::get_block_css( $this->block_attributes, $this->block_id, $this->default_attributes );

        if ( empty( $custom_css ) ) {
            return '';
        }

        return sprintf( '<style>%s</style>', $custom_css );
    }

    public function get_block_css( $attributes, $block_id, $default_attributes ): string {
        $css = '';
        $media_queries = array(
            'desktop' => '',
            'tablet' => '@media (max-width: 1024px)',
            'mobile' => '@media (max-width: 767px)',
        );

        $responsive_values = array(
            'desktop' => array(),
            'tablet' => array(),
            'mobile' => array(),
        );

        foreach ( $default_attributes as $attribute_name => $attribute_settings ) {
            if ( ! isset( $attributes[$attribute_name] ) ) {
                continue;
            }

            // Inner settings (recursive).
            if ( isset( $attributes[$attribute_name]['innerSettings'] ) ) {
                $inner_settings_attributes = $attributes[$attribute_name]['innerSettings'];
                $block_id = $block_id;
                $default_attributes = $attribute_settings['default']['innerSettings'];

                $css .= self::get_block_css( $inner_settings_attributes, $block_id, $default_attributes );
                continue;
            }

            if ( isset( $attribute_settings['css'] ) ) {
                $selectors = $attribute_settings['css']['selectors'];
                $property = $attribute_settings['css']['property'];
                $attribute_data = isset( $attributes[$attribute_name]['default'] ) ? $attributes[$attribute_name]['default'] : $attributes[$attribute_name];

                foreach ( $attribute_data as $device => $value ) {
                    if ( empty( $value['value'] ) || $value['value'] === 'default' ) {
                        continue;
                    }

                    $value_is_object = is_array( $value['value'] );
                    $unit = isset( $value['unit'] ) ? $value['unit'] : '';

                    $is_color_picker = isset( $value['value']['defaultState'] ) || isset( $value['value']['hoverState'] );
                    $is_dimensions = isset( $value['value']['top'] ) || isset( $value['value']['right'] ) || isset( $value['value']['bottom'] ) || isset( $value['value']['left'] );

                    if ( $is_color_picker && empty( $value['value']['defaultState'] ) && empty( $value['value']['hoverState'] ) ) {
                        continue;
                    }

                    if ( $is_dimensions && ( empty( $value['value']['top'] ) && empty( $value['value']['right'] ) && empty( $value['value']['bottom'] ) && empty( $value['value']['left'] ) ) ) {
                        continue;
                    }

                    $is_associative_array_selectors = $selectors === array_values( $selectors ) ? false : true;

                    if ( $is_associative_array_selectors ) {
                        foreach ( $selectors as $selector => $selector_value ) {
                            $selector = str_replace( '{{WRAPPER}}', '.at-block-' . $block_id, $selector );

                            $replaced_selector_value = is_array( $value['value'] )
                                ? str_replace( array( '{{VALUE}}', '{{UNIT}}' ), array( array_values( $value['value'] )[0], $unit ), $selector_value )
                                : str_replace( array( '{{VALUE}}', '{{UNIT}}' ), array( $value['value'], $unit ), $selector_value );

                            if ( $is_color_picker ) {
                                if ( empty( $replaced_selector_value ) || $replaced_selector_value === '{{HOVER}}' && empty( $value['value']['hoverState'] ) ) {
                                    continue;
                                }

                                $replaced_selector_value = str_replace( array( '{{VALUE}}', '{{HOVER}}' ), array( $value['value']['defaultState'], $value['value']['hoverState'] ), $selector_value );
                            }

                            if ( $value_is_object ) {
                                if ( $is_color_picker ) {
                                    $responsive_values[$device][$selector][] = sprintf( '%s: %s', $property, $replaced_selector_value );
                                }
                            } else {
                                $responsive_values[$device][$selector][] = sprintf( '%s: %s', $property, $replaced_selector_value );
                            }
                        }
                    } else {
                        foreach ( $selectors as $selector ) {
                            $selector = str_replace( '{{WRAPPER}}', '.at-block-' . $block_id, $selector );
        
                            if ( $device === 'desktop' ) {
                                if ( $value_is_object ) {
                                    if ( $is_dimensions ) {
                                        foreach ( $value['value'] as $sub_property => $sub_value ) {
                                            if ( empty( $sub_value ) && $sub_value !== '0' ) {
                                                continue;
                                            }

                                            $responsive_values['desktop'][$selector][] = sprintf( '%s: %s%s ', $property . '-' . $sub_property, $sub_value, $unit );
                                        }                                
                                    }
    
                                    if ( $is_color_picker ) {
                                        $responsive_values['desktop'][$selector][] = sprintf( '%s: %s', $property, $value['value']['defaultState'] );
                                        $responsive_values['desktop']["$selector:hover"][] = sprintf( '%s: %s', $property, $value['value']['hoverState'] );
                                    }
                                } else {
                                    $responsive_values['desktop'][$selector][] = sprintf( '%s: %s%s', $property, $value['value'], $unit );
                                }
                            } else {
                                if ( $value_is_object ) {
                                    if ( $is_dimensions ) {
                                        foreach ( $value['value'] as $sub_property => $sub_value ) {
                                            if ( empty( $sub_value ) && $sub_value !== '0' ) {
                                                continue;
                                            }

                                            $responsive_values[$device][$selector][] = sprintf( '%s: %s%s ', $property . '-' . $sub_property, $sub_value, $unit );
                                        }                                
                                    }
    
                                    if ( $is_color_picker ) {
                                        $responsive_values[$device][$selector][] = sprintf( '%s: %s', $property, $value['value']['defaultState'] );
                                        $responsive_values[$device]["$selector:hover"][] = sprintf( '%s: %s', $property, $value['value']['hoverState'] );
                                    }
                                } else {
                                    $responsive_values[$device][$selector][] = sprintf( '%s: %s%s', $property, $value['value'], $unit );
                                }
                            }
                        }
                    }
                }
            }
        }

        foreach( $media_queries as $device => $media_query ) {
            if ( $device === 'desktop' ) {
                if ( ! empty( $responsive_values[$device] ) ) {
                    foreach ( $responsive_values[$device] as $selector => $properties ) {
                        $css .= sprintf( '%s { %s } ', $selector, implode( ';', $properties ) );
                    }
                }
            } else {
                if ( ! empty( $responsive_values[$device] ) ) {
                    $css .= $media_query . ' { ';
                        foreach ( $responsive_values[$device] as $selector => $properties ) {
                            $css .= sprintf( '%s { %s } ', $selector, implode( ';', $properties ) );
                        }
                    $css .= ' } ';
                }
            }
        }

        return $css;
    }
}