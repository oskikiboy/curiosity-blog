module.exports = function(config, env) {
  config.loader('svg', () => {
    return {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?mimetype=image/svg+xml',
    }
  })
  config.loader('ttf|eot', () => {
    return {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
    }
  })
  config.loader('woff', () => {
    return {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&minetype=application/font-woff',
    }
  })
  return config
}
