<?php

/**
 * Render the Icon block.
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

$atts_defaults = require( ATHEMES_BLOCKS_PATH . 'build/blocks/Icon/attributes.php' );

// Extract the settings values.
$clientId = $attributes['clientId'];
$content = $attributes['content'] ?? '';
$htmlTag = 'div';

$icon = Settings::get_inner_setting( 'icon', 'iconData', $attributes, $atts_defaults, '' );
$hideOnDesktop = Settings::get_setting( 'hideOnDesktop', $attributes, $atts_defaults );
$hideOnTablet = Settings::get_setting( 'hideOnTablet', $attributes, $atts_defaults );
$hideOnMobile = Settings::get_setting( 'hideOnMobile', $attributes, $atts_defaults );

$wrapper_attributes = array();
$wrapper_classes = array( 
    'at-block', 
    'at-block-' . $clientId, 
    'at-block-icon' 
);

// Link.
$link = Settings::get_inner_setting( 'link', 'linkUrl', $attributes, $atts_defaults, '' );
$linkTarget = Settings::get_inner_setting( 'link', 'linkTarget', $attributes, $atts_defaults, '' );
$linkNoFollow = Settings::get_inner_setting( 'link', 'linkNoFollow', $attributes, $atts_defaults, '' );

if ( ! empty( $link ) ) {
    $htmlTag = 'a';
    $wrapper_attributes['href'] = $link;
    
    if ( ! empty( $linkTarget ) ) {
        $wrapper_attributes['target'] = '_blank';
    }
    
    if ( ! empty( $linkNoFollow ) ) {
        $wrapper_attributes['rel'] = 'nofollow';
    }
}

// Icon.
$icon_output = '';
if ( ! empty( $icon ) ) {
    $wrapper_classes[] = 'at-block-icon--has-icon';
    
    $icon_output = sprintf(
        '<div class="at-block-icon__icon">%s</div>',
        Functions::get_icon_svg( $icon )
    );
}

// Size.
if ( 
    Settings::get_setting( 'size', $attributes, $atts_defaults, 'desktop' ) > 0 ||
    Settings::get_setting( 'size', $attributes, $atts_defaults, 'tablet' ) > 0 ||
    Settings::get_setting( 'size', $attributes, $atts_defaults, 'mobile' ) > 0
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
echo Functions::render_block_output( sprintf(
    '<%1$s %2$s>%3$s</%1$s>',
    $htmlTag,
    get_block_wrapper_attributes( $wrapper_attributes ),
    $icon_output
) );
