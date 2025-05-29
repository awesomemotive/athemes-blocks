<?php

/**
 * Render the Heading block.
 * 
 * @package aThemes_Blocks
 */

include_once( ATHEMES_BLOCKS_PATH . 'includes/Blocks/Helper/Settings.php' );
include_once( ATHEMES_BLOCKS_PATH . 'includes/Blocks/Helper/Functions.php' );
include_once( ATHEMES_BLOCKS_PATH . 'includes/Blocks/Helper/Swiper.php' );
include_once( ATHEMES_BLOCKS_PATH . 'includes/Blocks/Helper/PostGrid.php' );

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

use aThemes_Blocks\Blocks\Helper\Settings;
use aThemes_Blocks\Blocks\Helper\Functions;
use aThemes_Blocks\Blocks\Helper\Swiper;
use AThemes_Blocks\Blocks\Helper\PostGrid as PostGridHelper;

$atts_defaults = require( ATHEMES_BLOCKS_PATH . 'assets/js/src/blocks/PostGrid/attributes.php' );

// Extract the settings values.
$clientId = $attributes['clientId'];
$content = $attributes['content'] ?? '';

// Query options.
$postType = Settings::get_setting( 'postType', $attributes, $atts_defaults, false );
$taxonomy = Settings::get_setting( 'taxonomy', $attributes, $atts_defaults, false );
$taxonomyTerm = Settings::get_setting( 'taxonomyTerm', $attributes, $atts_defaults, false );
$postsPerPage = Settings::get_setting( 'postsPerPage', $attributes, $atts_defaults, false );
$excludeCurrentPost = Settings::get_setting( 'excludeCurrentPost', $attributes, $atts_defaults, false );
$offsetStartingPoint = Settings::get_setting( 'offsetStartingPoint', $attributes, $atts_defaults, false );
$orderBy = Settings::get_setting( 'orderBy', $attributes, $atts_defaults, false );
$order = Settings::get_setting( 'order', $attributes, $atts_defaults, false );
$columnsDesktop = Settings::get_setting( 'columns', $attributes, $atts_defaults, 'desktop' );
$columnsTablet = Settings::get_setting( 'columns', $attributes, $atts_defaults, 'tablet' );
$columnsMobile = Settings::get_setting( 'columns', $attributes, $atts_defaults, 'mobile' );
$columnsGap = Settings::get_setting( 'columnsGap', $attributes, $atts_defaults, false );

// Carousel.
$displayCarousel = Settings::get_setting( 'displayCarousel', $attributes, $atts_defaults, false );
$carouselPauseOnHover = Settings::get_setting( 'carouselPauseOnHover', $attributes, $atts_defaults, false );
$carouselAutoplay = Settings::get_setting( 'carouselAutoplay', $attributes, $atts_defaults, false );
$carouselAutoplaySpeed = Settings::get_setting( 'carouselAutoplaySpeed', $attributes, $atts_defaults, false );
$carouselLoop = Settings::get_setting( 'carouselLoop', $attributes, $atts_defaults, false );
$carouselAutoHeight = Settings::get_setting( 'carouselAutoHeight', $attributes, $atts_defaults, false );
$carouselTransitionDuration = Settings::get_setting( 'carouselTransitionDuration', $attributes, $atts_defaults, false );
$carouselNavigation = Settings::get_setting( 'carouselNavigation', $attributes, $atts_defaults, false );

// Pagination.
$pagination = Settings::get_setting( 'pagination', $attributes, $atts_defaults, false );
$paginationPageLimit = Settings::get_setting( 'paginationPageLimit', $attributes, $atts_defaults, false );
$paginationType = Settings::get_setting( 'paginationType', $attributes, $atts_defaults, false );

// Visibility.
$hideOnDesktop = Settings::get_setting( 'hideOnDesktop', $attributes, $atts_defaults );
$hideOnTablet = Settings::get_setting( 'hideOnTablet', $attributes, $atts_defaults );
$hideOnMobile = Settings::get_setting( 'hideOnMobile', $attributes, $atts_defaults );

$wrapper_attributes = array();
$wrapper_classes = array( 
    'at-block', 
    'at-block-' . $clientId, 
    'at-block-post-grid' 
);

// Add image ratio class
if ( ! empty( $imageRatio ) ) {
    $wrapper_classes[] = 'atb-image-ratio-' . $imageRatio;
}

// Add image size class
if ( ! empty( $imageSize ) ) {
    $wrapper_classes[] = 'atb-image-size-' . $imageSize;
}

