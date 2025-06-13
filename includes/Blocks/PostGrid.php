<?php

/**
 * The Post Grid block.
 * 
 * @package aThemes_Blocks
 */

namespace AThemes_Blocks\Blocks;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

use AThemes_Blocks\Blocks\BlockBase;
use AThemes_Blocks\Blocks\Traits\WithGoogleFonts;

class PostGrid extends BlockBase {

    use WithGoogleFonts;

    /**
     * Constructor.
     *
     */
    public function __construct() {
        $this->id = 'PostGrid';
        $this->slug = 'post-grid';
        
        parent::__construct();

        // Initialize Google Fonts service.
        $this->init_google_fonts();
        
        // Register swiper styles.
        add_action( 'wp_enqueue_scripts', array( $this, 'register_swiper_styles' ) );

        // Regsiter swiper script.
        add_action( 'wp_enqueue_scripts', array( $this, 'register_swiper_script' ) );

        // Register pagination script.
        add_action( 'wp_enqueue_scripts', array( $this, 'register_pagination_script' ) );

        // Register ajax add to cart script.
        add_action( 'wp_enqueue_scripts', array( $this, 'register_ajax_add_to_cart_script' ) );
    }

    /**
     * Register swiper styles.
     * 
     * @return void
     */
    public function register_swiper_styles(): void {
        wp_register_style( 'swiper-core', ATHEMES_BLOCKS_URL . 'assets/vendor/swiper/css/swiper-core.css', array(), ATHEMES_BLOCKS_VERSION );
        wp_register_style( 'swiper-pagination', ATHEMES_BLOCKS_URL . 'assets/vendor/swiper/css/swiper-pagination.css', array(), ATHEMES_BLOCKS_VERSION );
        wp_register_style( 'swiper-navigation', ATHEMES_BLOCKS_URL . 'assets/vendor/swiper/css/swiper-navigation.css', array(), ATHEMES_BLOCKS_VERSION );
    }

    /**
     * Register swiper script.
     * 
     * @return void
     */
    public function register_swiper_script(): void {
        wp_register_script( 'athemes-blocks-modularized-swiper', ATHEMES_BLOCKS_URL . 'assets/vendor/swiper/modularized-swiper.js', array(), ATHEMES_BLOCKS_VERSION, true );
    }

    /**
     * Register pagination script.
     * 
     * @return void
     */
    public function register_pagination_script(): void {
        wp_register_script( 'athemes-blocks-pagination', ATHEMES_BLOCKS_URL . 'assets/js/pagination.js', array(), ATHEMES_BLOCKS_VERSION, true );
    }

    /**
     * Register ajax add to cart script.
     * 
     * @return void
     */
    public function register_ajax_add_to_cart_script(): void {
        wp_register_script( 'athemes-blocks-ajax-add-to-cart', ATHEMES_BLOCKS_URL . 'assets/js/ajax-add-to-cart.js', array(), ATHEMES_BLOCKS_VERSION, true );
    }
}