const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
module.exports = {
  plugins: [new NodePolyfillPlugin()],
  entry: {
    demo: "./src/demo.tsx",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../static/js/"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        // exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "../images",
            },
          },
        ],
      },
      {
        // exclude: /node_modules/,
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  // pass all js files through Babel
  resolve: {
    extensions: ["*", ".tsx", ".ts", ".js", ".jsx"],
  },
  optimization: {
    minimize: false,
  },
  // devtool: "eval-source-map",
  mode: "development",
};
