# infinite-project

## lightning

`Vue2 + Element-Ui`

1. - [ ] 单向数据流？ (编辑组件的设计)

2. - [ ] jssdk：事件上报 / 错误监控 / 行为回溯

	- 错误监控
		- 脚本执行报错
			- 报错信息
			- 报错次数
			- 设备类型(android / ios)
		- 资源加载报错
			- 资源的地址
			- 资源的类型
			- 报错次数
		- 接口请求报错
			- 接口地址
			- 页面加载速度
   - 事件上报
     - 活动页关键节点埋点
      ```js
         // 定义一套固定的事件列表，每个组件通过可视化选择上报事件
      ```
     - 桑基图回溯
   - 行为回溯
     - 录屏

3. - [x] 按钮级别权限控制
   - 登录权限(单点登录)
   - 页面权限(路由控制)
      - 后端数据库存对应用户的路由权限，然后在全局的路由守卫中对页面进行过滤
   - 功能权限(`自定义指令`)

4. - [x] husky？

5. - [x] 脚本
   - 打包模板 yarn template
   - 启动模板 yarn serve
   - 打包项目 yarn build

6. - [ ] 性能优化
   - **`性能优化常见手段`**
   - **`首屏优化： 关键渲染路径`**

7. - [x] websocket
   - 创建在 TCP 上的，全双工通信
   - http 1.1 / code: 101 / connection: upgrade / upgrade: websocket
   - new WebSocket(url)
   - ws.onpean / ws.onerror / ws.send / ws.**onmessage**
   - 流程
     - 进入编辑页 发送 join room，后端知道 当前房间 id 及所有的人的相关信息
     - leave room




## desktop-micro

`Qiankun + Vue3 + Tsx + Element-Plus`

1. why? 背景? 优缺点?
   - 业务上：为了整合公司已有的众多后台管理系统，删减遗弃的系统功能，也为了梳理业务线条，统一化系统管理
   - 技术上：为了后续新系统接入，兼容不同技术的系统，同时接触全新的 ts+vue3 技术体系


2. 难点？亮点？
   - [ ] 重点研究下 qiankun 框架的设计、功能、自己搭一个项目

3. **组件封装，api 封装**
   - [ ] table 组件
   - [ ] 搜索条件组件
   - 
4. 按钮级别权限控制（角色/用户/路由/功能）


**Q&A**
> Q1：Why not Iframe？
   [Why Not Iframe？](https://www.yuque.com/kuitos/gky7yw/gesexv)

> Q2：Why not micro-app？




## oms、eams

`Vue3 + Ts + Pinia + echarts + naiveui`

- [x] 格式化提交，自动化更新版本号及生成changelog
- [ ] 自动化测试(py)
- [x] **echarts封装**
- [x] pinia + 持久化存储(`pinia-plugin-persistedstate`)
- [x] 首屏加载优化
   - ngnix 开启gzip压缩
   - 前端 `compression-webpack-plugin` 插件压缩js和css
- [x] html2canvas pdfjs
   - 图片如何适配pdf大小
   - **页眉页码**
   - 清晰度问题：设置缩放比例，设置设备像素比
   - **！！分页处理**
      - 先将长图统一转成canvas
      - 然后通过固定的A4纸宽高（减去页眉页码），`新创建一个canvas`，用于`绘制当前页面的canvas`
      - 通过宽高和原始的canvas数据，对新创建的canvas进行数据填充
      - 一页页绘制
   - **！！！截断处理**
      - 获取长图的dom，在绘制当页canvas时，判断当前最后一个元素高度是否被截断，截断则将此元素放至下一页
   - **浏览器会限制最大的canvas高度(chrome: 16384px)** 
- [x] 多请求下loading 的展示和关闭
   - 通过全局的 app.vue 中全局的 loading配合 axios 拦截器实现（`axios 中需要增加一个请求计数器`=> 统计所有发出的请求数，每完成一个减一，当且仅当计数为0的时候才关闭loading） 

- [x] 批量导出
   - 服务端导出实现逻辑
      1. node 端通过 `puppeteer` 创建浏览器，访问线上页面，并`通过点击事件触发导出`。
      2. 客户端配合将pdf上传至 `oss` 服务器，生成线上链接，插入到页面中的节点属性中。
      3. node 通过获取浏览器节点的属性，得到pdf链接
   - 批量
      - promise 实现任务队列，控制并发数

- [ ] svg-icon 组件
   - use 标签

## eams 小程序 uni-app

- ucharts



## cms


1. cli
2. 丰富组件
3. 路由自动生成
