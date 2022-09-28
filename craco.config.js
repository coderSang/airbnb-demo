const path = require('path')
const CracoLessPlugin = require('craco-less');

const resolve = pathName => path.resolve(__dirname, pathName)

module.exports = {
  // less
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      "@": resolve('src'),
      // '@mui/styled-engine': '@mui/styled-engine-sc'
    },
  }
}