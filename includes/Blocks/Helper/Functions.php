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
    public static function addAnimationMarkup( $wrapper_attributes, $attributes, $atts_defaults ) {
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
}