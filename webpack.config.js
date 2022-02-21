const path = require('path');
const { merge } = require('webpack-merge');
const productionConfig = merge([
  {
    output: {

      publicPath: "/",

      publicPath: "/pastaria/",

    },
  },
]);


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {

    rules: [

      {

        test: /\.css$/i,

        use: ['style-loader', 'css-loader'],

      },
      {

        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: 'asset/resource',

      },
    ],

  },
};