const { defineConfig } = require('@vue/cli-service')
//使用vant-start
const { VantResolver } = require('@vant/auto-import-resolver');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
//使用vant-end
module.exports = defineConfig({
  transpileDependencies: true,
  //使用vant-start
  configureWebpack: {
    plugins: [
      // 当 unplugin-vue-components 版本小于 0.26.0 时，使用以下写法
      // AutoImport({ resolvers: [VantResolver()] }),
      // Components({ resolvers: [VantResolver()] }),
      //当 unplugin-vue-components 版本大于等于 0.26.0 时，使用以下写法
      AutoImport.default({ resolvers: [VantResolver()] }),
      Components.default({ resolvers: [VantResolver()] }),
    ],
  },
  //使用vant-end
  //vue.config.js console控制台报错-start
  chainWebpack: (config) => {
    config.plugin('define').tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      })
      return definitions
    })
  },
  //vue.config.js console控制台报错-end
})
