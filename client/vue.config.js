module.exports = {
  pwa: {
    workboxPluginMode: 'InjectManifest',
    name: 'skeleton-client',
    msTileColor: '#062175',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: './src/sw.js',
      swDest: './mysw.js',
      
    }
  }
}