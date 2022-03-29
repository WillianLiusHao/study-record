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

## 2022.03.18

1. TS： keyof、typeof、Required、Partial、Pick
2. interface 和 type 区别
	- type 不可重复声明，合并只能使用 &
	- interface可重复声明，且自动合并

3. 万花筒的socket

## 2022.03.27

1. Pinia
   - createPinia
   - storeToRefs：把 store 暴露的数据转为响应式的
   - $patch：批量更新数据


## 2022.03.28

1. <script setup>
	- no return
	- 组件自动注册，无需 components: {} 注册
	- defineProps / defineEmits
	- defineExpose
2. npm run dev 发生了什么？


## 2022.03.29

1. Pinia使用
2. 持久化存储(`pinia-plugin-persistedstate`)原理
	```js
	// src/index.ts
	function createPersistedState(factoryOptions = {}) {
    return function(context) {
         // context 拿到当前 store 的上下文
         var _a, _b, _c, _d;
         const {
             options: { persist },
             store
         } = context;
         if (!persist)
             return;
         const {
             storage = (_a = factoryOptions.storage) != null ? _a : localStorage,
             beforeRestore = (_b = factoryOptions.beforeRestore) != null ? _b : null,
             afterRestore = (_c = factoryOptions.afterRestore) != null ? _c : null,
             serializer = (_d = factoryOptions.serializer) != null ? _d : {
                 serialize: JSON.stringify,
                 deserialize: JSON.parse
             },
             key = store.$id,
             paths = null
         } = typeof persist != "boolean" ? persist : {};
         // 调用外部的传入的 hook: beforeRestore 函数，并将 context 传给外部
         // 外部定义的 beforeRestore 函数 可以对当前实例做修改
         beforeRestore == null ? void 0 : beforeRestore(context);
         
         // !!! 每次注册当前插件的时候，会把 storage 中的所有数据 通过 $patch 批量存入 store
         try {
             const fromStorage = storage.getItem(key);
             if (fromStorage)
                 store.$patch(serializer.deserialize(fromStorage));
         } catch (_error) {
         }
         
	      // 调用外部的传入的 hook: afterRestore 函数，并将 context 传给外部
         afterRestore == null ? void 0 : afterRestore(context);
   
         // !!! 订阅 vuex中的数据，每次store变化的时候，把新的数据存入 storage中
         store.$subscribe((_mutation, state) => {
             try {
                 const toStore = Array.isArray(paths) ? pick(state, paths) : state;
                 storage.setItem(key, serializer.serialize(toStore));
             } catch (_error) {
            }
	      }, { detached: true });
	  };
	}
	```


## todo

> js	
1. 0.1 + 0.2 === 0.3

> es6	
1. Promise 的使用及相关方法 / async await 的使用
2. SPA 理解

> 优化
1. **浏览器输入url到页面渲染发生了什么**
1. 关键渲染路径 CRP

> http
1. TCP三次握手

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
- CICD
- [x] Pinia
