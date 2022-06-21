const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const rootPath = path.resolve(__dirname, "..");
const srcPath = path.resolve(__dirname, "..", "src");
const distPath = path.resolve(__dirname, "..", "dist");

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: distPath,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '...'],
        alias: {
            "@utils": path.resolve(__dirname, "utils/"),
            "@pages": path.resolve(srcPath, "pages"),
            "@components": path.resolve(srcPath, "components"),
            handlebars: "handlebars/dist/handlebars.min.js",
        },
        fallback: {
            "fs": false
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve(rootPath, "tsconfig.json"),
                        },
                    },
                ],
                exclude: /(node_modules)/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(srcPath, "index.html"),
            filename: path.resolve(distPath, "index.html"),
        }),
    ]
};

// node ./node_modules/.bin/webpack