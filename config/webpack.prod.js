const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN;
const publicPath = process.env.PRODUCTION_CONTAINER_PUBLIC_PATH;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
