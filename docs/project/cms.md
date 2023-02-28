# cms 后台模板

## 工程化

`commitizen`

`changelog`

`eslint`

## 插件

- **路由自动生成**
`Router.webpack.plugin`

- **构建资源自动上传cdn**
`Cdn.webpack.plugin`


**核心代码**

```js
const CdnWebpackPlugin = require('./plugins/Cdn.webpack.plugin')
const RouterWebpackPlugin = require('./plugins/Router.webpack.plugin')

module.exports = (api, projectOptions) => {
  // 获取项目配置参数 中的 cdn参数值
  let options = projectOptions.pluginOptions.infinite
  const enabledCdn = !!options.cdn

  api.registerCommand('infinite', {
    description: 'infinite plugin for vue cli 3',
    usage: 'vue-cli-service infinite',
    options: {}
  }, args => {})
  options.disabled || api.chainWebpack(config => {
    config.module.noParse(/^(vue|vue-router|vuex|axios|element-ui)$/)
    // 设置组件的路径别名
    config.resolve.alias.set('$components', require.resolve('vue-cli-plugin-infinite/components'))
    if (process.env.NODE_ENV === 'production') {
      config.devtool('cheap-module-source-map')
      if (enabledCdn) {
        options.cdn.origin += `/${options.code}/`
        projectOptions.publicPath = options.cdn.origin
        config.output.publicPath(options.cdn.origin)
      }
    }
  })
  options.disabled || api.configureWebpack(config => {
    config.plugins.push(new RouterWebpackPlugin())
    if (process.env.NODE_ENV === 'production' && enabledCdn) {
      config.plugins.push(new CdnWebpackPlugin({...options.cdn, code: options.code})) 
    }
  })
}
```

## 组件

- **ctable**
- **ceditor**
- **cnav**

## utils
