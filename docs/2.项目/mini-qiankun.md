
# mini-qiankun

## [github](https://github.com/WillianLiusHao/mini-qiankun/blob/main/understand.md)

## 微前端的基本思路

1. 监听路由变化
  
    - 针对两种路由模式改写api
        - 路由变化，需要卸载上个应用再加载下一个

2. 匹配路由应用

    - 根据 activeRule 规则匹配子应用

3. **加载子应用**

    - 请求 html，获取子应用入口模板
    - 获取 css、js，统一生成行内资源
    - 把子应用的容器挂载到主应用中
    - eval 执行 js 资源

4. 渲染子应用
    
    - **获取子应用导出的 `bootstrap mount unmount` 等函数，执行**


## 拓展

> 其实微前端框架就类比成一个 Vue 框架  

- 微前端子应用 => Vue 组件
- 微前端切换子应用 => Vue-router 路由
- 子应用生命周期 => 组件生命周期

## 基本流程

1. **主应用先定义好每个子应用的启动参数然后通过**
    - `registerMicroApps` 进行应用的注册
    - `start` 进行启动

```js
registerMicroApps(
  [
    {
      name: 'vue2App',
      entry: 'http://localhost:8081',
      container: '#container',
      activeRule: '/vue2-cli-app',
      props: {
        msg: '主应用传递的数据,你是vue2App'
      }
    },
    {
      name: 'vue3App',
      entry: 'http://localhost:8082',
      container: '#container',
      activeRule: () => location.pathname.indexOf('/vue3-cli-app') === 0,
      props: {
        msg: '主应用传递的数据,你是vue3App'
      }
    }
  ]
)
strat() // 这里就启动微前端项目了
```

2. **注册应用**

    - `qiankun` 的 `registerMicroApps` 在获取到子应用的初始化参数，经过简单的处理后，调用 `single-spa` 的 `registerApplication`
    - `registerApplication` 的第二个参数 `app`，是一个函数，函数可返回一系列子应用的生命周期，规定了子应用在 `single-spa` 的不同生命周期中需要执行的生命周期函数

    ```js
        registerApplication({
            name: app.name,
            /**
             * qiankun 主要就是靠这一步进行二开
             * registerApplication 的第二个参数 app 是一个函数
             * 返回一系列的生命周期函数，让 single-spa 在不同的生命周期中去执行这些方法
            */
            app: async () => {
                // 这三个生命周期都是 事件队列，到时候 single-spa 会在相应的生命周期会依次执行队列中的事件
                const { bootstrap, mount, unmount } = await loadApp(app)
                return {
                    bootstrap: bootstrap,
                    mount: mount,
                    unmount: unmount
                }
            },
            activeWhen: app.activeRule,
            customProps: app.props // 主应用传递给子应用的数据，通讯
        })
    ```

3. **启动**

    - `qiankun` 的 `start` 做一些 `框架配置 / 沙箱代理配置 / 预加载配置`
    - 最后调用 `single-spa` 的 `startSingleSpa` 启动项目


## **single-spa 核心功能**

```js
/**
 * 整个 single-spa 主要做了如下几个事情
 * 1. 全局定义子应用的所有状态，初始化子应用状态为 待加载
 * 2. 根据路由的状态和应用当前状态 可将子应用分为如下几类
 *    - 待加载： 路由匹配 & 状态为加载前
 *    - 待挂载： 路由匹配 & （状态为加载前 | 状态为已卸载)
 *    - 待卸载： 路由不匹配 & 状态为挂载
 * 3. 改写路由的 popstate/pushState 等方法
 * 4. 每次路由切换，路由事件监听到变化，调用reload，把不同类别的子应用分别执行不同的方法
 *    - 其中，状态为 BEFORE_LOAD 的应用被归为 toLoadApp 类型,会执行 loadApp方法，获取外部传入的 app 不同生命周期的 事件列表
 *    - 其中，第二点中归为待挂载类型的子应用，会执行 bootStrapAndMountApp 方法，依次执行 bootstrap 和 mount 生命周期时间列表
 */
```

## **loadApp 是如何拓展 single-spa的**
