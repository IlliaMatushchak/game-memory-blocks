const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  resolve: {
    extensions: [".ts", ".js"], // щоб не писати .js у імпортах
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  devServer: {
    static: "./dist",
    open: true,
    port: 3000,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "src/styles.css", to: "styles.css" }],
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "src/assets/images", to: "images" }],
    }),
  ],
};
