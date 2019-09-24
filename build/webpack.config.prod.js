const merge = require("webpack-merge");
const base = require("./webpack.config.base");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const glob = require("glob");
// const PurgecssPlugin = require("purgecss-webpack-plugin");

module.exports = merge(base, {
    mode: "production",
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
    plugins: [
        // 清除无用 css
        // new PurgecssPlugin({
        //     paths: glob.sync(path.resolve(__dirname, "../components/**/*"), { nodir: true })
        // })
    ]
})