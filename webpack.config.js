const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/script.js',
    mode: 'development',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9001,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: "./index.html"
    }),
        new CopyPlugin({
            patterns: [
                // { from: "./src/styles", to: "css" },
                { from: "./src/static/fonts", to: "fonts" },
                { from: "./src/static/img", to: "img" },
                { from: "./src/jquery-3.6.2.min.js", to: "./" },
                { from: "./node_modules/slick-carousel/slick/slick.css", to: "css" },
                { from: "./node_modules/slick-carousel/slick/slick-theme.css", to: "css" },
                { from: "./node_modules/hover.css/css/hover-min.css", to: "css" },
                { from: "./node_modules/animate.css/animate.min.css", to: "css" },
                { from: "./node_modules/magnific-popup/dist/magnific-popup.css", to: "css" },
                { from: "./node_modules/slick-carousel/slick/slick.min.js", to: "js" },
                { from: "./node_modules/wowjs/dist/wow.min.js", to: "js" },
                { from: "./node_modules/magnific-popup/dist/jquery.magnific-popup.min.js", to: "js" },
            ],
        }),
    ],
};