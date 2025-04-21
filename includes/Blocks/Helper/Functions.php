<?php

/**
 * Functions helper for blocks.
 * 
 * @package aThemes Blocks
 */

namespace aThemes_Blocks\Blocks\Helper;

class Functions {

    /**
     * Add animation markup to the wrapper attributes.
     * 
     * @param array $wrapper_attributes The wrapper attributes.
     */
    public static function add_animation_markup( $wrapper_attributes, $attributes, $atts_defaults ) {
        $html_classes = array();
        $html_attributes = array();

        $entrance_animation = Settings::get_inner_setting( 'animation', 'entranceAnimation', $attributes, $atts_defaults );
        $animation_duration = Settings::get_inner_setting( 'animation', 'animationDuration', $attributes, $atts_defaults );
        $animation_delay = Settings::get_inner_setting( 'animation', 'animationDelay', $attributes, $atts_defaults );

        if ( ! $entrance_animation || 'default' === $entrance_animation ) {
            return array(
                'classes' => $html_classes,
                'wrapper_attributes' => $html_attributes,
            );
        }

        $html_attributes['data-atb-animation'] = $entrance_animation;

        if ( $animation_duration ) {
            $html_classes[] = 'atb-animation-duration-' . $animation_duration;
        }

        if ( $animation_delay ) {
            $html_attributes['data-atb-animation-delay'] = $animation_delay . 'ms';
        }

        return array(
            'classes' => $html_classes,
            'wrapper_attributes' => $html_attributes,
        );
    }

    /**
     * Get the icon SVG.
     * 
     * @param array $icon_data The icon data.
     * @return string The icon SVG.
     */
    public static function get_icon_svg( $icon_data ) {
        if ( empty( $icon_data ) ) {
            return '';
        }

        // Detect the icon library.
        $icon_library = $icon_data['library'];
        if ( $icon_library === 'all' ) {
            if ( strpos( $icon_data['icon'], 'fa-' ) !== false || strpos( $icon_data['icon'], 'fas-' ) !== false || strpos( $icon_data['icon'], '-brands' ) !== false ) {
                $icon_library = 'font-awesome';
            }

            if ( strpos( $icon_data['icon'], 'bx-' ) !== false || strpos( $icon_data['icon'], 'bxl-' ) !== false || strpos( $icon_data['icon'], 'bxs-' ) !== false ) {
                $icon_library = 'box-icons';
            }
        }

        // Get the icons list.
        if ( 'box-icons' === $icon_library ) {
            $icons_list = include( ATHEMES_BLOCKS_PATH . 'includes/Data/box-icons.php' );
        }

        if ( 'font-awesome' === $icon_library ) {
            $icons_list = include( ATHEMES_BLOCKS_PATH . 'includes/Data/font-awesome.php' );
        }
        
        // Get the icon name.
        $icon_name = $icon_data['icon'];

        return $icons_list[$icon_name];
    }
}