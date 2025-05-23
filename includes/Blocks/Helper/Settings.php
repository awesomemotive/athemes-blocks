<?php

/**
 * Settings helper for blocks.
 * 
 * @package aThemes Blocks
 */

namespace AThemes_Blocks\Blocks\Helper;

class Settings {

    /**
     * Get setting by name.
     * This function will return the 'desktop' setting value.
     * 
     * @param string $name
     * @param array<string, mixed> $attributes
     * @param array<string, mixed> $atts_defaults
     * @param string $device
     * 
     * @return mixed
     */
    public static function get_setting( $name, $attributes, $atts_defaults = array(), $device = 'desktop' ) {
        if ( ! $device ) {
            if ( isset( $attributes[$name] ) ) {
                return $attributes[$name];
            }

            return $atts_defaults[$name]['default'];
        }

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
     * @param array<string, mixed> $attributes
     * @param array<string, mixed> $atts_defaults
     * 
     * @return mixed
     */
    public static function get_inner_setting( $name, $inner_name, $attributes, $atts_defaults, $device = 'desktop' ) {
        if ( ! $device ) {
            if ( isset( $attributes[$name]['innerSettings'][$inner_name]['default'] ) ) {
                return $attributes[$name]['innerSettings'][$inner_name]['default'];
            }

            return $atts_defaults[$name]['default']['innerSettings'][$inner_name]['default'];
        }

        if ( isset( $attributes[$name]['innerSettings'][$inner_name]['default'][$device]['value'] ) ) {
            return $attributes[$name]['innerSettings'][$inner_name]['default'][$device]['value'];
        }

        if ( isset( $atts_defaults[$name]['default']['innerSettings'][$inner_name]['default'][$device]['value'] ) && empty( $atts_defaults[$name]['default']['innerSettings'][$inner_name]['default'][$device]['value'] ) ) {
            return '';
        }

        return $atts_defaults[$name]['default']['innerSettings'][$inner_name]['default'][$device]['value'];
    }
}