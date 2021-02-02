const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000'
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/styles/variables.scss"`
      },
      scss: {
        additionalData: `@import "~@/assets/styles/variables.scss";`
      }
    }
  }
};
