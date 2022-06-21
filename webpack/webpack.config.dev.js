const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");
const devConfig = {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        historyApiFallback: true,
    },
};
module.exports = merge(common, devConfig);