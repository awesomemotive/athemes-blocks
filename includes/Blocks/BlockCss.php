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
            'mobile' => '',
            'tablet' => '@media (min-width: 768px) and (max-width: 1024px)',
            'desktop' => '@media (min-width: 1025px)',
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

            if ( isset( $attribute_settings['css'] ) ) {
                $selectors = $attribute_settings['css']['selectors'];
                $property = $attribute_settings['css']['property'];

                foreach ( $attributes[$attribute_name] as $device => $value ) {
                    if ( empty( $value['value'] ) ) {
                        continue;
                    }

                    $value_is_object = is_array( $value['value'] );
                    $unit = isset( $value['unit'] ) ? $value['unit'] : '';

                    $is_color_picker = isset( $value['value']['defaultState'] ) || isset( $value['value']['hoverState'] );
                    $is_dimensions = isset( $value['value']['top'] ) || isset( $value['value']['right'] ) || isset( $value['value']['bottom'] ) || isset( $value['value']['left'] );

                    $is_associative_array_selectors = $selectors === array_values( $selectors ) ? false : true;

                    if ( $is_associative_array_selectors ) {
                        foreach ( $selectors as $selector => $selector_value ) {
                            $selector = str_replace( '{{WRAPPER}}', '.wp-block-athemes-blocks-heading-' . $block_id, $selector );
                            $selector_value = $is_color_picker ? '{{VALUE}}' : str_replace( '{{VALUE}}', $value['value'], $selector_value );
                            $selector_unit = $is_color_picker ? '{{UNIT}}' : str_replace( '{{UNIT}}', $unit, $unit );

                            if ( $is_color_picker ) {
                                $selector_value = str_replace( array( '{{VALUE}}', '{{HOVER}}' ), array( $value['value']['defaultState'], $value['value']['hoverState'] ), $selector_value );
                            }

                            if ( $device === 'desktop' ) {
                                if ( $value_is_object ) {
                                    if ( $is_color_picker ) {
                                        $responsive_values['desktop'][$selector][] = sprintf( '%s: %s', $property, $selector_value );
                                    }
                                } else {
                                    $responsive_values['desktop'][$selector][] = sprintf( '%s: %s%s', $property, $selector_value, $selector_unit );
                                }
                            } else {
                                if ( $value_is_object ) {
                                    if ( $is_color_picker ) {
                                        $responsive_values[$device][$selector][] = sprintf( '%s: %s', $property, $selector_value );
                                    }
                                } else {
                                    $responsive_values[$device][$selector][] = sprintf( '%s: %s%s', $property, $selector_value, $selector_unit );
                                }
                            }                          
                        }
                    } else {
                        foreach ( $selectors as $selector ) {
                            $selector = str_replace( '{{WRAPPER}}', '.wp-block-athemes-blocks-heading-' . $block_id, $selector );
        
                            if ( $device === 'desktop' ) {
                                if ( $value_is_object ) {
                                    if ( $is_dimensions ) {
                                        foreach ( $value['value'] as $sub_property => $sub_value ) {
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
            if ( $device === 'mobile' ) {
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