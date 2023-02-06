(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{220:function(t,e,r){"use strict";r.r(e);var s=r(6),a=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"mini-router4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mini-router4"}},[t._v("#")]),t._v(" mini-router4")]),t._v(" "),e("ul",[e("li",[t._v("先看一下 vue-router4 怎么创建路由和挂载的")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createRouter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" createWebHistory "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-router'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRouter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("history")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWebHistory")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  routes\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("router"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[e("code",[t._v("createRouter")]),t._v(" 是创建路由的主函数")]),t._v(" "),e("ul",[e("li",[t._v("history: 代表了不同的路由模式，通过不同的 API 创建")]),t._v(" "),e("li",[t._v("routes: 路由配置")])]),t._v(" "),e("p",[t._v("router 对象通过提供 "),e("code",[t._v("install")]),t._v(" 方法，供 "),e("code",[t._v(".use")]),t._v(" 函数使用，同时把 router 实例 "),e("code",[t._v("挂载到app")]),t._v(" 上")]),t._v(" "),e("h3",{attrs:{id:"核心原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#核心原理"}},[t._v("#")]),t._v(" 核心原理")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyRouter")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("currentRoute")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Function\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("replace")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Function\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("go")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Function\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("back")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Function\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("forward")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Function\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("install")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局 router 对象")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("_router")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MyRouter\n")])])]),e("blockquote",[e("p",[t._v("全局的 router 对象上的 "),e("code",[t._v("currentRoute")]),t._v(" 用于控制和记录当前路由页，每次调用页面变化的 API 时，都需要对该值进行更新")])]),t._v(" "),e("h4",{attrs:{id:"createwebhistory-base-string"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#createwebhistory-base-string"}},[t._v("#")]),t._v(" createWebHistory(base: string)")]),t._v(" "),e("ul",[e("li",[t._v("@params\n"),e("ul",[e("li",[t._v("base：基础路径")])])])]),t._v(" "),e("p",[t._v("初步创建 router 对象，定义 router 上的一些方法（"),e("code",[t._v("push")]),t._v("、"),e("code",[t._v("replace")]),t._v("、"),e("code",[t._v("go")]),t._v("等）")]),t._v(" "),e("p",[t._v("而这些方法都是通过调用 "),e("code",[t._v("window.history")]),t._v(" API，（"),e("code",[t._v("history.pushState")]),t._v("、"),e("code",[t._v("history.replaceState")]),t._v("、"),e("code",[t._v("history.go")]),t._v("）")]),t._v(" "),e("h4",{attrs:{id:"createwebhashhistory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#createwebhashhistory"}},[t._v("#")]),t._v(" createWebHashHistory")]),t._v(" "),e("ul",[e("li",[t._v("先对 base 路径做 '#' 处理")]),t._v(" "),e("li",[t._v("处理完后，调用 "),e("code",[t._v("createWebHistory")]),t._v(",并传入处理后的 base")])]),t._v(" "),e("h4",{attrs:{id:"createrouter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#createrouter"}},[t._v("#")]),t._v(" createRouter")]),t._v(" "),e("ul",[e("li",[t._v("处理 路由API")]),t._v(" "),e("li",[t._v("处理 路由钩子")]),t._v(" "),e("li",[t._v("监听 "),e("code",[t._v("popstate")]),t._v(" 页面变化事件，页面改变后更新 "),e("code",[t._v("currentRoute")]),t._v(" 值")])]),t._v(" "),e("p",[t._v("最后返回一个包含所有的 router 实例")]),t._v(" "),e("h4",{attrs:{id:"userouter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#userouter"}},[t._v("#")]),t._v(" useRouter")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Returns the router instance. Equivalent to using `$router` inside\n * templates.\n */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("useRouter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("inject")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("routerKey"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ul",[e("li",[t._v("在app.use 挂载时，会调用 "),e("code",[t._v("app.provide(routerKey, router)")]),t._v(",把 "),e("code",[t._v("router")]),t._v(" 通过 vue实例传递下去")]),t._v(" "),e("li",[t._v("调用 useRouter时，则会通过 "),e("code",[t._v("inject")]),t._v(" 接受全局router实例")])]),t._v(" "),e("h3",{attrs:{id:"核心组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#核心组件"}},[t._v("#")]),t._v(" 核心组件")]),t._v(" "),e("p",[t._v("组件是在 router 的 "),e("code",[t._v("install")]),t._v(" 方法中，通过 "),e("code",[t._v("app.component(RouterView)")]),t._v(" 进行全局注册组件 "),e("code",[t._v("RouterView")])]),t._v(" "),e("ul",[e("li",[t._v("router-view")])])])}),[],!1,null,null,null);e.default=a.exports}}]);