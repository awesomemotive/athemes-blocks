<?php

/**
 * Helper functions for the Post Grid block.
 * 
 * @package aThemes Blocks
 */

namespace AThemes_Blocks\Blocks\Helper;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

use AThemes_Blocks\Blocks\Helper\Settings;
use AThemes_Blocks\Blocks\Helper\Functions;

class PostGrid {

    /**
     * Get the post item output.
     * 
     * @param int $post_id The post ID.
     * @param array<string, mixed> $attributes The block attributes.
     * @param array<string, mixed> $atts_defaults The default block attributes.
     * 
     * @return string The post item output.
     */
    public static function get_post_grid_item_output( int $post_id, array $attributes, array $atts_defaults ): string {
        $displayImage = Settings::get_setting( 'displayImage', $attributes, $atts_defaults, '' );
        $imageSize = Settings::get_setting( 'imageSize', $attributes, $atts_defaults, '' );
        $displayTitle = Settings::get_setting( 'displayTitle', $attributes, $atts_defaults, '' );
        $titleTag = Settings::get_setting( 'titleTag', $attributes, $atts_defaults, '' );
        $displayAuthor = Settings::get_setting( 'displayAuthor', $attributes, $atts_defaults, '' );
        $displayDate = Settings::get_setting( 'displayDate', $attributes, $atts_defaults, '' );
        $displayComments = Settings::get_setting( 'displayComments', $attributes, $atts_defaults, '' );
        $taxonomy = Settings::get_setting( 'taxonomy', $attributes, $atts_defaults, '' );
        $taxonomyTerm = Settings::get_setting( 'taxonomyTerm', $attributes, $atts_defaults, '' );
        $displayTaxonomy = Settings::get_setting( 'displayTaxonomy', $attributes, $atts_defaults, '' );
        $displayMetaIcon = Settings::get_setting( 'displayMetaIcon', $attributes, $atts_defaults, '' );
        $displayExcerpt = Settings::get_setting( 'displayExcerpt', $attributes, $atts_defaults, '' );
        $excerptMaxWords = Settings::get_setting( 'excerptMaxWords', $attributes, $atts_defaults, '' );
        $displayReadMore = Settings::get_setting( 'displayReadMore', $attributes, $atts_defaults, '' );
        $readMoreOpenInNewTab = Settings::get_setting( 'readMoreOpenInNewTab', $attributes, $atts_defaults, '' );
        $readMoreText = Settings::get_setting( 'readMoreText', $attributes, $atts_defaults, '' );

        // Links target.
        $target = ! empty( $readMoreOpenInNewTab ) ? ' target="_blank" rel="noopener noreferrer"' : '';

        $output = '';
        $output .= '<div class="at-block-post-grid__item">';
            
        // Featured Image
        if ( $displayImage && has_post_thumbnail( $post_id ) ) {
            $output .= '<a href="' . get_permalink( $post_id ) . '"' . $target . ' class="at-block-post-grid__image">';
            $output .= get_the_post_thumbnail( $post_id, $imageSize, array( 'class' => 'at-block-post-grid__image-image' ) );
            $output .= '</a>';
        }

        // Content wrapper
        $output .= '<div class="at-block-post-grid__content">';

        // Title
        if ( ! empty( $displayTitle ) ) {
            $output .= sprintf(
                '<%1$s class="at-block-post-grid__title"><a href="%2$s"%3$s>%4$s</a></%1$s>',
                $titleTag,
                get_permalink( $post_id ),
                $target,
                get_the_title( $post_id )
            );
        }

        // Meta information
        if ( ! empty( $displayAuthor ) || ! empty( $displayDate ) || ! empty( $displayComments ) || ! empty( $displayTaxonomy ) ) {
            $output .= '<div class="at-block-post-grid__meta">';
            
            // Author
            if ( ! empty( $displayAuthor ) ) {
                $output .= '<a href="' . get_author_posts_url( (int) get_the_author_meta( 'ID', $post_id ) ) . '"' . $target . ' class="at-block-post-grid__author">';
                if ( ! empty( $displayMetaIcon ) ) {
                    $output .= '<div class="at-block-post-grid__meta-icon">';
                    $output .= sprintf(
                        '<div class="at-block-icon__icon">%s</div>',
                        Functions::get_icon_svg( array(
                            'library' => 'box-icons',
                            'icon' => 'bx-user-circle-regular',
                        ) )
                    );
                    $output .= '</div>';
                }
                $output .= get_the_author();
                $output .= '</a>';
            }
            
            // Date
            if ( ! empty( $displayDate ) ) {
                $output .= '<a href="' . get_permalink( $post_id ) . '"' . $target . ' class="at-block-post-grid__date">';
                if ( ! empty( $displayMetaIcon ) ) {
                    $output .= '<div class="at-block-post-grid__meta-icon">';
                    $output .= sprintf(
                        '<div class="at-block-icon__icon">%s</div>',
                        Functions::get_icon_svg( array(
                            'library' => 'box-icons',
                            'icon' => 'bx-calendar-regular',
                        ) )
                    );
                    $output .= '</div>';
                }
                $output .= get_the_date();
                $output .= '</a>';
            }
            
            // Comments
            if ( ! empty( $displayComments ) ) {
                $output .= '<a href="' . get_comments_link( $post_id ) . '"' . $target . ' class="at-block-post-grid__comments">';
                if ( ! empty( $displayMetaIcon ) ) {
                    $output .= '<div class="at-block-post-grid__meta-icon">';
                    $output .= sprintf(
                        '<div class="at-block-icon__icon">%s</div>',
                        Functions::get_icon_svg( array(
                            'library' => 'box-icons',
                            'icon' => 'bx-chat-regular',
                        ) )
                    );
                    $output .= '</div>';
                }
                $output .= get_comments_number();
                $output .= '</a>';
            }
            
            // Taxonomy
            if ( $displayTaxonomy && $taxonomy && $taxonomyTerm ) {
                $terms = get_the_terms( $post_id, $taxonomy );
                
                if ( $terms && ! is_wp_error( $terms ) ) {
                    $output .= '<span class="at-block-post-grid__taxonomy">';
                    if ( ! empty( $displayMetaIcon ) ) {
                        $output .= '<div class="at-block-post-grid__meta-icon">';
                        $output .= sprintf(
                            '<div class="at-block-icon__icon">%s</div>',
                            Functions::get_icon_svg( array(
                                'library' => 'box-icons',
                                'icon' => 'bx-purchase-tag-alt-regular',
                            ) )
                        );
                        $output .= '</div>';
                    }
                    $term_links = array();
                    foreach ( $terms as $term ) {
                        $term_links[] = '<a href="' . get_term_link( $term ) . '"' . $target . ' class="at-block-post-grid__taxonomy-link">' . $term->name . '</a>';
                    }
                    $output .= implode( ', ', $term_links );
                    $output .= '</span>';
                }
            }
            
            $output .= '</div>';
        }

        // Excerpt
        if ( ! empty( $displayExcerpt ) ) {
            $output .= '<div class="at-block-post-grid__excerpt">';
            $output .= wp_trim_words( get_the_excerpt( $post_id ), $excerptMaxWords );
            $output .= '</div>';
        }

        // Read More
        if ( ! empty( $displayReadMore ) ) {
            $target = ! empty( $readMoreOpenInNewTab ) ? ' target="_blank" rel="noopener noreferrer"' : '';
            $output .= sprintf(
                '<a href="%1$s" class="at-block-post-grid__read-more"%2$s>%3$s</a>',
                get_permalink( $post_id ),
                $target,
                $readMoreText
            );
        }

        $output .= '</div>';
        $output .= '</div>';

        return $output;
    }
}