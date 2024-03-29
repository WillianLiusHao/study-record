# 性能优化

![页面加载优化](https://web.dev/fast/)
页面更新优化

1. 常见网站性能指标

- FP
- FCP
- LCP(Largest Contentful Paint)：显示最大内容元素所需时间 (衡量网站初次载入速度)
- CLS(Cumulative Layout Shift)：累计版面配置移转 (衡量网页元件视觉稳定性)
- FID(first Input Delay)：首次输入延迟时间 (衡量网站互动顺畅程度)

> FCP 首屏时间如何计算呢？

```js
performance.getEntriesByName('first-contentful-paint')[0].startTime
```

## 确认优化方向

  - 资源优化
    - 使用 Brotli 进行纯文本压缩（Brotli是一种最初由 Google 开发的压缩算法，提供优于 gzip 的压缩）
    - 图片
  - 构建优化
  - 传输优化
  - 网络优化

## 性能监控

  - 建立监控体系
  - 确定采集指标
  - 分析页面

## 浏览器渲染进程及工作流程

进程及主要职责

1. Browser Process 浏览器主进程
    - 负责地址栏，书签栏，刷新前进后退操作等界面交互，用户交互
2. Plugin Process 插件进程
    - 每种类型的插件对应一个进程,仅当使用该插件时才创建。
3. GPU Process
    - 最多只有一个,用于 3D 绘制等
4. Render Process 渲染进程
    - 称为浏览器渲染进程或浏览器内核,内部是多线程的。主要负责页面渲染,脚本执行,事件处理等。 

渲染进程（浏览器内核）

1. GUI 渲染线程
2. JS 引擎线程
3. 时间触发线程
4. 定时触发器线程
5. 异步 http 请求线程 

### 关键渲染路径 CRP

> 关键渲染路径是浏览器将 HTML，CSS 和 JavaScript 转换为屏幕上的像素所经历的步骤序列。
> 优化关键渲染路径可提高渲染性能。

关键渲染路径包含了

- 文档对象模型 (HTML -> DOM)
- CSS 对象模型 (CSS -> CSSOM)
- 渲染树 (DOM + cssom -> Render Tree)
- 布局 (Layout)
- 绘制 (Paint)

优化

1. 关键资源数： 通过异步重要资源的下载来减小请求数量
2. 关键字节数：优化必须的请求数量和每个请求的文件体积
3. 关键路径长度：通过区分关键资源的优先级来优化被加载关键资源的顺序，来缩短关键路径长度


## 一、Vue首屏加载速度优化

- vue-router 路由懒加载（利用 webpack 代码切割原理） `资源大小`
- gzip(webpack 和 nginx) `资源大小`
- UI 按需加载 `资源大小`
- cdn `资源加载速度`
- 资源缓存 `减少请求`
- SSR `减少请求`

