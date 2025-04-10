<?php
/**
 * Google Fonts Service
 *
 * @package aThemes_Blocks
 */

namespace AThemes_Blocks\Services;

/**
 * Class GoogleFontsService
 */
class GoogleFontsService {
	
	/**
	 * Google Fonts data.
	 *
	 * @var array
	 */
	private $fonts_data;

	/**
	 * Constructor
	 */
	public function __construct() {
		$this->fonts_data = $this->get_fonts_data();
	}

	/**
	 * Get fonts data from JSON file.
	 *
	 * @return array
	 */
	private function get_fonts_data() {
		$fonts_file = ATHEMES_BLOCKS_PATH . 'includes/Data/google-fonts-alphabetical.json';
		
		if ( ! file_exists( $fonts_file ) ) {
			return array();
		}

		$fonts_json = file_get_contents( $fonts_file );
		return json_decode( $fonts_json, true );
	}

	/**
	 * Get fonts data for wp_localize_script.
	 *
	 * @return array
	 */
	public function get_fonts_for_editor() {
		return $this->fonts_data;
	}

	/**
	 * Get font family CSS value.
	 *
	 * @param string $font_family Font family value from block attributes.
	 * @return string
	 */
	public function get_font_family_css( $font_family ) {
		if ( empty( $font_family ) ) {
			return '';
		}

		// If it's a system font, return as is.
		if ( ! strpos( $font_family, ':' ) ) {
			return $font_family;
		}

		// For Google Fonts, extract the font name.
		$font_parts = explode( ':', $font_family );
		return "'" . $font_parts[0] . "'";
	}

	/**
	 * Find Google Fonts in post content.
	 *
	 * @param string $block_slug Block slug to search in.
	 * @param string $post_content Post content to search in.
	 * @return array
	 */
	public function find_google_fonts_in_content( $block_slug, $post_content ) {
		$block_slug = "athemes-blocks/$block_slug";

		$font_data = array();
		
		// Parse blocks from content.
		$blocks = parse_blocks( $post_content );

		// Recursively search for fontFamily and fontWeight attributes.
		$find_fonts = function( $blocks ) use ( &$find_fonts, &$font_data, $block_slug ) {
			foreach ( $blocks as $block ) {
				if ( $block['blockName'] === $block_slug && isset( $block['attrs']['typography']['innerSettings'] ) ) {
					$settings = $block['attrs']['typography']['innerSettings'];
					
					if ( isset( $settings['fontFamily']['default']['desktop']['value'] ) ) {
						$font_family = $settings['fontFamily']['default']['desktop']['value'];
						$font_weight = isset( $settings['fontWeight']['default']['desktop']['value'] ) ? 
							$settings['fontWeight']['default']['desktop']['value'] : '400';
						
						if ( ! isset( $font_data[$font_family] ) ) {
							$font_data[$font_family] = array();
						}
						
						if ( ! in_array( $font_weight, $font_data[$font_family] ) ) {
							$font_data[$font_family][] = $font_weight;
						}
					}
				}
				
				if ( ! empty( $block['innerBlocks'] ) ) {
					$find_fonts( $block['innerBlocks'] );
				}
			}
		};
		
		$find_fonts( $blocks );

		return $font_data;
	}

	/**
	 * Get Google Fonts URL for enqueueing.
	 *
	 * @param array $font_data Array of font data with families and weights.
	 * @return string
	 */
	public function get_google_fonts_url( $font_data ) {
		if ( empty( $font_data ) ) {
			return '';
		}

		$font_families = array();
		
		foreach ( $font_data as $font_name => $weights ) {
			// If no weights specified, get all available weights
			if ( empty( $weights ) ) {
				$font_data = array_filter( $this->fonts_data['items'], function( $item ) use ( $font_name ) {
					return $item['family'] === $font_name;
				} );
				
				if ( ! empty( $font_data ) ) {
					$font_data = reset( $font_data );
					$weights = $font_data['variants'];
				}
			}
			
			// Format weights to match the old API pattern (e.g., 100,400,700)
			$formatted_weights = implode( ',', $weights );
			$font_families[] = $font_name . ':' . $formatted_weights;
		}

		if ( empty( $font_families ) ) {
			return '';
		}

		// Join font families with | and add display=swap
		$url = 'https://fonts.googleapis.com/css?family=' . implode( '|', $font_families ) . '&display=swap';

		return $url;
	}
} 