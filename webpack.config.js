module.exports = {
  entry: "./app/App.jsx",
  output: {
    filename: "public/bundle.jsx"
  },
  module: {
    loaders: [
      {test: /\.jsx$/, loader: 'jsx-loader'}
    ]
  }
};