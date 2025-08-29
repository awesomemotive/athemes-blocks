<?php

/**
 * Render the Heading block.
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

$atts_defaults = require( ATHEMES_BLOCKS_PATH . 'build/blocks/Heading/attributes.php' );

// Extract the settings values.
$clientId = $attributes['clientId'];
$content = $attributes['content'] ?? '';
$htmlTag = Settings::get_setting( 'htmlTag', $attributes, $atts_defaults );
$hideOnDesktop = Settings::get_setting( 'hideOnDesktop', $attributes, $atts_defaults );
$hideOnTablet = Settings::get_setting( 'hideOnTablet', $attributes, $atts_defaults );
$hideOnMobile = Settings::get_setting( 'hideOnMobile', $attributes, $atts_defaults );

$wrapper_attributes = array();
$wrapper_classes = array( 
    'at-block', 
    'at-block-' . $clientId, 
    'at-block-heading' 
);

// Font size.
if ( 
    Settings::get_inner_setting( 'typography', 'fontSize', $attributes, $atts_defaults, 'desktop' ) > 0 ||
    Settings::get_inner_setting( 'typography', 'fontSize', $attributes, $atts_defaults, 'tablet' ) > 0 ||
    Settings::get_inner_setting( 'typography', 'fontSize', $attributes, $atts_defaults, 'mobile' ) > 0
) {
    $wrapper_classes[] = 'atb-has-font-size';
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

// Output.
if ( $htmlTag === 'div' ) {
    echo Functions::render_block_output( sprintf(
        '<div %1$s>%2$s</div>',
        get_block_wrapper_attributes( $wrapper_attributes ),
        $content,
    ) );
} else {
    echo Functions::render_block_output( sprintf(
        '<%1$s %2$s><%3$s>%4$s</%3$s></%1$s>',
        'div',
        get_block_wrapper_attributes( $wrapper_attributes ),
        $htmlTag,
        $content,
    ) );
}