const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');
const fs = require('fs');

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
const copyPatterns = blockFolders.flatMap((folder) => [
    {
        from: path.join(blocksDir, folder, 'block.json'),
        to: path.join(__dirname, 'assets/js/blocks/', folder, 'block.json'),
    },
    {
        from: path.join(blocksDir, folder, 'render.php'),
        to: path.join(__dirname, 'assets/js/blocks/', folder, 'render.php'),
    },
    {
        from: path.join(__dirname, 'assets/js/blocks/', '', `style-${folder}.css`),
        to: path.join(__dirname, 'assets/js/blocks/', folder, `style-${folder}.css`),
    }
]);

// Delete specific files.
const deleteFiles = blockFolders.flatMap((folder) => [
    {
        from: path.join(__dirname, 'assets/js/blocks/', folder, 'style.css'),
        to: path.join(__dirname, 'assets/js/blocks/', folder, 'style.css'),
    },
    {
        from: path.join(__dirname, 'assets/js/blocks/', folder, 'style.scss'),
        to: path.join(__dirname, 'assets/js/blocks/', folder, 'style.scss'),
    }
]);

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
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: ['**/render.php'], // Deletes all render.php files
                verbose: true, // Logs deleted files
            }),
        ],
    },

    // SCSS Compilation Configuration
    {
        entry: {
            'Is': path.resolve(__dirname, 'assets/sass/block-editor.scss'),
        },
        output: {
            path: path.resolve(__dirname, 'assets/css/'),
        },
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
];
