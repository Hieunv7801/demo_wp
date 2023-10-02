const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      //loading scss
      {
        test: /\.scss$/,
        use: [
          "style-loader", // Thêm CSS vào DOM thông qua thẻ <style>
          "css-loader", // Xử lý và import CSS
          "sass-loader", // Biên dịch SCSS thành CSS
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: /\.module\.css$/,
      },
      //loading css modules
      {
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      // loading image
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images", // Đưa các tệp ảnh đến thư mục 'images' trong thư mục đầu ra
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: "async", // Tách các module thứ cấp thành các bundle riêng biệt
    },
  },
  performance: {
    hints: process.env.NODE_ENV === "production" ? "warning" : false,
    maxAssetSize: 244 * 1024, // Kích thước tối đa của tệp bundle
    maxEntrypointSize: 244 * 1024, // Kích thước tối đa của entrypoint
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 8080,
  },
};
