# 工程化

## 1. npm run serve 的时候发生了什么？

npm i xxx 的时候，会在项目的 node_module 下对应的 xxx源码目录的package.json中创建bin字段，用于创建软连接

  1. npm run xxx，先从项目的package.json 的 script 中找到 xxx 对应的执行代码（如 npm run serve => vue-cli-serve serve）
  2. 在项目根目录的 node_modules/.bin 查找要执行的程序，如果找到则运行（.bin 中实际是一系列命令的脚本的软连接，会找到对应源码下的.bin目录执行）

## 2. webpack 工作流程是怎样的？

**核心任务：内容转化 & 资源合并**
  1. 初始化阶段
  2. 构建阶段
  3. 生成阶段

## 3. vite

**核心原理**


**优点**
  - 快速的冷启动： `no Bundle` 和 `Esbuild` 预构建，速度快于webpack
  - HMR: 基于ESM实现，同时利用HTTP头来加速整个页面的重新加载，增加缓存策略
  - 真正的按需加载: 基于浏览器ESM的支持，实现真正的按需加载

**HMR**
  - 核心流程
    1. 创建一个`websocket`服务端和client文件，启动服务
    2. 通过`chokidar`监听文件变更
    3. 当代码变更后，服务端进行判断并推送到客户端
    4. 客户端根据推送的信息执行不同操作的更新

## 4. 规范验证和代码格式化

  ![hooks](https://images.vrm.cn/ox/2022/10/20/hooks.png)
