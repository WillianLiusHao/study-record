# cms 后台模板

## 工程化

`commitizen`

`changelog`

`eslint`

## 插件

- 插件会对解析当前项目的配置
  - 默认会设置 `路径别名`，把插件提供的组件 给项目使用
  - 如果开启了 cdn, 会把项目的 `publicPath` 修改为 cdn 地址


- **路由自动生成**
`Router.webpack.plugin`

- **构建资源自动上传cdn**
`Cdn.webpack.plugin`

- 通过 webpack plugin 的 `done` 钩子
- 使用异步任务队列，将资源一个个的上传


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
        // 修改资源的 publicPath
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
