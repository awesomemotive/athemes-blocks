<?php

/**
 * Notifications Sidebar.
 * This class is responsible for creating the notifications sidebar.
 * 
 * @package AThemes Blocks
 */

namespace AThemes_Blocks\Admin\PluginDashboard;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class NotificationsSidebar {

    /**
     * Notifications.
     * 
     * @var array<object>
     */
    private $notifications = array();

    /**
     * Notifications pro.
     * 
     * @var array<object>
     */
    private $notifications_pro = array();

    /**
     * Notifications tabs. 
     * 
     * @var bool
     */
    private $display_tabs = false;

    /**
     * Constructor.
     * 
     */
    public function __construct() {

        /**
         * Filter the notifications pro.
         * This filter is used to add notifications for the pro version of the plugin.
         * 
         * @param array<object> $notifications_pro
         * @return array<object>
         */
        $this->notifications_pro = apply_filters( 'athemes_blocks_notifications_pro', array() );
        
        // Only fetch notifications if we're on the plugin dashboard page.
        if ( $this->is_plugin_dashboard_page() ) {
            $this->fetch_notifications();
        }

        $this->init_hooks();
    }

    /**
     * Check if current screen is the aThemes Blocks plugin dashboard.
     *
     * @return bool
     */
    private function is_plugin_dashboard_page(): bool {
        global $pagenow;
        return $pagenow === 'admin.php' && isset( $_GET['page'] ) && sanitize_key( $_GET['page'] ) === 'at-blocks';
    }

    /**
     * Init hooks.
     * 
     * @return void
     */
    public function init_hooks(): void {
        add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
        add_action( 'athemes_blocks_after_render_menu_page', array( $this, 'render' ) );
        add_action( 'admin_footer', array( $this, 'add_internal_script' ) );

        add_action('wp_ajax_atb_dashboard_notifications_read', array( $this, 'ajax_notifications_read_handler' ));
    }

    /**
     * Ajax notifications read handler.
     * 
     * @return void
     */
    public function ajax_notifications_read_handler(): void {
        check_ajax_referer( 'atb_dashboard_notifications_read', 'nonce' );

        $latest_notification_date = ( isset( $_POST[ 'latest_notification_date' ] ) ) ? sanitize_text_field( wp_unslash( $_POST[ 'latest_notification_date' ] ) ) : false;
        update_user_meta( get_current_user_id(), 'atb_dashboard_notifications_latest_read', $latest_notification_date );

        wp_send_json_success();
    }

    /**
     * Enqueue scripts.
     * 
     * @return void
     */
    public function enqueue_scripts(): void {
        if ( ! $this->is_plugin_dashboard_page() ) {
            return;
        }
        
        wp_enqueue_style( 'athemes-blocks-dashboard-sidebar-notifications', ATHEMES_BLOCKS_URL . 'assets/css/admin/plugin-dashboard/sidebar-notifications.css', array(), ATHEMES_BLOCKS_VERSION );
    }

