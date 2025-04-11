<?php

/**
 * Render the Button block.
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

$atts_defaults = require( ATHEMES_BLOCKS_PATH . 'assets/js/src/blocks/Button/attributes.php' );

// Extract the settings values.
$clientId = $attributes['clientId'];
$content = $attributes['content'] ?? '';
$buttonId = $attributes['buttonId'] ?? '';
$linkUrl = Settings::get_inner_setting( 'link', 'linkUrl', $attributes, $atts_defaults, '' );
$linkTarget = Settings::get_inner_setting( 'link', 'linkTarget', $attributes, $atts_defaults, '' );
$linkNoFollow = Settings::get_inner_setting( 'link', 'linkNoFollow', $attributes, $atts_defaults, '' );
$hideOnDesktop = Settings::get_setting( 'hideOnDesktop', $attributes, $atts_defaults );
$hideOnTablet = Settings::get_setting( 'hideOnTablet', $attributes, $atts_defaults );
$hideOnMobile = Settings::get_setting( 'hideOnMobile', $attributes, $atts_defaults );

$wrapper_attributes = array();
$wrapper_classes = array( 
    'at-block', 
    'at-block-' . $clientId, 
    'at-block-button' 
);

$link_attributes = array();
$link_classes = array(
    'at-block-button__button'
);

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
$animation_markup_data = Functions::addAnimationMarkup( $wrapper_attributes, $attributes, $atts_defaults );
$wrapper_classes = array_merge( $wrapper_classes, $animation_markup_data['classes'] );
$wrapper_attributes = array_merge( $wrapper_attributes, $animation_markup_data['wrapper_attributes'] );

// Mount the wrapper classes.
$wrapper_attributes['class'] = implode( ' ', $wrapper_classes );

// Mount the link attributes.
$link_attributes[] = 'id="'. $buttonId .'"';
$link_attributes[] = 'href="'. $linkUrl .'"';
$link_attributes[] = 'class="'. implode( ' ', $link_classes ) .'"';

if ( ! empty( $linkTarget ) ) {
    $link_attributes[] = 'target="_blank"';
}

if ( ! empty( $linkNoFollow ) ) {
    $link_attributes[] = 'rel="nofollow"';
}

// Output.
echo sprintf(
    '<div %1$s><a %2$s>%3$s</a></div>',
    get_block_wrapper_attributes( $wrapper_attributes ),
    implode( ' ', $link_attributes ),
    $content,
);
