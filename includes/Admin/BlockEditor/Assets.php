<?php

/**
 * Block editor assets.
 * This class is responsible for enqueuing block editor assets.
 * 
 * @package aThemes_Blocks
 */

namespace AThemes_Blocks\Admin\BlockEditor;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

use AThemes_Blocks\Services\GoogleFontsService;

class Assets {

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

        add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_block_editor_assets' ) );
        add_action( 'enqueue_block_editor_assets', array( $this, 'localize_block_editor_with_general_data' ) );
        add_action( 'enqueue_block_editor_assets', array( $this, 'localize_block_editor_with_google_fonts' ) );
        add_action( 'enqueue_block_editor_assets', array( $this, 'localize_block_editor_with_icon_libraries' ) );
        add_action( 'enqueue_block_editor_assets', array( $this, 'localize_block_editor_with_available_image_sizes' ) );
        add_action( 'enqueue_block_editor_assets', array( $this, 'localize_block_editor_with_color_palette' ) );
        add_action( 'enqueue_block_editor_assets', array( $this, 'localize_block_editor_with_google_maps_languages' ) );
    }

    /**
     * Enqueue block editor assets.
     * 
     * @return void
     */
    public function enqueue_block_editor_assets(): void {
        wp_enqueue_style(
            'athemes-blocks-block-editor',
            ATHEMES_BLOCKS_URL . 'assets/css/block-editor.css',
            array( 'wp-edit-blocks' ),
            ATHEMES_BLOCKS_VERSION
        );

        wp_enqueue_script(
            'athemes-blocks-block-editor',
            ATHEMES_BLOCKS_URL . 'assets/js/block-editor/at-blocks-block-editor.js',
            array('wp-hooks', 'wp-edit-post', 'wp-data', 'wp-components', 'wp-element', 'wp-block-editor'),
            ATHEMES_BLOCKS_VERSION,
            true
        );
    }

    /**
     * Localize block editor with general data.
     * 
     * @return void
     */
    public function localize_block_editor_with_general_data(): void {
        wp_localize_script(
            'athemes-blocks-block-editor',
            'athemesBlocksGeneralData',
            array(
                'testimonialsAmount' => apply_filters( 'atblocks_testimonials_max_amount', 40 ),
            )
        );
    }

    /**
     * Localize block editor with Google Fonts.
     * 
     * @return void
     */
    public function localize_block_editor_with_google_fonts(): void {
        wp_localize_script(
			'athemes-blocks-block-editor',
			'athemesBlocksGoogleFonts',
			$this->google_fonts_service->get_fonts_for_editor()
		);
    }

    /**
     * Localize block editor with icon libraries.
     * 
     * @return void
     */
    public function localize_block_editor_with_icon_libraries(): void {
        wp_localize_script(
            'athemes-blocks-block-editor',
            'athemesBlocksIconBoxLibrary',
            include( ATHEMES_BLOCKS_PATH . 'includes/Data/box-icons.php' )
        );

        wp_localize_script(
            'athemes-blocks-block-editor',
            'athemesBlocksFontAwesomeLibrary',
            include( ATHEMES_BLOCKS_PATH . 'includes/Data/font-awesome.php' )
        );
    }

    /**
     * Localize block editor with available image sizes.
     * 
     * @return void
     */
    public function localize_block_editor_with_available_image_sizes(): void {
        $image_sizes = array();
        $registered_sizes = wp_get_registered_image_subsizes();

        foreach ($registered_sizes as $size => $dimensions) {
            $width = $dimensions['width'];
            $height = $dimensions['height'];
            $image_sizes[] = array(
                'value' => $size,
                'label' => ucfirst($size) . " - {$width}x{$height}",
                'width' => $width,
                'height' => $height
            );
        }

        // Include the full size.
        $image_sizes[] = array(
            'value' => 'full',
            'label' => 'Full',
            'width' => '',
            'height' => ''
        );

        wp_localize_script(
            'athemes-blocks-block-editor',
            'athemesBlocksAvailableImageSizes',
            $image_sizes
        );
    }

    /**
     * Localize block editor with color palettes.
     * 
     * @return void
     */
    public function localize_block_editor_with_color_palette(): void {

        // The default color palette from athemes blocks.
        $default_color_palette = array(
            array(
                'name' => 'Default',
                'colors' => array(
                    array(
                        'color' => '#212121',
                        'name' => __( 'Black', 'athemes-blocks' )
                    ),
                    array(
                        'color' => '#757575',
                        'name' => __( 'Dark Gray', 'athemes-blocks' )
                    ),
                    array(
                        'color' => '#212121',
                        'name' => __( 'Black', 'athemes-blocks' )
                    ),
                    array(
                        'color' => '#212121',
                        'name' => __( 'Black', 'athemes-blocks' )
                    ),
                    array(
                        'color' => '#212121',
                        'name' => __( 'Black', 'athemes-blocks' )
                    ),
                    array(
                        'color' => '#f5f5f5',
                        'name' => __( 'Light Gray', 'athemes-blocks' )
                    ),
                    array(
                        'color' => '#fff',
                        'name' => __( 'White', 'athemes-blocks' )
                    ),
                    array(
                        'color' => '#fff',
                        'name' => __( 'White', 'athemes-blocks' )
                    ),
                )
            ),
        );

        // Theme color palette.
        $theme_color_palette = array();
        $editor_color_palette = get_theme_support( 'editor-color-palette' );
        if ( ! empty( $editor_color_palette[0] ) ) {
            $theme_colors = array();

            foreach ( $editor_color_palette[0] as $color ) {
                $theme_colors[] = array(
                    'name' => $color['name'],
                    'color' => $color['color']
                );
            }

            $theme_color_palette[] = array(
                'name' => __( 'Theme Colors', 'athemes-blocks' ),
                'colors' => $theme_colors
            );
        }

        // Mount the color palette.
        $color_palette = array_merge( $theme_color_palette, $default_color_palette );

        /**
         * Filter the color palette.
         * 
         * @param array<mixed> $color_palette The color palette.
         * @return array<mixed> The filtered color palette.
         */
        $color_palette = apply_filters('athemes_blocks_color_palette', $color_palette);

        // Localize the color palette.
        wp_localize_script(
            'athemes-blocks-block-editor',
            'athemesBlocksColorPalette',
            $color_palette
        );
    }

    /**
     * Localize block editor with Google Maps languages.
     * 
     * @return void
     */
    public function localize_block_editor_with_google_maps_languages(): void {

        /**
         * Filter the Google Maps languages.
         * 
         * @param array<string, string> $languages The Google Maps languages.
         * @return array<string, string> The filtered Google Maps languages.
         */
        $languages = apply_filters( 'athemes_blocks_google_maps_languages', array(
            'af' => 'Afrikaans',
            'sq' => 'Albanian',
            'am' => 'Amharic',
            'ar' => 'Arabic',
            'hy' => 'Armenian',
            'az' => 'Azerbaijani',
            'eu' => 'Basque',
            'be' => 'Belarusian',
            'bn' => 'Bengali',
            'bs' => 'Bosnian',
            'bg' => 'Bulgarian',
            'my' => 'Burmese',
            'ca' => 'Catalan',
            'zh' => 'Chinese',
            'hr' => 'Croatian',
            'cs' => 'Czech',
            'da' => 'Danish',
            'nl' => 'Dutch',
            'en' => 'English',
            'et' => 'Estonian',
            'fa' => 'Farsi',
            'fi' => 'Finnish',
            'fr' => 'French',
            'gl' => 'Galician',
            'ka' => 'Georgian',
            'de' => 'German',
            'el' => 'Greek',
            'gu' => 'Gujarati',
            'iw' => 'Hebrew',
            'hi' => 'Hindi',
            'hu' => 'Hungarian',
            'is' => 'Icelandic',
            'id' => 'Indonesian',
            'it' => 'Italian',
            'ja' => 'Japanese',
            'kn' => 'Kannada',
            'kk' => 'Kazakh',
            'km' => 'Khmer',
            'ko' => 'Korean',
            'ky' => 'Kyrgyz',
            'lo' => 'Lao',
            'lv' => 'Latvian',
            'lt' => 'Lithuanian',
            'mk' => 'Macedonian',
            'ms' => 'Malay',
            'ml' => 'Malayalam',
            'mr' => 'Marathi',
            'mn' => 'Mongolian',
            'ne' => 'Nepali',
            'no' => 'Norwegian',
            'pl' => 'Polish',
            'pt' => 'Portuguese',
            'pa' => 'Punjabi',
            'ro' => 'Romanian',
            'ru' => 'Russian',
            'sr' => 'Serbian',
            'si' => 'Sinhalese',
            'sk' => 'Slovak',
            'sl' => 'Slovenian',
            'es' => 'Spanish',
            'sw' => 'Swahili',
            'sv' => 'Swedish',
            'ta' => 'Tamil',
            'te' => 'Telugu',
            'th' => 'Thai',
            'tr' => 'Turkish',
            'uk' => 'Ukrainian',
            'ur' => 'Urdu',
            'uz' => 'Uzbek',
            'vi' => 'Vietnamese',
            'zu' => 'Zulu'
        ) );

        wp_localize_script(
            'athemes-blocks-block-editor',
            'athemesBlocksGoogleMapsLanguages',
            $languages
        );
    }
}
