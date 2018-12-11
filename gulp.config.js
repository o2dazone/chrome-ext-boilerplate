module.exports = {
  build: Date.now(),
  scripts: {
    paths: {
      all: './scripts/*.js',
      entry: './scripts/index.js',
      output: {
        dev: 'chrome-extension',
        prod: 'chrome-extension'
      }
    }
  },
  ports: {
    express: 8080,
    livereload: 35729,
    expressRoot: 'chrome-extension'
  },
  webpack: {
    cache: true,
    output: {
      filename: 'index.js'
    }
  },
  connect: {
    port: 8080,
    root: './'
  },
  liveReload: {
    port: 35729
  }
};