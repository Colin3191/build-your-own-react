const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              [
                "@babel/plugin-transform-react-jsx",
                { pragma: "Didact.createElement" },
              ],
            ],
          },
        },
      },
    ],
  },
};
