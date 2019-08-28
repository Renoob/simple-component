const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.config.base');

module.exports = merge(base, {
    mode: 'development',
    devtool: "eval-source-map",
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        hot: true
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
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
                'style-loader',
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
                'style-loader',
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
                'style-loader',
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
                'style-loader',
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development')
			}
		})
    ],
})