<?php

/**
 * Render the Google Maps block.
 * 
 * @package aThemes_Blocks
 */

include_once( ATHEMES_BLOCKS_PATH . 'includes/Blocks/Helper/Settings.php' );
include_once( ATHEMES_BLOCKS_PATH . 'includes/Blocks/Helper/Functions.php' );

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

use aThemes_Blocks\Blocks\Helper\Settings;
use aThemes_Blocks\Blocks\Helper\Functions;

$atts_defaults = require( ATHEMES_BLOCKS_PATH . 'build/blocks/GoogleMaps/attributes.php' );

// Extract the settings values.
$clientId = $attributes['clientId'];
$content = $attributes['content'] ?? '';
$htmlTag = 'div';

$location = isset( $attributes['location'] ) ? $attributes['location'] : $atts_defaults['location']['default'];
$zoom = isset( $attributes['zoom'] ) ? $attributes['zoom'] : $atts_defaults['zoom']['default'];
$heightDesktop = Settings::get_setting( 'height', $attributes, $atts_defaults, 'desktop' );
$satellite_view = isset( $attributes['satelliteView'] ) ? $attributes['satelliteView'] : $atts_defaults['satelliteView']['default'];
$language = isset( $attributes['language'] ) ? $attributes['language'] : $atts_defaults['language']['default'];

$hideOnDesktop = Settings::get_setting( 'hideOnDesktop', $attributes, $atts_defaults );
$hideOnTablet = Settings::get_setting( 'hideOnTablet', $attributes, $atts_defaults );
$hideOnMobile = Settings::get_setting( 'hideOnMobile', $attributes, $atts_defaults );

$wrapper_attributes = array();
$wrapper_classes = array( 
    'at-block', 
    'at-block-' . $clientId, 
    'at-block-google-maps' 
);

// Add alignment class if set
if ( ! empty( $attributes['align'] ) ) {
    $wrapper_classes[] = 'align' . $attributes['align'];
}

// Visibility classes
if ( ! empty( $hideOnDesktop ) ) {
    $wrapper_classes[] = 'atb-hide-desktop';
}

if ( ! empty( $hideOnTablet ) ) {
    $wrapper_classes[] = 'atb-hide-tablet';
}

if ( ! empty( $hideOnMobile ) ) {
    $wrapper_classes[] = 'atb-hide-mobile';
}

// Animation.
$animation_markup_data = Functions::add_animation_markup( $wrapper_attributes, $attributes, $atts_defaults );
$wrapper_classes = array_merge( $wrapper_classes, $animation_markup_data['classes'] );
$wrapper_attributes = array_merge( $wrapper_attributes, $animation_markup_data['wrapper_attributes'] );

// Mount the class attribute.
$wrapper_attributes['class'] = implode( ' ', $wrapper_classes );

// Build the iframe src URL
$map_src = sprintf(
    'https://maps.google.com/maps?q=%s&z=%d&t=%s&hl=%s&output=embed',
    urlencode( $location ),
    intval( $zoom ),
    $satellite_view ? 'k' : 'm',
    esc_attr( $language )
);

// Include iframe in the allowed tags for the output.
$extra_allowed_tags = array(
    'iframe' => array(
        'title' => array(),
        'class' => array(),
        'width' => array(),
        'height' => array(),
        'loading' => array(),
        'allowfullscreen' => array(),
        'src' => array(),
    ),
);

// Output.
echo Functions::render_block_output( sprintf(
    '<%1$s %2$s>
        <iframe
            title="%3$s"
            class="at-block-google-maps__iframe"
            width="100%%"
            height="%4$s"
            loading="lazy"
            allowfullscreen
            src="%5$s"
        ></iframe>
    </%1$s>',
    $htmlTag,
    get_block_wrapper_attributes( $wrapper_attributes ),
    esc_attr__( 'Google Maps', 'athemes-blocks' ),
    esc_attr( $heightDesktop ),
    esc_url( $map_src )
), $extra_allowed_tags );
