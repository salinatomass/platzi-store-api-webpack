const path = require("path");
const nodeExternals = require("webpack-node-externals");

const { NODE_ENV, PORT } = process.env;

/** @type {import('webpack').Configuration} */
module.exports = {
  name: "express-server",
  entry: "./src/index.ts",
  target: "node",
  mode: NODE_ENV,
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(ts)$/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
};
