const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');
const fs = require('fs');

const isProduction = process.env.NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';

// Get all block directories inside ./assets/js/src/blocks/
const blocksDir = path.resolve(__dirname, 'assets/js/src/blocks/');
const blockFolders = fs.readdirSync(blocksDir).filter((folder) => 
    fs.statSync(path.join(blocksDir, folder)).isDirectory()
);

// Generate copy patterns for block.json files.
const copyPatterns = blockFolders.flatMap((folder) => {
    const patterns = [
        {
            from: path.join(blocksDir, folder, 'attributes.php'),
            to: path.join(__dirname, 'build/blocks/', folder, 'attributes.php'),
        }
    ];

    return patterns;
});

let moduleExports = [];

// Blocks Configuration.
const blocksConfig = {
    ...defaultConfig,
    plugins: [
        ...defaultConfig.plugins,
        new CopyWebpackPlugin({ patterns: copyPatterns }),
    ],
};

// Global JS Compilation Configuration.
const globalJsConfig = {
    mode: mode,
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
};

// Extra blocks JS scripts.
const extraBlocksJsConfig = {
    mode: mode,
    entry: {
        'entrance-effects': path.resolve(__dirname, 'assets/js/src/animation/entrance-effects.js'),
        'pagination': path.resolve(__dirname, 'assets/js/src/pagination/pagination.js'),
        'ajax-add-to-cart': path.resolve(__dirname, 'assets/js/src/woocommerce/ajax-add-to-cart.js'),
    },
    output: {
        path: path.resolve(__dirname, 'assets/js/'),
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
};

// Block Editor Styles.
const blockEditorStylesConfig = {
    mode: mode,
    entry: {
        'block-editor': path.resolve(__dirname, 'assets/sass/block-editor.scss'),
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
};

// Blocks Common Styles.
const blocksCommonStylesConfig = {
    mode: mode,
    entry: {
        'blocks-common': path.resolve(__dirname, 'assets/sass/blocks-common.scss'),
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
}

// Swiper JS.
const swiperJsConfig = {
    mode: mode,
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
};

// Swiper CSS.
const swiperCssConfig = {
    mode: mode,
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
};

moduleExports.push(blocksConfig, globalJsConfig, extraBlocksJsConfig, blockEditorStylesConfig, blocksCommonStylesConfig, swiperJsConfig, swiperCssConfig);

module.exports = moduleExports;