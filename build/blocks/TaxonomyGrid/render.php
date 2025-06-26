<?php

/**
 * Render the Taxonomy Grid block.
 * 
 * @package aThemes_Blocks
 */

include_once( ATHEMES_BLOCKS_PATH . 'includes/Blocks/Helper/Settings.php' );
include_once( ATHEMES_BLOCKS_PATH . 'includes/Blocks/Helper/Functions.php' );
include_once( ATHEMES_BLOCKS_PATH . 'includes/Blocks/Helper/Swiper.php' );
include_once( ATHEMES_BLOCKS_PATH . 'includes/Blocks/Helper/TaxonomyGrid.php' );

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

use aThemes_Blocks\Blocks\Helper\Settings;
use aThemes_Blocks\Blocks\Helper\Functions;
use aThemes_Blocks\Blocks\Helper\Swiper;
use AThemes_Blocks\Blocks\Helper\TaxonomyGrid as TaxonomyGridHelper;

$atts_defaults = require( ATHEMES_BLOCKS_PATH . 'build/blocks/TaxonomyGrid/attributes.php' );

// Extract the settings values.
$clientId = $attributes['clientId'];
$content = $attributes['content'] ?? '';

// Query options.
$taxonomy = Settings::get_setting( 'taxonomy', $attributes, $atts_defaults, '' );
$termsPerPage = Settings::get_setting( 'termsPerPage', $attributes, $atts_defaults, '' );
$excludeCurrentTerm = Settings::get_setting( 'excludeCurrentTerm', $attributes, $atts_defaults, '' );
$hideEmptyTerms = Settings::get_setting( 'hideEmptyTerms', $attributes, $atts_defaults, '' );
$orderBy = Settings::get_setting( 'orderBy', $attributes, $atts_defaults, '' );
$order = Settings::get_setting( 'order', $attributes, $atts_defaults, '' );
$columnsDesktop = Settings::get_setting( 'columns', $attributes, $atts_defaults, 'desktop' );
$columnsTablet = Settings::get_setting( 'columns', $attributes, $atts_defaults, 'tablet' );
$columnsMobile = Settings::get_setting( 'columns', $attributes, $atts_defaults, 'mobile' );
$columnsGap = Settings::get_setting( 'columnsGap', $attributes, $atts_defaults, '' );

// Carousel.
$displayCarousel = Settings::get_setting( 'displayCarousel', $attributes, $atts_defaults, '' );
$displayCarouselNavigation = Settings::get_setting( 'displayCarouselNavigation', $attributes, $atts_defaults, '' );
$carouselPauseOnHover = Settings::get_setting( 'carouselPauseOnHover', $attributes, $atts_defaults, '' );
$carouselAutoplay = Settings::get_setting( 'carouselAutoplay', $attributes, $atts_defaults, '' );
$carouselAutoplaySpeed = Settings::get_setting( 'carouselAutoplaySpeed', $attributes, $atts_defaults, '' );
$carouselLoop = Settings::get_setting( 'carouselLoop', $attributes, $atts_defaults, '' );
$carouselAutoHeight = Settings::get_setting( 'carouselAutoHeight', $attributes, $atts_defaults, '' );
$carouselTransitionDuration = Settings::get_setting( 'carouselTransitionDuration', $attributes, $atts_defaults, '' );
$carouselNavigation = Settings::get_setting( 'carouselNavigation', $attributes, $atts_defaults, '' );

// Image.
$imageRatio = Settings::get_setting( 'imageRatio', $attributes, $atts_defaults, '' );
$imageSize = Settings::get_setting( 'imageSize', $attributes, $atts_defaults, '' );
$imagePosition = Settings::get_setting( 'imagePosition', $attributes, $atts_defaults, '' );
$imageOverlay = Settings::get_setting( 'imageOverlay', $attributes, $atts_defaults, '' );

// Card.
$cardVerticalAlignment = Settings::get_setting( 'cardVerticalAlignment', $attributes, $atts_defaults );
$cardPaddingToContentOnly = Settings::get_setting( 'cardPaddingToContentOnly', $attributes, $atts_defaults, '' );
$cardHorizontalAlignment = Settings::get_setting( 'cardHorizontalAlignment', $attributes, $atts_defaults );

// Visibility.
$hideOnDesktop = Settings::get_setting( 'hideOnDesktop', $attributes, $atts_defaults );
$hideOnTablet = Settings::get_setting( 'hideOnTablet', $attributes, $atts_defaults );
$hideOnMobile = Settings::get_setting( 'hideOnMobile', $attributes, $atts_defaults );

$wrapper_attributes = array();
$wrapper_classes = array( 
    'at-block', 
    'at-block-' . $clientId, 
    'at-block-taxonomy-grid' 
);

// Add alignment class if set
if ( ! empty( $attributes['align'] ) ) {
    $wrapper_classes[] = 'align' . $attributes['align'];
}

// Image ratio.
if ( $imageRatio ) {
    $wrapper_classes[] = 'atb-image-ratio-' . $imageRatio;
}

