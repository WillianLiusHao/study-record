# 监控js-sdk

## 一、采集数据

### 1. **错误数据**

  > 页面地址、错误时间、设备信息`navigator.userAgent`、错误`uid`
  > 这些数据是每个错误类型都会上报的

  - JS 脚本执行错误
      - **报错信息**
      - ip地址
      - `错误堆栈信息`
  - 资源请求错误
      - 资源地址
      - 类型：img / link
  - 接口请求错误
      - 接口地址
### 2. **性能数据**

  - 页面加载时间：
  - 首屏渲染时间：`LCP`

### 3. **用户行为数据**

  - PV、UV、IP
  - 均停留时长
  - 链接来源 `document.referrer`
  - 自定义的埋点事件

  *- 注册量（结合了IC注册数据）*  
  *- 转化率、跳出率（结合IC注册数据）*

## 二、数据上报

> 部分数据会立刻上报，如：`PV`, `UV`, `IP`, `错误信息` 等

> 部分数据会先缓存，带特定时期上报：如 `自定义的埋点事件`（需形成事件队列），`停留时长`（需持续记录）

### 1. 错误监控

**JS 执行错误**：通过 `window.onerror` 捕捉

**资源请求错误**：通过 `addEventListener('error', callback, true)` 在捕获阶段捕捉资源加载失败错误。

**接口请求错误**：改写浏览器内置的 `XMLHttpRequest` 和 `fetch`


### 2. 性能监控

`Performance timing`
![](../../assets/performanceAPI.png)

**性能指标`Performance API`**

- FP(first-paint)，从页面加载开始到第一个像素绘制到屏幕上的时间
- FCP(first-contentful-paint)，从页面加载开始到页面内容的任何部分在屏幕上完成渲染的时间(**<=1.8s**)
- LCP(largest-contentful-paint)，从页面加载开始到最大文本块或图像元素在屏幕上完成渲染的时间(**<=2.5s**)
- CLS(layout-shift)，从页面加载开始和其生命周期状态变为隐藏期间发生的所有意外布局偏移的累积分数

  ```js
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntriesByName('first-paint')) {
        console.log('fp', entry);
      }
    }).observe({ type: 'paint', buffered: true })
  ```

  得到如下结果

  ```js
  {
    duration: 0,
    entryType: "paint",
    name: "first-paint",
    startTime: 2241.5, // fp 时间
  }
  ```

**白屏时间**

方案1：性能指标的 FP  
方案2：`performance.timing.domLoading - performance.timing.navigationStart`

**首屏时间**

方案1：直接使用 LCP  
方案2：通过 MutationObserver 进行手动计算

计算过程：

1. 利用 MutationObserver 监听 document 对象，每当 DOM 元素属性发生变更时，触发事件。
2. 判断该 DOM 元素是否在首屏内，如果在，则在 requestAnimationFrame() 回调函数中调用 performance.now() 获取当前时间，作为它的绘制时间。
3. 将最后一个 DOM 元素的绘制时间和首屏中所有加载的图片时间作对比，将最大值作为首屏渲染时间。


- [相关文章1](https://juejin.cn/post/7035647196510814221)  
- [woai3c](https://github.com/woai3c/Front-end-articles/issues/26)


### 3. 行为监控


**PV/UV/IP**

- pv 是`前端`需要收集并上传的  
- uv 是`后端`通过 pv 结合 `ip 和 用户标识` 进行统计
- ip 是`后端`通过用户 `ip` 做唯一标识

**停留时长**：`onBeforeunload` 时上报

**自定义的埋点事件**

并非用户的所有时间都会进行收集上报，只有`埋了点的位置` 或 `手动触发了上报事件`，才会捕获并上报事件

通过归类一套`按组件来分层级`的树状事件代码，进行埋点



## 三、项目总结

对标产品：友盟，百度统计

### 背景

- `错误监控`：之前的营销页面，线上出错无法及时知道，更多时候是人为的方式站岗放哨，导致生产报错，白白花了投放经费

- `性能监控`：对页面的性能好坏没有定量评价，都是人为测试凭感觉定性

- `埋点/行为回溯/录屏 rrweb`：对用户的具体行为无感知，不知道具体用户操作行为，浏览习惯，爱好，页面素材效果等

**功能**

- **邮件通知项目经理页面生产出错：页面js错误单位时间达到一定量，且一段时间无新的注册数据**

- **行为回溯 / 录屏**

- **大屏看板**
  - `访客 / 注册 / 健康状况 排行榜`
  - 用户城市分布
  - 公司营销数据概览，PV/UV/IP 的 今昨日对比

### 难点，亮点

#### 1.数据的有效和精确性（网络延迟，数据丢失，未上报等问题）

> 关键点  
> 上报策略：上报方式、上报时机

- 上报方式：sendBeacon + XMLHTTPRequest 降级上报
  1. **sendBeacon（首选，异步、保证数据的可靠，不影响页面性能）**
  2. XMLHttpRequest
  3. img

- 上报时机
  1. 采用 `requestIdleCallback/setTimeout`延时上报（requestIdleCallback 会在浏览器空闲时调用）
  2. 在页面关闭前 `beforeunload` 回调函数里上报
  3. `缓存上报`数据，达到一定数量后再上报

#### 2. 错误数据去重

- 错误上报数据去重
  1. 客户端基于错误的堆栈信息，生成错误的唯一ID，上报时去重

- 错误数据聚合 
  1. 服务端汇总整理数据的时候，通过错误唯一ID进行聚合统计

#### 3. sdk隔离 

​ `try catch`：防止 sdk 的报错反而影响了页面的运行

#### 4. 客户端和服务端的时间校对

  在请求sdk的时候，通过返回的响应头的 `date` 字段，确定客户端和服务器端的时间差
  
---

参考：[说说前端监控平台/监控SDK的架构设计和难点亮点？](https://juejin.cn/post/7108660942686126093)

### 相关问题

**优化**

1. 如何把 sdk 做成跨平台可用的

思考方向：`分平台打包`

2. 如何把 sdk 做的更加通用化，并且在业务需要的时候可以快速拓展和定制

思考方向：`插件化`

---

问jh：

1. uv 是怎么统计的？用户id生成规则是？存在cookie吗？
2. 错误信息的堆栈是没有进行进一步分析的是吧？是用全部错误信息生成错误id然后进行分类统计吗？
3. 行为回溯？
4. 项目难点？亮点？


参考资料：
- [一文摸清前端监控实践要点](https://juejin.cn/column/7097156230489047047)
