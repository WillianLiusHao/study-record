## 2022.02.21

1. 阅读 vue3 源码 reactivity 包的依赖收集和更新的逻辑

2. 网络安全相关知识: xss 和 csrf 等 (√)

3. 回顾 浏览器缓存(重点是相应字段及其特点) (√)

	- cache-control: max-age/no-store/no-cache
	- expires: 时间戳
	- etag/if-none-match
	- last-modified/since-last-modified

4. 状态码 (√)

	- 200: 成功
	- 206: 断点续传，视频大文件上传
	- 301: 永久
	- 302: 临时
	- 304: 协商
	- 400: 请求参数错误
	- 401: 无权访问
	- 403: 拒接请求, 如需内网访问但是用了外网访问
	- 404: 资源找不到
	- 500: 服务器内部错误
	- 504: 网管超时

5. http 和 https 的区别/ http1.0 1.1 2.0 区别 (x)

## 2022.02.22

1. 过一遍 TS 文档(https://ts.xcatliu.com/) (√)

	> 基础

	- 类型断言 (值 as 类型 或 <类型>值)
	- 泛型(T)
	- 联合类型(|)
	- 函数重载

	> 进阶

	- 类型别名 & 字符串字面量类型
	- 类
	- 接口

2. 复习 xss 和 csrf 等 (x)

3. http 和 https 的区别 / http1.0 1.1 2.0 区别 (x)

4. bind_call_apply 区别 (x)

5. 位运算的原理及运用场景 (√)
	- (vue3 和 react 源码都有使用,判断节点类型)
	- 权限控制 (|赋予权限, &权限校验)

## 2022.02.23

1. webpack (√)
	- 阅读文档，了解 plugin 运行机制及编写方法
	- vue-cli serve 插件(vue-cli-infinite-plugin 源码阅读)

## 2022.03.02

1. 述职(P5-)
2. 刷算法
	- dp: 打家劫舍、爬楼梯

## 2022.03.03

1. 刷算法
	- dp: 不同路径、买卖股票时机、剪绳子、跳跃游戏
2. 复习 bind/call/apply 不同及实现 (√)
3. new 实现 (√)
	- 新建对象 -> 原型链 -> 绑定 this -> 判断返回

## 2022.03.04

1. 浏览器本地缓存 (√)
	- 区别：大小、何时失效、和服务器的交互方式
	- cookie: 4kb、过期时间、会自动携带都服务器
	- localStorage: >= 5M、手动删除、不会
	- sessionStorage: >= 5M、页面关闭、不会
2. 深浅克隆 (√)
	- 注意了解各种数据类型的存储方式，及如何判断
	- 深克隆用递归
3. 函数柯里化 (√)
4. 数据类型 (√)
	- 基本(栈)
		- Number
		- String
		- Boolean
		- Null
		- Undefined
		- Symbol
		- BigInt
	- 复杂(堆)
		- Object(Array, Function)
5. 事件委托
	- 事件流三个阶段： 捕获阶段 -> 目标阶段 -> 冒泡阶段
	- 使用 event.target 获取事件触发位置

## 2022.03.16

1. cookie
	- 相关字段
		- key
		- value
		- **httpOnly**
		- **sameSite**
		- path
		- domain
	- 如何删除 cookie ？

## todo
> js	
1. 0.1 + 0.2 = 0.3

> es6	
1. Promise 的使用及相关方法 / async await 的使用
2. SPA 理解

> node	
1. nodejs 核心 API
	- stream
	- buffer
	- fs
	- path

> webpack	
1. 有哪些常用loader
2. Code Splitting

> 尝鲜
- Graphql
- DevOps
