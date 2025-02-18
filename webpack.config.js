const CopyWebpackPlugin = require('copy-webpack-plugin');
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
const copyPatterns = blockFolders.map((folder) => ({
    from: path.join(blocksDir, folder, 'block.json'),
    to: path.join(__dirname, 'assets/js/blocks/', folder, 'block.json'),
}));

module.exports = [
    {
        ...defaultConfig,
        entry: {
            ...defaultConfig.entry(),
            ...entries,
        },
        output: {
            ...defaultConfig.output,
            filename: '[name]/index.js',
            path: path.resolve(__dirname, 'assets/js/blocks/'),
        },
        plugins: [
            ...defaultConfig.plugins,
            new CopyWebpackPlugin({ patterns: copyPatterns }),
        ],
    },
];
