module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/github-actions-demo/'
    : '/',
  productionSourceMap: false
}