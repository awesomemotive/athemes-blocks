<?php

/**
 * Render the Team block.
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

$atts_defaults = require( ATHEMES_BLOCKS_PATH . 'build/blocks/TeamMember/attributes.php' );

// Extract the settings values.
$clientId = $attributes['clientId'];
$htmlTag = 'div';
$alignment = isset( $attributes['alignment'] ) ? $attributes['alignment'] : $atts_defaults['alignment']['default'];
$verticalAlignment = Settings::get_setting( 'verticalAlignment', $attributes, $atts_defaults, 'desktop' );
$imagePosition = isset( $attributes['imagePosition'] ) ? $attributes['imagePosition'] : $atts_defaults['imagePosition']['default'];
$imageStyle = isset( $attributes['imageStyle'] ) ? $attributes['imageStyle'] : $atts_defaults['imageStyle']['default'];
$imageSize = isset( $attributes['imageSize'] ) ? $attributes['imageSize'] : $atts_defaults['imageSize']['default'];

$hideOnDesktop = Settings::get_setting( 'hideOnDesktop', $attributes, $atts_defaults );
$hideOnTablet = Settings::get_setting( 'hideOnTablet', $attributes, $atts_defaults );
$hideOnMobile = Settings::get_setting( 'hideOnMobile', $attributes, $atts_defaults );

$wrapper_attributes = array();
$wrapper_classes = array( 
    'at-block', 
    'at-block-' . $clientId, 
    'at-block-team-member' 
);

// Add alignment class if set
if ( ! empty( $attributes['align'] ) ) {
    $wrapper_classes[] = 'align' . $attributes['align'];
}

// Image.
$image = Settings::get_inner_setting( 'image', 'image', $attributes, $atts_defaults, '' );
$image_id = $image['id'] ?? '';
$has_image = $image_id ? true : false;
$image_output = $has_image ? wp_get_attachment_image( $image_id, $imageSize, false, array( 'class' => 'at-block-team-member__item-image' ) ) : '';

// Other content.
$name = $attributes['name'] ?? '';
$company = $attributes['company'] ?? '';

// Mount block output.
$block_output = '';

if ( $imagePosition === 'top' || $imagePosition === 'left' || $imagePosition === 'right' ) {
    $block_output .= "
        <div class='at-block-team-member__item-inner'>
            ". ( $has_image ? $image_output : '' ) ."
            <div class='at-block-team-member__item-content'>
                <div>
                    <div class='at-block-team-member__item-name'>
                        {$name}
                    </div>
                    <div class='at-block-team-member__item-company'>
                        {$company}
                    </div>
                    " . ( ! empty( $content ) ? $content : '' ) . "
                </div>
            </div>
        </div>
    ";
}

if ( $imagePosition === 'bottom' ) {
    $block_output .= "
        <div class='at-block-team-member__item-inner'>
            <div class='at-block-team-member__item-content'>
                ". ( $has_image ? $image_output : '' ) ."
                <div>
                    <div class='at-block-team-member__item-name'>
                        {$name}
                    </div>
                    <div class='at-block-team-member__item-company'>
                        {$company}
                    </div>
                    " . ( ! empty( $content ) ? $content : '' ) . "
                </div>
            </div>
        </div>
    ";
}

// Alignment.
$wrapper_classes[] = 'at-block-team-member--' . $alignment;

// Vertical Alignment.
$wrapper_classes[] = 'at-block-team-member--vertical-alignment-' . $verticalAlignment;

// Image Position.
$wrapper_classes[] = 'at-block-team-member--image-' . $imagePosition;

// Image Style.
$wrapper_classes[] = 'at-block-team-member--image-style-' . $imageStyle;

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
    $block_output
) );
