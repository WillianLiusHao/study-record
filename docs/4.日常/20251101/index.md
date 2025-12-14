# 重拾前端


重点关注的复习资料

1. B站视频

     - [vue 面试题](https://www.bilibili.com/video/BV18haoz3EQ8/?spm_id_from=333.788.player.switch&vd_source=78ce2f86d349eed99a5692610cd061b1&p=1)

     - [系列课](https://www.bilibili.com/video/BV1tssDzvEoV?spm_id_from=333.788.player.switch&vd_source=78ce2f86d349eed99a5692610cd061b1)

2. 掘金面经
   - [js高频面试题](https://juejin.cn/post/7330065707358208010)

3. 重点项目的亮点难点和技术点


## 一、html,css

## 二、js

### 1. 闭包

什么是闭包？可能导致哪些问题？如何避免内存泄漏？

定义：一个函数可以”记住”并访问它被创建时所处的外部作用域，即使它在那个作用域外执行，这种现象就叫闭包

功能：**实现变量私有化，⭐函数柯里化⭐ 等**

案例：**计数器**

```js
function craeteCounter () {
    let count = 0;
    // 给外部放出一个访问期
    return function () {
		count++
        return count
    }
}

const addCount = craeteCounter()
const CountNum1 = addCount()
console.log(CountNum1) //1
const CountNum2 = addCount()
console.log(CountNum2) //2

```

避免：不需要时手动接触引用（=null），以及及时移除事件监听器



> 拓展：函数柯里化

```js
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {          // 参数够了
      return fn.apply(this, args);
    } else {                                 // 参数不够，继续返回新函数
      return function (...next) {
        return curried.apply(this, args.concat(next));
      };
    }
  };
}

// 用法
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
```



### 2. var,let,const

| 特性             | var                          | let                | const              |
| :--------------- | :--------------------------- | :----------------- | ------------------ |
| **作用域**       | 函数作用域                   | 块级作用域         | 块级作用域         |
| **变量提升**     | 声明提升，初始化为 undefined | 声明提升，不初始化 | 声明提升，不初始化 |
| **暂时性死区**   | 无                           | 有                 | 有                 |
| **重复声明**     | 可以                         | 不可以             | 不可以             |
| **修改值**       | 可以                         | 可以               | 不可以             |
| **全局对象属性** | 顶层作用域会成为window的属性 | 不会               | 不会               |



### 3. 类型转换

1. 隐式转换是调用了 valueOf() 方法

   ```js
   2-'1'  // 1
   // 其实是 2 - '1'.valueOf()
   ```

2. == 不判断类型，=== 要判断类型

   ```js
   [] == ![] //true
   
   // 1. [] == false
   // 2. [] == 0
   // 3. '' == 0
   ```



### 4. 深浅拷贝

1. JSON.parse(JSON.stringify)
  - 局限性：undefined,Symbol,函数，正则，日期

2. 手动实现深拷贝

   ```js
   function deepClone(obj) {
     // 过滤基础数据类型和 null
     if (typeof obj !== "object" || obj === null) return;
     // 复杂数据类型：特殊处理 RegExp Date Array
     if (obj instanceof 'Date') return new Date(obj)
     if (obj instanceof 'RegExp') return new RegExp(obj)
     let ret = obj instanceof Array ? [] : {};
     for (let k in obj) {
       if (obj.hasOwnProperty(k)) {
         ret[k] = typeof obj[k] === "object" ? deepClone(obj[k]) : obj[k];
       }
     }
     return ret;
   }
   ```



### 5. 原型链☆

1. 引用类型，都具有对象特性，即可自由扩展属性。
2. 引用类型，都有一个隐式原型 `__proto__` 属性，属性值是一个普通的对象。
3. 引用类型，隐式原型 `__proto__` 的属性值指向它的构造函数的显式原型 `prototype` 属性值。
4. 当你试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么它会去它的隐式原型 `__proto__`（也就是它的构造函数的显式原型 `prototype`）中寻找。



### 6. this 指向，call，apply，bind

1. 普通函数：window 或 global
2. 对象方法：调用该方法的对象
3. 构造函数：新创建的对象
4. 箭头函数：函数定义式所在的词法作用域

```js
fn.call(thisArg, arg1, arg2,...) // 立即调用，多个参数
        
fn.apply(thisArg, [argsArray])  // 立即调用，数组参数

fn.bind(thisARG, arg1, arg2, ...) // 返回新函数
```



### 7. localStorage，sessionStorage，Cookie

| 特性         | Cookie                                                       | localStorage                                                 | sessionStorage                                               |
| ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 生命周期     | 可设置过期时间。若不设置，则随浏览器会话结束而关闭（会话性 Cookie） | 永久性存储。除非用户手动清除或代码主动删除，否则数据永远不会过期 | 会话级存储。数据仅在当前浏览器标签页的会话期间有效，关闭标签页或浏览器后数据被清除 |
| 存储容量     | 非常小，通常只有～4 KB                                       | 较大，通常为 5 MB–10 MB（因浏览器而异）                      | 与 localStorage 相同，通常为 5 MB–10 MB                      |
| 与服务器通信 | 会自动发送。每次向同源服务器发送 HTTP 请求时，浏览器都会自动将 Cookie 附加在请求头中发送过去 | 纯客户端存储。数据仅存在于本地，不会自动发送到服务器         | 与 localStorage 相同，不会自动发送到服务器                   |
| 作用域       | 同源下所有标签页和窗口共享                                   | 同源下所有标签页和窗口共享                                   | 同源下，但仅限当前标签页。在不同标签页中打开同源页面，sessionStorage 互不相通 |
| API 易用性   | 原生 API 较为复杂，需要手动封装和解析（document.cookie）     | API 简洁易用（setItem、getItem、removeItem、clear）          | 与 localStorage 的 API 完全相同                              |



### 8. AMD、CommonJS、ES Module

| 维度     | CommonJS                   | AMD                | ES Module                |
| -------- | -------------------------- | ------------------ | ------------------------ |
| 环境     | Node.js 为主               | 浏览器端           | 浏览器 + Node.js（现代） |
| 加载方式 | 同步（运行时）             | 异步（运行时）     | 静态（编译时）+ 动态     |
| 输出类型 | 值的拷贝                   | 值的拷贝           | 值的引用（动态绑定）     |
| 语法     | `require`/`module.exports` | `define`/`require` | `import`/`export`        |
| 典型工具 | Node.js 原生               | RequireJS          | 现代浏览器、Webpack 等   |

目前，ES Module 已成为浏览器和服务器端通用的标准模块规范，CommonJS 仍广泛用于 Node.js 生态，AMD 因历史原因逐渐被淘汰。



### 9. new 原理

1. 创建空对象
2. 对象的 `__proto__` 指向函数的 prototype
3. 执行函数，绑定this
4. 判断是否有返回值，有则返回，没有则返回对象

```js
const myNew (fn) {
    if (typeof fn !== 'function') return
    const obj = new Object()
    obj.__proto__ = fn.prototype
    const res = fn.call(obj)
    return res ? res : obj
}
```



### 10. for ... in 和 for ... of

| 遍历目标                 | 需求                 | 选哪个？             |
| ------------------------ | -------------------- | -------------------- |
| 数组、字符串等可迭代对象 | 取元素值、操作元素   | `for...of`           |
| 普通对象                 | 取属性名、操作键值对 | `for...in`（加过滤） |

记住：`for...of` 关注 “值”，`for...in` 关注 “键”，按目标和需求选，基本不会错～



### 11. 事件循环☆☆



### 12. 设计模式

C5 S7 B11（Creational、Structural、Behavioral）

1. 创建型模式（5种）：**工厂方法模式**、抽象工厂模式、**单例模式**、建造者模式、**原型模式**

2. 结构型模式（7种）：**适配器模式**、**装饰器模式**、**代理模式**、外观模式、桥接模式、组合模式、享元模式。

3. 行为型模式（11种）：策略模式、模板方法模式、**观察者模式/发布订阅模式**、迭代子模式、责任链模式、命令模式、备忘录模式、状态模式、访问者模式、中介者模式、解释器模式。



### 一些手写题

#### 1. 实现链式调用

```js
// 实现一个类，其实例可以链式调用，它有一个 sleep 方法，可以 sleep 一段时间后再后续调用

const boy = new PlayBoy('Tom') 
boy.sayHi().sleep(1000).play('王者').sleep(2000).play('跳一跳') 

// 大家好我是Tom 
// 1s 之后 
// 我在玩王者 
// 2s 之后 
// 我在玩跳一跳
```

核心思路是：**通过 Promise 链式传递实例，将异步操作（sleep）和同步操作（sayHi、play）统一封装为 Promise 任务**，确保后续调用等待前一个任务（尤其是延迟任务）完成后再执行。

```js
class PlayBoy {
    constructor(name) {
        this.name = name
        // 维护一个 Promise 链，初始为已 resolved 状态，确保首次调用可直接执行
        this.promiseCahin = Promise.resolve()
    }
    
    // 同步方法：直接执行并返回实例（维持链式调用）
    sayHi() {
        // 将同步操作封装到 Promise 链中，确保与异步操作顺序一致
        this.promiseCahin = this.promiseCahin.then(() => {
            console.log(`大家好，我是${this.name}`)
        })
        return this // 链式调用关键：返回实例本身
    }
    
    // 异步方法：延迟指定时间后执行后续操作
    sleep (time) {
        this.promiseCahin = this.promiseCahin.then(() => {
            // 返回新 Promise，让后续任务等待延迟完成
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve()
                }, time)
            })
        })
        return this
    }
    
    // 同步方法：与 sayHi 逻辑一致，执行具体业务并维持链式
    play (str) {
        this.promiseCahin = this.promiseCahin.then(() => {
            console.log(`我在玩${str}`)
        })
        return this
    }
}
```





## 三、框架

- [「2022」寒冬下我的面试知识点复盘【Vue3、Vue2、Vite】篇](https://juejin.cn/post/7166446028266733581) ☆☆☆☆☆

- [「2021」高频前端面试题汇总之Vue篇 （上）](https://juejin.cn/post/6919373017218809864)

- [B站视频](https://www.bilibili.com/video/BV1KnqUY5EwJ?spm_id_from=333.788.videopod.episodes&vd_source=78ce2f86d349eed99a5692610cd061b1)

### 一、基础

#### 1. computed 和 watch 的理解

- 用法：watch 是基于已有的响应式数据变动时候执行的回调函数，computed 是依赖于已有的数据生成新的响应式数据
- 特点：watch 可执行异步函数，没有缓存；computed 有缓存，主要用于频繁变动的数据 
- 原理：watch 相当于被检测数据的 setter 回调函数；computed 相当于新响应式数据的 getter 函数

#### 2. 组件通讯

- 父子：props/$emit、$children/$parent、$refs
- 爷孙：provide/inject、$attrs/$listeners、
- 全局：vuex、eventBus（手写eventBus的实现）

```js
class Bus {
  constructor() {
    this.callbacks = []; // 存放事假名称
  }

  $on(name, fn) {
    this.callbacks[name] = this.callbacks[name] || []
    this.callbacks[name].push(fn)
  }

  $emit(name, args) {
    if (this.callbacks[name]) {
      this.callbacks[name].forEach(cb => cb(args))
    }
  }
}

Vue.prototype.$bus = new Bus()
// 监听
this.$bus.$on('say', (str) => { console.log(str) })
// 触发
this.$bus.$emit('say', 'hello')
```

#### 3. 路由实现，hash 和 history 模式

- **hash 模式**：基于 URL 锚点，依赖 `hashchange` 事件，无需后端配置，兼容性好但 URL 不美观；
- **history 模式**：基于 HTML5 `History API`，依赖 `popstate` 事件，URL 美观，需后端配置避免 404，兼容性稍弱；

#### 4. vue2 如何检测数组变化

- **核心痛点：`Object.defineProperty` 对数组的局限性**

  `Object.defineProperty` 只能监听「数组已存在索引的赋值操作」（比如初始化时 `arr[0]` 会被拦截，但新增索引 `arr[1] = 2` 无法监听），且完全无法监听「长度修改」和「原生方法调用」。因此，Vue2 必须单独对数组做特殊处理。

- **实现原理：重写数组的 7 个可变方法，同时保留原方法功能，在方法执行时手动触发依赖更新；并对「索引赋值」「长度修改」提供辅助 API。**

- **局限性：**由于实现机制的限制，以下数组操作**无法被 Vue2 监听**，需要手动规避或使用辅助 API

  1. **直接通过索引修改元素**

     ```js
     this.arr[0] = 10; // 无法监听，不会触发更新
     // 解决方案：用 this.$set
     this.$set(this.arr, 0, 10);
     ```

  2. **直接修改数组长度**

     ```js
     this.arr.length = 0; // 无法监听，不会触发更新
     // 解决方案：用 splice 清空
     this.arr.splice(0, this.arr.length);
     ```

  3. **新增超出当前长度的索引**

     ```js
     this.arr[3] = 4; // 若原数组长度为 3（索引 0-2），新增索引 3 无法监听
     // 解决方案：用 this.$set 或 push
     this.$set(this.arr, 3, 4);
     ```

#### 5. 自定义指令

- 使用：`vue.directive('name', {})`
- 钩子：`created` / `beforeMount` / `mounted` / `beforeUpdate` / `updated` / `beforeUnmount` / `unmounted`

```vue
// 全局注册指令 v-debounce
app.directive('debounce', {
  // 绑定指令时执行（只执行一次）
  beforeMount(el, binding) {
    let timer = null;
    // 给元素绑定点击事件，添加防抖逻辑
    el.addEventListener('click', () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        // binding.value 是指令传递的参数（如：v-debounce="handleClick"）
        binding.value(); 
      }, 500); // 500ms 防抖延迟
    });
  }
});
```

#### 6. v-if 和 v-for 的优化级

| Vue 版本 | 优先级规则       | 本质逻辑                                                     |
| -------- | ---------------- | ------------------------------------------------------------ |
| Vue 2    | `v-for` > `v-if` | 渲染时先执行 `v-for` 遍历，再对每个遍历项执行 `v-if` 判断（即使大部分项会被 `v-if` 过滤，也会先完整遍历） |
| Vue 3    | `v-if` > `v-for` | 渲染时先执行 `v-if` 判断，再执行 `v-for`（若 `v-if` 为 `false`，`v-for` 不会执行；但注意：`v-if` 中无法访问 `v-for` 的遍历变量，因为 `v-for` 还没执行） |

#### 7. 生命周期及每个周期的事情

| 钩子函数              | 所属阶段     | 执行时机                                        | 核心操作                                                     | 注意事项                                                     |
| --------------------- | ------------ | ----------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `beforeCreate`        | 创建阶段     | 实例刚创建，`data`/`methods`/`props` 未初始化   | 无（无法访问 `this` 上的响应式数据、方法）                   | 几乎不用，仅极少数场景（如初始化非响应式数据）               |
| `created`             | 创建阶段     | 实例创建完成，`data`/`methods`/`props` 已初始化 | 1. 初始化数据（如处理 `props` 数据）；2. 发起异步请求（axios）；3. 绑定事件监听 | 无法操作 DOM（组件还没挂载），`$el` 为 `undefined`           |
| `beforeMount`         | 挂载阶段     | 挂载开始前，模板编译完成，未渲染到 DOM          | 最后一次修改数据的机会（修改后仍能触发首次渲染）             | `$el` 仍未挂载到页面，DOM 操作无效                           |
| `mounted`             | 挂载阶段     | 组件挂载完成，DOM 渲染完成                      | 1. 操作 DOM（如获取 DOM 元素、初始化第三方插件：echarts/element-ui）；2. 发起异步请求（推荐） | 页面首次渲染完成，`$el` 可访问，是最常用的钩子之一           |
| `beforeUpdate`        | 更新阶段     | 响应式数据变化，重新渲染前                      | 监控数据变化，修改数据（不会触发额外更新）                   | 不要做异步操作，避免无限更新循环                             |
| `updated`             | 更新阶段     | 组件重新渲染完成，DOM 已更新                    | 处理更新后的 DOM（如调整第三方插件尺寸、同步数据到 DOM）     | 避免修改响应式数据（会再次触发更新）                         |
| `beforeDestroy`       | 销毁阶段     | 组件销毁前（实例仍可用）                        | 清理资源：1. 清除定时器 / 计时器；2. 取消事件监听（`$off`）；3. 取消 axios 请求 | 仍可访问 `this` 和 DOM，是清理资源的关键时机                 |
| `destroyed`           | 销毁阶段     | 组件销毁完成，实例被销毁                        | 最终清理（极少用）                                           | `this` 仍存在但已无响应式，DOM 已被移除，资源必须在 `beforeDestroy` 清理 |
| （补充）`activated`   | 缓存组件专属 | 被 `<keep-alive>` 缓存的组件激活时              | 恢复数据、重新发起请求、重启定时器                           | 仅配合 `<keep-alive>` 使用                                   |
| （补充）`deactivated` | 缓存组件专属 | 被 `<keep-alive>` 缓存的组件失活时              | 暂停定时器、取消请求                                         | 仅配合 `<keep-alive>` 使用                                   |

#### 8. Hooks 的理解

- 本质：Hooks 是 “逻辑复用 + 状态管理” 的函数，解决传统选项式 API 逻辑分散、复用困难的问题；

- 核心价值

  - 逻辑聚合：相关代码放在一起，可读性提升

  - 逻辑复用：自定义 Hooks 实现通用逻辑抽离，无命名冲突

  - 简洁性：函数式写法替代复杂的 mixin / 高阶组件

简单记：**Hooks = 可复用的逻辑函数 + 状态 / 生命周期封装**



### 二、原理相关

- [v-for 到底为啥要加上 key?](https://juejin.cn/post/7140446835311083534)

- [听说你很了解 Vue3 响应式](https://juejin.cn/post/7147461004954173471)



#### 1. 响应式原理 ☆☆☆☆☆

​	核心：就是 “数据变了视图自动更新”，不用手动操作 DOM，底层是靠拦截数据读写来实现的

1. 数据劫持：拦截数据的读写操作，通过 `Object.definedProperty` / `proxy` 拦截数据的 `getter` 和 `setter`
2. 依赖收集：在读取某个数据时，会触发属性的 `getter`，对使用了该数据的 `依赖` 进行收集（比如组件渲染函数、watch、computed）
3. 触发更新：数据改变时候，会触发数据的 `setter`，通知所有依赖进行更新

[简易实现](./框架/源码理解.md)



#### 2. $nextTick 原理 ☆☆

- 使用：在DOM更新后执行延迟回调，在会调中可以获取最新的DOM

- 原理：Vue 异步更新Dom，vue 的视图更新（watcher执行）其实也是调用了 nextTick

  1. Vue观察到数据更新，就会创建一个异步任务队列 `callbacks`，缓冲同一时间循环中发生的所有数据改变

  2. 视图的更新 `flushSchedulerQueue/flushBatcherQueue`（也是一个队列，包含了许多数据更新触发要触发的watcher）会第一个通过 `nextTick` 入队

     ```js
     cb: [flushBatcherQueue]
     ```

  3. 然后是用户调用 `nextTick` 时传入的回调函数入队

     ```js
     cb: [flushBatcherQueue, nextTick回调]
     ```

  4. 同步任务执行完毕，执行异步微任务，就从 cb 取出微任务一个个执行：视图更新 => nextTick回调

![img](https://willianliushao.github.io/study-record/assets/img/nextTick.63f0c113.png)

- vue2：`promise.then` > `MutationObserver` > `setImmediate` > `setTimeOut`
- vue3：`promise.then` > `setTimeOut`



#### 3. 虚拟 DOM 的理解？diff 算法 ☆☆☆☆

1. **为什么需要虚拟 DOM**

   - 真实 DOM 操作性能消耗高
   - DOM 操作逻辑繁琐，如：列表删节点，增节点，索引变化
   - 缺乏跨平台能力

2. **VDOM 核心结构**

   ```vue
   // Vue 中虚拟 DOM 的简化结构（VNode 对象）
   const vnode = {
     type: 'div', // 节点类型（标签名/组件/文本等）
     props: { // 节点属性（对应真实 DOM 的 attributes/props）
       id: 'app',
       class: 'container',
       onClick: () => console.log('click')
     },
     children: [ // 子节点（数组/文本节点）
       { type: 'p', props: {}, children: 'Hello 虚拟 DOM' }
     ],
     el: null, // 关联的真实 DOM 元素（框架内部维护，用户无需操作）
     shapeFlag: 1 // 节点类型标记（框架内部用于优化判断）
   }
   ```

3. **核心工作流程**

​		**生成 VDOM → 计算差异（Diff）→ 同步更新真实 DOM**，也就是常说的 “Render → Diff → Patch”

4. **Diff 算法的核心设计原则**

   - **同层比较**：只对比 VNode 树的同一层级节点，不跨层级对比（跨层级 DOM 操作极少，没必要浪费性能）

   - **标签相同视为同一节点**：如果两个 VNode 的 `type`（标签 / 组件类型）不同，直接销毁旧节点、创建新节点（不深入对比子节点）

   - **列表节点需加 key**：列表渲染时（如 `v-for`），通过 `key` 唯一标识节点，避免误判节点的增删改（比如列表重排时，`key` 能让框架准确识别 “哪个节点是移动的，而非重新创建”）

     ```js
     // 简化版 Diff 对比逻辑
     function diff(oldVNode, newVNode) {
       const patches = []; // 存储差异补丁
       if (oldVNode.type !== newVNode.type) {
         // 1. 节点类型不同：直接替换整个节点
         patches.push({ type: 'REPLACE', newVNode });
       } else if (typeof newVNode.children === 'string') {
         // 2. 文本节点：对比文本内容，不同则更新
         if (oldVNode.children !== newVNode.children) {
           patches.push({ type: 'TEXT', content: newVNode.children });
         }
       } else {
         // 3. 元素节点：对比 props 和子节点
         // 对比 props 差异（新增/删除/更新属性）
         const propsDiff = compareProps(oldVNode.props, newVNode.props);
         if (propsDiff) patches.push({ type: 'PROPS', diff: propsDiff });
         // 递归对比子节点（同层比较）
         const childrenDiff = diffChildren(oldVNode.children, newVNode.children);
         if (childrenDiff) patches.push({ type: 'CHILDREN', diff: childrenDiff });
       }
       return patches;
     }
     ```

5. **优势和局限性**

   - **提升性能**：最小化 dom 操作，减少 回流重绘，在视图复杂场景优势明显
   - **简化开发：**用户无需关注视图层，仅需对数据维护
   - **跨平台：**通过不同的渲染器，可支持  `app/服务端/浏览器` 端
   - **局限：**因为需要创建虚拟DOM，diff 对比都需要消耗时间，在简单UI，少量数据场景下，时间可能不如直接操作 DOM

6.  **Vue3 中的优化**

   - **静态提升**：模板中静态节点（如无绑定属性的 `<div>`）会被缓存，避免每次渲染都重新创建 VNode；
   - **PatchFlags（补丁标记）**：编译时标记 VNode 的 “动态部分”（如仅动态文本、仅动态 props），Diff 时只对比标记的动态部分，忽略静态部分；
   - **按需 Diff**：组件渲染时只生成 “动态数据相关” 的 VNode，静态部分复用缓存，减少 VNode 创建和 Diff 开销；
   - **Fragment（碎片）**：支持多个根节点（无需外层包裹 `<div>`），减少不必要的 DOM 节点。



> 虚拟 DOM 记忆口诀（精炼版）
>
> 1. 是什么：JS 对象，DOM 镜像
> 2. 为什么：省 DOM 操作、简化开发、跨平台
> 3. 三步流：生新 VDOM → Diff 找差异 → 批量更真实 DOM
> 4. Diff 三原则：同层比、类型异则换、列表必加 key
> 5. 优与限：提效跨平台，简单场景微开销
> 6. Vue3 优化：静节点缓存、只比动态区



#### 4. key 的作用



#### 5. vue2 和 vue3 区别

1. 架构/代码优化
   - `ts 重写`
   - monorepo 包管理方式
   - `体积优化`
     - `移除部分 api`（$set，filter，sync，$get等）
     - `tree-shaking`: 使用了 esmodule，tree-shaking 依赖于 es6模块的静态结构特性
2. 性能优化
   - `响应式`：proxy 和 Reflect 替代 defineProperty
   - `diff优化`：对比流程使用**最长递增子序列**
   - `编译优化`（[提高虚拟 DOM 运行时性能]([渲染机制 | Vue.js](https://cn.vuejs.org/guide/extras/rendering-mechanism.html#compiler-informed-virtual-dom))）
     - 更新类型标记 **patchFlag**
     - 函数缓存 **cacheHandlers**
     - 静态节点提升 **hoistStatic**
     - 树结构打平 **[Block](https://cn.vuejs.org/guide/extras/rendering-mechanism.html#tree-flattening)**
3. 语法API
   - `composition API`
   - `Teleport`
   - `Fragments`



#### 6. Proxy的优点

1. 数组：不用改写7种方法，不会污染原型链，数组索引相关的变化可以检测
2. 对象：不需要提供额外的 `$set/$delete` API 进行操作
3. 性能：无需预遍历对象属性，通过“懒代理”模式，待访问到具体属性再执行代理，提高初始化性能
4. 底层优势：`defineProperty` 只能拦截 `get`  和  `set`，而 `Proxy` 提供了多达13种拦截操作，覆盖几乎所有的基础行为，拓展性强



#### 7. v-model 双向绑定的原理

1. 核心原理：语法糖

   ```vue
   <input :value="msg" @input="msg = $event.target.value">
   <input type="checkbox" :checked="isAgree" @change="isAgree = $event.target.checked" />
   <input type="radio" :checked="val" @change="val = $event.target.val" />
   ```



#### 8. computed 实现原理



#### 9. keep-alive



#### 10. template 到 render 的过程 / 模板渲染原理

- **核心：**将开发者编写的模板（HTML 类语法）转化为可执行的 JavaScript 代码，最终生成 DOM 并挂载到页面

- **步骤：**
  1. 模板编译：`模板（Template）` → `编译阶段（Compile）` → `渲染函数（Render）` 
     - 解析（Parse）：`Template` → `AST（抽象语法树）`
     - 生成（Generate）：`AST` → `渲染函数（Render） `
  2. 渲染：`Render` → `vnode`
  3. 挂载/更新：`vnode` → `patch` → `真实Dom`
     - `Diff 算法`
- vue3的优化
  1. 编译阶段：vue2仅标记静态节点，vue3 采用 PatchFlags + 静态提升 + 预编译
  2. diff 算法：vue2全量对比，vue3只对比带 PatchFlags 的动态节点



### 三、性能

#### 1. 性能优化

1. 编码阶段
2. 打包优化
3. SEO 优化
4. 用户体验

#### 2. 首屏加载优化

一、**资源体积优化：**gzip 、cdn、组件库按需加载

二、**页面渲染优化：**路由懒加载、骨架屏、SSR、本地缓存或http缓存

#### 3. SEO

1. SSO
2. 静态化



### Vue3响应式原理

### 编译器实现

### 宏定义原理

### 运行时

### 原理（按三部分）

- Compiler **编译器** (运行 js 文件)
  - template 模板解析 （h 函数）
  - style 样式解析 (scope)
  - script 脚本解析
    - 宏定义 defineProp、defineEmit
    - vue macro
- Reactivity 响应式
  - Proxy
  - Reflect
  - track、trigger
- Runtime 运行时
  - 指令处理
  - Dom 渲染



## 四、浏览器、webpack 和 性能优化

### 1. 内存泄漏

- **意外的全局变量：**函数内直接赋值给未声明的变量，导致生成全局变量
- **未清理的定时器和事件监听：**页面销毁或组件切换时，定时器和监听器未清理
- **未置空的闭包：**闭包引用了私有变量，不会被垃圾回收，导致内存泄漏
- **游离Dom：**DOM使用了变量保存，后续DOM删除后，变量未情况，导致泄漏



### 2. 垃圾回收

[「硬核JS」你真的了解垃圾回收机制吗](https://juejin.cn/post/6981588276356317214?searchId=20251120152823DDEB18246FF404E1D0AD)

**Q：什么是垃圾回收机制？**

`GC` 即 `Garbage Collection` ，程序工作过程中会产生很多 `垃圾`，这些垃圾是程序不用的内存或者是之前用过了，以后不会再用的内存空间，而 `GC` 就是负责回收垃圾的，因为他工作在引擎内部，所以对于我们前端来说，`GC` 过程是相对比较无感的，这一套引擎执行而对我们又相对无感的操作也就是常说的 `垃圾回收机制` 了

**Q：垃圾是怎样产生的？**

**Q：为什么要进行垃圾回收？**

**Q：垃圾回收是怎样进行的？**

1. 标记清除法（各大浏览器常用）

   标记整理
2. 引用计数法

**Q：V8 引擎对垃圾回收进行了哪些优化？**

1. 分代式垃圾回收



### 3. 回流重绘

- **概念：**回流和重绘是浏览器渲染页面时的关键步骤

回流是当DOM结构或布局信息改变，比如元素尺寸、位置变化，浏览器得重新计算元素布局，这个过程会影响整个页面的布局流，比较消耗性能。

重绘呢，是元素样式改变但不影响布局，像颜色、背景变化，浏览器只需重新绘制这些元素，不用调整布局，性能消耗相对小些。

- **特点：**而且回流必然会触发重绘，但重绘不一定引发回流。

- **优化：**实际开发里要优化性能，就得减少回流重绘，比如用CSS3动画替代JS操作布局，批量修改DOM时先隐藏元素再操作，避免频繁获取offsetTop这类会强制刷新布局的属性。



### 4. 浏览器缓存



## 五、node 和 ts

## 六、http 和 网络

### 1. HTTP

### 2. HTTPS

### 3. TCP&UDP

### 4. DNS



> **高频面试题**

1. HTTP 1.0、1.1、2、3 版本的核心差异是什么？
2. HTTP 状态码的分类及常见场景？
3. HTTP 和 HTTPS 的区别？HTTPS 如何保证安全？
4. TCP 和 UDP 的区别？各自的应用场景？
5. TCP 三次握手和四次挥手的过程？为什么需要三次握手 / 四次挥手？



## 七、项目

> 使用STAR法则准备
>
> - 遇到什么问题，需求
> - 怎么评估解决方案、方案对比
> - 方案落地
> - 反思、优化

### 场景题

> 优化自己的面试表现
>
> 流程化 -- SOP

#### 怎么应对

1. 交代背景
2. 调研方案
3. 方案落地
4. 反思，追求更优解

### 举例

当被面试官问到：1000W行表格如何渲染？

多维格表、飞书表格、钉钉表格，在线表格追求大数据量

1. 数据足够大，大数据公司，需要在前端展示大量数据，以往防卡顿，所以我们想要通过更好方案实现
2. 我作为负责人，调研这部分方案
   - DOM方案（卡顿不行）
   - 虚拟表格（非最优解）
   - canvas table
   - 可视区绘制算法优化
   - canvas 结合 WebAssembly 技术实现（skia + WebAssembly）
   - "WebAssembly": Unk
3. 我封装了画布表格引擎，解决了上述问题，并且能够实现1000W数据加载流畅交互
4. 在这个过程中遇到哪些问题？我是怎么解决问题的？卡点是什么？



### 1. 微前端

https://juejin.cn/user/2295436010068254/posts

#### Monorepo

1. Monorepo 如何实现增量构建 / 缓存？
2. Monorepo 常用工具及选型
3. Monorepo 中如何处理子项目的版本发布？



### 2. 监控sdk

[监控](./项目/监控.md)

#### 常见问题：

1. 为什么要自研sdk？
   - 方便接入团队的告警业务
   - 方便做各维度的数据联合分析（漏斗图），做行为回溯（热力图，回放）
   - 灵活业务拓展，自定义埋点，AB测试
2. 如果让多平台使用？
3. 监控数据采集是否会丢失？
4. 如何进行数据上报？会丢失吗？丢失的数据怎么办？
5. 上报的时机？




### 3. 低代码



### 4. 即时通讯



### 5. AI

1. AI 在你前端工作中的具体应用场景是什么？解决了哪些实际问题？
2. 对 MCP（Model Context Protocol）有了解吗？在前端对接 AI 服务时它能起到什么作用？
3. 如何通过提示词（Prompt）编写，让 AI 生成的前端代码更贴合业务需求？你有没有总结过相关的提示词技巧？
4. 你了解 Agent 模式吗？它在前端场景中能有哪些应用？
