const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: {
    app: "./assets/js/script.js",
    events: "./assets/js/event.js",
    schedule: "./assets/js/schedule.js",
    tickets: "./assets/js/tickets.js"
  },
    output: {
      filename: "[name].bundle.js",
      path: __dirname + "/dist",
    },
    module: {
      rules: [
        {
          test: /\.jpeg$/i,
          use: [
            {
              loader: 'file-loader'
            }
          ]
        }
      ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new BundleAnalyzerPlugin({
          analyzerMode: "static", // outputs HTML file to dist folder
        })
    ],
    mode: 'development'
  };