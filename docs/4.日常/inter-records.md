# records

> Somebody has to win, so why not be me? —— 科比
## 一、诗悦网络(offer)

- 一面 hr

- 二面
	1. 万花筒的业务模式和细节
	2. 为什么要用微前端qiankun（技术选型）
	3. 微前端各个系统的权限怎么打通
	4. 监控sdk（亮点难点）
	5. 为什么要自研 sdk？（技术选型）
	6. 工作中用了啥数据结构和算法？
	7. http 浏览器缓存
	8. eventloop 及 工作中用的案例
	9. 对工作选择的看重点（你看中什么？最后只能选一个...）
	10. 你对自己的评价，你个人的亮点
	11. 作为一个前端负责人要负责的事情

- 三面
	1. 个人职业规划
	2. 对高级前端理解



## 二、树根互联(offer)

- 一面
	1. 三次握手
	2. 响应式原理
	3. 组件通讯
	4. vuex
	5. action & mutation
	6. 强制组件刷新的方法(key,v-if,$forceUpdate)

- 二面
	1. 前端监控
	2. pdf 导出

- 三面
	1. 为什么换工作？（宏观原因、个人原因）
	2. 在职还是离职？
	3. 哪个工作参与度比较高？
	4. 展开说一下万花筒的项目背景？你负责的模块？
	5. AB test 怎么做？
	6. 监控sdk自己做的吗？提供了什么能力？做了哪一块？
	7. 万花筒哪个模块对你是最大的挑战？
	8. 监控为什么不用第三方的？
	9. 有看过vue源码吗？哪块比较熟？说一下吧（响应式）
	10. 发布订阅设计模式的项目使用场景
	11. pdf导出相关

## 三、浙江大华(一面过，薪资给不到二面直接不约...)

- 一面
	1. 自我介绍
	2. 盒模型
	3. 垂直居中的方法
	4. 说一下bfc
	5. 怎么理解作用域
	6. 你怎么看this指向
	7. 深浅克隆
	8. es6常用方法
	9. 说一下promise
	10. promise.all 是怎么用
	11. js事件循环
	12. 说一下 TCP 握手
	14. 跨域
	15. vue 组件通讯
	16. vue diff 算法
	17. vue2 缺点
	18. vue2/vue3 对比
	19. nodejs（...没怎么接触，只用常见api写过脚本）
	20. jspdf,html2canvas 场景问题

- 总结：
	- 盒模型说的不够清晰
	- bfc触发的方法记得不牢固
	- 垂直居中（不知道宽高）只说了flex，(提示了还有 绝对定位也没想到)
	- diff算法 vue3的没理清，只提到 最长递增子序列算法


## 四、暗物智能

- 一面
	1. node-pdf 的批量导出怎么做任务调度的
	2. 可视化编辑平台你提到的业务复杂点，你说一个最复杂的点？
	3. 你怎么解决的？
	4. 监控sdk监控哪些数据？
	5. 怎么上报的？
	6. 上报时机怎么决定？（再次提到任务调度）
	7. react fiber

	8. css权重（说了排序，说了相加规则）
	9. 垂直居中（说了3个）
	10. css动画相关属性
	11. 动画结束事件
	12. vue2 & vue3
	13. 缓存
	14. 跨域
	15. jsonp实现原理
	16. http2的优化
	17. https（场景题，给了个链接，问传到后端看到的是怎样的链接）

- 总结
	- 任务调度啥玩意？没怎么接触过
	- 监控的上报方式和时机再理一遍
	- jsonp实现原理实现一遍


## 五、快决测

- 一面

- 二面（主要就聊聊项目）

## 六、CVTE

