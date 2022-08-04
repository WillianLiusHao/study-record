## 手写微前端框架

### 需求分析

- 支持不同框架子应用
- 支持子应用 HTML 入口
- 样式隔离
- JS 沙箱，确保微应用之间 全局变量/事件 不冲突
- 应用间通讯



### 整体流程

> 整个框架暴露`2个函数`和执行`1个函数`

- registerApplication
  ```js
    // 注册应用，完善子应用的配置
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
  - 执行 **loadApps**
  - 初始化 GlobalState, 在window 上挂了一个全局的 eventListener

- overwriteEventsAndHistory
  - 改写浏览器的`popstate`, `hashChange`, `history.replaceState`, `history.pushState` 等方法，且每次变化都会执行 **loadApps** 方法


### 核心函数

- **loadApps**

  根据 app 的状态将 app 分三类，并执行不同的方法

  - loadApps
  - unmountApps
  - mountApps