    /**
     * Add internal script.
     * 
     * @return void
     */
    public function add_internal_script(): void {
        if ( ! $this->is_plugin_dashboard_page() ) {
            return;
        }
        
        ?>
        <script>
            (function($){
                // Notifications Sidebar
                const $notificationsSidebar = $( '.atb-dashboard-notifications-sidebar' );
                if( $notificationsSidebar.length ) {
                
                    // Open/Toggle Sidebar
                    $( document ).on( 'click', '.atb-dashboard__top-bar-item-notification', function(e){
                        e.preventDefault();

                        const latestNotificationDate = $notificationsSidebar.find( '.atb-dashboard-notification:first-child .atb-dashboard-notification-date' ).data( 'raw-date' );

                        $notificationsSidebar.toggleClass( 'opened' );

                        if( ! $( this ).hasClass( 'read' ) ) {
                            $.post( window.athemesBlocksGeneralData.ajax_url, {
                                action: 'atb_dashboard_notifications_read',
                                latest_notification_date: latestNotificationDate,
                                nonce: window.athemesBlocksGeneralData.nonce,
                            }, function ( response ) {
                                if( response.success ) {
                                    setTimeout(function(){
                                        $( '.atb-dashboard__top-bar-item-notification' ).addClass( 'read' );
                                    }, 2000);
                                }
                            });
                        }
                    } );

                    $( window ).on( 'scroll', function(){
                        if( window.pageYOffset > 60 ) {
                            $notificationsSidebar.addClass( 'closing' );
                            setTimeout(function(){
                                $notificationsSidebar.removeClass( 'opened' );
                                $notificationsSidebar.removeClass( 'closing' );
                            }, 300);
                        }
                    } );

                    // Close Sidebar
                    $( '.atb-dashboard-notifications-sidebar-close' ).on( 'click', function(e){
                        e.preventDefault();

                        $notificationsSidebar.addClass( 'closing' );
                        setTimeout(function(){
                            $notificationsSidebar.removeClass( 'opened' );
                            $notificationsSidebar.removeClass( 'closing' );
                        }, 300);
                    } );

                }
            })(jQuery);
        </script>
        <?php
    }

    /**
     * Fetch notifications.
     * 
     * @return array<object>
     */
    private function fetch_notifications(): array {
        $cache_key = 'athemes_blocks_notifications';
        
        // Try to get cached notifications first.
        $cached_notifications = get_transient( $cache_key );
        if ( $cached_notifications !== false && is_array( $cached_notifications ) ) {
            $this->notifications = $cached_notifications;
            return $this->notifications;
        }

        // Fetch fresh notifications.
        $response = wp_remote_get( 'https://athemes.com/wp-json/wp/v2/notifications?theme=7112&per_page=3' );
        
        if ( ! is_wp_error( $response ) && wp_remote_retrieve_response_code( $response ) === 200 ) {
            $decoded_response = json_decode( wp_remote_retrieve_body( $response ) );
            $this->notifications = is_array( $decoded_response ) ? $decoded_response : array();
        } else {
            $this->notifications = array();
        }

        // Cache the result for 1 hour if successful, 15 minutes if empty to prevent repeated failed requests.
        if ( ! empty( $this->notifications ) ) {
            set_transient( $cache_key, $this->notifications, HOUR_IN_SECONDS );
        } else {
            set_transient( $cache_key, array(), 15 * MINUTE_IN_SECONDS );
        }
        
        return $this->notifications;
    }

    /**
     * Check if the latest notification is read.
     * 
     * @return bool
     */
    public function is_latest_notification_read(): bool {
        if( empty( $this->notifications ) ) {
            return false;
        }
        
        $user_id                     = get_current_user_id();
        $user_read_meta              = get_user_meta( $user_id, 'atb_dashboard_notifications_latest_read', true );

        $last_notification_date      = strtotime( is_string( $this->notifications[0]->post_date ) ? $this->notifications[0]->post_date : '' );
        $last_notification_date_ondb = $user_read_meta ? strtotime( $user_read_meta ) : false;

        if( ! $last_notification_date_ondb ) {
            return false;
        }

        if( $last_notification_date > $last_notification_date_ondb ) {
            return false;
        }

        return true;
    }

