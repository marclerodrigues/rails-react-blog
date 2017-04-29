module.exports = {
  config: 'config/webpack',
  entry: 'packs',
  output: 'public',
  manifest: 'manifest.json',
  node_modules: 'node_modules',
  source: 'app/javascript',
  extensions:
    [
      '.coffee',
      '.js',
      '.jsx',
      '.sass',
      '.scss',
      '.css',
      '.png',
      '.svg',
      '.gif',
      '.jpeg',
      '.jpg'
    ]
}
