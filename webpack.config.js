module.exports = {
  entry: ["./client/client.js"],
  output: {
    path: "./app/assets/javascripts",
    filename: "client_bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