// Add image position class
if ( ! empty( $imagePosition ) ) {
    $wrapper_classes[] = 'atb-image-position-' . $imagePosition;
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

// Build query args
$query_args = array(
    'post_type'      => $postType,
    'posts_per_page' => $postsPerPage,
    'orderby'        => $orderBy,
    'order'          => $order,
);

// Add taxonomy query if taxonomy and terms are set
if ( ! empty( $taxonomy ) && $taxonomy !== 'all' && ! empty( $taxonomyTerm ) && $taxonomyTerm !== 'all' ) {
    $query_args['tax_query'] = array(
        array(
            'taxonomy' => $taxonomy,
            'field'    => 'term_id',
            'terms'    => $taxonomyTerm,
        ),
    );
}

// Exclude current post if enabled
if ( ! empty( $excludeCurrentPost ) ) {
    $query_args['post__not_in'] = array( get_the_ID() );
}

// Add offset if set
if ( ! empty( $offsetStartingPoint ) ) {
    $query_args['offset'] = $offsetStartingPoint;
}

// Add pagination
if ( ! empty( $pagination ) ) {
    $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
    $query_args['paged'] = $paged;
}

// Run the query
$query = new WP_Query( $query_args );

// Start output
$output = '';

if ( $query->have_posts() ) {
    if ( $displayCarousel ) {

        // Prepare slider items
        $slider_items = array();
        
        while ( $query->have_posts() ) {
            $query->the_post();
            $slider_items[] = PostGridHelper::get_post_grid_item_output( get_the_ID(), $attributes, $atts_defaults );
        }
        
        // Carousel options
        $swiper_options = array(
            'spaceBetween' => $columnsGap,
            'loop' => $carouselLoop,
            'autoplay' => ($carouselAutoplay) ? [
                'delay' => $carouselAutoplaySpeed,
                'disableOnInteraction' => false,
                'pauseOnMouseEnter' => $carouselPauseOnHover
            ] : false,
            'speed' => $carouselTransitionDuration,
            'navigation' => ($postsPerPage > 1 && $postsPerPage > $columnsDesktop) && ($carouselNavigation === 'arrows' || $carouselNavigation === 'both') ? array(
                'enabled' => true,
                'nextEl' => 'at-block-nav--next',
                'prevEl' => 'at-block-nav--prev',
            ) : false,
            'pagination' => ($postsPerPage > 1 && $postsPerPage > $columnsDesktop) && ($carouselNavigation === 'dots' || $carouselNavigation === 'both') ? array(
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
            'swiper_class' => 'at-block-post-grid__swiper',
            'swiper_slide_class' => 'at-block-post-grid__item',
        );

        $slider = new Swiper( $swiper_options, $swiper_markup_options );
        $output .= $slider->get_html_output();
    } else {
        $output .= '<div class="at-block-post-grid__items">';
        
        while ( $query->have_posts() ) {
            $query->the_post();
            $output .= PostGridHelper::get_post_grid_item_output( get_the_ID(), $attributes, $atts_defaults );
        }
        
        $output .= '</div>';
    }
    
    // Pagination
    if ( $pagination && $query->max_num_pages > 1 ) {
        $output .= '<div class="at-block-post-grid__pagination">';
        $output .= '<div class="at-block-post-grid__pagination-numbers">';
            $output .= paginate_links( array(
                'base'      => str_replace( 999999999, '%#%', esc_url( get_pagenum_link( 999999999 ) ) ),
                'format'    => '?paged=%#%',
                'current'   => max( 1, get_query_var( 'paged' ) ),
                'total'     => $query->max_num_pages,
                'prev_text' => '←',
                'next_text' => '→',
                'type'      => 'plain',
            ) );
            $output .= '</div>';

        if ( $paginationType === 'load-more' || $paginationType === 'infinite-scroll' ) {
            $output .= '<a href="#" class="at-block-post-grid__pagination-button at-block-post-grid__pagination-button--load-more">' . __( 'Load More', 'athemes-blocks' ) . '</a>';
        }
        
        $output .= '</div>';
    }
    
    wp_reset_postdata();
} else {
    $output .= '<p class="at-block-post-grid__no-posts">' . esc_html__( 'No posts found.', 'athemes-blocks' ) . '</p>';
}

// Output.
echo sprintf(
    '<%1$s %2$s>%3$s</%1$s>',
    'div',
    get_block_wrapper_attributes( $wrapper_attributes ),
    $output
);