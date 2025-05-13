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

$atts_defaults = require( ATHEMES_BLOCKS_PATH . 'assets/js/src/blocks/Testimonials/attributes.php' );

// Extract the settings values.
$clientId = $attributes['clientId'];
$content = $attributes['content'] ?? '';
$htmlTag = 'div';
$alignment = $attributes['alignment'] ?? $atts_defaults['alignment']['default'];
$testimonialsAmount = $attributes['testimonialsAmount'] ?? $atts_defaults['testimonialsAmount']['default'];
$columns = $attributes['columns'] ?? $atts_defaults['columns']['default'];
$columnsGap = $attributes['columnsGap'] ?? $atts_defaults['columnsGap']['default'];
$carouselLoop = $attributes['carouselLoop'] ?? $atts_defaults['carouselLoop']['default'];
$carouselAutoplay = $attributes['carouselAutoplay'] ?? $atts_defaults['carouselAutoplay']['default'];
$carouselAutoplaySpeed = $attributes['carouselAutoplaySpeed'] ?? $atts_defaults['carouselAutoplaySpeed']['default'];
$carouselPauseOnHover = $attributes['carouselPauseOnHover'] ?? $atts_defaults['carouselPauseOnHover']['default'];
$carouselTransitionDuration = $attributes['carouselTransitionDuration'] ?? $atts_defaults['carouselTransitionDuration']['default'];
$carouselNavigation = $attributes['carouselNavigation'] ?? $atts_defaults['carouselNavigation']['default'];
$carouselAutoHeight = $attributes['carouselAutoHeight'] ?? $atts_defaults['carouselAutoHeight']['default'];
$imagePosition = $attributes['imagePosition'] ?? $atts_defaults['imagePosition']['default'];
$imageStyle = $attributes['imageStyle'] ?? $atts_defaults['imageStyle']['default'];
$imageSize = $attributes['imageSize'] ?? $atts_defaults['imageSize']['default'];

$hideOnDesktop = Settings::get_setting( 'hideOnDesktop', $attributes, $atts_defaults );
$hideOnTablet = Settings::get_setting( 'hideOnTablet', $attributes, $atts_defaults );
$hideOnMobile = Settings::get_setting( 'hideOnMobile', $attributes, $atts_defaults );

$wrapper_attributes = array();
$wrapper_classes = array( 
    'at-block', 
    'at-block-' . $clientId, 
    'at-block-image' 
);

// Enqueue swiper styles.
wp_enqueue_style( 'swiper-core' );
wp_enqueue_style( 'swiper-pagination' );
wp_enqueue_style( 'swiper-navigation' );

// Enqueue swiper script.
wp_enqueue_script( 'athemes-blocks-modularized-swiper' );

// Slides output.
$slides_output = '';
for ( $i = 0; $i < $testimonialsAmount; $i++ ) {
    // Image.
    $image = Settings::get_inner_setting( 'image' . ($i + 1), 'image', $attributes, $atts_defaults, '' );
    $image_id = $image['id'] ?? '';

    $image_output = '';
    if ( $image_id ) {
        $image_output = wp_get_attachment_image( $image_id, $imageSize, false, array( 'class' => 'at-block-testimonials__item-image' ) );
    }
    
    $has_image = $image_id ? true : false;

    // Other content.
    $testimonialText = $attributes["testimonialText" . ($i + 1)] ?? '';
    $name = $attributes["name" . ($i + 1)] ?? '';
    $company = $attributes["company" . ($i + 1)] ?? '';

    $slides_output .= "
        <div class='at-block-testimonials__item swiper-slide'>
            <div class='at-block-testimonials__item-inner'>";

    if ( $imagePosition === 'top' || $imagePosition === 'left' || $imagePosition === 'right' ) {
        $slides_output .= ( $has_image ? $image_output : '' ) ."
                    <div class='at-block-testimonials__item-content'>
                        <div class='at-block-testimonials__item-text'>
                            {$testimonialText}
                        </div>
                        <div class='at-block-testimonials__item-name'>
                            {$name}
                        </div>
                        <div class='at-block-testimonials__item-company'>
                            {$company}
                        </div>
                    </div>";
    }

    if ( $imagePosition === 'bottom' ) {
        $slides_output .= "
            <div class='at-block-testimonials__item-text'>
                {$testimonialText}
            </div>
            <div class='at-block-testimonials__item-content'>
                ". ( $has_image ? $image_output : '' ) ."
                <div>
                    <div class='at-block-testimonials__item-name'>
                        {$name}
                    </div>
                    <div class='at-block-testimonials__item-company'>
                        {$company}
                    </div>
                </div>
            </div>";
    }

    $slides_output .= "</div></div>";
}

