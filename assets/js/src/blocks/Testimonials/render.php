<?php

/**
 * Render the Testimonials block.
 * 
 * @package aThemes_Blocks
 */

include_once( ATHEMES_BLOCKS_PATH . 'includes/Blocks/Helper/Settings.php' );
include_once( ATHEMES_BLOCKS_PATH . 'includes/Blocks/Helper/Functions.php' );
include_once( ATHEMES_BLOCKS_PATH . 'includes/Blocks/Helper/Swiper.php' );

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

use aThemes_Blocks\Blocks\Helper\Settings;
use aThemes_Blocks\Blocks\Helper\Functions;
use aThemes_Blocks\Blocks\Helper\Swiper;

$atts_defaults = require( ATHEMES_BLOCKS_PATH . 'build/blocks/Testimonials/attributes.php' );

// Extract the settings values.
$clientId = $attributes['clientId'];
$content = $attributes['content'] ?? '';
$htmlTag = 'div';
$alignment = isset( $attributes['alignment'] ) ? $attributes['alignment'] : $atts_defaults['alignment']['default'];
$verticalAlignment = Settings::get_setting( 'verticalAlignment', $attributes, $atts_defaults, 'desktop' );
$testimonialsAmount = isset( $attributes['testimonialsAmount'] ) ? $attributes['testimonialsAmount'] : $atts_defaults['testimonialsAmount']['default'];
$columnsDesktop = Settings::get_setting( 'columns', $attributes, $atts_defaults, 'desktop' );
$columnsTablet = Settings::get_setting( 'columns', $attributes, $atts_defaults, 'tablet' );
$columnsMobile = Settings::get_setting( 'columns', $attributes, $atts_defaults, 'mobile' );
$columnsGap = Settings::get_setting( 'columnsGap', $attributes, $atts_defaults );
$displayCarouselNavigation = isset( $attributes['displayCarouselNavigation'] ) ? $attributes['displayCarouselNavigation'] : $atts_defaults['displayCarouselNavigation']['default'];
$carouselLoop = isset( $attributes['carouselLoop'] ) ? $attributes['carouselLoop'] : $atts_defaults['carouselLoop']['default'];
$carouselAutoplay = isset( $attributes['carouselAutoplay'] ) ? $attributes['carouselAutoplay'] : $atts_defaults['carouselAutoplay']['default'];
$carouselAutoplaySpeed = isset( $attributes['carouselAutoplaySpeed'] ) ? $attributes['carouselAutoplaySpeed'] : $atts_defaults['carouselAutoplaySpeed']['default'];
$carouselPauseOnHover = isset( $attributes['carouselPauseOnHover'] ) ? $attributes['carouselPauseOnHover'] : $atts_defaults['carouselPauseOnHover']['default'];
$carouselTransitionDuration = isset( $attributes['carouselTransitionDuration'] ) ? $attributes['carouselTransitionDuration'] : $atts_defaults['carouselTransitionDuration']['default'];
$carouselNavigation = isset( $attributes['carouselNavigation'] ) ? $attributes['carouselNavigation'] : $atts_defaults['carouselNavigation']['default'];
$carouselAutoHeight = isset( $attributes['carouselAutoHeight'] ) ? $attributes['carouselAutoHeight'] : $atts_defaults['carouselAutoHeight']['default'];
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
    'at-block-testimonials' 
);

// Add alignment class if set
if ( ! empty( $attributes['align'] ) ) {
    $wrapper_classes[] = 'align' . $attributes['align'];
}

// Slides output.
$slider_items = array();
for ( $i = 0; $i < $testimonialsAmount; $i++ ) {

    // Image.
    $image = Settings::get_inner_setting( 'image' . ($i + 1), 'image', $attributes, $atts_defaults, '' );
    $image_id = $image['id'] ?? '';
    $has_image = $image_id ? true : false;
    $image_output = $has_image ? wp_get_attachment_image( $image_id, $imageSize, false, array( 'class' => 'at-block-testimonials__item-image' ) ) : '';
    
    // Other content.
    $testimonialText = $attributes["testimonialText" . ($i + 1)] ?? '';
    $name = $attributes["name" . ($i + 1)] ?? '';
    $company = $attributes["company" . ($i + 1)] ?? '';

    // Mount slide item content output.
    $slide_item_content_output = '';

    if ( $imagePosition === 'top' || $imagePosition === 'left' || $imagePosition === 'right' ) {
        $slide_item_content_output .= "
            <div class='at-block-testimonials__item-inner'>
                ". ( $has_image ? $image_output : '' ) ."
                <div class='at-block-testimonials__item-content'>
                    <div class='at-block-testimonials__item-text'>
                        {$testimonialText}
                    </div>
                    <div>
                        <div class='at-block-testimonials__item-name'>
                            {$name}
                        </div>
                        <div class='at-block-testimonials__item-company'>
                            {$company}
                        </div>
                    </div>
                </div>
            </div>
        ";
    }

    if ( $imagePosition === 'bottom' ) {
        $slide_item_content_output .= "
            <div class='at-block-testimonials__item-inner'>
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
                </div>
            </div>
        ";
    }

    // Push slide item content output to the slider items array.
    $slider_items[$i] = $slide_item_content_output;
}

// Carousel.
$swiper_options = array(
    'spaceBetween' => Settings::get_setting( 'columnsGap', $attributes, $atts_defaults, 'desktop' ),
    'loop' => $carouselLoop,
    'autoplay' => ($carouselAutoplay) ? [
        'delay' => $carouselAutoplaySpeed,
        'disableOnInteraction' => false,
        'pauseOnMouseEnter' => $carouselPauseOnHover
    ] : false,
    'speed' => $carouselTransitionDuration,
    'navigation' => ($testimonialsAmount > 1 && $testimonialsAmount > $columnsDesktop) && ($carouselNavigation === 'arrows' || $carouselNavigation === 'both') && $displayCarouselNavigation ? array(
        'enabled' => true,
        'nextEl' => 'at-block-nav--next',
        'prevEl' => 'at-block-nav--prev',
     ) : false,
    'pagination' => ($testimonialsAmount > 1 && $testimonialsAmount > $columnsDesktop) && ($carouselNavigation === 'dots' || $carouselNavigation === 'both') && $displayCarouselNavigation ? array(
        'enabled' => true,
        'el' => '.swiper-pagination',
        'type' => 'bullets',
        'bulletClass' => 'at-block-bullets--bullet',
        'bulletActiveClass' => 'at-block-bullets--bullet-active',
        'clickable' => true,
     ) : false,
    'autoHeight' => $carouselAutoHeight,
    'breakpoints' => array(
        1024 => array(
            'slidesPerView' => $columnsDesktop,
        ),
        768 => array(
            'slidesPerView' => $columnsTablet,
        ),
        480 => array(
            'slidesPerView' => $columnsMobile,
        ),
    )
);

$swiper_markup_options = array(
    'slider_items' => $slider_items,
    'swiper_class' => 'at-block-testimonials__swiper',
    'swiper_slide_class' => 'at-block-testimonials__item',
);

$slider = new Swiper( $swiper_options, $swiper_markup_options );
$slider_output = $slider->get_html_output();

// Alignment.
$wrapper_classes[] = 'at-block-testimonials--' . $alignment;

// Vertical Alignment.
$wrapper_classes[] = 'at-block-testimonials--vertical-alignment-' . $verticalAlignment;

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
echo Functions::render_block_output( sprintf(
    '<%1$s %2$s>%3$s</%1$s>',
    $htmlTag,
    get_block_wrapper_attributes( $wrapper_attributes ),
    $slider_output
) );
