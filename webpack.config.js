const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd', // This allows your component to be used in different module systems
    library: 'YourComponentName' // Replace with your component's name
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["css-loader"],
      },
    ]
  }
};