module.exports = {
  entry: ["./client/app.jsx"],
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
