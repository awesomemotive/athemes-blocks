<?php

/**
 * Settings loader.
 * 
 * @package aThemes Blocks
 */

namespace AThemes_Blocks\Services\Settings;

use AThemes_Blocks\Services\Settings\Rest\SaveSettingsRoute;

class Loader {

    /**
     * Constructor.
     * 
     * @return void
     */
    public function __construct() {
        new SaveSettingsRoute();
    }
}