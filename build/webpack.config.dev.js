const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const base = require("./webpack.config.base");

module.exports = merge(base, {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "../dist"),
        port: "3001",
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("development")
			}
		})
    ],
})