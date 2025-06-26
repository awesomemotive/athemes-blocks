<?php

/**
 * Functions helper for blocks.
 * 
 * @package aThemes Blocks
 */

namespace AThemes_Blocks\Blocks\Helper;

class Functions {

    /**
     * Add animation markup to the wrapper attributes.
     * 
     * @param array<string, mixed> $wrapper_attributes The wrapper attributes.
     * @param array<string, mixed> $attributes The attributes.
     * @param array<string, mixed> $atts_defaults The default attributes.
     * 
     * @return array<string, mixed>
     */
    public static function add_animation_markup( $wrapper_attributes, $attributes, $atts_defaults ) {
        $html_classes = array();
        $html_attributes = array();

        $entrance_animation = Settings::get_inner_setting( 'animation', 'entranceAnimation', $attributes, $atts_defaults );
        $animation_duration = Settings::get_inner_setting( 'animation', 'animationDuration', $attributes, $atts_defaults );
        $animation_delay = Settings::get_inner_setting( 'animation', 'animationDelay', $attributes, $atts_defaults );

        if ( ! $entrance_animation || 'default' === $entrance_animation ) {
            return array(
                'classes' => $html_classes,
                'wrapper_attributes' => $html_attributes,
            );
        }

        $html_attributes['data-atb-animation'] = $entrance_animation;

        if ( $animation_duration ) {
            $html_classes[] = 'atb-animation-duration-' . $animation_duration;
        }

        if ( $animation_delay ) {
            $html_attributes['data-atb-animation-delay'] = $animation_delay . 'ms';
        }

        return array(
            'classes' => $html_classes,
            'wrapper_attributes' => $html_attributes,
        );
    }

    /**
     * Get the icon SVG.
     * 
     * @param array<string, mixed> $icon_data The icon data.
     * @return string The icon SVG.
     */
    public static function get_icon_svg( $icon_data ) {
        if ( empty( $icon_data ) ) {
            return '';
        }

        // Detect the icon library.
        $icon_library = $icon_data['library'];
        if ( $icon_library === 'all' ) {
            if ( strpos( $icon_data['icon'], 'fa-' ) !== false || strpos( $icon_data['icon'], 'fas-' ) !== false || strpos( $icon_data['icon'], '-brands' ) !== false ) {
                $icon_library = 'font-awesome';
            }

            if ( strpos( $icon_data['icon'], 'bx-' ) !== false || strpos( $icon_data['icon'], 'bxl-' ) !== false || strpos( $icon_data['icon'], 'bxs-' ) !== false ) {
                $icon_library = 'box-icons';
            }
        }

        // Get the icons list.
        if ( 'box-icons' === $icon_library ) {
            $icons_list = include( ATHEMES_BLOCKS_PATH . 'includes/Data/box-icons.php' );
        }

        if ( 'font-awesome' === $icon_library ) {
            $icons_list = include( ATHEMES_BLOCKS_PATH . 'includes/Data/font-awesome.php' );
        }
        
        // Get the icon name.
        $icon_name = $icon_data['icon'];

        if ( empty( $icons_list[$icon_name] ) ) {
            return '';
        }

        return $icons_list[$icon_name];
    }

    /**
     * Get enabled blocks default list.
     * 
     * @return array<string>
     */
    public static function get_enabled_blocks_default_list(): array {
        return array( 'flex-container', 'text', 'heading', 'button', 'icon', 'image', 'testimonials', 'team-member', 'post-grid', 'taxonomy-grid', 'google-maps' );
    }

    /**
     * Get the list of enabled blocks.
     * 
     * @return array<string>
     */
    public static function get_enabled_blocks_list(): array {
        $enabled_blocks = get_option( 'athemes_blocks_enabled_blocks', wp_json_encode( self::get_enabled_blocks_default_list() ) );

        if ( ! $enabled_blocks ) {
            return array();
        }

        $enabled_blocks_list = json_decode( $enabled_blocks, true );

        $blocks = array();
        foreach ( $enabled_blocks_list as $block ) {
            switch ( $block ) {
                case 'flex-container':
                    $blocks[] = 'FlexContainer';
                    break;

                case 'heading':
                    $blocks[] = 'Heading';
                    break;

                case 'text':
                    $blocks[] = 'Text';
                    break;

                case 'button':
                    $blocks[] = 'Button';
                    break;

                case 'icon':
                    $blocks[] = 'Icon';
                    break;

                case 'image':
                    $blocks[] = 'Image';
                    break;

                case 'testimonials':
                    $blocks[] = 'Testimonials';
                    break;

                case 'team':
                    $blocks[] = 'Team';
                    break;

                case 'team-member':
                    $blocks[] = 'TeamMember';
                    break;

                case 'post-grid':
                    $blocks[] = 'PostGrid';
                    break;

                case 'taxonomy-grid':
                    $blocks[] = 'TaxonomyGrid';
                    break;

                case 'google-maps':
                    $blocks[] = 'GoogleMaps';
                    break;
            }
        }

        return $blocks;
    }
}