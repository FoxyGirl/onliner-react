module.exports = function override(config, env) {
  const path = require('path')
  config.resolve.modules = [path.resolve('.')].concat(config.resolve.modules)
  return config
}
