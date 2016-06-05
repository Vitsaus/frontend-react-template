var path = require('path');
var stylelint = require('stylelint');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var merge = require('webpack-merge');
var config;

var common = {
    entry: {
        app: ['./app/main.js']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            { test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ },
            { test: /\.css$/, loaders: ['postcss'] }
        ],
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'], },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'autoprefixer-loader') },
            { test: /\.(png|jpg|gif)$/, loader: "url-loader?limit=5000&name=[name].[ext]" }
        ],
    },
    resolve: {
        extensions: [
            '', '.js', '.css'
        ]
    },
    plugins: [
        new ExtractTextPlugin('main.css', {
            allChunks: false
        }),
        new HtmlWebpackPlugin({
            template: 'html!./app/index.html',
            inject: 'body'
        })
    ],
    postcss: function () {
        return [stylelint({
            ignoreFiles: './app/css/vendor/*.css',
            rules: {
                'block-no-empty': true,
                'color-no-invalid-hex': true,
                'declaration-colon-space-after': 'always',
                'declaration-colon-space-before': 'never',
                'function-comma-space-after': 'always',
                'function-url-quotes': ['always', 'single'],
                'media-feature-colon-space-after': 'always',
                'media-feature-colon-space-before': 'never',
                'max-empty-lines': 2,
                'number-leading-zero': 'never',
                'number-no-trailing-zeros': true,
                'property-no-vendor-prefix': true,
                'selector-list-comma-newline-after': 'always-multi-line',
                'string-quotes': ['single'],
                'function-linear-gradient-no-nonstandard-direction': true,
                'indentation': 4,
                'color-hex-case': 'lower'
            }
        })];
    }
};

switch(process.env.npm_lifecycle_event) {
    case 'start':
        config = merge(common, {
            watchOptions: {
                // Delay the rebuild after the first change
                aggregateTimeout: 300,
                // Poll using interval (in ms, accepts boolean too)
                poll: 1000
            },
            devServer: {
                host: '0.0.0.0',
                port: 3000,
                contentBase: 'build/',
                historyApiFallback: true,
                hot: true,
                inline: true
            },
            devtool: 'source-map'
        });
        config.plugins.push(
            new webpack.HotModuleReplacementPlugin({
                multiStep: true
            })
        );
        break;
    case 'build':
        config = merge(common, {
            devtool: 'eval-source-map'
        });
        break;
    case 'build-min':
        config = merge(common, {
            devtool: 'eval-source-map'
        });
        config.plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                minimize: true,
                compress: {
                    warnings: false
                }
            })
        );
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"'
                }
            })
        );
        break;
    default:
        config = merge(common, {});
}

module.exports = config;
