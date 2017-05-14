// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

var path = require('path');

module.exports = {
  plugins: [
    // your custom plugins
  ],
  resolve: {
    alias: {
      'sc': path.join(__dirname, '..', 'src/index.js'),
    },
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ],
    loaders: [
       {
        test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.md$/,
        loader: "raw"
      }
      // add your custom loaders.
    ]
  },
};
