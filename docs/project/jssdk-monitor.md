## 监控js-sdk

### 数据采集

  - 错误监控
    - 资源错误
    - js错误
    - 请求错误
  - 性能监控
    - 页面加载速度
    - 首屏渲染时间
  - 行为监控
    - PV,UV
    - 页面停留时长
    - 事件上报（自定义统计事件）
    - 页面跳转
    - 行为回溯（桑基图，录屏）

### 数据上报




#### 错误监控

#### 性能监控

##### 性能指标

- FP(first-paint)，从页面加载开始到第一个像素绘制到屏幕上的时间
- FCP(first-contentful-paint)，从页面加载开始到页面内容的任何部分在屏幕上完成渲染的时间(**<=1.8s**)
- LCP(largest-contentful-paint)，从页面加载开始到最大文本块或图像元素在屏幕上完成渲染的时间(**<=2.5s**)
- CLS(layout-shift)，从页面加载开始和其生命周期状态变为隐藏期间发生的所有意外布局偏移的累积分数

  ```js
  const observer = new PerformanceObserver(list => {
    for(let entry of list.getEntries()) {
      if(entry.name === 'first-paint') {
        observer.disconnect()
      }
      console.log(entry)
    }
  })

  observer.observe({ type: 'paint', buffered: true })
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

##### 首屏渲染时间

计算过程：

1. 利用 MutationObserver 监听 document 对象，每当 DOM 元素属性发生变更时，触发事件。
2. 判断该 DOM 元素是否在首屏内，如果在，则在 requestAnimationFrame() 回调函数中调用 performance.now() 获取当前时间，作为它的绘制时间。
3. 将最后一个 DOM 元素的绘制时间和首屏中所有加载的图片时间作对比，将最大值作为首屏渲染时间。

```js
const observer = new MutationObserver(mutations => {
  for(const mutation of mutations) {
    if(isInScreen(mutation)) {

    }
  }
})
```





参考 [mitojs](https://github.com/mitojs/mitojs)
参考 [monitor-demo](https://github.com/woai3c/monitor-demo)
