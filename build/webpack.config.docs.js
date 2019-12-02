const path = require('path')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.config.common')

const docsConfig = {
  mode: 'production',
  entry: './index.tsx',
  output: {
    path: path.resolve('./docs'),
    filename: 'bundle.js'
  }
}

module.exports = merge(commonConfig, docsConfig)
