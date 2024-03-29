# infinite-project

## lightning

### 1. 编辑页的设计，组件的设计，单向数据流？

### 2. jssdk：事件上报 / 错误监控 / 行为回溯

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
  - 活动页关键节点埋点（`定义一套固定的事件列表，每个组件通过可视化选择上报事件`）
  - 桑基图回溯
- 行为回溯
  - 录屏

### 3. 权限设计

   - 登录权限(单点登录)
   - 页面权限(路由控制)
     - 后端数据库存对应用户的路由权限，然后在全局的路由守卫中对页面进行过滤
   - 功能权限(`自定义指令 v-auth`)

### 4. husky（配置git 提供的提交时生命周期，限制提交的`分支`/`文件夹`）

   - `husky` - `hooks`
     - post-checkout
     - pre-commit
     - commit-msg
   - child_process - `spawn`：命令行执行库
   - chalk：输出带颜色的log
   - process：进程控制

### 5. 脚本（**建议单独写个小项目作为开发cli工具,涉及vue 的工作原理**）

   - 打包模板 yarn template
   - 启动模板 yarn serve
   - 打包项目 yarn build

### 6. 性能优化

   - **`性能优化常见手段`**
   - **`首屏优化： 关键渲染路径`**
     - 懒加载，预加载，代码压缩gzip
     - 性能优化指标（FP,FCP,LCP）

### 7. 打包资源上传 cdn webpack 插件


### 项目总结

#### 难点/亮点

> 1. **组件开发设计、组件数据处理（数据流问题）**

  - 组件的分类
    - 全局组件
    - 业务组件
      - 主体展示
      - 配置编辑器
      - 样式编辑器
    - 样式组件

> 2. **模板配置的变化追踪**

  - 对象的变化
    - 增
    - 删
    - 改
  - 数组的变化
    - 数组长度变化
    - 数组增删
    
> 3. **一次性能优化**

  - 优化 pdf和弹层组件（体积大大缩小）
    - pdf（展示的时候才进行转化和渲染）
    - 弹层组件（按需加载）


#### 待优化

#### 设计思路

#### 运作流程

#### 相关问题

> 当时为什么 sdk 不用开源的项目，要自己搞一个？

## desktop-micro

### 1. Monorepo
   - 优点
     - 易于代码复用：所有项目代码集中于单一仓库，易于抽离出共用的业务组件或工具
     - 易于依赖管理：依赖版本统一管理
   
   - yarn + workspace
     
     - 避免重复安装包，减少了磁盘空间的占用，并降低了构建时间；
     - 内部代码可以彼此相互引用
   
   - 配置
     
     - 根目录 package.json
       - `workspaces` 字段，定义哪个目录下为子项目
       - `private => true`，防止误将仓库发布
     - .eslintrc / .stylelintrc 等配置文件 下通过,根目录配置全局的一套方案，子应用通过 `extends` 字段获取父应用的相关配置

### 2. 复杂的权限设计

（主应用控制，进入主应用后，获取用户角色和权限列表和数据列表，过滤路由列表只渲染特定的页面和限制接口数据）
  - 应用权限
    - 逻辑定义上：角色的权限是固定的，由系统管理员规定，每个角色拥有不同的`应用权限`，如果某用户想拥有多个功能，则分配多个权限
    - 实现上：每个路由菜单和功能按钮会有 `路径path` 和 `唯一标识code`，统一成一个数组传到后端，这就决定了这个用户应用权限
      - 其中`路由菜单`通过 `beforeRouterEnter` 钩子过滤
      - `功能按钮`通过`自定义指令`实现
  - 数据权限
    - 数据权限是根这用户走的，每个用户的数据权限不一致，决定了该用户在同一模块下可见的数据（一般都是按自己的项目走)


### 项目总结

#### 项目难点、亮点

> 1. 基础建设上（组件的二次封装）

  - table 组件（保证通用性前提下的简易性设计，`个性化和通用性` 两者的权衡）
    - props: fields（搜索） / columns（表格列） / toolbar（拓展操作） / paging（分页） / api（数据获取）
    - event: `列排序` / `展开行` / `展开行二次排序`
  - 搜索条件组件
    - 类型多样：下拉(单选/多选/分组) / 输入 / 日期 / 城市选择
    - 数据预加载：把该用户下有权数据渲染到对应的组件选项中
    - 通讯：组件和表单组件的结合，怎么通讯更合适 

> 2. 业务上

  - 复杂度高（融合了公司核心业务后台，推到8年+的产品）
  - 数据量大（百万级别）
  - 功能性强（展开列/二次排序/自定义列/高级搜索等）
    - **高级搜索，动态渲染搜索表单**
      - 描述：活动默认可搜索的字段是固定的，需要具体搜索某个字段数据的时候需要使用到
      - 难点
        - 渲染方面（`动态渲染搜索表单`）
          1. 每个项目的字段是不同的，导致`可搜索的字段需要动态配置`（全放出来太多了，有100多个字段）
          2. 后端存储当前项目搜索字段的配置，后端返回后，前端要`动态渲染搜索表单`
          3. 如果字段是统一类型还好，但字段分为`6种类型(文本框、时间范围、城市选择、下拉框、值范围)`，不同类型要渲染不同组件（尤其时间范围和城市选择）
        - 传值方面（`数据处理`）
          1. 用户在不同类型表单组件输入值后，前端需要将值根据不同的表单类型按照不同处理方式，然后拼接上字段类型传给后端
    
    - **自定义列，动态渲染表格列**
      
      - 描述：表格会有默认的所有项目都存在的列字段，用户可以自定义要展示的列
      - 难点
        1. 字段不固定：列字段是后端返回的，不是固定的数据字典（不同项目活动字段不同）
        2. 字段渲染：配置好要展示的列后，列要怎么渲染是个头疼的问题
          - 将常规字段按照字段类型定义了内容渲染规则
          - 对所有特殊字段写了一份渲染规则
        3. 字段排序？存储？
          - 通过 sortable拖拽排序
          - 存储在 localstorage
        4. 列宽问题(渲染内容过长，不美观)
          - 处理完列数据后，在重新渲染表格的时候，遍历表格内容，获取字段列中最长的内容（根据中英文和数字分别计算长度，进而控制列宽）

