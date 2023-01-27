const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'my-main.js',
    path: path.resolve(__dirname, 'build '),
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin({template: 'src/index.html'})],
  devServer: {
    static: {
        directory: path.join(__dirname, '/')
    }
},
};