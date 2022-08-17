

## 基础八股

### JS

1. **eventloop**

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


- 浏览器

- **node**

一次循环要经过六个阶段：

- **timers：计时器（setTimeout、setInterval等的回调函数存放在里边)**
- pending
- callbackidle prepare
- **poll：轮询队列（除timers、check之外的回调存放在这里**
- **check：检查阶段（使用 setImmediate 的回调会直接进入这个队列**
- close callbacks

#### setTimeout 和 setImmediate 顺序（宏任务）


#### nextTick 与 Promise（微任务）

- 两者都不是node时间循环的一部分，所以不会开启额外的线程去处理
- 优先级: nextTick > Promise

### TS

1. **什么是泛型？**


2. **类型和接口的区别？**
