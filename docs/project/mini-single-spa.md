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
    - 解析html
      - 根据子应用的 入口url，通过发送请求的方式，获取到 html 内容
      - 根据 html 解析出 入口文件的 css 和 js => parseHTMLandLoadSources（`处理 app 数据的 pageBody,scripts,styles 数据`）
    - 处理沙箱 sanbox
    - 渲染html: container.innerHTML = app.pageBody
    - 执行 style 和 script 标签(`执行后，子应用上的 mount/unmouted 等函数会挂载到全局的 window 上`)
    - 完善 app 配置( 获取当前window下__SINGLE_SPA__对象里的 mount 和 unmount 函数 ，添加到 app 上)
    - 触发结束生命周期钩子：triggerAppHook(app, 'bootstrapped', AppStatus.BOOTSTRAPPED)
  - **toUnMountApp -> unMountApp**
  - **toMountApp -> mountApp**

### 重难点

##### 1. 子应用是如何挂载的？

    首先，所有的子应用在 mian 中会对 render 函数进行一层封装，用于区分当前是否是在微前端环境中

    - 在基座执行 start 的时候，会在 window 上挂载一个全局变量`__IS__SINGLESPA__`， 供子应用区分当前环境
    - 当然，子应用也可以单独启动，直接在当前 app 容器中挂载 

##### 2. 如何在vite项目使用？
  
    vite 应用是采用 esm，统一是发请求的模式，故应尽可能将 js/css 等资源在 main 中编写

    我们可以通过编写自定义的 import 方法，将资源统一通过 import 方法引入，防止部分js的import语法 在 非 module 环境下的报错


    qiankun 官方现在还暂未支持 所以要引入第三方库 `vite-plugin-qiankun`,该库有2个常用内容
    
    > renderWithQiankun 

##### 3. 资源如何处理的？

- 传统的 cli 模式下([import-html-entry](https://github.com/kuitos/import-html-entry))

  子应用会提供入口(即index.html)，通过解析 html 的结构，可以分别解析出 js/css/html(container)

  资源可能是外部的(有url的)，也可能是内嵌的
    - 外部的：通过 promise 发送请求，返回相应内容，并将内容转化成 内嵌的
    - 内嵌的：直接执行内部内容

- vite 模式下

  只对 index.html 中的内嵌资源做处理，生成对应资源标签后插入到 页面中

  外部资源的话，vite 会自动发送请求获取

##### 4. 沙箱如何实现的？

- 为什么要有沙箱

微前端多应用的场景下，变量冲突，样式冲突

- 沙箱的原理
  + 子项目加载前：对 window 做快照
  + 子项目卸载后：恢复这个快照

- 分类
  + **快照沙箱：SanpshotSandbox**
  + **代理沙箱：ProxySandbox**

```js
class SnapshotSandbox {
  constructor() {
    this.originSnapshot = {} // 记录每个子应用激活前 window 的快照
    this.modifyPropsMap = {} // 记录子应用的修改了的属性
  }
  active() {
    for(let prop in window) {
      if(window.hasOwnProperty(prop)) {
        this.originSnapshot[prop] = window[prop] // 逐个属性赋值，记录快照
      }
    }
    Object.keys(this.modifyPropsMap).forEach(key => {
      window[key] = this.modifyPropsMap[key]
    })
  }
  inActive() {
    for(let prop in window) {
      if(window.hasOwnProperty(prop)) {
        if(window[prop] !== this.originSnapshot[prop]) { // 说明子应用有些属性被修改了
          this.modifyPropsMap[prop] = window[prop] // 恢复快照前记录变化的属性
          window[prop] = this.originSnapshot[prop] // 恢复
        }
      }
    }
    window = this.originSnapshot
  }
}
```

```js
class proxySandbox {
  constructor() {
    this.originWindow = {}
    this.fackWindow = {}
    const proxy = new Proxy(this.fackWindow, {
      set: (target, key, value) => {
        if(this.sandboxRunning) {
          // 如果设置的键是代理对象自有的，在set前会经过get函数，所以此时的target 为代理对象
          // 反之为 window
          target[key] = value
          return true
        }
      },
      get: (target, key) => {
        // 当代理对象有该属性时候，返回代理对象
        return target.hasOwnProperty(key) ? target[key] : window[key]
      }
    })
    this.proxy = proxy
  }
  active() {
    this.sandboxRunning = true
  }
  inActive() {
    this.sandboxRunning = false
  }
}
```

- css 沙箱
  - 