// Navigation outpit.
$navigation_output = '';
if ( ( $testimonialsAmount > 1 && $testimonialsAmount > $columns['desktop']['value'] ) && ( $carouselNavigation === 'arrows' || $carouselNavigation === 'both' ) ) {
    $navigation_output = "
        <div class='at-block-nav at-block-nav--next'></div>
        <div class='at-block-nav at-block-nav--prev'></div>
        <div class='swiper-pagination'></div>";
}

// Swiper output.
$swiper_output = '';
$swiper_output .= '<div class="at-block-testimonials swiper" data-swiper-options=\'' . json_encode([
    'spaceBetween' => Settings::get_setting( 'columnsGap', $attributes, $atts_defaults, 'desktop' ),
    'loop' => $attributes['carouselLoop'] ?? false,
    'autoplay' => ($attributes['carouselAutoplay'] ?? false) ? [
        'delay' => $attributes['carouselAutoplaySpeed'] ?? 3000,
        'disableOnInteraction' => false,
        'pauseOnMouseEnter' => $attributes['carouselPauseOnHover'] ?? false
    ] : false,
    'speed' => $attributes['carouselTransitionDuration'] ?? 300,
    'navigation' => ($testimonialsAmount > 1 && $testimonialsAmount > $columns['desktop']['value']) && ($carouselNavigation === 'arrows' || $carouselNavigation === 'both') ? [
        'enabled' => true,
        'nextEl' => 'at-block-nav--next',
        'prevEl' => 'at-block-nav--prev',
    ] : false,
    'pagination' => ($testimonialsAmount > 1 && $testimonialsAmount > $columns['desktop']['value']) && ($carouselNavigation === 'dots' || $carouselNavigation === 'both') ? [
        'type' => 'bullets',
        'bulletClass' => 'at-block-bullets--bullet',
        'bulletActiveClass' => 'at-block-bullets--bullet-active',
        'clickable' => true,
    ] : false,
    'autoHeight' => $attributes['carouselAutoHeight'] ?? false,
    'breakpoints' => array(
        1024 => array(
            'slidesPerView' => Settings::get_setting( 'columns', $attributes, $atts_defaults, 'desktop' ),
        ),
        768 => array(
            'slidesPerView' => Settings::get_setting( 'columns', $attributes, $atts_defaults, 'tablet' ),
        ),
        480 => array(
            'slidesPerView' => Settings::get_setting( 'columns', $attributes, $atts_defaults, 'mobile' ),
        ),
    )
]) . '\'>';
$swiper_output .= '<div class="swiper-wrapper">';
$swiper_output .= $slides_output;
$swiper_output .= '</div>';
$swiper_output .= $navigation_output;
$swiper_output .= '</div>';

// Alignment.
$wrapper_classes[] = 'at-block-testimonials--' . $alignment;

// Image Position.
$wrapper_classes[] = 'at-block-testimonials--image-' . $imagePosition;

// Image Style.
$wrapper_classes[] = 'at-block-testimonials--image-style-' . $imageStyle;

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
echo sprintf(
    '<%1$s %2$s>%3$s</%1$s>',
    $htmlTag,
    get_block_wrapper_attributes( $wrapper_attributes ),
    $swiper_output
);
