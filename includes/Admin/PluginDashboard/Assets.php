<?php
/**
 * Plugin Dashboard Assets.
 * 
 * @package AThemes_Blocks
 */

namespace AThemes_Blocks\Admin\PluginDashboard;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use AThemes_Blocks\Services\PluginInstaller\Helpers\Plugin as PluginInstallerHelper;

class Assets {
	
	/**
	 * Constructor.
	 * 
	 */
	public function __construct() {
		$this->init_hooks();
	}

    /**
     * Init hooks.
     * 
     * @return void
     */
    public function init_hooks(): void {
        add_action( 'admin_enqueue_scripts', array( $this, 'admin_enqueue_scripts' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'localize_dashboard_with_general_data' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'localize_dashboard_with_enabled_blocks' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'localize_dashboard_with_blocks_data' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'localize_dashboard_with_dashboard_settings' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'localize_dashboard_with_suggested_products' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'localize_dashboard_with_quick_links' ) );
    }

	/**
	 * Enqueue scripts.
	 * 
	 * @return void
	 */
	public function admin_enqueue_scripts(): void {
        wp_enqueue_script( 'at-blocks-plugin-dashboard', ATHEMES_BLOCKS_URL . 'assets/js/plugin-dashboard/dashboard.js', array( 'wp-element', 'wp-i18n', 'wp-components', 'wp-hooks', 'wp-api' ), ATHEMES_BLOCKS_VERSION, true );
		wp_enqueue_style( 'wp-components' );
    }

	/**
	 * Localize dashboard with general data.
	 * 
	 * @return void
	 */
	public function localize_dashboard_with_general_data(): void {
		wp_localize_script( 'at-blocks-plugin-dashboard', 'athemesBlocksGeneralData', array(
			'topbar' => array(
				'logo' => ATHEMES_BLOCKS_URL . 'assets/img/dashboard/athemes-logo.png',
				'version' => ATHEMES_BLOCKS_VERSION,
				'website_url' => 'https://athemes.com',
			),
			'hero' => array(
				'title' => __( 'Welcome to aThemes Blocks 👋', 'athemes-blocks' ),
				'description' => __( 'We’re glad to see you :)', 'athemes-blocks' ),
				'button_label' => __( 'Create New Pages', 'athemes-blocks' ),
				'button_url' => 'https://athemes.com',
				'image' => ATHEMES_BLOCKS_URL . 'assets/img/dashboard/dashboard-hero.png',
			),
			'ajax_url' => admin_url( 'admin-ajax.php' ),
			'nonce' => wp_create_nonce( 'atb_dashboard_notifications_read' ),
		) );
	}

	/**
	 * Localize dashboard with enabled blocks data.
	 * 
	 * @return void
	 */
	public function localize_dashboard_with_enabled_blocks(): void {
		$enabled_blocks = get_option( 'athemes_blocks_enabled_blocks' );

		wp_localize_script( 'at-blocks-plugin-dashboard', 'athemesBlocksEnabledBlocks', json_decode( $enabled_blocks, true ) );
	}

	/**
	 * Localize dashboard with blocks data.
	 * 
	 * @return void
	 */
	public function localize_dashboard_with_blocks_data(): void {
		wp_localize_script( 'at-blocks-plugin-dashboard', 'athemesBlocksBlocksData', array(
			'flex-container' => array(
				'title' => __( 'Flex Container', 'athemes-blocks' ),
				'description' => __( 'Arrange multiple blocks flexibly with customizable layout options', 'athemes-blocks' ),
				'documentation' => 'https://athemes.com/documentation/flex-container/',
			),
			'heading' => array(
				'title' => __( 'Heading', 'athemes-blocks' ),
				'description' => __( 'Add prominent headings to structure content sections effectively', 'athemes-blocks' ),
				'documentation' => 'https://athemes.com/documentation/heading/',
			),
			'button' => array(
				'title' => __( 'Button', 'athemes-blocks' ),
				'description' => __( 'Create engaging call-to-action buttons with customizable styles and link options', 'athemes-blocks' ),
				'documentation' => 'https://athemes.com/documentation/button/',
			),
			'text' => array(
				'title' => __( 'Text', 'athemes-blocks' ),
				'description' => __( 'Insert and format text content to convey information or messages clearly', 'athemes-blocks' ),
				'documentation' => 'https://athemes.com/documentation/text/',
			),
			'icon' => array(
				'title' => __( 'Icon', 'athemes-blocks' ),
				'description' => __( 'Add icons to visually highlight key points, features, or calls to action', 'athemes-blocks' ),
				'documentation' => 'https://athemes.com/documentation/icon/',
			),
			'image' => array(
				'title' => __( 'Image', 'athemes-blocks' ),
				'description' => __( 'Showcase images to visually represent products, services, or content sections', 'athemes-blocks' ),
				'documentation' => 'https://athemes.com/documentation/image/',
			),
			'testimonials' => array(
				'title' => __( 'Testimonial', 'athemes-blocks' ),
				'description' => __( 'Display customer feedback, reviews, or quotes to build social proof', 'athemes-blocks' ),
				'documentation' => 'https://athemes.com/documentation/testimonials/',
			),
			'google-maps' => array(
				'title' => __( 'Google Maps', 'athemes-blocks' ),
				'description' => __( 'Integrate interactive maps to pinpoint locations or provide directions', 'athemes-blocks' ),
				'documentation' => 'https://athemes.com/documentation/google-maps/',
			),
			'post-grid' => array(
				'title' => __( 'Post Grid', 'athemes-blocks' ),
				'description' => __( 'Display multiple posts in a structured grid layout with various styling options', 'athemes-blocks' ),
				'documentation' => 'https://athemes.com/documentation/post-grid/',
			),
			'taxonomy-grid' => array(
				'title' => __( 'Taxonomy Grid', 'athemes-blocks' ),
				'description' => __( 'Arrange categories, tags, or terms in a visually organized grid layout', 'athemes-blocks' ),
				'documentation' => 'https://athemes.com/documentation/taxonomy-grid/',
			),
			'team-member' => array(
				'title' => __( 'Team Member', 'athemes-blocks' ),
				'description' => __( 'Highlight team members with a beautiful profile card', 'athemes-blocks' ),
				'documentation' => 'https://athemes.com/documentation/team-member/',
			),
		) );
	}

