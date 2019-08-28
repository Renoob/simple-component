const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.config.base');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const glob = require('glob');
// const PurgecssPlugin = require('purgecss-webpack-plugin');

module.exports = merge(base, {
    mode: 'production',
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    priority: -20,
                    chunks: "all",
                    enforce: true
                }
            }
        },
        usedExports: true,
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path: path.resolve(__dirname, './postcss.config.js')
                        }
                    }
                }
            ]
        }, {
            test: /^(?!.*\.module).*\.(scss|sass)$/, // 普通模式
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path: path.resolve(__dirname, './postcss.config.js')
                        }
                    }
                },
                'sass-loader'
            ]
        }, {
            test: /^(.*\.module).*\.(scss|sass)$/, // css module模式
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[local]_[hash:base64:5]',
                        },
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path: path.resolve(__dirname, './postcss.config.js')
                        }
                    }
                },
                'sass-loader'
            ]
        }, {
            test: /^(?!.*\.module).*\.less$/, // 普通模式
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path: path.resolve(__dirname, './postcss.config.js')
                        }
                    }
                },
                'less-loader'
            ]
        }, {
            test: /^(.*\.module).*\.less$/, // css module模式
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[local]_[hash:base64:5]',
                        },
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path: path.resolve(__dirname, './postcss.config.js')
                        }
                    }
                },
                'less-loader'
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[chunkhash:5].css'
        }),
        // 清除无用 css
        // new PurgecssPlugin({
        //     paths: glob.sync(path.resolve(__dirname, '../src/**/*'), { nodir: true })
        // })
    ]
})