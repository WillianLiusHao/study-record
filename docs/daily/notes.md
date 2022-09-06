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
	- 504: 网关超时

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


## 2022.03.30

1. 最大子数组和（no.53）
2. 二叉树的中序遍历 (no.94)


## 2022.04.28

1. try catch 不可return阻止代码继续执行
2. axios 中的 request 中可通过 cancelToken 字段取消请求
3. **对称二叉树** （双指针同时移动）
4. **二叉树的最大深度** (递归，类似动态规划的思想，找出状态转移方程)


## 2022.05.26

1. npm run serve 的时候发生了什么？


## 2022.06.02

1. 可选链操作符移动端有兼容性问题（ios >= 13.4）
		可通过babel 插件进行兼容处理
3. http 缓存
   - 强缓存
     - Expires（http1.0）：绝对时间，时间戳
     - Cache-control（http1.1）：相对时间，秒
   - 协商缓存

## 2022.06.27

1. uni-app 生命周期的选择，navigateTo 不会销毁原来的组件(选用`onHide`)，navigateBack 会销毁(选用`onUnload/onMounted`)


## 2022.07.11

1. node 启动浏览器，利用 `puppeteer` 访问浏览器页面，并进行人为导出
2. 并发请求处理，利用 queue 队列控制最大并发量（`重点是queue的实现逻辑，及on关键字实现事件监听`）


## 2022.07.12

1. 关于循环中的异步函数
	- forEach 中不会等待异步任务的回调结果，而是直接获取到 undefined 的回调结果（即forEach是`并行`的，无法通过某个异步回调跳出循环）
	- for, for of 等是会等待异步回调的，（即是`串行`的，可通过本次循环的异步回调结果跳出循环）



## 这里开始按周记录，便于周末回顾巩固相关知识点

### 2022.08.08 - 2022.08.14

**知识点**

- 页面从输入URL到展示

**算法**

- 滑动窗口
	- [x] [5.最大不重复子串]()
	- [x] [209.长度最小的子数组](https://leetcode.cn/problems/minimum-size-subarray-sum/)

- [LRU 算法详解](https://github.com/labuladong/fucking-algorithm/blob/master/%E9%AB%98%E9%A2%91%E9%9D%A2%E8%AF%95%E7%B3%BB%E5%88%97/LRU%E7%AE%97%E6%B3%95.md)

- 二分法

- **深刻理解二叉树的遍历算法**

```js
/* 二叉树遍历框架 */
void traverse(TreeNode root) {
	// 前序遍历
	traverse(root.left)
	// 中序遍历
	traverse(root.right)
	// 后序遍历
}
```

> 诸多常见算法其实都是树的遍历问题

- 前序遍历：先主逻辑、再递归
	- `快排`：排序后（`主逻辑`）再进行(`递归`)对左右区间排序

- 后续遍历：先递归、再执行主逻辑
	- `归并`：不断分区间（`递归`）再合并区间排序（`主逻辑`）
	- `分治`
	- `回溯`

**项目**

- 监控sdk


### 2022.08.15 - 2022.08.21

**知识点**

1. 原型链、new、继承

2. [ ] eventloop、promise、nextTick

3. [ ] http缓存，js内存存放，垃圾回收机制

**算法**

1. 前缀和
	- [x] [560.和为k的子数组](https://leetcode.cn/problems/subarray-sum-equals-k/)
2. 滑动窗口的框架及注意事项
```js
// 框架
function slideWindow() {
	// 1. 初始化左右指针，左闭右开，指向0
	// 2. 扩大窗口，直至满足条件 
	right ++
	// 3. 缩小窗口, 找到最小窗口，比较并更新
	while(满足条件) {
		left++
		if(right - left < min) {
			min = right - left
		}
	}
	// reutrn：当right = arr.length-1，且left缩到最小的时候，返回最小窗口
}
```


### 2022.08.22 - 2022.08.26

**知识点**

- Vue3 响应式原理

	- 核心API：`Effect`
	
		简单来说我们所有模版（组件）最终都会被 effect 包裹 ，当数据发生变化时 Effect 会重新执行，所以 vuejs 中的响应式原理可以说是基于 effect 来实现的 。

		当然这里你仅仅需要了解，最终组件是会编译成为一个个 effect ，当响应式数据改变时会触发 effect 函数重新执行从而更新渲染页面即可。

**算法**

**项目**

- [vite-plugin-generate-routes](https://github.com/WillianLiusHao/vite-plugin-generate-routes)

- [mini-webpack](https://github.com/WillianLiusHao/mini-webpack)



### 2022.08.29 - 2022.09.02

**知识点**

1. webpack中配置loader的三种方式
	- 绝对路径：直接用path.resolve写loader的绝对路径
	- resolveLoader.alias：定义单个loader的路径
	- resolveLoader.modules：定义所有loader查找目录（默认是node_modules）

2. `pitch loader` 的熔断效果

**算法**

**项目**

1. vite 源码学习

- [x] vite hmr 原理
- [x] vite 启动原理
- [x] vite 预构建原理？？？(好复杂)



依赖预构建

- why？
  - 兼容：开发阶段中，vite会把所有的模块视为 ES 模块，所以需要先将CommonJS 和 UMD 发布的包转成 ESM
  - 性能： Vite 将有许多内部模块的 ESM 依赖关系转换为单个模块，以提高后续页面加载性能。
- when？
  - 首次会进行依赖预构建，构建的依赖会存到 `node_modules/.vite` 中
  - 当依赖发生变化时，如
    - package.json 的 dependencies 列表
    - 各类包管理器的 lockfile，package-lock.json / yarn.lock
    - vite.config.js 配置过的
- 缓存
	- 构建后的依赖以 HTTP 头 `max-age=31536000,immutable` 强缓存




### 2022.09.05 - 2022.09.09

**知识点**

**算法**

**项目**

