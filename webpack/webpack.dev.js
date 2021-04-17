const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
//configuration specific to dev enviroment.
module.exports = {
  mode: "development",
  devServer: {
    hot: true,
    opern: true,
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("devBot"),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
