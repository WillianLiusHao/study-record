## 手写微前端框架

### 微前端框架工作原理（此处以qiankun 为例）


### 需求分析

1. 支持不同框架子应用
2. 支持子应用 HTML 入口
3. 样式隔离
4. JS 沙箱，确保微应用之间 全局变量/事件 不冲突
5. 应用间数据通讯


### 架构设计

1. 子应用数据

​	子应用使用一个 map 结构存储所有的子应用，其中每个 `app` 的数据结构为

  ```js
  app = {
    ...app,
    // 应用有9个状态的生命周期(bootstrap前后，mount前后, unmount前后，前三个的出错)
    status: AppStatus.BEFORE_BOOTSTRAP,
    pageBody: '',
    loadedURLs: [],
    scripts: [],
    styles: [],
    isFirstLoad: true,
  }
  ```

### 整体流程

> 整个框架暴露`2个函数`和执行`1个函数`

- registerApplication

  只做了一件事：注册应用，完善子应用的配置，把 app 加入到全局 `appMaps` 中

  ```js
    app = {
      ...app,
      status, // 用于记录当前子应用所出的状态（9种）
      pageBody, // 子应用body部分的html内容
      sandboxConfig, // 沙箱相关配置
      scripts: [],
      styles: [],
      isFirstLoad: true,
      loadedURLs: []
    }
  ```

- start
  - 执行 **loadApps(处理每一个app应用，加载或卸载)**
  - 初始化 GlobalState, 在window 上挂了一个全局的 eventListener

- overwriteEventsAndHistory
  - 改写浏览器的`popstate`, `hashChange`, `history.replaceState`, `history.pushState` 等方法，且每次变化都会执行 **loadApps** 方法



### 核心函数

1. **loadApps**

- 路由匹配决定了 app 的状态，状态决定了 app 类型（`初始化的状态为 BEFORE_BOOTSTRAP`）
  - 路由与 app 匹配时
    ```js
      state = BEFORE_BOOTSTRAP -> toLoadApp
      state = BOOTSTRAPPED -> toMountApp
      state = UNMOUNTED -> toMountApp
    ```
  - 路由与 app 不匹配时
    ```js
      state = MOUNTED -> toUnMountApp
    ```

- 对不同类型的 app 分别执行不同的方法
  - **toLoadApp -> bootstrapApp**
    - 触发开始前生命周期钩子：triggerAppHook(app, 'beforeBootstrap', AppStatus.BOOTSTRAPPED)
    - 解析html，加载 js css：parseHTMLandLoadSources（`处理 app 数据的 pageBody,scripts,styles 数据`）
    - 处理沙箱 sanbox
    - 渲染html: container.innerHTML = app.pageBody
    - 执行 style 和 script 标签
    - 完善 app 配置，添加 app 的 mount 和 unmount 函数（？？？）
    - 触发结束生命周期钩子：triggerAppHook(app, 'bootstrapped', AppStatus.BOOTSTRAPPED)
  - **toUnMountApp -> unMountApp**
  - **toMountApp -> mountApp**

