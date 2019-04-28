module.exports = {
  mode: "production", // "production" | "development" | "none"

  entry: {
    main: './main.js',
    polyfills: './polyfills.js',
    runtime: './runtime.js',
    scripts: './scripts.js',
    vendor: './vendor.js',
    styles: './styles.js'
  },

  output: {
    filename: '[name].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.js', '.json']
  }
};
