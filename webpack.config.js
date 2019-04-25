const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: './dist',
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true,
    inline: true,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:5000',
      'Access-Control-Allow-Headers': 'X-Requested-With',
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
