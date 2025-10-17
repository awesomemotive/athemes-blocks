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

    /**
     * Get the block CSS.
     * 
     * @param array<string, mixed> $attributes Block attributes.
     * @param string $block_id Block ID.
     * @param array<string, mixed> $default_attributes Default block attributes.
     * @return string The block CSS.
     */
    public function get_block_css( array $attributes, string $block_id, array $default_attributes ): string {
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

            // Inner settings (recursive).
            if ( isset( $default_attributes[$attribute_name]['default']['innerSettings'] ) ) {
                $inner_settings_attributes = isset( $attributes[$attribute_name]['innerSettings'] ) ? $attributes[$attribute_name]['innerSettings'] : $default_attributes[$attribute_name]['default']['innerSettings'];
                $block_id = $block_id;
                $inner_settings_default_attributes = $default_attributes[$attribute_name]['default']['innerSettings'];

                $css .= self::get_block_css( $inner_settings_attributes, $block_id, $inner_settings_default_attributes );

                continue;
            }

            if ( isset( $attribute_settings['css'] ) ) {
                $selectors = $attribute_settings['css']['selectors'];
                $property = $attribute_settings['css']['property'];
                $important = $attribute_settings['css']['important'] ?? false;

                // Left condition refer to inner settings and right condition refer to default settings (from recursive call).
                $attribute_data = array();
                if ( isset( $attributes[$attribute_name] ) ) {
                    $attribute_data = isset( $attributes[$attribute_name]['default'] ) ? $attributes[$attribute_name]['default'] : $attributes[$attribute_name];
                } else {
                    if ( ! isset( $default_attributes[$attribute_name] ) || ! isset( $default_attributes[$attribute_name]['default'] ) ) {
                        continue;
                    }
                    
                    $attribute_data = $default_attributes[$attribute_name]['default'];
                }

                foreach ( $attribute_data as $device => $value ) {
                    if ( $value['value'] === '' || $value['value'] === 'default' ) {
                        continue;
                    }

                    $value_is_object = is_array( $value['value'] );
                    $unit = isset( $value['unit'] ) ? $value['unit'] : '';

                    $is_color_picker = isset( $value['value']['defaultState'] ) || isset( $value['value']['hoverState'] );
                    $is_dimensions = isset( $value['value']['top'] ) || isset( $value['value']['right'] ) || isset( $value['value']['bottom'] ) || isset( $value['value']['left'] );
                    $is_border_radius = strpos( $property, '-radius' ) !== false;
                    $is_background_image = strpos( $property, 'background-image' ) !== false && isset( $value['value']['url'] );
                    $is_focal_point = strpos( $property, 'background-position' ) !== false;

                    if ( $is_color_picker && empty( $value['value']['defaultState'] ) && empty( $value['value']['hoverState'] ) ) {
                        continue;
                    }

                    if ( $is_dimensions && ( empty( $value['value']['top'] ) && empty( $value['value']['right'] ) && empty( $value['value']['bottom'] ) && empty( $value['value']['left'] ) ) ) {
                        continue;
                    }

                    if ( $is_background_image && empty( $value['value'] ) ) {
                        continue;
                    }

                    if ( $is_focal_point && empty( $value['value'] ) ) {
                        continue;
                    }

                    $focal_point_value_x = isset( $value['value']['x'] ) ? ( $value['value']['x'] * 100 ) . '%' : '';
                    $focal_point_value_y = isset( $value['value']['y'] ) ? ( $value['value']['y'] * 100 ) . '%' : '';

                    $is_associative_array_selectors = $selectors === array_values( $selectors ) ? false : true;

                    if ( $is_associative_array_selectors ) {
                        foreach ( $selectors as $selector => $selector_value ) {
                            $selector = str_replace( '{{WRAPPER}}', '.at-block-' . $block_id, $selector );

                            $replaced_selector_value = is_array( $value['value'] )
                                ? str_replace( array( '{{VALUE}}', '{{UNIT}}' ), array( !empty($value['value']) ? array_values( $value['value'] )[0] : '', $unit ), $selector_value )
                                : str_replace( array( '{{VALUE}}', '{{UNIT}}' ), array( $value['value'], $unit ), $selector_value );

							if ( $is_color_picker ) {
								$default_state = $value['value']['defaultState'] ?? '';
								$hover_state = $value['value']['hoverState'] ?? '';
								
								if ( empty( $replaced_selector_value ) || $replaced_selector_value === '{{HOVER}}' && empty( $hover_state ) ) {
									continue;
								}

								$replaced_selector_value = str_replace( array( '{{VALUE}}', '{{HOVER}}' ), array( $default_state, $hover_state ), $selector_value );
							}

                            if ( $value_is_object ) {
                                if ( $is_color_picker ) {
                                    $responsive_values[$device][$selector][] = sprintf( '%s: %s %s', $property, $replaced_selector_value, $important ? '!important' : '' );
                                }
                            } else {
                                $responsive_values[$device][$selector][] = sprintf( '%s: %s %s', $property, $replaced_selector_value, $important ? '!important' : '' );
                            }
                        }
                    } else {
                        foreach ( $selectors as $selector ) {
                            $selector = str_replace( '{{WRAPPER}}', '.at-block-' . $block_id, $selector );
        
                            if ( $device === 'desktop' ) {
                                if ( $value_is_object ) {
                                    if ( $is_dimensions ) {
                                        foreach ( $value['value'] as $direction => $direction_value ) {
                                            if ( empty( $direction_value ) && $direction_value !== '0' ) {
                                                continue;
                                            }

                                            $replaced_property = str_replace( '{{DIRECTION}}', $direction, $property );

                                            if ( $is_border_radius ) {
                                                if ( $direction === 'top' ) {
                                                    $replaced_property = str_replace( 'top', 'top-left', $replaced_property );
                                                } else if ( $direction === 'right' ) {
                                                    $replaced_property = str_replace( 'right', 'top-right', $replaced_property );
                                                } else if ( $direction === 'bottom' ) {
                                                    $replaced_property = str_replace( 'bottom', 'bottom-right', $replaced_property );
                                                } else if ( $direction === 'left' ) {
                                                    $replaced_property = str_replace( 'left', 'bottom-left', $replaced_property );
                                                }
                                            }

                                            $responsive_values['desktop'][$selector][] = sprintf( '%s: %s%s %s', $replaced_property, $direction_value, $unit, $important ? '!important' : '' );
                                        }                                
                                    }
    
									if ( $is_color_picker ) {
										if ( isset( $value['value']['defaultState'] ) && $value['value']['defaultState'] !== '' ) {
											$responsive_values['desktop'][$selector][] = sprintf( '%s: %s', $property, $value['value']['defaultState'] );
										}

										if ( isset( $value['value']['hoverState'] ) && $value['value']['hoverState'] !== '' ) {
											$responsive_values['desktop']["$selector:hover"][] = sprintf( '%s: %s', $property, $value['value']['hoverState'] );
										}
									}

                                    if ( $is_background_image ) {
                                        $image_url = $value['value']['url'] ?? '';

                                        $responsive_values['desktop'][$selector][] = sprintf( '%s: url(%s) %s', $property, $image_url, $important ? '!important' : '' );
                                    }

                                    if ( $is_focal_point ) {
                                        $responsive_values['desktop'][$selector][] = sprintf( '%s: %s %s %s', $property, $focal_point_value_x, $focal_point_value_y, $important ? '!important' : '' );
                                    }
                                } else {
                                    $responsive_values['desktop'][$selector][] = sprintf( '%s: %s%s', $property, $value['value'], $unit );
                                }
                            } else {
                                if ( $value_is_object ) {
                                    if ( $is_dimensions ) {
                                        foreach ( $value['value'] as $direction => $direction_value ) {
                                            if ( empty( $direction_value ) && $direction_value !== '0' ) {
                                                continue;
                                            }

                                            $replaced_property = str_replace( '{{DIRECTION}}', $direction, $property );

                                            if ( $is_border_radius ) {
                                                if ( $direction === 'top' ) {
                                                    $replaced_property = str_replace( 'top', 'top-left', $replaced_property );
                                                } else if ( $direction === 'right' ) {
                                                    $replaced_property = str_replace( 'right', 'top-right', $replaced_property );
                                                } else if ( $direction === 'bottom' ) {
                                                    $replaced_property = str_replace( 'bottom', 'bottom-right', $replaced_property );
                                                } else if ( $direction === 'left' ) {
                                                    $replaced_property = str_replace( 'left', 'bottom-left', $replaced_property );
                                                }
                                            }

                                            $responsive_values[$device][$selector][] = sprintf( '%s: %s%s %s', $replaced_property, $direction_value, $unit, $important ? '!important' : '' );
                                        }                                
                                    }
    
									if ( $is_color_picker ) {
										if ( isset( $value['value']['defaultState'] ) && $value['value']['defaultState'] !== '' ) {
											$responsive_values[$device][$selector][] = sprintf( '%s: %s %s', $property, $value['value']['defaultState'], $important ? '!important' : '' );
										}

										if ( isset( $value['value']['hoverState'] ) && $value['value']['hoverState'] !== '' ) {
											$responsive_values[$device]["$selector:hover"][] = sprintf( '%s: %s %s', $property, $value['value']['hoverState'], $important ? '!important' : '' );
										}
									}

                                    if ( $is_background_image ) {
                                        $image_url = $value['value']['url'] ?? '';

                                        $responsive_values[$device][$selector][] = sprintf( '%s: url(%s) %s', $property, $image_url, $important ? '!important' : '' );
                                    }

                                    if ( $is_focal_point ) {
                                        $responsive_values[$device][$selector][] = sprintf( '%s: %s %s %s', $property, $focal_point_value_x, $focal_point_value_y, $important ? '!important' : '' );
                                    }
                                } else {
                                    $responsive_values[$device][$selector][] = sprintf( '%s: %s%s %s', $property, $value['value'], $unit, $important ? '!important' : '' );
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