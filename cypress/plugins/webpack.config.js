module.exports = {
  resolve: {
    extensions: ['.ts', '.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              'flow',
              ['env', {
                "targets": {
                  "browsers": ["last 2 versions", "Chrome >= 50"]
                }
              }],
              'react'
            ],
            plugins: [
              'transform-class-properties'
            ]
          },
        }],
      },
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          },
        }],
      },
    ],
  },
}