#### 待优化

#### 设计思路

#### 运作流程

#### 相关问题

> Q1：Why not Iframe？
>    [Why Not Iframe？](https://www.yuque.com/kuitos/gky7yw/gesexv)

> Q2：复杂的权限设计？

分两大模块

- 应用权限
- 数据权限（贯穿所有应用，以企业为维度，不同的项目运营同学只看自己项目的数据）

用户的权限取决于角色的权限，角色的权限由树状结构存储(path,code,level)

路由由主应用控制，当请求获取到对应用户的权限后，动态渲染菜单

> Q3：讲一下为什么用微前端，qiankun的特性是什么，和其他微前端框架对比？

**微前端架构**

- HTML entry
- 沙箱
  + js 沙箱隔离
  + css 样式隔离
- 应用间通信
- 预加载

| 微前端框架                    | 原理                                       | 优点                             | 不足  |
| ------------------------ | ---------------------------------------- | ------------------------------ | --- |
| qiankun(ali基于single-spa) | 监听路由变化，渲染对应的子应用，进行挂载 | 1.单一子应用   2.子应用无法保活  3.接入适配成本高 |     |
| wujie(tencent)           |                                          |                                |     |
| micro-app(jd)            | **WebComponent**、CustomElement、ShadowDom |                                |     |

拓展：[**微模块**](https://eluxjs.com/designed/micro-module.html)


> Q4: why? 背景? 优缺点?

- 业务上：为了整合公司已有的众多后台管理系统，删减遗弃的系统功能，也为了梳理业务线条，统一化系统管理
- 技术上：为了后续新系统接入，兼容不同技术的系统，同时接触全新的 ts+vue3 技术体系

> Q5: 说说你对monorepo的理解？他的优缺点是什么？

A：传统的`mutirepo`是多项目多仓库，而`monorepo`是多项目单仓库，目前google,vue3,vite 这些知名开源项目都是采用这种方式进行管理。

- mutirepo的痛点
  - 代码复用：不利于 组件/工具函数/配置 的复用
  - 版本管理：同一个依赖，不同项目可能用了不同版本，每个项目都需要手动依次更新
  - 项目基建：CICD流程，发布部署，代码提交流程的不统一

## eams、uni-app、小蓝书、官网

`Vue3 + Ts + Vite + Pinia + echarts + Tailwindcss`

### 1. 制定代码和git规范(`standard` 规范)、自动化版本管理

  - git cz => Commitlint规范化提交格式 / cz-conventional-changelog(changelog生成)
  
  - standard-version => 根据提交信息，更新版本号，打tag
  
  - 代码规范(eslint检测 + vscode 插件自动格式化)
    
    - js: `Eslint`
    - html: `plugin:vue/vue3-essential`/`plugin:vue/recommended`、`@vue/standard`
    - ts: `@vue/typescript/recommended` 
    - scss: stylelint `stylelint-config-standard-scss`
  
  - git规范：格式化提交，自动化更新版本号及生成changelog
    
    - Husky(pre-commit/commit-msg/pre-push) + Lint-staged
    - Commitlint(git cz) + cz-conventional-changelog
    - standard-version：更新版本

### 2. **echarts封装**

### 3. pinia + 持久化存储(`pinia-plugin-persistedstate`)

### 4. 首屏加载优化

  - ngnix 开启gzip压缩
  - 前端 `compression-webpack-plugin` 插件压缩js和css

### 5. html2canvas pdfjs

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

### 6. 多请求下loading 的展示和关闭

  - 通过全局的 app.vue 中全局的 loading配合 axios 拦截器实现（`axios 中需要增加一个请求计数器`=> 统计所有发出的请求数，每完成一个减一，当且仅当计数为0的时候才关闭loading） 

### 7. 批量导出

  - 服务端导出实现逻辑
    1. 客户端导入报表(excel)，node 接口读取关键字段
    2. node 端通过 `puppeteer` 创建浏览器，访问线上小蓝书页面，`通过点击事件触发导出`。
    3. 客户端配合将pdf上传至 `oss` 服务器，生成线上链接，插入到页面中的节点属性中。
    4. node 通过获取浏览器节点的属性，得到pdf链接
  - 批量
    - promise 实现任务队列，控制并发数

### 项目总结

#### 难点

> pdfjs 导出 4、50页 的报告

  - 中文字体

  - 清晰度问题
  - 可否复制问题

  - **如何分页，何时截断**

    - 把 dom 细分到每个3级目录

    - 图片打印分类
      - 可复制的表（addTable 会自动换行）
      - 不可绘制的表（用图片打印，判断最后一个td 进行截断）
      - echart 分类（直接打印，单页装不下就换行）

    - 打印方法
      - 创建2个 canvas(1个装dom，另一个装截断的 dom)

#### 可优化
#### 设计思路
#### 运作流程
#### 项目背景
