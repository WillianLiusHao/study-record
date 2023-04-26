# cms 后台模板

## 工程化

`commitizen`

`changelog`

`eslint`


**核心代码**

```js
const CdnWebpackPlugin = require('./plugins/Cdn.webpack.plugin')
const RouterWebpackPlugin = require('./plugins/Router.webpack.plugin')

module.exports = (pluginApi, projectOptions) => {
  // 获取项目配置参数 中的 infinite 基础参数
  let options = projectOptions.pluginOptions.infinite
  // 是否需要开启cdn
  const enabledCdn = !!options.cdn

  pluginApi.registerCommand('infinite', {
    description: 'infinite plugin for vue cli 3',
    usage: 'vue-cli-service infinite',
    options: {}
  }, args => {})
  options.disabled || pluginApi.chainWebpack(config => {
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
  options.disabled || pluginApi.configureWebpack(config => {
    // 将两个插件 push 进 项目的插件列表中
    config.plugins.push(new RouterWebpackPlugin())
    if (process.env.NODE_ENV === 'production' && enabledCdn) {
      config.plugins.push(new CdnWebpackPlugin({...options.cdn, code: options.code})) 
    }
  })
}
```


## 插件


### **构建资源自动上传cdn**

`Cdn.webpack.plugin`

- 插件会对解析当前项目的配置
  - 默认会设置 `路径别名`，把包中组件提供 给项目使用
  - 如果开启了 cdn, 会把项目的 `publicPath` 修改为 cdn 地址

```js
  require('colors')
const path = require('path')
const FormData = require('form-data')
const axios = require('axios')
const fs = require('fs')
const Queue = require('promise-queue-plus');

class CdnWebpackPlugin {
  constructor({ code, origin, api, timeout = 10000, retry = 0, concurrent = 1 }) {
    this.code = code
    this.api = api
    this.origin = origin
    this.timeout = timeout
    this.retry = retry
    this.concurrent = concurrent
    // 创建一个异步任务队列
    this.queue = Queue(this.concurrent, {
      'retry': this.retry,
      'retryIsJump': false,
      'timeout': this.timeout,
      'autoRun': true,
      'queueEnd': () => {
        console.log('Upload complete.'.magenta)
      },
      'workFinally': (queue) => {
        console.log(`(剩余上传数量：${queue.getLength()})`)
      }
    })
  }
  pushQueue({ assets, outputPath }) {
    for (const file of assets) {
      if (!file.name.endsWith('.map') && !file.name.endsWith('.html') && !(file.size === 0)) {
        this.queue.add((resolve, reject) => {
          const form = new FormData()
          const filePaths = file.name.split('/')
          filePaths.pop()
          form.append('action', 'upload')
          form.append('type', 'aliyun')
          form.append('file_cover', 1)
          form.append('dir', `${this.code}/${filePaths.length > 0 ? filePaths.join('/') : ''}/`)
          form.append(
            'file',
            fs.createReadStream(path.resolve(outputPath, file.name))
          )
          axios
            .post(this.api, form, {
              headers: form.getHeaders(),
              timeout: this.timeout
            })
            .then(res => {
              if (res.data.code === 200) {
                console.log(`资源上传成功: ${file.name}`.green)
                resolve(res)
              } else {
                console.log(`资源上传异常: ${file.name}`.red)
                reject(res)
              }
            })
            .catch(res => {
              console.log(`资源上传失败: ${file.name}`.red)
              reject(res)
            })
        })
      }
    }
  }

  apply(compiler) {
    compiler.hooks.done.tap('CdnWebpackPlugin', stats => {
      console.log('\nUpload start.'.magenta)
      this.pushQueue(stats.toJson())
    })
  }
}

module.exports = CdnWebpackPlugin
```

- 通过 webpack plugin 的 `done` 钩子
- 使用异步任务队列
- 将资源上传任务不断推入队列


### **路由自动生成**

`Router.webpack.plugin`

## 组件

- **ctable**
- **ceditor**
- **cnav**

## utils
