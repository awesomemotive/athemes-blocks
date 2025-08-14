<?php

/**
 * Plugin installer loader.
 * 
 * @package aThemes Blocks
 */

namespace AThemes_Blocks\Services\PluginInstaller;

use AThemes_Blocks\Services\PluginInstaller\Rest\PluginInstallerOperationsRoute;
use AThemes_Blocks\Services\PluginInstaller\Rest\PluginInstallationStatusRoute;

class Loader {

    /**
     * Constructor.
     * 
     * @return void
     */
    public function __construct() {
        new PluginInstallerOperationsRoute();
        new PluginInstallationStatusRoute();
    }
}