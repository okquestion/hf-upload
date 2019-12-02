const path = require('path')
const argv = require('yargs').argv
const minify = Boolean(argv.minify)
const mode = minify ? 'production' : 'development'
const devtool = minify ? 'source-map' : undefined
const filename = minify ? 'hf-upload.min.js' : 'hf-upload.js'

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve('./dist'),
    filename,
    libraryTarget: 'umd'
  },
  mode,
  devtool,
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
          'eslint-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
}
