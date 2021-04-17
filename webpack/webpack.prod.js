const webpack = require("webpack");
//configuration specific to prod enviroment.
module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("devBot"),
    }),
  ],
};
