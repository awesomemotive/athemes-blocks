<?php

/**
 * Settings helper for blocks.
 * 
 * @package aThemes Blocks
 */

namespace aThemes_Blocks\Blocks\Helper;

class Settings {

    /**
     * Get setting by name.
     * This function will return the 'desktop' setting value.
     * 
     * @param string $name
     * @param array $attributes
     * @param array $detaults
     * @param string $device
     * 
     * @return mixed
     */
    public static function get_setting( $name, $attributes, $atts_defaults = array(), $device = 'desktop' ) {
        if ( isset( $attributes[$name][$device]['value'] ) ) {
            return $attributes[$name][$device]['value'];
        }

        if ( empty( $atts_defaults[$name]['default'][$device]['value'] ) ) {
            return '';
        }

        return $atts_defaults[$name]['default'][$device]['value'];
    }

    /**
     * Get inner setting by name.
     * 
     * @param string $name
     * @param string $inner_name
     * @param string $device
     * @param array $attributes
     * 
     * @return mixed
     */
    public static function get_inner_setting( $name, $inner_name, $attributes, $atts_defaults, $device = 'desktop' ) {
        if ( isset( $attributes[$name]['innerSettings'][$inner_name]['default'][$device]['value'] ) ) {
            return $attributes[$name]['innerSettings'][$inner_name]['default'][$device]['value'];
        }

        if ( empty( $atts_defaults[$name]['default']['innerSettings'][$inner_name]['default'][$device]['value'] ) ) {
            return '';
        }

        return $atts_defaults[$name]['default']['innerSettings'][$inner_name]['default'][$device]['value'];
    }
}