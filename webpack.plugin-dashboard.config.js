const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');
const fs = require('fs');

/**
 * Custom plugin to remove files from a specified folder based on file extensions.
 * Works similar to RemoveEmptyScriptsPlugin but is simpler and more focused.
 */
class RemoveFilesPlugin {
	constructor(options = {}) {
		this.folder = options.folder || '';
		this.extensions = options.extensions || [];
		this.patterns = options.patterns || []; // For complex patterns like .hot-update.js.map
		this.removedFiles = [];
	}

	apply(compiler) {
		compiler.hooks.done.tap('RemoveFilesPlugin', (stats) => {
			if (!this.folder || (!this.extensions.length && !this.patterns.length)) {
				return;
			}

			try {
				console.log(`RemoveFilesPlugin: Checking folder ${this.folder}`);
				console.log(`RemoveFilesPlugin: Looking for extensions: ${this.extensions.join(', ')}`);
				console.log(`RemoveFilesPlugin: Looking for patterns: ${this.patterns.join(', ')}`);
				
				if (fs.existsSync(this.folder)) {
					const files = fs.readdirSync(this.folder);
					console.log(`RemoveFilesPlugin: Found ${files.length} files in folder`);
					
					files.forEach(file => {
						const filePath = path.join(this.folder, file);
						const fileExt = path.extname(file);
						
						console.log(`RemoveFilesPlugin: Checking file ${file} with extension ${fileExt}`);
						
						let shouldRemove = false;
						
						// Check simple extensions (including multi-part extensions like .js.map)
						this.extensions.forEach(ext => {
							if (file.endsWith(ext)) {
								shouldRemove = true;
								console.log(`RemoveFilesPlugin: File ${file} ends with extension ${ext}`);
							}
						});
						
						// Check complex patterns
						this.patterns.forEach(pattern => {
							if (file.includes(pattern)) {
								shouldRemove = true;
								console.log(`RemoveFilesPlugin: File ${file} matches pattern ${pattern}`);
							}
						});
						
						if (shouldRemove) {
							if (fs.existsSync(filePath)) {
								fs.unlinkSync(filePath);
								this.removedFiles.push(file);
								console.log(`RemoveFilesPlugin: Removed file: ${file}`);
							}
						}
					});
					
					console.log(`RemoveFilesPlugin: Total files removed: ${this.removedFiles.length}`);
				} else {
					console.log(`RemoveFilesPlugin: Folder does not exist: ${this.folder}`);
				}
			} catch (error) {
				console.error('Error in RemoveFilesPlugin:', error);
			}
		});
	}
}

const isProduction = process.env.NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';

const hasReactFastRefresh = process.env.HOT === 'true' && ! isProduction;

// Plugin Dashboard.
const pluginDashboardConfig = {
    ...(hasReactFastRefresh ? {
        devServer: {
            ...defaultConfig.devServer,
            allowedHosts: 'all',
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            historyApiFallback: true,
            hot: true
        }
    } : {}),
    mode: mode,
    entry: {
        'dashboard': path.resolve(__dirname, 'assets/js/src/plugin-dashboard/dashboard.js'),
    },
    output: {
        path: path.resolve(__dirname, 'assets/js/plugin-dashboard/'),
        filename: '[name].js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@wordpress/babel-preset-default'],
                      plugins: hasReactFastRefresh ? [!isProduction && require.resolve('react-refresh/babel')].filter(Boolean) : [],
                    }
                  }
            },
        ],
    },
    plugins: [
        hasReactFastRefresh && new ReactRefreshWebpackPlugin(),
    ]
};

// Plugin Dashboard Styles.
const pluginDashboardStylesConfig = {
    mode: mode,
    entry: {
        'sidebar-notifications': path.resolve(__dirname, 'assets/sass/admin/plugin-dashboard/sidebar-notifications.scss'),
    },
    output: {
        path: path.resolve(__dirname, 'assets/css/admin/plugin-dashboard/'),
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new RemoveFilesPlugin({
            folder: path.resolve(__dirname, 'assets/css/admin/plugin-dashboard/'),
            extensions: ['.js', '.js.map'],
            patterns: ['.hot-update.js.map', '.hot-update.json', '.hot-update.js']
        }),
    ]
};

module.exports = [pluginDashboardConfig, pluginDashboardStylesConfig];