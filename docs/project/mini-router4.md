## mini-router4

- 先看一下 vue-router4 怎么创建路由和挂载的

```js
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes
})
app.use(router)
```

`createRouter` 是创建路由的主函数

- history: 代表了不同的路由模式，通过不同的 API 创建
- routes: 路由配置

router 对象通过提供 `install` 方法，供 `.use` 函数使用，同时把 router 实例 `挂载到app` 上

### 核心原理

```js
interface MyRouter {
  currentRoute: any
  push: Function
  replace: Function
  go: Function
  back: Function
  forward: Function
  install: any
}

// 全局 router 对象
let _router: MyRouter
```

> 全局的 router 对象上的 `currentRoute` 用于控制和记录当前路由页，每次调用页面变化的 API 时，都需要对该值进行更新

#### createWebHistory(base: string)

- @params
  - base：基础路径

初步创建 router 对象，定义 router 上的一些方法（`push`、`replace `、`go`等）

而这些方法都是通过调用 `window.history` API，（`history.pushState`、`history.replaceState`、`history.go`）

#### createWebHashHistory

- 先对 base 路径做 '#' 处理
- 处理完后，调用 `createWebHistory`,并传入处理后的 base

#### createRouter

- 处理 路由API
- 处理 路由钩子
- 监听 `popstate` 页面变化事件，页面改变后更新 `currentRoute` 值

最后返回一个包含所有的 router 实例

#### useRouter

```js
/**
 * Returns the router instance. Equivalent to using `$router` inside
 * templates.
 */
function useRouter() {
  return inject(routerKey);
}
```

- 在app.use 挂载时，会调用 `app.provide(routerKey, router)`,把 `router` 通过 vue实例传递下去
- 调用 useRouter时，则会通过 `inject` 接受全局router实例

### 核心组件

组件是在 router 的 `install` 方法中，通过 `app.component(RouterView)` 进行全局注册组件 `RouterView`

- router-view
