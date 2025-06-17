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
		add_action( 'admin_enqueue_scripts', array( $this, 'localize_dashboard_with_topbar_data' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'localize_dashboard_with_enabled_blocks' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'localize_dashboard_with_blocks_data' ) );
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
	 * Localize dashboard with topbar data.
	 * 
	 * @return void
	 */
	public function localize_dashboard_with_topbar_data(): void {
		wp_localize_script( 'at-blocks-plugin-dashboard', 'athemesBlocksTopBarData', array(
			'logo' => ATHEMES_BLOCKS_URL . 'assets/img/dashboard/athemes-logo.png',
			'version' => ATHEMES_BLOCKS_VERSION,
			'website_url' => 'https://athemes.com',
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
			'text' => array(
				'title' => __( 'Text', 'athemes-blocks' ),
				'description' => __( 'Add text blocks to your page', 'athemes-blocks' ),
				'documentation' => 'https://athemes.com/documentation/text/',
			),
			'image' => array(
				'title' => __( 'Image', 'athemes-blocks' ),
				'description' => __( 'Add image blocks to your page', 'athemes-blocks' ),
				'documentation' => 'https://athemes.com/documentation/image/',
			),
			'heading' => array(
				'title' => __( 'Heading', 'athemes-blocks' ),
				'description' => __( 'Add heading blocks to your page', 'athemes-blocks' ),
				'documentation' => 'https://athemes.com/documentation/heading/',
			),
			'button' => array(
				'title' => __( 'Button', 'athemes-blocks' ),
				'description' => __( 'Add button blocks to your page', 'athemes-blocks' ),
				'documentation' => 'https://athemes.com/documentation/button/',
			),
			'icon' => array(
				'title' => __( 'Icon', 'athemes-blocks' ),
				'description' => __( 'Add icon blocks to your page', 'athemes-blocks' ),
				'documentation' => 'https://athemes.com/documentation/icon/',
			),
			'testimonials' => array(
				'title' => __( 'Testimonials', 'athemes-blocks' ),
				'description' => __( 'Add testimonials blocks to your page', 'athemes-blocks' ),
				'documentation' => 'https://athemes.com/documentation/testimonials/',
			),
			'team-member' => array(
				'title' => __( 'Team Member', 'athemes-blocks' ),
				'description' => __( 'Add team member blocks to your page', 'athemes-blocks' ),
				'documentation' => 'https://athemes.com/documentation/team-member/',
			),
			'post-grid' => array(
				'title' => __( 'Post Grid', 'athemes-blocks' ),
				'description' => __( 'Add post grid blocks to your page', 'athemes-blocks' ),
				'documentation' => 'https://athemes.com/documentation/post-grid/',
			),
			'taxonomy-grid' => array(
				'title' => __( 'Taxonomy Grid', 'athemes-blocks' ),
				'description' => __( 'Add taxonomy grid blocks to your page', 'athemes-blocks' ),
				'documentation' => 'https://athemes.com/documentation/taxonomy-grid/',
			),
			'google-maps' => array(
				'title' => __( 'Google Maps', 'athemes-blocks' ),
				'description' => __( 'Add google maps blocks to your page', 'athemes-blocks' ),
				'documentation' => 'https://athemes.com/documentation/google-maps/',
			),
		) );
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
			'wp-mail-smtp' => array(
				'title' => __( 'WP Mail SMTP', 'athemes-blocks' ),
				'image' => ATHEMES_BLOCKS_URL . 'assets/img/dashboard/wp-mail-smtp-logo.png',
				'plugin_slug' => 'wp-mail-smtp/wp_mail_smtp.php',
				'plugin_status' => PluginInstallerHelper::get_plugin_status( 'wp-mail-smtp/wp_mail_smtp.php' ),
			),
			'easy-wp-smtp' => array(
				'title' => __( 'Easy WP SMTP', 'athemes-blocks' ),
				'image' => ATHEMES_BLOCKS_URL . 'assets/img/dashboard/easy-wp-smtp-logo.png',
				'plugin_slug' => 'easy-wp-smtp/easy-wp-smtp.php',
				'plugin_status' => PluginInstallerHelper::get_plugin_status( 'easy-wp-smtp/easy-wp-smtp.php' ),
			),
			'sugar-calendar' => array(
				'title' => __( 'Sugar Calendar', 'athemes-blocks' ),
				'image' => ATHEMES_BLOCKS_URL . 'assets/img/dashboard/sugar-calendar-logo.png',
				'plugin_slug' => 'sugar-calendar/sugar-calendar.php',
				'plugin_status' => PluginInstallerHelper::get_plugin_status( 'sugar-calendar/sugar-calendar.php' ),
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
				'title' => __( 'Priority Support', 'athemes-blocks' ),
				'description' => __( 'Get priority support for your website', 'athemes-blocks' ),
				'link_label' => __( 'Get Premium Support', 'athemes-blocks' ),
				'link_url' => 'https://athemes.com/priority-support/',
				'is_active' => true,
			),
			'leave-a-review' => array(
				'title' => __( 'Leave a Review', 'athemes-blocks' ),
				'description' => __( 'Leave a review for AThemes Blocks', 'athemes-blocks' ),
				'link_label' => __( 'Leave a Review', 'athemes-blocks' ),
				'link_url' => 'https://wordpress.org/support/plugin/athemes-blocks/reviews/',
			),
			'knowledge-base' => array(
				'title' => __( 'Knowledge Base', 'athemes-blocks' ),
				'description' => __( 'Find answers to your questions in our knowledge base', 'athemes-blocks' ),
				'link_label' => __( 'View Knowledge Base', 'athemes-blocks' ),
				'link_url' => 'https://athemes.com/knowledge-base/',
			),
			'have-an-idea-feedback' => array(
				'title' => __( 'Have an Idea or Feedback?', 'athemes-blocks' ),
				'description' => __( 'Let us know what you think about AThemes Blocks', 'athemes-blocks' ),
				'link_label' => __( 'Submit Feedback', 'athemes-blocks' ),
				'link_url' => 'https://athemes.com/have-an-idea-feedback/',
			),
			'join-facebook-community' => array(
				'title' => __( 'Join Our Facebook Community', 'athemes-blocks' ),
				'description' => __( 'Join our Facebook community to get support and stay updated', 'athemes-blocks' ),
				'link_label' => __( 'Join Our Facebook Community', 'athemes-blocks' ),
				'link_url' => 'https://www.facebook.com/groups/athemesblocks/',
			),
		) );
	}
}