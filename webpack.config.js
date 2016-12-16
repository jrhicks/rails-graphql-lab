var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ["./client/client.js"],
  output: {
    path: "./app/assets/javascripts",
    filename: "client_bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!resolve-url!sass?outputStyle=expanded&sourceMap'),
        exclude: /node_modules/
      }

    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  postcss: [
    require('autoprefixer')
  ],

  plugins: [
      new ExtractTextPlugin('../stylesheets/app.css', {
      allChunks: true
  }),
  ]
};
