<?php

/**
 * Helper functions for the Taxonomy Grid block.
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

class TaxonomyGrid {

    /**
     * Get the taxonomy item output.
     * 
     * @param int $term_id The term ID.
     * @param array<string, mixed> $attributes The block attributes.
     * @param array<string, mixed> $atts_defaults The default block attributes.
     */
    public static function get_taxonomy_grid_item_output( int $term_id, array $attributes, array $atts_defaults ): void {
        $taxonomy = Settings::get_setting( 'taxonomy', $attributes, $atts_defaults, '' );
        $displayImage = Settings::get_setting( 'displayImage', $attributes, $atts_defaults, '' );
        $imageSize = Settings::get_setting( 'imageSize', $attributes, $atts_defaults, '' );
        $displayTitle = Settings::get_setting( 'displayTitle', $attributes, $atts_defaults, '' );
        $titleTag = Settings::get_setting( 'titleTag', $attributes, $atts_defaults, '' );
        $displayDescription = Settings::get_setting( 'displayDescription', $attributes, $atts_defaults, '' );
        $displayButton = Settings::get_setting( 'displayButton', $attributes, $atts_defaults, '' );
        $buttonOpenInNewTab = Settings::get_setting( 'buttonOpenInNewTab', $attributes, $atts_defaults, '' );

        $displayCarousel = Settings::get_setting( 'displayCarousel', $attributes, $atts_defaults, '' );

        // Links target.
        $target = ! empty( $buttonOpenInNewTab ) ? ' target="_blank" rel="noopener noreferrer"' : '';

        if ( ! $displayCarousel ) : ?>
            <div class="at-block-taxonomy-grid__item">
        <?php endif;
        
        // Get the term object.
        $term = get_term( $term_id );

        // Taxonomy Image.
        $term_image_id = get_term_meta($term_id, 'thumbnail_id', true);

        if ( $displayImage && $term_image_id ) : ?>
            <a href="<?php echo get_term_link( $term_id ); ?>"<?php echo $target; ?> class="at-block-taxonomy-grid__image">
                <?php echo wp_get_attachment_image($term_image_id, $imageSize, false, array(
                    'class' => 'at-block-taxonomy-grid__image-image'
                )); ?>
            </a>
        <?php endif; ?>

        <div class="at-block-taxonomy-grid__content">

            <?php
            // Title.
            if ( ! empty( $displayTitle ) ) :
                printf(
                    '<%1$s class="at-block-taxonomy-grid__title"><a href="%2$s"%3$s>%4$s</a></%1$s>',
                    $titleTag,
                    get_term_link( $term_id ),
                    $target,
                    $term->name
                );
            endif;

            // Description.
            if ( ! empty( $displayDescription ) ) : ?>
                <div class="at-block-taxonomy-grid__description">
                    <?php echo $term->description; ?>
                </div>
            <?php endif;

            // Button.
            if ( ! empty( $displayButton ) ) :
                $target = ! empty( $buttonOpenInNewTab ) ? ' target="_blank" rel="noopener noreferrer"' : ''; ?>
                
                <div class="at-block-taxonomy-grid__button">
                    <?php
                        printf(
                            '<a href="%1$s" class="at-block-taxonomy-grid__button-button"%2$s>%3$s</a>',
                            get_term_link( $term_id ),
                            $target,
                            __( 'Read More', 'athemes-blocks' )
                        );
                    ?>
                </div>
            <?php endif;

            if ( ! $displayCarousel ) : ?>
            </div>
        <?php endif; ?>
        </div>
    <?php 
    }
}