<?php

/**
 * Render the Post Grid block.
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

$atts_defaults = require( ATHEMES_BLOCKS_PATH . 'build/blocks/PostGrid/attributes.php' );

// Extract the settings values.
$clientId = $attributes['clientId'];
$content = $attributes['content'] ?? '';

// Query options.
$postType = Settings::get_setting( 'postType', $attributes, $atts_defaults, '' );
$taxonomy = Settings::get_setting( 'taxonomy', $attributes, $atts_defaults, '' );
$taxonomyTerm = Settings::get_setting( 'taxonomyTerm', $attributes, $atts_defaults, '' );
$postsPerPage = Settings::get_setting( 'postsPerPage', $attributes, $atts_defaults, '' );
$stickyPosts = Settings::get_setting( 'stickyPosts', $attributes, $atts_defaults, '' );
$excludeCurrentPost = Settings::get_setting( 'excludeCurrentPost', $attributes, $atts_defaults, '' );
$offsetStartingPoint = Settings::get_setting( 'offsetStartingPoint', $attributes, $atts_defaults, '' );
$offsetStartingPointValue = Settings::get_setting( 'offsetStartingPointValue', $attributes, $atts_defaults, '' );
$orderBy = Settings::get_setting( 'orderBy', $attributes, $atts_defaults, '' );
$order = Settings::get_setting( 'order', $attributes, $atts_defaults, '' );
$columnsDesktop = Settings::get_setting( 'columns', $attributes, $atts_defaults, 'desktop' );
$columnsTablet = Settings::get_setting( 'columns', $attributes, $atts_defaults, 'tablet' );
$columnsMobile = Settings::get_setting( 'columns', $attributes, $atts_defaults, 'mobile' );
$columnsGap = Settings::get_setting( 'columnsGap', $attributes, $atts_defaults, '' );

// Sale Badge.
$displaySaleBadge = Settings::get_setting( 'displaySaleBadge', $attributes, $atts_defaults, '' );
$saleBadgePosition = Settings::get_setting( 'saleBadgePosition', $attributes, $atts_defaults, '' );

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

// Pagination.
$pagination = Settings::get_setting( 'pagination', $attributes, $atts_defaults, '' );
$paginationPageLimit = Settings::get_setting( 'paginationPageLimit', $attributes, $atts_defaults, '' );
$paginationType = Settings::get_setting( 'paginationType', $attributes, $atts_defaults, '' );

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
    'at-block-post-grid' 
);

// Add alignment class if set
if ( ! empty( $attributes['align'] ) ) {
    $wrapper_classes[] = 'align' . $attributes['align'];
}

// Sale Badge.
if ( $postType === 'product' && $displaySaleBadge ) {
    $wrapper_classes[] = 'atb-sale-badge-' . $saleBadgePosition;
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
    'post_type'      => $postType,
    'posts_per_page' => $postsPerPage,
    'orderby'        => $orderBy,
    'order'          => $order,
);

// Sticky Posts.
if ( $stickyPosts === 'ignore' ) {
    $query_args['ignore_sticky_posts'] = 1;
} else if ( $stickyPosts === 'include' ) {
    $query_args['ignore_sticky_posts'] = 0;
} else if ( $stickyPosts === 'only' ) {
    $query_args['post__in'] = get_option( 'sticky_posts' );
}

// Add taxonomy query if taxonomy and terms are set
if ( $taxonomy && $taxonomy !== 'all' && $taxonomyTerm && $taxonomyTerm !== 'all' ) {
    $query_args['tax_query'] = array(
        array(
            'taxonomy' => $taxonomy,
            'field'    => 'term_id',
            'terms'    => $taxonomyTerm,
        ),
    );
}

// Exclude current post if enabled
if ( $excludeCurrentPost ) {
    $query_args['post__not_in'] = array( get_the_ID() );
}

// Add offset if set
if ( $offsetStartingPoint && $offsetStartingPointValue ) {
    $query_args['offset'] = $offsetStartingPointValue;
}

// Add pagination
if ( $pagination ) {
    $paged = isset( $_GET['paged'] ) ? $_GET['paged'] : 1;
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

            ob_start();
            PostGridHelper::get_post_grid_item_output( get_the_ID(), $attributes, $atts_defaults );
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
            'navigation' => ($postsPerPage > 1 && $postsPerPage > $columnsDesktop) && ($carouselNavigation === 'arrows' || $carouselNavigation === 'both') && $displayCarouselNavigation ? array(
                'enabled' => true,
                'nextEl' => 'at-block-nav--next',
                'prevEl' => 'at-block-nav--prev',
            ) : false,
            'pagination' => ($postsPerPage > 1 && $postsPerPage > $columnsDesktop) && ($carouselNavigation === 'dots' || $carouselNavigation === 'both') && $displayCarouselNavigation ? array(
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
            
            ob_start();
            PostGridHelper::get_post_grid_item_output( get_the_ID(), $attributes, $atts_defaults );
            $output .= ob_get_clean();
        }
        
        $output .= '</div>';
    }
    
    // Pagination
    if ( $pagination && ! $displayCarousel && $query->max_num_pages > 1 ) {
        wp_enqueue_script( 'athemes-blocks-pagination' );

        $output .= '<div class="at-pagination at-block-post-grid__pagination '. $paginationType .'">';
        $output .= '<div class="at-block-post-grid__pagination-numbers">';
            $output .= paginate_links( array(
                'base'      => str_replace( 999999999, '%#%', esc_url( get_pagenum_link( 999999999 ) ) ),
                'format'    => '?paged=%#%',
                'current'   => max( 1, $paged ),
                'total'     => $query->max_num_pages,
                'prev_text' => '←',
                'next_text' => '→',
                'type'      => 'list',
                'end_size'  => 1,
                'mid_size'  => $paginationType === 'default' ? $paginationPageLimit : 9999,
            ) );
            $output .= '</div>';

        if ( $paginationType === 'load-more' || $paginationType === 'infinite-scroll' ) {
            $output .= '<a href="#" class="at-pagination__button at-block-post-grid__pagination-button at-block-post-grid__pagination-button--load-more" data-pagination-type="' . $paginationType . '" data-total-pages="' . $query->max_num_pages . '">' . __( 'Load More', 'athemes-blocks' ) . '</a>';
        }
        
        $output .= '</div>';
    }
    
    wp_reset_postdata();
} else {
    $output .= '<p class="at-block-post-grid__no-posts">' . esc_html__( 'No posts found.', 'athemes-blocks' ) . '</p>';
}

// Do not display if post type is product and WooCommerce is not active.
if ( $postType === 'product' && ! class_exists( 'WooCommerce' ) ) {
    if ( is_user_logged_in() && current_user_can( 'manage_options' ) ) {
        $output = '<p class="at-block-post-grid__no-posts">' . esc_html__( 'WooCommerce is not active.', 'athemes-blocks' ) . '</p>';
    } else {
        $output = '<p class="at-block-post-grid__no-posts">' . esc_html__( 'No products found.', 'athemes-blocks' ) . '</p>';
    }
}

// Output.
echo Functions::render_block_output( sprintf(
    '<%1$s %2$s>%3$s</%1$s>',
    'div',
    get_block_wrapper_attributes( $wrapper_attributes ),
    $output
) );