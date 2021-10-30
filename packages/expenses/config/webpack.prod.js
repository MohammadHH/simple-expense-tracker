const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");
const commonConfig = require("./webpack.common");
const publicPath = process.env.PRODUCTION_DEPOSITS_PUBLIC_PATH;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "expenses",
      filename: "remoteEntry.js",
      exposes: {
        "./ExpensesApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
