const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebpackPlugin({
    template: "src/index.html",
    filename: "index.html"
});

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: "url-loader",
                options: { limit: false }
            },
            {
                test: /\.(js|jsx)/,
                exclude: /node_modules/,
                use: ["babel-loader", "eslint-loader"]
            }
        ]
    },
    plugins: [htmlPlugin],
    devServer: {
        compress: true,
        hot: true,
        liveReload: true,
        open: true
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts"]
    }
};
