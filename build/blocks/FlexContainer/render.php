<?php

/**
 * Render the Flex Container block.
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

$atts_defaults = require( ATHEMES_BLOCKS_PATH . 'build/blocks/FlexContainer/attributes.php' );

// Extract the settings values.
$clientId = $attributes['clientId'];
$containerWidth = Settings::get_setting( 'containerWidth', $attributes, $atts_defaults );
$contentWidth = Settings::get_setting( 'contentWidth', $attributes, $atts_defaults );
$contentBoxWidth = Settings::get_setting( 'contentBoxWidth', $attributes, $atts_defaults );
$customWidth = Settings::get_setting( 'customWidth', $attributes, $atts_defaults );
$minHeight = Settings::get_setting( 'minHeight', $attributes, $atts_defaults );
$layout = Settings::get_setting( 'layout', $attributes, $atts_defaults );
$childrenWidth = Settings::get_setting( 'childrenWidth', $attributes, $atts_defaults );
$htmlTag = Settings::get_setting( 'htmlTag', $attributes, $atts_defaults );
$htmlTagLink = Settings::get_setting( 'htmlTagLink', $attributes, $atts_defaults );
$htmlTagLinkOpenInNewWindow = Settings::get_setting( 'htmlTagLinkOpenInNewWindow', $attributes, $atts_defaults );
$hideOnDesktop = Settings::get_setting( 'hideOnDesktop', $attributes, $atts_defaults );
$hideOnTablet = Settings::get_setting( 'hideOnTablet', $attributes, $atts_defaults );
$hideOnMobile = Settings::get_setting( 'hideOnMobile', $attributes, $atts_defaults );
$backgroundImageOverlay = Settings::get_inner_setting( 'bgColor', 'backgroundImageOverlay', $attributes, $atts_defaults, '' );

$wrapper_attributes = array();
$wrapper_classes = array( 
    'at-block', 
    'at-block-flex-container',
    'at-block-' . $clientId
);

// Container width.
$wrapper_classes[] = 'at-block-flex-container--container-' . $containerWidth;

// Layout.
if ( $layout === 'flex' && $childrenWidth === 'equal' ) {
    $wrapper_classes[] = 'at-block-flex-container--children-w-equal';
} else if ( $layout === 'flex' && $childrenWidth === 'auto' ) {
    $wrapper_classes[] = 'at-block-flex-container--children-w-auto';
}

$wrapper_classes[] = 'at-block-flex-container--layout-' . $layout;

// Background Image overlay.
if ( $backgroundImageOverlay ) {
    $wrapper_classes[] = 'has-background-image-overlay';
}

// Add link properties if the tag is 'a'.
if ( $htmlTag === 'a' && ! empty( $htmlTagLink ) ) {
    $wrapper_attributes['href'] = $htmlTagLink;
    
    if ( ! empty( $htmlTagLinkOpenInNewWindow ) ) {
        $wrapper_attributes['target'] = '_blank';
    }
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

// Identify $content container blocks as children.
if ( $content ) {
    $content = str_replace( 'class="at-block at-block-flex-container', 'class="at-block at-block-flex-container is-child-container', $content );
}

// Animation.
$animation_markup_data = Functions::add_animation_markup( $wrapper_attributes, $attributes, $atts_defaults );
$wrapper_classes = array_merge( $wrapper_classes, $animation_markup_data['classes'] );
$wrapper_attributes = array_merge( $wrapper_attributes, $animation_markup_data['wrapper_attributes'] );

// Mount the class attribute.
$wrapper_attributes['class'] = implode( ' ', $wrapper_classes );

// Output.
echo sprintf(
    '<%s %s>%s</%s>',
    $htmlTag ? $htmlTag : 'div',
    get_block_wrapper_attributes( $wrapper_attributes ),
    $containerWidth === 'full-width' && $contentWidth === 'boxed' ? '<div class="at-block-flex-container__inner-blocks-wrapper">' . $content . '</div>' : $content,
    $htmlTag ? $htmlTag : 'div'
);