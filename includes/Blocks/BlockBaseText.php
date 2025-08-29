<?php

/**
 * The base class for text based blocks.
 * 
 * @package aThemes_Blocks
 */

namespace AThemes_Blocks\Blocks;

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

use AThemes_Blocks\Services\GoogleFontsService;

abstract class BlockBaseText extends BlockBase {

    /**
     * Google Fonts Service instance.
     * 
     * @var GoogleFontsService
     */
    protected $google_fonts_service;

    /**
     * Constructor.
     * 
     */
    public function __construct() {
        $this->google_fonts_service = new GoogleFontsService();
        parent::__construct();
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
			wp_enqueue_style(
				'athemes-blocks-google-fonts',
				$google_fonts_url,
				array(),
				ATHEMES_BLOCKS_VERSION
			);
		}
	}
}