// Image size.
if ( $imageSize ) {
    $wrapper_classes[] = 'atb-image-size-' . $imageSize;
}

// Image position.
if ( $imagePosition ) {
    $wrapper_classes[] = 'atb-image-position-' . $imagePosition;
}

// Image overlay.
if ( $imageOverlay ) {
    $wrapper_classes[] = 'has-image-overlay';
}

// Card vertical alignment.
if ( $cardVerticalAlignment ) {
    $wrapper_classes[] = 'atb-card-vertical-alignment-' . $cardVerticalAlignment;
}

// Has carousel dots.
if ( $displayCarousel && $carouselNavigation === 'dots' || $carouselNavigation === 'both' ) {
    $wrapper_classes[] = 'atb-has-carousel-dots';
}

// Card padding to content only.
if ( $cardPaddingToContentOnly ) {
    $wrapper_classes[] = 'content-padding';
} else {
    $wrapper_classes[] = 'card-padding';
}

// Content horizontal alignment.
if ( $cardHorizontalAlignment ) {
    $wrapper_classes[] = 'content-align-' . $cardHorizontalAlignment;
}

// Visibility classes
if ( $hideOnDesktop ) {
    $wrapper_classes[] = 'atb-hide-desktop';
}

if ( $hideOnTablet ) {
    $wrapper_classes[] = 'atb-hide-tablet';
}

if ( $hideOnMobile ) {
    $wrapper_classes[] = 'atb-hide-mobile';
}

// Animation.
$animation_markup_data = Functions::add_animation_markup( $wrapper_attributes, $attributes, $atts_defaults );
$wrapper_classes = array_merge( $wrapper_classes, $animation_markup_data['classes'] );
$wrapper_attributes = array_merge( $wrapper_attributes, $animation_markup_data['wrapper_attributes'] );

// Mount the class attribute.
$wrapper_attributes['class'] = implode( ' ', $wrapper_classes );

// Build query args
$query_args = array(
    'taxonomy' => $taxonomy,
    'number' => $termsPerPage,
    'orderby'  => $orderBy,
    'order'    => $order,
);

// Add taxonomy query if taxonomy and terms are set
if ( $taxonomy ) {
    $query_args['taxonomy'] = $taxonomy;
}

// Exclude current term if enabled
if ( $excludeCurrentTerm ) {
    $query_args['exclude'] = get_queried_object_id();
}

// Hide empty terms if enabled
if ( $hideEmptyTerms ) {
    $query_args['hide_empty'] = true;
}

// Run the query
$query = get_terms( $query_args );

// Start output
$output = '';

if ( $query ) {
    if ( $displayCarousel ) {

        // Prepare slider items
        $slider_items = array();
        
        foreach ( $query as $term ) {

            ob_start();
            TaxonomyGridHelper::get_taxonomy_grid_item_output( $term->term_id, $attributes, $atts_defaults );
            $slider_items[] = ob_get_clean();
        }
        
        // Carousel options
        $swiper_options = array(
            'spaceBetween' => Settings::get_setting( 'columnsGap', $attributes, $atts_defaults, 'desktop' ),
            'loop' => $carouselLoop,
            'autoplay' => ($carouselAutoplay) ? [
                'delay' => $carouselAutoplaySpeed,
                'disableOnInteraction' => false,
                'pauseOnMouseEnter' => $carouselPauseOnHover
            ] : false,
            'speed' => $carouselTransitionDuration,
            'navigation' => ($termsPerPage > 1 && $termsPerPage > $columnsDesktop) && ($carouselNavigation === 'arrows' || $carouselNavigation === 'both') && $displayCarouselNavigation ? array(
                'enabled' => true,
                'nextEl' => 'at-block-nav--next',
                'prevEl' => 'at-block-nav--prev',
            ) : false,
            'pagination' => ($termsPerPage > 1 && $termsPerPage > $columnsDesktop) && ($carouselNavigation === 'dots' || $carouselNavigation === 'both') && $displayCarouselNavigation ? array(
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
            'swiper_class' => 'at-block-taxonomy-grid__swiper',
            'swiper_slide_class' => 'at-block-taxonomy-grid__item',
        );

        $slider = new Swiper( $swiper_options, $swiper_markup_options );
        $output .= $slider->get_html_output();
    } else {
        $output .= '<div class="at-block-taxonomy-grid__items">';
        
        foreach ( $query as $term ) {
            
            ob_start();
            TaxonomyGridHelper::get_taxonomy_grid_item_output( $term->term_id, $attributes, $atts_defaults );
            $output .= ob_get_clean();
        }
        
        $output .= '</div>';
    }    
} else {
    $output .= '<p class="at-block-taxonomy-grid__no-posts">' . esc_html__( 'No terms found.', 'athemes-blocks' ) . '</p>';
}

// Output.
echo Functions::render_block_output( sprintf(
    '<%1$s %2$s>%3$s</%1$s>',
    'div',
    get_block_wrapper_attributes( $wrapper_attributes ),
    $output
) );