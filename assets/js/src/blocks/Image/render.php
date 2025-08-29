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

$atts_defaults = require( ATHEMES_BLOCKS_PATH . 'build/blocks/Image/attributes.php' );

// Extract the settings values.
$clientId = $attributes['clientId'];
$content = $attributes['content'] ?? '';
$htmlTag = 'div';
$image = Settings::get_inner_setting( 'image', 'image', $attributes, $atts_defaults, '' );
$image_id = $image ? $image['id'] : '';
$disableLazyLoad = Settings::get_inner_setting( 'image', 'disableLazyLoad', $attributes, $atts_defaults, '' );
$imageSize = Settings::get_inner_setting( 'image', 'size', $attributes, $atts_defaults, '' );
$caption = Settings::get_inner_setting( 'image', 'caption', $attributes, $atts_defaults, '' );
$captionText = Settings::get_inner_setting( 'image', 'captionText', $attributes, $atts_defaults, '' );

$hideOnDesktop = Settings::get_setting( 'hideOnDesktop', $attributes, $atts_defaults );
$hideOnTablet = Settings::get_setting( 'hideOnTablet', $attributes, $atts_defaults );
$hideOnMobile = Settings::get_setting( 'hideOnMobile', $attributes, $atts_defaults );

$wrapper_attributes = array();
$wrapper_classes = array( 
    'at-block', 
    'at-block-' . $clientId, 
    'at-block-image' 
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

// Image and caption.
$image_output = '';
if ( ! empty( $image ) ) {
    $image_alt = get_post_meta( $image_id, '_wp_attachment_image_alt', true );

    $caption_output = '';
    if ( $caption !== 'none' ) {
        $caption_output = sprintf(
            '<div class="at-block-image__caption"><p class="at-block-image__caption-text">%s</p></div>',
            $caption === 'attachment' ? $image['caption'] : $captionText
        );
    }

    $image_output = sprintf(
        '<div class="at-block-image__image-wrapper">%1$s%2$s</div>',
        wp_get_attachment_image( $image_id, 'full', false, array( 'class' => 'at-block-image__image', 'alt' => $image_alt, 'loading' => $disableLazyLoad ? 'eager' : 'lazy' ) ),
        $caption_output
    );
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
    $image_output
) );
