const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const sass = require('sass');
const path = require('path');
const fs = require('fs');

// Custom plugin to delete files after copying
class DeleteAfterCopyPlugin {
    constructor(filesToDelete) {
        this.filesToDelete = filesToDelete;
    }

    apply(compiler) {
        compiler.hooks.afterEmit.tap('DeleteAfterCopyPlugin', (compilation) => {
            this.filesToDelete.forEach((file) => {
                if (fs.existsSync(file)) {
                    fs.unlinkSync(file);
                    console.log(`Deleted: ${file}`);
                }
            });
        });
    }
}

class AfterBuildPlugin {
    constructor(scssConfig) {
        this.scssConfig = scssConfig; // SCSS compilation configuration
    }

    apply(compiler) {
        compiler.hooks.afterEmit.tap('AfterBuildPlugin', (compilation) => {
            console.log('Build completed. Running SCSS compilation task...');

            // Compile SCSS files
            this.scssConfig.forEach((config) => {
                const { input, output } = config;
                this.compileScss(input, output);
            });
        });
    }

    compileScss(input, output) {
        try {
            const result = sass.compile(input, { style: 'compressed' });
            fs.writeFileSync(output, result.css);
            console.log(`Compiled: ${input} -> ${output}`);
        } catch (error) {
            console.error(`Failed to compile SCSS: ${input}`, error);
        }
    }
}

// Get all block directories inside ./assets/js/src/blocks/
const blocksDir = path.resolve(__dirname, 'assets/js/src/blocks/');
const blockFolders = fs.readdirSync(blocksDir).filter((folder) => 
    fs.statSync(path.join(blocksDir, folder)).isDirectory()
);

// Generate entry points dynamically.
const entries = blockFolders.reduce((acc, folder) => {
    acc[folder] = path.join(blocksDir, folder, 'index.js');
    return acc;
}, {});

// Generate copy patterns for block.json files.
const copyPatterns = blockFolders.flatMap((folder) => {
    const patterns = [
        {
            from: path.join(blocksDir, folder, 'block.json'),
            to: path.join(__dirname, 'assets/js/blocks/', folder, 'block.json'),
        },
        {
            from: path.join(blocksDir, folder, 'render.php'),
            to: path.join(__dirname, 'assets/js/blocks/', folder, 'render.php'),
        },
        {
            from: path.join(blocksDir, folder, 'attributes.php'),
            to: path.join(__dirname, 'assets/js/blocks/', folder, 'attributes.php'),
        }
    ];

    // Only add view.js if it exists
    const viewJsPath = path.join(blocksDir, folder, 'view.js');
    if (fs.existsSync(viewJsPath)) {
        patterns.push({
            from: viewJsPath,
            to: path.join(__dirname, 'assets/js/blocks/', folder, 'view.js'),
        });
    }

    return patterns;
});

const deleteFileTask = () => {
    const filePath = path.resolve(__dirname, 'build/style-container.css');
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`Deleted: ${filePath}`);
    }
};

