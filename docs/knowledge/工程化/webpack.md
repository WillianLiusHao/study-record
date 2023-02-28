# Webpack

## 核心原理

## plugin

每个plugin 是一个类，提供 `apply`方法

webpack 在执行过程中会调用 `apply` 方法，且会将 `compiler` 实例传入

compiler 贯穿 webpack 的整个生命周期，会抛出一些生命周期的钩子，插件就可以 `在钩子上注册事件`

```js
apply(compiler) {
  compiler.hooks.done.tap('myPlugin', stats => {
    // ... do something
  })
}
```


## loader
