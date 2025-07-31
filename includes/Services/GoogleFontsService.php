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
	 * Instance.
	 * 
	 * @var GoogleFontsService|null
	 */
	private static $instance = null;

	/**
	 * Google Fonts data.
	 *
	 * @var array<string, array<string>>
	 */
	private array $fonts_data;

	/**
	 * Font families.
	 *
	 * @var array<string>
	 */
	public static $font_families = array();

	/**
	 * Constructor
	 */
	public function __construct() {
		$this->fonts_data = $this->get_fonts_data();
	}

	/**
	 * Get instance.
	 *
	 * @return GoogleFontsService
	 */
	public static function get_instance(): GoogleFontsService {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Get fonts data from JSON file.
	 *
	 * @return array<string, array<string>>
	 */
	private function get_fonts_data(): array {
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
	 * @return array<string, array<string>>
	 */
	public function get_fonts_for_editor(): array {
		return $this->fonts_data;
	}

	/**
	 * Get font family CSS value.
	 *
	 * @param string $font_family Font family value from block attributes.
	 * @return string
	 */
	public function get_font_family_css( string $font_family ): string {
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
	 * @return array<string, array<string>>
	 */
	public function find_google_fonts_in_content( string $block_slug, string $post_content ): array {
		$block_slug = "athemes-blocks/$block_slug";

		$font_data = array();
		
		// Parse blocks from content.
		$blocks = parse_blocks( $post_content );

		// Recursively search for fontFamily and fontWeight attributes.
		$find_fonts = function( $blocks ) use ( &$find_fonts, &$font_data, $block_slug ) {
			foreach ( $blocks as $block ) {
				if ( $block['blockName'] === $block_slug ) {
					$setting_ids = array();

					foreach ( $block['attrs'] as $attribute_id => $attribute_value ) {
						if ( strpos( $attribute_id, 'typography' ) === false && strpos( $attribute_id, 'Typography' ) === false ) {
							continue;
						}
						
						$setting_ids[] = $attribute_id;
					}

					foreach ( $setting_ids as $setting_id ) {
						$settings = $block['attrs'][$setting_id]['innerSettings'];
						
						if ( isset( $settings['fontFamily']['default']['desktop']['value'] ) ) {
							$font_family = $settings['fontFamily']['default']['desktop']['value'];
							$font_weight = isset( $settings['fontWeight']['default']['desktop']['value'] ) ? 
								$settings['fontWeight']['default']['desktop']['value'] : '400';
							
							if ( ! is_string( $font_family ) ) {
								continue;
							}

							if ( ! isset( $font_data[$font_family] ) ) {
								$font_data[$font_family] = array();
							}
							
							if ( ! in_array( $font_weight, $font_data[$font_family] ) ) {
								$font_data[$font_family][] = $font_weight;
							}
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
	 * @param array<string, array<string>> $font_data Array of font data with families and weights.
	 * @return string
	 */
	public function get_google_fonts_url( array $font_data ): string {
		if ( empty( $font_data ) ) {
			return '';
		}

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
			self::$font_families[] = $font_name . ':' . $formatted_weights;
		}

		// Join font families with | and add display=swap
		$url = 'https://fonts.googleapis.com/css?family=' . implode( '|', self::$font_families ) . '&display=swap';

		$settings = json_decode( get_option( 'athemes_blocks_dashboard_settings' ), true );
		$load_google_fonts_locally = ! empty( $settings['performance']['load_google_fonts_locally'] );
		
		if ( $load_google_fonts_locally ) {
			require_once ATHEMES_BLOCKS_PATH . 'includes\Services\wptt-webfont-loader.php';
			$url = wptt_get_webfont_url( $url );
		}
		
		return $url;
	}
}
