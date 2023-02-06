### 大纲
- **一、Vue 基础**
  - 1. Vue 权限管理
  - 2. 双向绑定的使用和原理
  - 3. nextTick
  - 4. 组件通讯的方式
  - 5. v-for 和 v-if 的优先级
  - 6. computed 和 watch 区别
  - 7. keep-alive 的理解，如何实现，缓存的是什么？
  - 8. vue 性能优化
  - 9. 单页应用的理解
  
- **二、生命周期**
  - 1. 说一下Vue 生命周期
  - 2. created 和 mounted 的区别
  - 3. 哪个生命周期发请求
  - 4. keep-alive 与 生命周期
  - 5. 父子声明周期顺序

- **三、原理题**
  - 1. 响应式原理
  - 2. 模板渲染原理
  - 3. vdom 理解
  - 4. diff 过程
  - 5. key 的作用

- **四、vue-router**
  - 1. 路由懒加载
  - 2. **路由的history 和 hash 模式？区别？实现原理？**
  - 3. 前端路由的理解
  - 4. 路由守卫

- **五、vuex**
  - 1. action 和 mutation 的区别
  - 2. 五大模块
  - 3. 刷新后 vuex 状态丢失怎么办？
  - 4. 如何监听 vuex 的状态变化
  - 5. 你觉得 vuex 有什么缺点

- **六、vue3.0**
  - 1. vue3 优化
  - 2. vue3 为什么用 proxy 代替 Object.defineProperty？
  - 3. ref 和 reactive 的区别

---
### 一、Vue 基础
#### 1. Computed 和 Watch 区别

| 区别 | watch | computed |
| :--: | :--:   | :--: |
| 用法上 | 根据响应式数据作出相应的变化 | 依赖响应式数据的变化而变化，生成了一个新的响应式数据 |
| 特点上 | 无缓存 | `有缓存`，无副作用 |
| 场景上 | 可`异步`，消耗较大 | 用于频繁变动的数据 |
| 原理上 | 相当于属性 `setter` 的回调函数 | 相当于设置了属性的 `getter` |

#### 2. 组件通讯

  - 父子
    - `porps + emit`
    - $parent/$children、ref/$refs
    
  - 多层
    - `provide + inject`
    - $attrs/$listeners
    - Vue3 `defineExpose + ref`
  
  - 全局
    - `EventBus`
    - Vuex

#### 3. 单页应用的理解

| 优点 | 缺点 |
| ---- | --- |
| 页面加载快，用户体验好，切换页面不用重新加载整个页面，避免不必要的重复渲染 | 首屏渲染耗时，因为首页就需要加载应用级别的 资源 |
| 对服务器压力小 | 路由管理，前进后退都需要前端实现 |
| 前后端分离，架构清晰 | SEO 难度大（顺带一提自己做过官网vue项目的seo，一个plugin，可分包，打包成多页） |

#### 4. vue项目权限设计？

| 分类 | 页面权限 | 按钮权限 |
| ---- | ------- | ------- |
| 实现 | | 自定义指令 |
| | | |
| | | |


#### 5. Vue 和 React 的区别？各自的优缺点？

| 类别 | Vue | React |
| ---- | ------- | ------- |
| | | |
| | | |

#### 6. **vue 性能优化**

1. 代码优化

     + keep-alive

     + tree-shaking

     + **优化关键渲染路径**（减少重绘重排）

2. 资源加载

     + 字体图标

     + 压缩图片大小

     + 与服务端配合，利用**浏览器缓存**机制

     + 静态资源cdn

     + js和css的加载等，css放头部，js放底部

     + gzip

     + 减少网络请求

3. 页面优化

     + 图片懒加载

     + 虚拟列表

     + 路由懒加载

     + 骨架屏

     + loading动画





### 二、 生命周期
#### 1. Vue2 / Vue3 生命周期？

| Vue2 | Vue3 |
| :--: | :--: |
| beforeCreated、created| setup |
| ... | ... |
| destoryed相关 | onUnmounted |

#### 2. 父子组件生命周期？

> 记住一句话： `父子子父`
- 挂载，更新，销毁三个类型都是按照`父子子父`执行

#### 3. created 和 mounted 的区别？哪个声明周期请求异步数据较好？

- created
- 此时数据已经加载完毕，可以更快获取服务端数据，减少页面渲染时间，提升用户体验
- SSR项目没有mount 相关的生命周期，提高统一性

####  4. keep-alive 组件的声明周期？

- deactivated
- activated




### 三、 原理题
#### **1. Vue 响应式原理？？？**

- 依赖收集
- 派发更新