- 一面
	1. 介绍你最有挑战，最复杂的项目（万花筒）
	2. 当时这个项目架构层面有什么考虑（X）
	3. 除了说刚毕业做该项目有挑战，以及单向数据流的数据层面的设计思想，整体项目架构有没有思考
	4. 你工作过程中遇到的比较棘手的点（提示说可以从大层面也可以从小层面展开说）
	
	5. 闭包理解？
	6. 闭包的优点？
	7. 访问函数内部作用域变量为什么一定要用闭包，我用别的方法不行吗？（面试官想问闭包能让变量累加,compose函数）
	8. 为什么闭包会造成内存泄漏？
	9. 内存泄漏时闭包内部的引用关系是怎样的（X）
	10. 怎么判断 基础数据类型和引用数据类型（√）
	11. typeof 和 instanceOf 的实现原理（√）
	12. 为什么 typeof null === 'object'（只回答历史遗留问题，没回答上历史当时怎么让他等于 object 的）

	13. loader 是在什么时候加载的？（回答模块解析的时候）
	14. 构建流程
	15. 有自己写过 plugin 吗？

	16. [代码题] --- 数据劫持，要求可以监听属性的 获取/修改/删除
	17. [代码题] --- 异步代码同步输出 （不可以用async await）
	
	18. `Vdom 的优点`（回答了跨平台和方便diff，漏说减少操作真实dom减少回流重绘）
	19. diff 的过程？(v2双端，v3快速)  （√）
	20. vue3的diff是怎么运用了 最长递增子序列算法？（只回答最后快速diff完还没结束，就会引入最长递增子系列算法）
	21. vue3的diff有个标记提升的优化你知道吗？（这里说了vue3 4个优化）（√）
	22. 微前端怎么进行样式隔离（shadow dom 和 类名加前缀）（√）
	23. 三次握手中 ACK 报文干什么用的？（√）
	24. 为什么 ACK 报文的响应 ack 是 SYN报文序列 seq + 1？ 
	25. 为什么是三次不是2次或4次（√）
	26. 哪次握手最容易受到攻击？（X）

	```js
		window.doFetch = function () {
			return new Promise((resolve, rejected) => {
				setTimeout(() => {
					resolve('收到数据了...')
				}, 2000)
			})
		}
		function getHttpData() {
			doFetch()
		}
		function getData() {
			getHttpData().
		}
		function getResult() {
			const data = getData()
			console.log('-getResult-->', data);
			return data;
		}
		getResult() 

		// TODO：希望执行getResult()，可以答应  收到数据了

- 二面
	1. 说一说你这个微前端项目
	2. 你参与了技术选型吗？当时如何抉择的？
	3. 为什么现在觉得 microApp 比 qiankun 好？
	4. 平时有学习源码吗？
	5. 说说你对 qiankun 中的 import-html-entry 的理解？
	6. 它不处理行内的 css 和 js 吗？
	7. 如果 js 加了 async 标签他是怎么加载的？
	8. defer 是在哪个生命周期执行 js？
	9. chrome 浏览器最多发送几个请求？
	10. 说一说你这个项目中封装 axios 做了什么事情？
	11. 如果发送一个请求，没有设置 content-type，也没有任何请求和响应拦截，那你能发送和接收数据吗？接收到的是什么类型的数据？
	...
	12. 代码题，对象数组转树状结构

## 知识薄弱点

- webpack 不够深入
	- 工作机制
	- plugin 和 loader
	- 实际的插件和loader开发

- 浏览器相关
	- 渲染机制
	- 垃圾回收
	- 缓存（√）
	- 进程/线程
	- 跨域

- 网络（√）
	- http
	- https
	- tcp
	- 安全





## 可能高频问题

### 基础

1. 跨域
> 重点了解 jsonp 实现方式

2. 缓存
> 强缓存 / 协商缓存 / 启发式缓存

3. 事件循环
> 重点记得提及node事件循环

4. 异步编程

5. vue 相关（请反复多次口述练习）

> **响应式原理**  
- vue 的响应式原理是通过 `数据劫持`和 `发布订阅` 实现的

- 首先 vue 会利用 `definedProperty / proxy` 对数据进行劫持，拦截 `getter` 和 `setter` 方法
	其中，在 `getter` 时 `收集数据依赖`，在 `setter` 中 进行 `订阅通知`

- **具体的整个流程如下：**
	1. 首先就是对数据进行劫持，且创建了一个 `dep`（**依赖收集器,用于收集他的依赖 watcher**）
	2. 在 vue `模板编译` 的过程中，如果遇到了 `响应式数据`,会创建一个 `Watcher`,并把当前当前数据相关的视图更新的方法以 `cb` 回调函数的方式传入 `Watcher` 类
	3. 在 new watcher 过程中，会 把 `Dep.target` 指向当前 `watcher` 实例，然后触发 数据的 `读(getter)` 操作，还会把 `视图更新的方法cb` 作为 `watcher的update` 方法
	4. 此时就会触发数据的 getter 熟悉，且通过了 `if(dep.target)` 判断，因此该 `watcher` 被 `dep` 收集（**让响应式数据知道他有哪些观察者，后续数据变化后，好通知这些watcher**）
	5. 然后数据发生变化，触发数据的 `setter`，调用数据的 `dep.notify`,通知所有的依赖更新
	6. `dep.notify` 其实就是遍历每一个 `watcher` 然后执行 `watcher.update()`
	7. 其实就是执行了一开始 初始化的时候传入的 `视图更新方法cb`，达成视图更新



> **vue2 vue3区别**  
> 从项目架构、性能优化、代码体积 等方面切入  

### 项目

1. monorepo 理解

2. 谈谈对微前端的理解？市面上常见微前端方案？各框架之间的优劣？

> [理解](https://github.com/WillianLiusHao/mini-qiankun/blob/main/understand.md)  
	1.粉碎巨石应用，一个主应用 + 多个子应用  
	2.技术栈无关、独立部署和打包构建  
	3.团队协作，高效开发  
	4.轻量化迭代更新（假设以前用的JQ，现在要用React，以前就只能直接推翻重写。而用微前端的话，重写子应用就行，减少破坏的范围）

> 常见微前端  
	1.qiankun  
	2.wujie  
	3.micro-app  

3. js-entry vs html-entry

> JS Entry 的方式通常是子应用将资源打成一个 entry script，比如 single-spa 的 example 中的方式。但这个方案的限制也颇多，如要求子应用的所有资源打包到一个 js bundle 里，包括 css、图片等资源。除了打出来的包可能体积庞大之外的问题之外，资源的并行加载等特性也无法利用上。

> HTML Entry 则更加灵活，直接将子应用打出来 HTML 作为入口，主框架可以通过 fetch html 的方式获取子应用的静态资源，同时将 HTML document 作为子节点塞到主框架的容器中。这样不仅可以极大的减少主应用的接入成本，子应用的开发方式及打包方式基本上也不需要调整，而且可以天然的解决子应用之间样式隔离的问题(后面提到)

4. js沙箱是是怎么实现的？样式是怎么隔离的？

> js沙箱  
	1.proxy 沙箱 / 快照沙箱  
	2.eval / with，限定函数的作用域后执行代码  

> 样式隔离  
	1.shadow dom  
	2.加前缀  

5. 资源预加载怎么做的？
