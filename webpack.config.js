const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  watch: true,
  entry: path.join(__dirname, './client', 'src', 'index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './client', 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
};
