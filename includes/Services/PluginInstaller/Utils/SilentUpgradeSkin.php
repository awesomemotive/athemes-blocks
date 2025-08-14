<?php

/**
 * Silent Upgrader Skin.
 * The main purpose of this class is to suppress the output of the upgrader.
 * 
 * @package aThemes Blocks
 */

namespace AThemes_Blocks\Services\PluginInstaller\Utils;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class SilentUpgradeSkin extends \WP_Upgrader_Skin {
    public function header(): void {}
    public function footer(): void {}
    public function error( $errors ): void {}
    public function feedback( $feedback, ...$args ): void {}
}