![](http://caibaojian.com/vue/images/data.png)

把一个普通 Javascript 对象传给 Vue 实例的 data 选项，Vue 将遍历此对象所有的属性，并使用 Object.defineProperty 把这些属性全部转为 getter/setter。

- 在组件渲染（`render`）的时候，会读取（touch）data 中的数据，触发 `getter`，进而让 watcher 收集依赖

- 在修改数据的时候，会触发数据的 `setter`，进而通知（`notify`）watcher 进行数据更新，watcher触发更新函数（`trigger re-render`）重新进行渲染

#### 2. vue 双向绑定的理解
- what：双绑指的是 `v-model` 这个指令，用于绑定一个动态值到视图中，实质上是一个语法糖，相当于 `:value` 和 `@input/@change`
- why：可读性好，提高开发效率
- where：常用于表单中

#### 3. keep-alive 组件原理

#### 4. $nextTick 原理



#### 5. diff 算法

1. 概念和目的：
Diff 算法是一种对比算法，通过对比新旧虚拟dom，精准快速的找出dom变化，提高更新效率。
2. 策略：
`同层比较`、`深度优先`、`O(n)`
同层比较将时间复杂度由`O(n^3)`降至`O(n)`
3. 时机：
响应式数据变化时，重新生成render函数，生成新的虚拟dom，新旧虚拟dom执行patch函数从而进行diff算法
4. 过程：

##### vue2 diff（双端比较）

> 核心Diff算法（**双指针**）

1. 前前
2. 后后
3. 前后
4. 后前

##### vue3 diff（快速比较）

1. 比较新旧节点类型(tag)：不同则直接替换，相同则更新属性(props)
2. 比较新旧子节点情况(四种)
    * 都是文本节点：直接替换
    * 新有子节点旧无子节点：添加
    * 新无旧有：删除
    * 新旧都有：updateChildren`（核心diff算法）`

> 核心Diff算法
1. 自前向后
2. 自后向前
3. 新节点多于旧节点(新增)
4. 少于(删除)
5. 乱序比较**(最长递增子序列)**

> vue3 diff 优化
1. 编译时
`patchFlags` :用于标记动态节点的类型
`Block` :相当于普通节点加了 dynamicChildrens 属性，会收集节点本身和所有动态子节点
2. 运行时
`最长递增子序列`：确定不用移动的最长序列，减少diff过程中的操作次数

#### 6. v-for 为什么要加key


#### 7. 为什么要使用虚拟DOM？
  - 保证性能的下限

#### 8. template 到 render 的过程 / 模板编译原理

  - compile

    解析(template => ast) => 优化(patchFlag/cacheHandlers/hoistStatic) => 生成(ast => render)

    parse => optimize => generate

```js
- parse
  - 以 < 开头
    - 元素开始标签
    - 元素结束标签
    - 注释
    - 文档声明 <!DOCTYPE html>
  - 不以 < 开头
    - 文本节点
    - 插值表达式 {{}}
- optimize
  - patchFlag
  - cacheHandlers
  - hoistStatic
- generate
```



### 四、 vue-router
#### 1. 路由的history 和 hash 模式？区别？实现原理？

- mode：hash | history

- 区别
  - `hash` 模式带 '#'号
  - `hash` 模式url变化会刷新页面，`history` 模式不会
  - `hash` 模式下,#后面的内容不会发到服务器，服务器配置无需修改；`history` 模式需要修改服务器配置(nginx `try_files`)，否则就`404`

- 实现
  - hash
    - hashChange
  - history
    - pushState: 在历史栈中增加一条新数据
    - replaceState：替换一条数据
    - window.onpopstate: 可监听到浏览器的前进后退，history.go / back / forword 三个方法
#### 2. 从0实现一个vue-router

[mini-vueRouter](../project/mini-router4.md)

[github](https://github.com/WillianLiusHao/single-routers)



### 五、 vue-x
#### 1. action 和 mutation



### 六、vue3
#### 1. vue3 对比vue2 优化

- 架构/代码优化
  - `monorepo 包管理方式`
  - `ts 支持`
  - `体积优化`
    - `移除冷门api`(filter,sync,$set,$get等)
    - `tree-shaking`: 使用了 esmodule，tree-shaking 依赖于 es6模块的静态结构特性

- 性能优化
  - `响应式`：proxy 和 Reflect 替代 defineProperty
  - `diff优化`：更新类型标记 **patchFlag**，对比流程使用**最长递增子序列**
  - `编译优化`：函数缓存 **cacheHandlers**，静态节点提升 **hoistStatic**

- 语法API
  - `composition API`
  - `Teleport`
  - `Fragments`

#### 2. vue3 响应式

- defineProperty 和 Proxy

| defineProperty | Proxy |
| :--: | :--: |
| 监听对象属性 | 代理整个对象 |
| 不可监听对象增删 | 可以 |
| 需循环迭代对象属性 | 惰性响应式 |
| 不支持map、set等数据结构 | 支持 |
| 兼容性好 | 兼容性差 |


- proxy 惰性响应式


- Reflect

  + 改正 this 指向
  + proxy 的一些方法需要返回 true/false
    + 使用Object：严格模式下对对象的操作会报错导致无法返回
    + 使用Reflect：Reflect的操作会直接返回操作结果，达成 `proxy监听,Reflect执行` 的效果
  + 解决历史问题，集成了所有对Object操作的方法


- 对数组的处理

  +

- 对 set、map 的处理