    /**
     * Render the sidebar with notifications..
     * 
     * @return void
     */
    public function render(): void {
        if ( ! $this->is_plugin_dashboard_page() || empty( $this->notifications ) ) {
            return;
        }

        $notification_read = $this->is_latest_notification_read();

        ?>
        <div class="atb-dashboard-notifications-sidebar">
            <a href="#" class="atb-dashboard-notifications-sidebar-close" title="<?php echo esc_attr__( 'Close the sidebar', 'botiga' ); ?>">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4584 4.54038L12.4597 3.54163L8.50008 7.50121L4.5405 3.54163L3.54175 4.54038L7.50133 8.49996L3.54175 12.4595L4.5405 13.4583L8.50008 9.49871L12.4597 13.4583L13.4584 12.4595L9.49883 8.49996L13.4584 4.54038Z" fill="black"/>
                </svg>
            </a>
            <div class="atb-dashboard-notifications-sidebar-inner">

                <div class="atb-dashboard-notifications-sidebar-header">
                    <div class="atb-dashboard-notifications-sidebar-header-icon">
                        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9441 20.5818C12.3228 20.8497 12.7752 20.9936 13.2391 20.9937L11.9441 20.5818ZM11.9441 20.5818C11.6044 20.3416 11.3391 20.0122 11.1764 19.6313M11.9441 20.5818L11.1764 19.6313M11.1764 19.6313H15.3018C15.1392 20.0122 14.8738 20.3416 14.5341 20.5818C14.1554 20.8497 13.703 20.9936 13.2391 20.9937L11.1764 19.6313ZM5.42653 19.6313H5.4266H9.33118C9.5281 20.5037 10.0116 21.2861 10.7057 21.8526C11.4209 22.4365 12.3158 22.7554 13.2391 22.7554C14.1624 22.7554 15.0573 22.4365 15.7725 21.8526C16.4666 21.2861 16.9501 20.5037 17.147 19.6313H21.0516H21.0517C21.344 19.6309 21.631 19.5534 21.8838 19.4068C22.1366 19.2601 22.3462 19.0494 22.4916 18.7959C22.637 18.5424 22.713 18.255 22.712 17.9628C22.7109 17.6705 22.6329 17.3837 22.4856 17.1313C21.9553 16.2176 21.1516 13.5951 21.1516 10.1562C21.1516 8.05772 20.318 6.04515 18.8341 4.56127C17.3502 3.07739 15.3376 2.24375 13.2391 2.24375C11.1406 2.24375 9.128 3.07739 7.64412 4.56127C6.16024 6.04515 5.3266 8.05772 5.3266 10.1562C5.3266 13.5963 4.52185 16.2179 3.99149 17.1314L4.07797 17.1816L3.99158 17.1313C3.84432 17.3838 3.76625 17.6707 3.76524 17.963C3.76424 18.2554 3.84034 18.5428 3.98587 18.7964C4.1314 19.0499 4.34121 19.2606 4.59414 19.4072C4.84708 19.5537 5.13419 19.631 5.42653 19.6313ZM5.59668 17.8687C6.33498 16.4852 7.0891 13.5615 7.0891 10.1562C7.0891 8.52517 7.73705 6.96089 8.8904 5.80754C10.0437 4.65419 11.608 4.00625 13.2391 4.00625C14.8702 4.00625 16.4345 4.65419 17.5878 5.80754C18.7412 6.96089 19.3891 8.52517 19.3891 10.1562C19.3891 13.5589 20.1415 16.4827 20.8815 17.8687H5.59668Z" fill="#3858E9" stroke="#3858E9" stroke-width="0.2"/>
                        </svg>
                    </div>
                    <div class="atb-dashboard-notifications-sidebar-header-content">
                        <h3>
                            <?php 
                            if( $notification_read ) {
                                echo esc_html__( 'Latest News', 'botiga' );
                            } else {
                                echo esc_html__( 'New Update', 'botiga' );
                            } ?>
                        </h3>
                        <p><?php echo esc_html__( 'Check the latest news from Botiga', 'botiga' ); ?></p>
                    </div>
                </div>
                <?php if( $this->display_tabs ) : ?>
                    <div class="atb-dashboard-notifications-sidebar-tabs">
                        <nav class="atb-dashboard-tabs-nav atb-dashboard-tabs-nav-no-negative-margin" data-tab-wrapper-id="notifications-sidebar">
                            <ul>
                                <li class="atb-dashboard-tabs-nav-item active">
                                    <a href="#" class="atb-dashboard-tabs-nav-link" data-tab-to="notifications-sidebar-botiga">
                                        <?php echo esc_html__( 'Botiga', 'botiga' ); ?>
                                    </a>
                                </li>
                                <li class="atb-dashboard-tabs-nav-item">
                                    <a href="#" class="atb-dashboard-tabs-nav-link" data-tab-to="notifications-sidebar-botiga-pro">
                                        <?php echo esc_html__( 'Botiga Pro', 'botiga' ); ?>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                <?php endif; ?>
                <div class="atb-dashboard-notifications-sidebar-body atb-dashboard-tab-content-wrapper" data-tab-wrapper-id="notifications-sidebar">
                    <div class="atb-dashboard-tab-content active" data-tab-content-id="notifications-sidebar-botiga">
                        <?php 
                        
                        if( ! empty( $this->notifications ) ) : 
                            $display_version = false;

                            ?>

                            <?php foreach( $this->notifications as $notification ) : 
                                $date    = isset( $notification->post_date ) ? $notification->post_date : false;
                                $version = isset( $notification->post_title ) ? $notification->post_title : false;
                                $content = isset( $notification->post_content ) ? $notification->post_content : false;
                                
                                ?>

                                <div class="atb-dashboard-notification">
                                    <?php if( $date ) : ?>
                                        <span class="atb-dashboard-notification-date" data-raw-date="<?php echo esc_attr( $date ); ?>">
                                            <?php echo esc_html( date_format( date_create( $date ), 'F j, Y' ) ); ?>
                                            <?php if( $display_version ) : ?>
                                                <span class="atb-dashboard-notification-version"><?php echo sprintf( '(%s)', $version ); ?></span>
                                            <?php endif; ?>
                                        </span>
                                    <?php endif; ?>
                                    <?php if( $content ) : ?>
                                        <div class="atb-dashboard-notification-content">
                                            <?php echo wp_kses_post( $content ); ?>
                                        </div>
                                    <?php endif; ?>
                                </div>
                            <?php 
                                $display_version = true;
                            endforeach; ?>

                        <?php else : ?>

                            <div class="atb-dashboard-notification">
                                <div class="atb-dashboard-notification-content">
                                    <p class="changelog-description"><?php echo esc_html__( 'No notifications found', 'botiga' ); ?></p>
                                </div>
                            </div>

                        <?php 
                        endif; ?>

                    </div>

                    <?php if( $this->display_tabs ) : ?>
                    <div class="atb-dashboard-tab-content" data-tab-content-id="notifications-sidebar-botiga-pro">
                        <?php 
                        
                        if( ! empty( $this->notifications_pro ) ) : 
                            $display_version = false;

                            ?>

                            <?php foreach( $this->notifications_pro as $notification ) : 
                                $date    = isset( $notification->post_date ) ? $notification->post_date : false;
                                $version = isset( $notification->post_title ) ? $notification->post_title : false;
                                $content = isset( $notification->post_content ) ? $notification->post_content : false;
                                
                                ?>

                                <div class="atb-dashboard-notification">
                                    <?php if( $date ) : ?>
                                        <span class="atb-dashboard-notification-date">
                                            <?php echo esc_html( date_format( date_create( $date ), 'F j, Y' ) ); ?>
                                            <?php if( $display_version ) : ?>
                                                <span class="atb-dashboard-notification-version"><?php echo sprintf( '(%s)', $version ); ?></span>
                                            <?php endif; ?>
                                        </span>
                                    <?php endif; ?>
                                    <?php if( $content ) : ?>
                                        <div class="atb-dashboard-notification-content">
                                            <?php echo wp_kses_post( $content ); ?>
                                        </div>
                                    <?php endif; ?>
                                </div>
                            <?php 
                                $display_version = true;
                            endforeach; ?>

                        <?php else : ?>

                            <div class="atb-dashboard-notification">
                                <div class="atb-dashboard-notification-content">
                                    <p class="changelog-description"><?php echo esc_html__( 'No notifications found', 'botiga' ); ?></p>
                                </div>
                            </div>

                        <?php 
                        endif; ?>

                    </div>
                    <?php endif; ?>

                </div>

            </div>
        </div>
        <?php
    }
}