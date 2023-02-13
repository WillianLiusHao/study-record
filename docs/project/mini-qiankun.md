
# mini-qiankun

## [github](https://github.com/WillianLiusHao/mini-qiankun/blob/main/understand.md)

## 微前端的基本思路

1. 监听路由变化
  
    - 针对两种路由模式改写api
        - 路由变化，需要卸载上个应用再加载下一个

2. 匹配路由应用

    - 根据 activeRule 规则匹配子应用

3. 加载子应用

    - 请求 html，获取子应用入口模板
    - 获取 css、js，统一生成行内资源
    - 把子应用的容器挂载到主应用中
    - eval 执行 js 资源

4. 渲染子应用
    
    - **获取子应用导出的 `bootstrap mount unmount` 等函数，执行**


## 拓展

> 其实微前端框架就类比成一个 Vue 框架  

- 微前端子应用 => Vue 组件
- 微前端切换子应用 => Vue-router 路由
- 子应用生命周期 => 组件生命周期

