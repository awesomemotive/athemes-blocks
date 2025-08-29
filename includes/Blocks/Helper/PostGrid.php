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
     */
    public static function get_post_grid_item_output( int $post_id, array $attributes, array $atts_defaults ): void {
        $postType = Settings::get_setting( 'postType', $attributes, $atts_defaults, '' );
        $displayImage = Settings::get_setting( 'displayImage', $attributes, $atts_defaults, '' );
        $imageSize = Settings::get_setting( 'imageSize', $attributes, $atts_defaults, '' );
        $displaySaleBadge = Settings::get_setting( 'displaySaleBadge', $attributes, $atts_defaults, '' );
        $displayTitle = Settings::get_setting( 'displayTitle', $attributes, $atts_defaults, '' );
        $displayReviewsRating = Settings::get_setting( 'displayReviewsRating', $attributes, $atts_defaults, '' );
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
        $displayPrice = Settings::get_setting( 'displayPrice', $attributes, $atts_defaults, '' );
        $displayButton = Settings::get_setting( 'displayButton', $attributes, $atts_defaults, '' );
        $buttonOpenInNewTab = Settings::get_setting( 'buttonOpenInNewTab', $attributes, $atts_defaults, '' );

        $displayCarousel = Settings::get_setting( 'displayCarousel', $attributes, $atts_defaults, '' );

        // Links target.
        $target = ! empty( $buttonOpenInNewTab ) ? ' target="_blank" rel="noopener noreferrer"' : '';

        if ( ! $displayCarousel ) : ?>
            <div class="at-block-post-grid__item">
        <?php endif;

// Sale badge.
        if ( $postType === 'product' && $displaySaleBadge && function_exists( 'wc_get_product' ) ) :
            $product = wc_get_product( $post_id );

            if ( $product->is_on_sale() ) :
                echo apply_filters( 'woocommerce_sale_flash', '<span class="onsale">' . esc_html__( 'Sale!', 'woocommerce' ) . '</span>', $post_id, $product );
            endif;
        endif;
        
        // Featured Image.
        if ( $displayImage && has_post_thumbnail( $post_id ) ) : ?>
            <a href="<?php echo get_permalink( $post_id ); ?>"<?php echo $target; ?> class="at-block-post-grid__image">
                <?php echo get_the_post_thumbnail( $post_id, $imageSize, array( 'class' => 'at-block-post-grid__image-image' ) ); ?>
            </a>
        <?php endif; ?>

        <div class="at-block-post-grid__content">

            <?php
            // Title.
            if ( ! empty( $displayTitle ) ) :
                printf(
                    '<%1$s class="at-block-post-grid__title"><a href="%2$s"%3$s>%4$s</a></%1$s>',
                    $titleTag,
                    get_permalink( $post_id ),
                    $target,
                    get_the_title( $post_id )
                );
            endif;

            // Reviews rating.
            if ( $postType === 'product' && function_exists( 'wc_get_product' ) && ! empty( $displayReviewsRating ) ) :
                $product = wc_get_product( $post_id ); ?>
                <a href="<?php echo get_permalink( $post_id ); ?>#reviews"<?php echo $target; ?> class="at-block-post-grid__reviews-rating">
                    <div class="atb-star-rating star-rating">
                        <span style="width: <?php echo $product->get_average_rating() * 20; ?>%">
                            <?php 
                            printf( 
                                __( 'Rated %s out of 5', 'athemes-blocks' ), 
                                '<strong class="rating">' . $product->get_average_rating() . '</strong>' 
                            ); 
                            ?>
                        </span>
                    </div>
                </a>
            <?php endif;

            // Meta information
            if ( ! empty( $displayAuthor ) || ! empty( $displayDate ) || ! empty( $displayComments ) || ! empty( $displayTaxonomy ) ) : ?>
                <div class="at-block-post-grid__meta">
                    <?php
                    // Author.
                    if ( $postType !== 'product' && ! empty( $displayAuthor ) ) : ?>
                        <a href="<?php echo get_author_posts_url( (int) get_the_author_meta( 'ID', $post_id ) ); ?>"<?php echo $target; ?> class="at-block-post-grid__author">
                            <?php if ( ! empty( $displayMetaIcon ) ) : ?>
                                <div class="at-block-post-grid__meta-icon">
                                    <div class="at-block-icon__icon">
                                        <?php echo Functions::get_icon_svg( array(
                                            'library' => 'box-icons',
                                            'icon' => 'bx-user-circle-regular',
                                        ) ); ?>
                                    </div>
                                </div>
                            <?php endif;
                            echo get_the_author(); ?>
                        </a>
                    <?php endif;
                    
                    // Date.
                    if ( ! empty( $displayDate ) ) : ?>
                        <a href="<?php echo get_permalink( $post_id ); ?>"<?php echo $target; ?> class="at-block-post-grid__date">
                            <?php if ( ! empty( $displayMetaIcon ) ) : ?>
                                <div class="at-block-post-grid__meta-icon">
                                    <div class="at-block-icon__icon">
                                        <?php echo Functions::get_icon_svg( array(
                                            'library' => 'box-icons',
                                            'icon' => 'bx-calendar-regular',
                                        ) ); ?>
                                    </div>
                                </div>
                            <?php endif;
                            echo get_the_date(); ?>
                        </a>
                    <?php endif;
                    
                    // Comments.
                    if ( $postType !== 'product' && $postType !== 'page' && ! empty( $displayComments ) ) : ?>
                        <a href="<?php echo get_comments_link( $post_id ); ?>"<?php echo $target; ?> class="at-block-post-grid__comments">
                            <?php if ( ! empty( $displayMetaIcon ) ) : ?>
                                <div class="at-block-post-grid__meta-icon">
                                    <div class="at-block-icon__icon">
                                        <?php echo Functions::get_icon_svg( array(
                                            'library' => 'box-icons',
                                            'icon' => 'bx-chat-regular',
                                        ) ); ?>
                                    </div>
                                </div>
                            <?php endif;
                            echo get_comments_number(); ?>
                        </a>
                    <?php endif;
                    
                    // Taxonomy.
                    if ( $postType !== 'page' && $displayTaxonomy && $taxonomy && $taxonomyTerm ) :
                        $terms = get_the_terms( $post_id, $taxonomy );
                        
                        if ( $terms && ! is_wp_error( $terms ) ) : ?>
                            <span class="at-block-post-grid__taxonomy">
                                <?php if ( ! empty( $displayMetaIcon ) ) : ?>
                                    <div class="at-block-post-grid__meta-icon">
                                        <div class="at-block-icon__icon">
                                            <?php echo Functions::get_icon_svg( array(
                                                'library' => 'box-icons',
                                                'icon' => 'bx-purchase-tag-alt-regular',
                                            ) ); ?>
                                        </div>
                                    </div>
                                <?php endif;
                                $term_links = array();
                                foreach ( $terms as $term ) :
                                    $term_links[] = '<a href="' . get_term_link( $term ) . '"' . $target . ' class="at-block-post-grid__taxonomy-link">' . $term->name . '</a>';
                                endforeach;
                                echo implode( ', ', $term_links ); ?>
                            </span>
                        <?php endif;
                    endif; ?>
                </div>
            <?php endif;

            // Excerpt.
            if ( ! empty( $displayExcerpt ) ) : ?>
                <div class="at-block-post-grid__excerpt">
                    <?php echo wp_trim_words( get_the_content( null, false, $post_id ), $excerptMaxWords ); ?>
                </div>
            <?php endif;

            // Price.
            if ( $postType === 'product' && function_exists( 'wc_get_product' ) && ! empty( $displayPrice ) ) :
                $product = wc_get_product( $post_id ); ?>
                <div class="at-block-post-grid__price">
                    <?php echo $product->get_price_html(); ?>
                </div>
            <?php endif;

            // Button.
            if ( ! empty( $displayButton ) ) :
                $target = ! empty( $buttonOpenInNewTab ) ? ' target="_blank" rel="noopener noreferrer"' : ''; ?>
                <div class="at-block-post-grid__button">
                    <?php if ( $postType === 'product' && function_exists( 'wc_get_product' ) && function_exists( 'woocommerce_template_loop_add_to_cart' ) ) :
                        $product = wc_get_product( $post_id );
                        $has_ajax_add_to_cart = get_option( 'woocommerce_enable_ajax_add_to_cart' );

                        if ( $has_ajax_add_to_cart ) :
                            wp_enqueue_script( 'athemes-blocks-ajax-add-to-cart' );
                        endif;
                        
                        ob_start();
                        woocommerce_template_loop_add_to_cart( array(
                            'class' => implode(
                                ' ',
                                array_filter(
                                    array(
                                        'at-block-post-grid__button-button with-spinner-loader',
                                        'product_type_' . $product->get_type(),
                                        $product->is_purchasable() && $product->is_in_stock() ? 'add_to_cart_button' : '',
                                        $product->supports( 'ajax_add_to_cart' ) && $product->is_purchasable() && $product->is_in_stock() ? 'ajax_add_to_cart' : '',
                                    )
                                )
                            ),
                        ) );
                        
                        /**
                         * Filter the add to cart button output.
                         * 
                         * @param string $output The output.
                         * @param int $post_id The post ID.
                         * @param array<string, mixed> $attributes The block attributes.
                         * @param array<string, mixed> $atts_defaults The default block attributes.
                         * 
                         * @return string The output.
                         */
                        echo apply_filters( 'athemes_blocks_post_grid_add_to_cart_button_output', ob_get_clean(), $post_id, $attributes, $atts_defaults );
                    else :
                        printf(
                            '<a href="%1$s" class="at-block-post-grid__button-button"%2$s>%3$s</a>',
                            get_permalink( $post_id ),
                            $target,
                            __( 'Read More', 'athemes-blocks' )
                        );
                    endif; ?>
                </div>
            <?php endif;

            if ( ! $displayCarousel ) : ?>
            </div>
        <?php endif; ?>
        </div>
    <?php 
    }
}