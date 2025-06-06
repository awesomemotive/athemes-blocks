<?php

namespace AThemes_Blocks\Blocks\Traits;

use AThemes_Blocks\Services\GoogleFontsService;

trait WithGoogleFonts {
    /**
     * Google Fonts Service instance.
     * 
     * @var GoogleFontsService
     */
    protected $google_fonts_service;

    /**
     * Initialize Google Fonts service.
     * 
     * @return void
     */
    protected function init_google_fonts() {

        // Initialize Google Fonts service.
        $this->google_fonts_service = GoogleFontsService::get_instance();

        // Register Google Fonts hooks.
        $this->register_google_fonts_hooks();
    }

    /**
     * Register WordPress hooks for Google Fonts.
     * 
     * @return void
     */
    public function register_google_fonts_hooks() {
        add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_google_fonts' ) );
    }

    /**
     * Enqueue Google Fonts.
     * 
     * @return void
     */
    public function enqueue_google_fonts() {
        global $post;
        
        if ( ! $post ) {
            return;
        }

        $font_families = $this->google_fonts_service->find_google_fonts_in_content( $this->slug, $post->post_content );
        if ( empty( $font_families ) ) {
            return;
        }

        $google_fonts_url = $this->google_fonts_service->get_google_fonts_url( $font_families );
        if ( ! empty( $google_fonts_url ) ) {            
            
            // Deregister and dequeue the style to ensure a clean slate.
            // The dequeue logic is needed when you have multiple blocks being rendered on the same page, where 
            // each block has its own Google Fonts URL.
            wp_deregister_style( 'athemes-blocks-google-fonts' );
            wp_dequeue_style( 'athemes-blocks-google-fonts' );
            
            // Register and enqueue the new style
            wp_enqueue_style(
                'athemes-blocks-google-fonts',
                $google_fonts_url,
                array(),
                ATHEMES_BLOCKS_VERSION
            );
        }
    }
}