const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const sass = require('sass');
const path = require('path');
const fs = require('fs');
const { defaultMaxListeners } = require('events');

const isProduction = process.env.NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';

const hasReactFastRefresh = process.env.HOT === 'true' && ! isProduction;

// Plugin Dashboard.
const pluginDashboardConfig = {
    // ...defaultConfig,
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

module.exports = [pluginDashboardConfig];