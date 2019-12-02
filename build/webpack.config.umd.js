const merge = require('webpack-merge')
const commonConfig = require('./webpack.config.common')
const path = require('path')
const argv = require('yargs').argv
const minify = Boolean(argv.minify)
const mode = minify ? 'production' : 'development'
const devtool = minify ? 'source-map' : undefined
const filename = minify ? 'hf-upload.min.js' : 'hf-upload.js'

const umdConfig = {
  entry: './src/index.ts',
  output: {
    path: path.resolve('./dist'),
    filename,
    libraryTarget: 'umd'
  },
  mode,
  devtool,
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
}

module.exports = merge(commonConfig, umdConfig)
