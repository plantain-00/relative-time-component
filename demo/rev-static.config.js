module.exports = {
  inputFiles: [
    'demo/**/index.bundle.js',
    'demo/*.bundle.css',
    'demo/**/index.ejs.html'
  ],
  outputFiles: file => file.replace('.ejs', ''),
  ejsOptions: {
    rmWhitespace: true
  },
  sha: 256,
  customNewFileName: (filePath, fileString, md5String, baseName, extensionName) => baseName + '-' + md5String + extensionName
}
