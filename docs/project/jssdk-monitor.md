## 监控js-sdk

#### 数据采集

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

#### 数据上报




##### 错误监控

##### 性能监控

  - FP(first-paint)，从页面加载开始到第一个像素绘制到屏幕上的时间
  - FCP(first-contentful-paint)，从页面加载开始到页面内容的任何部分在屏幕上完成渲染的时间
  - LCP(largest-contentful-paint)，从页面加载开始到最大文本块或图像元素在屏幕上完成渲染的时间
  - CLS(layout-shift)，从页面加载开始和其生命周期状态变为隐藏期间发生的所有意外布局偏移的累积分数


参考 [mitojs](https://github.com/mitojs/mitojs)
参考 [monitor-demo](https://github.com/woai3c/monitor-demo)
