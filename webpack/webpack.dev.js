const webpack = require("webpack");
//configuration specific to dev enviroment.
module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("devBot"),
    }),
  ],
};
