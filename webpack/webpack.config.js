const { merge } = require("webpack-merge");
const webpackCommonConfig = require("./webpack.common");

module.exports = (envVar) => {
  const { env } = envVar;
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(webpackCommonConfig, envConfig);
  return config;
};
