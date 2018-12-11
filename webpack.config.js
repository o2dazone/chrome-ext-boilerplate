const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'chrome-extension'),
    filename: 'index.js'
  }
};