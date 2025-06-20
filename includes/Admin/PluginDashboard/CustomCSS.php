<?php
/**
 * Plugin Dashboard Custom CSS.
 * 
 * @package AThemes_Blocks
 */

namespace AThemes_Blocks\Admin\PluginDashboard;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class CustomCSS {
	
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
    public function init_hooks() {
        add_action( 'admin_head', array( $this, 'hide_notices' ) );
    }

	/**
	 * Hide notices.
	 * 
	 * @return void
	 */
	public function hide_notices() {
        ?>
        <style>
            body.toplevel_page_at-blocks {
                background-color: #F6F6F8;
            }
            body.toplevel_page_at-blocks #wpcontent {
                padding: 0;
            }

            body.toplevel_page_at-blocks #wpbody-content .notice,
            body.toplevel_page_at-blocks #wpbody-content div.updated,
            body.toplevel_page_at-blocks #wpbody-content div.error {
                display: none !important;
            }
        </style>
        <?php
    }
}