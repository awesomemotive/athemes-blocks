<?php
/**
 * Blocks common CSS.
 * Handles the addition of CSS styles for blocks that are common to all blocks.
 *
 * @package aThemes_Blocks
 */

namespace AThemes_Blocks\Blocks\Common;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class CommonCss {

	/**
	 * Constructor.
	 * 
	 */
	public function __construct() {

		// Enqueue the common CSS file on the frontend and the block editor.
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_common_css_file' ) );
		add_action( 'enqueue_block_assets', array( $this, 'enqueue_common_css_file' ) );

		// Enqueue the inline CSS for the frontend and the block editor. The purpose of this is the usage of dynamic values with PHP.
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_frontend_common_inline_css' ) );
		add_action( 'enqueue_block_assets', array( $this, 'enqueue_block_editor_common_inline_css' ) );
	}

	/**
	 * Enqueue blocks common CSS stylesheet (a file) on the frontend.
	 * 
	 * @return void
	 */
	public function enqueue_common_css_file(): void {
		wp_enqueue_style( 'athemes-blocks-common', ATHEMES_BLOCKS_URL . 'assets/css/blocks-common.css', array(), ATHEMES_BLOCKS_VERSION );
	}
	
	/**
	 * Enqueue blocks common CSS for the frontend.
	 * 
	 * @return void
	 */
	public function enqueue_frontend_common_inline_css(): void {
		wp_add_inline_style( 'athemes-blocks-common', $this->get_inline_styles() );
	}

	/**
	 * Enqueue blocks common CSS for the block editor.
	 * 
	 * @return void
	 */
	public function enqueue_block_editor_common_inline_css(): void {
		wp_add_inline_style( 'wp-block-editor', $this->get_inline_styles() );
	}

	/**
	 * Get the inline styles to be added.
	 * 
	 * @return string The CSS styles to be added inline.
	 */
	private function get_inline_styles(): string {
		$breakpoints = array(
			'desktop-min' => 1025,
			'tablet-min' => 768,
			'tablet-max' => 1024,
			'mobile-max' => 767,
		);

		$css = "
			@media (min-width: {$breakpoints['desktop-min']}px) {
				.atb-hide-desktop {
					display: none !important;
				}
			}

			@media (min-width: {$breakpoints['tablet-min']}px) and (max-width: {$breakpoints['tablet-max']}px) {
				.atb-hide-tablet {
					display: none !important;
				}
			}

			@media (max-width: {$breakpoints['mobile-max']}px) {
				.atb-hide-mobile {
					display: none !important;
				}
			}
		";

		return $css;
	}
} 