	/**
	 * Localize dashboard with dashboard settings.
	 * 
	 * @return void
	 */
	public function localize_dashboard_with_dashboard_settings(): void {
		$settings = get_option( 'athemes_blocks_dashboard_settings' );
		wp_localize_script( 'at-blocks-plugin-dashboard', 'athemesBlocksDashboardSettings', json_decode( $settings, true ) );
	}

	/**
	 * Localize dashboard with suggested products.
	 * 
	 * @return void
	 */
	public function localize_dashboard_with_suggested_products(): void {

		/**
		 * Filter the suggested products for the dashboard.
		 * 
		 * @param array $suggested_products The suggested products.
		 * @return array
		 */
		$suggested_products = apply_filters( 'athemes_blocks_dashboard_suggested_products', array(
			'wpforms' => array(
				'title' => __( 'WPForms', 'athemes-blocks' ),
				'image' => ATHEMES_BLOCKS_URL . 'assets/img/dashboard/wpforms-logo.png',
				'plugin_slug' => 'wpforms-lite/wpforms.php',
				'plugin_status' => PluginInstallerHelper::get_plugin_status( 'wpforms-lite/wpforms.php' ),
			),
			'merchant' => array(
				'title' => __( 'Merchant', 'athemes-blocks' ),
				'image' => ATHEMES_BLOCKS_URL . 'assets/img/dashboard/merchant-logo.png',
				'plugin_slug' => 'merchant/merchant.php',
				'plugin_status' => PluginInstallerHelper::get_plugin_status( 'merchant/merchant.php' ),
			),
		) );
		
		wp_localize_script( 'at-blocks-plugin-dashboard', 'athemesBlocksSuggestedProducts', $suggested_products );
	}

	/**
	 * Localize dashboard with quick links.
	 * 
	 * @return void
	 */
	public function localize_dashboard_with_quick_links(): void {
		wp_localize_script( 'at-blocks-plugin-dashboard', 'athemesBlocksQuickLinks', array(
			'priority-support' => array(
				'title' => __( 'Priority support', 'athemes-blocks' ),
				'description' => __( 'We aim to answer all priority support requests within 2-3 hours.', 'athemes-blocks' ),
				'link_label' => __( 'Get Premium Support', 'athemes-blocks' ),
				'link_url' => 'https://athemes.com/priority-support/',
				'link_style' => 'underline',
				'is_active' => true,
			),
			'leave-a-review' => array(
				'title' => __( 'Leave a review', 'athemes-blocks' ),
				'description' => __( 'It makes us happy to hear from our users. We would appreciate a review.', 'athemes-blocks' ),
				'link_label' => __( 'Submit a Review', 'athemes-blocks' ),
				'link_url' => 'https://wordpress.org/support/plugin/athemes-blocks/reviews/',
				'link_style' => 'button',
			),
			'knowledge-base' => array(
				'title' => __( 'Knowledge base', 'athemes-blocks' ),
				'description' => __( 'Browse documentation, reference material, and tutorials for Botiga Theme.', 'athemes-blocks' ),
				'link_label' => __( 'View All', 'athemes-blocks' ),
				'link_url' => 'https://athemes.com/knowledge-base/',
				'link_style' => 'button',
			),
			'have-an-idea-feedback' => array(
				'title' => __( 'Have an idea or feedback?', 'athemes-blocks' ),
				'description' => __( 'Browse documentation, reference material, and tutorials for Botiga Theme.', 'athemes-blocks' ),
				'link_label' => __( 'Suggest an Idea', 'athemes-blocks' ),
				'link_url' => 'https://athemes.com/have-an-idea-feedback/',
				'link_style' => 'underline',
			),
			'join-facebook-community' => array(
				'title' => __( 'Join our Facebook community', 'athemes-blocks' ),
				'description' => __( 'Want to share your awesome project or just say hi? Join our wonderful community!', 'athemes-blocks' ),
				'link_label' => __( 'Join Now', 'athemes-blocks' ),
				'link_url' => 'https://www.facebook.com/groups/athemesblocks/',
				'link_style' => 'button',
			),
		) );
	}
}