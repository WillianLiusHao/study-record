

## JS

- [ ] 原型链
- [ ] 闭包
- [ ] 时间循环
- [ ] this
- [ ] es6
### 1. **eventloop**

- 宏任务
  - setTimeout
  - setInterval
  - setImmediate(node)
  - I/O
  - UI rendering

- 微任务
  - process.nextTick
  - promises
  - Object.observe
  - MutationObserver

#### 浏览器

> event loop 过程：

  - **eventloop start**：从宏任务队列中，按照入队顺序，找到第一个执行的宏任务，放入调用栈，开始执行；
  - **macro task**：执行完该宏任务下所有同步任务后，即调用栈清空后，该宏任务被推出宏任务队列；
  - **micro task**：然后微任务队列开始按照入队顺序，依次执行其中的微任务，直至微任务队列清空为止；
  - **once loop end**：当微任务队列清空后，一个事件循环结束 => `渲染页面`
  - 接着从宏任务队列中，找到下一个执行的宏任务，开始第二个事件循环，直至宏任务队列清空为止。



> 这里有几个重点：

- 当我们第一次执行的时候，解释器会将整体代码script放入宏任务队列中，因此事件循环是从`第一个宏任务script`开始的；

- 如果在执行微任务的过程中，产生新的微任务添加到微任务队列中，也需要一起清空；微任务队列没清空之前，是不会执行下一个宏任务的。


#### Node

一次循环要经过六个阶段：

- **timers：计时器（setTimeout、setInterval等的回调函数存放在里边)**
- pending
- callbackidle prepare
- **poll：轮询队列（除timers、check之外的回调存放在这里)**
- **check：检查阶段（使用 setImmediate 的回调会直接进入这个队列)**
- close callbacks

#### setTimeout 和 setImmediate 顺序（宏任务）


#### nextTick 与 Promise（微任务）

- 两者都不是node时间循环的一部分，所以不会开启额外的线程去处理
- 优先级: nextTick > Promise

#### 
