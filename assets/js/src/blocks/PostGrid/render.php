<?php

/**
 * Render the Heading block.
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

$atts_defaults = require( ATHEMES_BLOCKS_PATH . 'assets/js/src/blocks/PostGrid/attributes.php' );

// Extract the settings values.
$clientId = $attributes['clientId'];
$content = $attributes['content'] ?? '';

$postType = Settings::get_setting( 'postType', $attributes, $atts_defaults, false );
$taxonomy = Settings::get_setting( 'taxonomy', $attributes, $atts_defaults, false );
$taxonomyTerm = Settings::get_setting( 'taxonomyTerm', $attributes, $atts_defaults, false );
$postsPerPage = Settings::get_setting( 'postsPerPage', $attributes, $atts_defaults, false );
$excludeCurrentPost = Settings::get_setting( 'excludeCurrentPost', $attributes, $atts_defaults, false );
$offsetStartingPoint = Settings::get_setting( 'offsetStartingPoint', $attributes, $atts_defaults, false );
$orderBy = Settings::get_setting( 'orderBy', $attributes, $atts_defaults, false );
$order = Settings::get_setting( 'order', $attributes, $atts_defaults, false );

$pagination = Settings::get_setting( 'pagination', $attributes, $atts_defaults, false );
$paginationPageLimit = Settings::get_setting( 'paginationPageLimit', $attributes, $atts_defaults, false );
$paginationType = Settings::get_setting( 'paginationType', $attributes, $atts_defaults, false );

$displayImage = Settings::get_setting( 'displayImage', $attributes, $atts_defaults, false );
$imageRatio = Settings::get_setting( 'imageRatio', $attributes, $atts_defaults, false );
$imageSize = Settings::get_setting( 'imageSize', $attributes, $atts_defaults, false );
$imagePosition = Settings::get_setting( 'imagePosition', $attributes, $atts_defaults, false );

$displayTitle = Settings::get_setting( 'displayTitle', $attributes, $atts_defaults, false );
$titleTag = Settings::get_setting( 'titleTag', $attributes, $atts_defaults, false );
$displayAuthor = Settings::get_setting( 'displayAuthor', $attributes, $atts_defaults, false );
$displayDate = Settings::get_setting( 'displayDate', $attributes, $atts_defaults, false );
$displayComments = Settings::get_setting( 'displayComments', $attributes, $atts_defaults, false );
$displayTaxonomy = Settings::get_setting( 'displayTaxonomy', $attributes, $atts_defaults, false );
$displayMetaIcon = Settings::get_setting( 'displayMetaIcon', $attributes, $atts_defaults, false );
$displayExcerpt = Settings::get_setting( 'displayExcerpt', $attributes, $atts_defaults, false );
$excerptMaxWords = Settings::get_setting( 'excerptMaxWords', $attributes, $atts_defaults, false );

$displayReadMore = Settings::get_setting( 'displayReadMore', $attributes, $atts_defaults, false );
$readMoreOpenInNewTab = Settings::get_setting( 'readMoreOpenInNewTab', $attributes, $atts_defaults, false );
$readMoreText = Settings::get_setting( 'readMoreText', $attributes, $atts_defaults, false );

$hideOnDesktop = Settings::get_setting( 'hideOnDesktop', $attributes, $atts_defaults );
$hideOnTablet = Settings::get_setting( 'hideOnTablet', $attributes, $atts_defaults );
$hideOnMobile = Settings::get_setting( 'hideOnMobile', $attributes, $atts_defaults );

$wrapper_attributes = array();
$wrapper_classes = array( 
    'at-block', 
    'at-block-' . $clientId, 
    'at-block-post-grid' 
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
// var_dump($query);
// Start output
$output = '';

if ( $query->have_posts() ) {
    $output .= '<div class="at-block-post-grid__items">';
    
    while ( $query->have_posts() ) {
        $query->the_post();
        
        $output .= '<article class="at-block-post-grid__item">';
        
        // Featured Image
        if ( ! empty( $displayImage ) && has_post_thumbnail() ) {
            $output .= '<div class="at-block-post-grid__image">';
            $output .= get_the_post_thumbnail( get_the_ID(), $imageSize );
            $output .= '</div>';
        }
        
        // Content wrapper
        $output .= '<div class="at-block-post-grid__content">';
        
        // Title
        if ( ! empty( $displayTitle ) ) {
            $output .= sprintf(
                '<%1$s class="at-block-post-grid__title"><a href="%2$s">%3$s</a></%1$s>',
                $titleTag,
                get_permalink(),
                get_the_title()
            );
        }
        
        // Meta information
        if ( ! empty( $displayAuthor ) || ! empty( $displayDate ) || ! empty( $displayComments ) || ! empty( $displayTaxonomy ) ) {
            $output .= '<div class="at-block-post-grid__meta">';
            
            // Author
            if ( ! empty( $displayAuthor ) ) {
                $output .= '<span class="at-block-post-grid__author">';
                if ( ! empty( $displayMetaIcon ) ) {
                    $output .= '<i class="fas fa-user"></i> ';
                }
                $output .= get_the_author();
                $output .= '</span>';
            }
            
            // Date
            if ( ! empty( $displayDate ) ) {
                $output .= '<span class="at-block-post-grid__date">';
                if ( ! empty( $displayMetaIcon ) ) {
                    $output .= '<i class="fas fa-calendar"></i> ';
                }
                $output .= get_the_date();
                $output .= '</span>';
            }
            
            // Comments
            if ( ! empty( $displayComments ) ) {
                $output .= '<span class="at-block-post-grid__comments">';
                if ( ! empty( $displayMetaIcon ) ) {
                    $output .= '<i class="fas fa-comments"></i> ';
                }
                $output .= get_comments_number();
                $output .= '</span>';
            }
            
            // Taxonomy
            if ( ! empty( $displayTaxonomy ) && ! empty( $taxonomy ) ) {
                $terms = get_the_terms( get_the_ID(), $taxonomy );
                if ( $terms && ! is_wp_error( $terms ) ) {
                    $output .= '<span class="at-block-post-grid__taxonomy">';
                    if ( ! empty( $displayMetaIcon ) ) {
                        $output .= '<i class="fas fa-tags"></i> ';
                    }
                    $term_names = array();
                    foreach ( $terms as $term ) {
                        $term_names[] = $term->name;
                    }
                    $output .= implode( ', ', $term_names );
                    $output .= '</span>';
                }
            }
            
            $output .= '</div>';
        }
        
        // Excerpt
        if ( ! empty( $displayExcerpt ) ) {
            $output .= '<div class="at-block-post-grid__excerpt">';
            $output .= wp_trim_words( get_the_excerpt(), $excerptMaxWords );
            $output .= '</div>';
        }
        
        // Read More
        if ( ! empty( $displayReadMore ) ) {
            $target = ! empty( $readMoreOpenInNewTab ) ? ' target="_blank"' : '';
            $output .= sprintf(
                '<a href="%1$s" class="at-block-post-grid__read-more"%2$s>%3$s</a>',
                get_permalink(),
                $target,
                $readMoreText
            );
        }
        
        $output .= '</div>'; // End content wrapper
        $output .= '</article>';
    }
    
    $output .= '</div>'; // End grid items
    
    // Pagination
    if ( ! empty( $pagination ) && $query->max_num_pages > 1 ) {
        $output .= '<div class="at-block-post-grid__pagination">';
        
        if ( $paginationType === 'numbers' ) {
            $output .= paginate_links( array(
                'base'      => str_replace( 999999999, '%#%', esc_url( get_pagenum_link( 999999999 ) ) ),
                'format'    => '?paged=%#%',
                'current'   => max( 1, get_query_var( 'paged' ) ),
                'total'     => $query->max_num_pages,
            ) );
        } else {
            $output .= '<div class="at-block-post-grid__pagination-prev-next">';
            $output .= '</div>';
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
