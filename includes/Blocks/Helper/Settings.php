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
     * @param string $name The name of the setting.
     * @param array<string, mixed> $attributes The block attributes.
     * @param array<string, mixed> $atts_defaults The default block attributes.
     * @param string $device The device to get the setting for.
     * 
     * @return mixed The setting value.
     */
    public static function get_setting( string $name, array $attributes, array $atts_defaults = array(), string $device = 'desktop' ) {
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
     * @param string $name The name of the setting.
     * @param string $inner_name The name of the inner setting.
     * @param array<string, mixed> $attributes The block attributes.
     * @param array<string, mixed> $atts_defaults The default block attributes.
     * @param string $device The device to get the setting for.
     * 
     * @return mixed The inner setting value.
     */
    public static function get_inner_setting( string $name, string $inner_name, array $attributes, array $atts_defaults, string $device = 'desktop' ) {
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