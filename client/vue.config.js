module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    // Configure Webpack's dev server.
    // https://cli.vuejs.org/guide/cli-service.html
    devServer: {
      ...(process.env.API_BASE_URL
        ? // Proxy API endpoints to the production base URL.
        {
          proxy: {
            '^/api': {target: process.env.API_BASE_URL, logLevel: 'debug'},
          }
        }
        : // Proxy API endpoints a local mock API.
        {}),
      port: 3001
    },
  }
}
