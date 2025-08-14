<?php

/**
 * Swiper helper for blocks.
 * 
 * @package aThemes Blocks
 */

namespace AThemes_Blocks\Blocks\Helper;

class Swiper {

    /**
     * Swiper options.
     * 
     * @var array<mixed>
     */
    private array $swiper_options = array();

    /**
     * Swiper markup options.
     * 
     * @var array{
     *     swiper_class?: string,
     *     swiper_slide_class?: string,
     *     slider_items: array<string>
     * }
     */
    private array $swiper_markup_options = array(
        'slider_items' => array()
    );


    /**
     * Constructor.
     * 
     * @param array<string> $swiper_options
     * @param array{
     *     swiper_class?: string,
     *     swiper_slide_class?: string,
     *     slider_items: array<string>
     * } $swiper_markup_options
     */
    public function __construct( array $swiper_options, array $swiper_markup_options ) {
        $this->swiper_options = $swiper_options;
        $this->swiper_markup_options = $swiper_markup_options;
        
        $this->enqueue_scripts();
    }

    /**
     * Enqueue scripts.
     * 
     * @return void
     */
    private function enqueue_scripts(): void {

        // Enqueue swiper styles.
        wp_enqueue_style( 'swiper-core' );
        wp_enqueue_style( 'swiper-pagination' );
        wp_enqueue_style( 'swiper-navigation' );

        // Enqueue swiper script.
        wp_enqueue_script( 'athemes-blocks-modularized-swiper' );
    }        

    /**
     * Check if the swiper has navigation.
     * 
     * @return bool
     */
    public function has_navigation(): bool {
        if ( ! isset( $this->swiper_options['navigation'] ) ) {
            return false;
        }

        if ( ! isset( $this->swiper_options['navigation']['enabled'] ) ) {
            return false;
        }

        if ( $this->swiper_options['navigation']['enabled'] === false ) {
            return false;
        }

        return true;
    }

    /**
     * Check if the swiper has pagination.
     * 
     * @return bool
     */
    public function has_pagination(): bool {
        if ( ! isset( $this->swiper_options['pagination'] ) ) {
            return false;
        }

        if ( $this->swiper_options['pagination'] === false ) {
            return false;
        }

        return true;
    }

    /**
     * Get html output.
     * 
     * @return string
     */
    public function get_html_output(): string {
        ob_start();
        $this->render();
        return ob_get_clean();
    }

    /**
     * Render the swiper.
     * 
     * @return void
     */
    public function render(): void { 
        $swiper_classes = array( 'swiper' );
        $swiper_slide_classes = array( 'swiper-slide' );

        // Swiper class.
        if ( $this->swiper_markup_options['swiper_class'] ) {
            $swiper_classes[] = $this->swiper_markup_options['swiper_class'];
        }

        // Swiper slide class.
        if ( $this->swiper_markup_options['swiper_slide_class'] ) {
            $swiper_slide_classes[] = $this->swiper_markup_options['swiper_slide_class'];
        }

        ?>
        <div class="at-block-swiper-wrapper">
            <div class="<?php echo esc_attr( implode( ' ', $swiper_classes ) ); ?>" data-swiper-options="<?php echo esc_attr( json_encode( $this->swiper_options ) ); ?>">
                <div class="swiper-wrapper">
                    <?php foreach($this->swiper_markup_options['slider_items'] as $slide_item_content) : ?>
                        <div class="<?php echo esc_attr( implode( ' ', $swiper_slide_classes ) ); ?>">
                            <?php echo $slide_item_content; ?>
                        </div>
                    <?php endforeach; ?>
                </div>
                <?php if ( $this->has_pagination() ) : ?>
                    <div class='swiper-pagination'></div>
                <?php endif; ?>
            </div>
            <?php if ( $this->has_navigation() ) : ?>
                <div class='at-block-nav at-block-nav--next'></div>
                <div class='at-block-nav at-block-nav--prev'></div>
            <?php endif; ?>
        </div>
        <?php
    }

}