module.exports = [
    // Blocks Configuration
    {
        ...defaultConfig,
        entry: {
            ...defaultConfig.entry(),
            ...entries,
        },
        output: {
            filename: '[name]/index.js',
            path: path.resolve(__dirname, 'assets/js/blocks/'),
        },
        plugins: [
            ...defaultConfig.plugins,
            new CopyWebpackPlugin({ patterns: copyPatterns }),
            new AfterBuildPlugin(
                blockFolders.flatMap((folder) => [
                    {
                        input: path.join(blocksDir, folder, 'style.scss'),
                        output: path.join(__dirname, 'assets/js/blocks/', folder, 'style.css'),
                    },
                    {
                        input: path.join(blocksDir, folder, 'editor.scss'),
                        output: path.join(__dirname, 'assets/js/blocks/', folder, 'editor.css'),
                    },
                ])
            ),            
        ],
    },

    // Global JS Compilation Configuration
    {
        mode: 'development',
        entry: {
            'at-blocks-block-editor': path.resolve(__dirname, 'assets/js/src/block-editor/block-editor.jsx'),
        },
        output: {
            path: path.resolve(__dirname, 'assets/js/block-editor/'),
            filename: '[name].js',
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@wordpress/babel-preset-default'],
                        },
                    },
                },
            ],
        },
    },
    {
        mode: 'development',
        entry: {
            'entrance-effects': path.resolve(__dirname, 'assets/js/src/animation/entrance-effects.js'),
        },
        output: {
            path: path.resolve(__dirname, 'assets/js/animation/'),
            filename: '[name].js',
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.js?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@wordpress/babel-preset-default'],
                        },
                    },
                },
            ],
        },
    },

    // Global SCSS Compilation Configuration
    {
        mode: 'development',
        entry: {
            'Is': path.resolve(__dirname, 'assets/sass/block-editor.scss'),
        },
        output: {
            path: path.resolve(__dirname, 'assets/css/'),
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
            new FixStyleOnlyEntriesPlugin(),
            new MiniCssExtractPlugin({
                filename: 'block-editor.css',
            }),
        ]
    },
    {
        mode: 'development',
        entry: {
            'Is': path.resolve(__dirname, 'assets/sass/blocks-common.scss'),
        },
        output: {
            path: path.resolve(__dirname, 'assets/css/'),
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
            new FixStyleOnlyEntriesPlugin(),
            new MiniCssExtractPlugin({
                filename: 'blocks-common.css',
            }),
        ]
    },

     // Copy Generated CSS Files Configuration
    //  {
    //     entry: {}, // No entry points needed for this task
    //     output: {
    //         path: path.resolve(__dirname, 'assets/js/blocks/'),
    //     },
    //     plugins: [
    //         new CopyWebpackPlugin({
    //             patterns: blockFolders.flatMap((folder) => [
    //                 {
    //                     from: path.join(__dirname, 'assets/js/blocks/', './', `style-${folder}.css`),
    //                     to: path.join(__dirname, 'assets/js/blocks/', folder, `style-${folder}.css`),
    //                 },
    //                 {
    //                     from: path.join(__dirname, 'assets/js/blocks/', './', `style-${folder}.css.map`),
    //                     to: path.join(__dirname, 'assets/js/blocks/', folder, `style-${folder}.css.map`),
    //                 },
    //             ])
    //         }),
    //          // Delete the origin file after copying
    //         new DeleteAfterCopyPlugin(
    //             blockFolders.flatMap((folder) => [
    //                 path.join(__dirname, 'assets/js/blocks/', './', `style-${folder}.css`),
    //                 path.join(__dirname, 'assets/js/blocks/', './', `style-${folder}.css.map`)
    //             ])
    //         ),
    //     ],
    // },

    // {
    //     entry: {
    //         'container': path.resolve(__dirname, 'assets/js/src/blocks/container/style.scss'),
    //         'heading': path.resolve(__dirname, 'assets/js/src/blocks/heading/style.scss'),
    //     },
    //     output: {
    //         path: path.resolve(__dirname, 'assets/js/blocks/'),
    //         filename: '[name]/[name].css', // Output CSS files directly
    //     },
    //     module: {
    //         rules: [
    //             {
    //                 test: /\.scss$/,
    //                 use: [
    //                     MiniCssExtractPlugin.loader,
    //                     'css-loader',
    //                     'sass-loader',
    //                 ],
    //             },
    //         ],
    //     },
    //     plugins: [
    //         new MiniCssExtractPlugin({
    //             filename: '[name].css', // Output CSS files
    //         }),
            
    //     ],
    // }

    // Modularized Swiper Configuration (Development)
    {
        mode: 'development',
        entry: {
            'modularized-swiper': path.resolve(__dirname, 'assets/js/src/vendor/modularized-swiper.js'),
        },
        output: {
            path: path.resolve(__dirname, 'assets/vendor/swiper/'),
            filename: '[name].js',
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@wordpress/babel-preset-default'],
                        },
                    },
                },
            ],
        },
    },

    // Modularized Swiper Configuration (Production)
    {
        mode: 'production',
        entry: {
            'modularized-swiper': path.resolve(__dirname, 'assets/js/src/vendor/modularized-swiper.js'),
        },
        output: {
            path: path.resolve(__dirname, 'assets/vendor/swiper/'),
            filename: '[name].min.js',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@wordpress/babel-preset-default'],
                        },
                    },
                },
            ],
        },
    },

    // Swiper SCSS Compilation Configuration
    {
        mode: 'development',
        entry: {
            'swiper-core': path.resolve(__dirname, 'node_modules/swiper/swiper.scss'),
            'swiper-autoplay': path.resolve(__dirname, 'node_modules/swiper/modules/autoplay.scss'),
            'swiper-navigation': path.resolve(__dirname, 'node_modules/swiper/modules/navigation.scss'),
            'swiper-pagination': path.resolve(__dirname, 'node_modules/swiper/modules/pagination.scss'),
        },
        output: {
            path: path.resolve(__dirname, 'assets/vendor/swiper/css/'),
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
            new FixStyleOnlyEntriesPlugin(),
            new MiniCssExtractPlugin({
                filename: '[name].css',
            }),
        ]
    },
];

