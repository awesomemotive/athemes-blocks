<?php

/**
 * The Taxonomy Grid block.
 * 
 * @package aThemes_Blocks
 */

namespace AThemes_Blocks\Blocks;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

use AThemes_Blocks\Blocks\BlockBase;

class TaxonomyGrid extends BlockBase {

    /**
     * Constructor.
     *
     */
    public function __construct() {
        $this->id = 'TaxonomyGrid';
        $this->slug = 'taxonomy-grid';
        
        parent::__construct();
        
        // Register swiper styles.
        add_action( 'wp_enqueue_scripts', array( $this, 'register_swiper_styles' ) );

        // Regsiter swiper script.
        add_action( 'wp_enqueue_scripts', array( $this, 'register_swiper_script' ) );

        // Register product category term meta.
        add_action( 'init', array( $this, 'register_product_category_term_meta' ) );
        
        // Register product brand term meta.
        add_action( 'init', array( $this, 'register_product_brand_term_meta' ) );

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
     * Register product category term meta.
     * 
     * @return void
     */
    public function register_product_category_term_meta(): void {
        register_term_meta( 'product_cat', 'thumbnail_id', array(
            'type' => 'integer',
            'single' => true,
            'show_in_rest' => true,
        ) );
    }

    /**
     * Register product brand term meta.
     * 
     * @return void
     */
    public function register_product_brand_term_meta(): void {
        register_term_meta( 'product_brand', 'thumbnail_id', array(
            'type' => 'integer',
            'single' => true,   
            'show_in_rest' => true,
        ) );
    }
}