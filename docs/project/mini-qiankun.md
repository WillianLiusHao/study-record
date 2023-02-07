# mini-qiankun

## registerApplication

注册子应用

## start

1. 监听路由变化
  
    - 针对两种路由模式改写api
        - 路由变化，需要卸载上个应用再加载下一个

2. 匹配路由应用

    - 根据activeRule 匹配子应用

3. 加载子应用

    - 请求 html，获取子应用入口模板
    - 获取 css、js，统一生成行内资源
    - eval 执行 js 资源

4. 渲染子应用

    - **获取子应用导出的 `bootstrap mount unmount` 等函数，执行**


获取子应用生命周期的两种方案
  
  1. 模块导出 + umd 规范

        ```js
          // src/main.js
          export async function bootstrap() { /*...*/ }
          export async function mount(props) { /*...*/ }
          export async function unmount(props) { /*...*/ }
        ```
        ```js
          // vue.config.js
          const packageName = require('./package.json').name;
          module.exports = {
            output: {
              library: `${packageName}-[name]`,
              libraryTarget: 'umd',
              jsonpFunction: `webpackJsonp_${packageName}`,
            }
          };
        ```
  

  2. 沙箱代理 + 挂在到全局上

        ```js
        在主应用执行完沙箱代理后，子应用将 `bootstrap mount unmount` 挂到window(实则是代
        理对象)上，供主应用获取
        ```
