# Webpack

## 工作流程

### 1.初始化阶段

- 初始化参数：从`配置文件`、`配置对象` 和 `Shell 参数` 中读取并与默认参数进行合并，组合成最终使用的参数。
- 创建编译对象：用上一步得到的参数创建 **Compiler 对象**。
- 初始化编译环境：包括注入内置插件、注册各种模块工厂、初始化 RuleSet 集合、加载配置的插件等。

### 2.构建阶段

- 开始编译：执行 Compiler 对象的 `run` 方法，创建 Compilation 对象。
- 确认编译入口：进入 entryOption 阶段，读取配置的 Entries，递归遍历所有的入口文件，调用 Compilation.addEntry 将入口文件转换为 Dependency 对象。
- 编译模块（make）： 调用 normalModule 中的 build 开启构建，从 entry 文件开始，调用 loader 对模块进行转译处理，然后调用 JS 解释器（acorn）将内容转化为 AST 对象，然后递归分析依赖，依次处理全部文件。
- 完成模块编译：在上一步处理好所有模块后，得到模块编译产物和 `依赖图谱`。

### 3.生成阶段

- 输出资源（seal）：根据入口和模块之间的依赖关系，组装成多个包含多个模块的 Chunk，再把每个 Chunk 转换成一个 Asset 加入到输出列表，这步是可以修改输出内容的最后机会。
- 写入文件系统（emitAssets）：确定好输出内容后，根据配置的 output 将内容写入文件系统。


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
