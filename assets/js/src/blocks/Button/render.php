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

$atts_defaults = require( ATHEMES_BLOCKS_PATH . 'build/blocks/Button/attributes.php' );

// Extract the settings values.
$clientId = $attributes['clientId'];
$content = $attributes['content'] ?? '';
$buttonId = $attributes['buttonId'] ?? '';
$enableIcon = $attributes['enableIcon'] ?? false;
$icon = Settings::get_inner_setting( 'icon', 'iconData', $attributes, $atts_defaults, '' );
$iconPosition = Settings::get_inner_setting( 'icon', 'iconPosition', $attributes, $atts_defaults, '' );
$alignment = Settings::get_setting( 'alignment', $attributes, $atts_defaults );
$linkUrl = Settings::get_inner_setting( 'link', 'linkUrl', $attributes, $atts_defaults, '' );
$linkTarget = Settings::get_inner_setting( 'link', 'linkTarget', $attributes, $atts_defaults, '' );
$linkNoFollow = Settings::get_inner_setting( 'link', 'linkNoFollow', $attributes, $atts_defaults, '' );
$hideOnDesktop = Settings::get_setting( 'hideOnDesktop', $attributes, $atts_defaults );
$hideOnTablet = Settings::get_setting( 'hideOnTablet', $attributes, $atts_defaults );
$hideOnMobile = Settings::get_setting( 'hideOnMobile', $attributes, $atts_defaults );

// Wrapper attributes.
$wrapper_attributes = array();
$wrapper_classes = array( 
    'at-block', 
    'at-block-' . $clientId, 
    'at-block-button' 
);

// Link attributes.
$link_attributes = array();
$link_classes = array(
    'at-block-button__wrapper'
);

// Icon.
$icon_output = '';
if ( ! empty( $icon ) && $enableIcon ) {
    $wrapper_classes[] = 'at-block-button--has-icon';
    $icon_output = sprintf(
        '<div class="at-block-button__icon">%s</div>',
        Functions::get_icon_svg( $icon )
    );
}

// Alignment.
if ( ! empty( $alignment ) && $alignment === 'full-width' ) {
    $wrapper_classes[] = 'at-block-button--full-width';
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

// Mount the wrapper classes.
$wrapper_attributes['class'] = implode( ' ', $wrapper_classes );

// Mount the link attributes.
$link_attributes[] = $buttonId ? 'id="'. $buttonId .'"' : '';
$link_attributes[] = $linkUrl ? 'href="'. $linkUrl .'"' : '';
$link_attributes[] = 'class="'. implode( ' ', $link_classes ) .'"';

if ( ! empty( $linkTarget ) && ! empty( $linkUrl ) ) {
    $link_attributes[] = 'target="_blank"';
}

if ( ! empty( $linkNoFollow ) && ! empty( $linkUrl ) ) {
    $link_attributes[] = 'rel="nofollow"';
}

// Html tag.
$htmlTag = ! empty( $linkUrl ) ? 'a' : 'div';

// Output.
ob_start();
echo '<div ' . get_block_wrapper_attributes( $wrapper_attributes ) . '>';
    echo '<' . $htmlTag . ' ' . implode( ' ', $link_attributes ) . '>';
        if ( ! empty( $icon ) && $iconPosition === 'before' && $enableIcon ) {
            echo '<div class="at-block-button__icon">';
                echo $icon_output;
            echo '</div>';
        }
        echo $content;
        if ( ! empty( $icon ) && $iconPosition === 'after' && $enableIcon ) {
            echo '<div class="at-block-button__icon">';
                echo $icon_output;
            echo '</div>';
        }
    echo '</' . $htmlTag . '>';
echo '</div>';
$output = ob_get_clean();

echo Functions::render_block_output( $output );