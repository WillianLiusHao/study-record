(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{208:function(t,a,r){"use strict";r.r(a);var v=r(6),s=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安全"}},[t._v("#")]),t._v(" 安全")]),t._v(" "),a("h3",{attrs:{id:"xss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss"}},[t._v("#")]),t._v(" XSS")]),t._v(" "),a("h4",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),a("p",[t._v("XSS 攻击指的是跨站脚本攻击，是一种代码注入攻击。攻击者通过在网站注入恶意脚本，使之在用户的浏览器上运行，从而盗取用户的信息如 cookie 等。")]),t._v(" "),a("h4",{attrs:{id:"分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分类"}},[t._v("#")]),t._v(" 分类")]),t._v(" "),a("ul",[a("li",[t._v("存储型（攻击代码存在数据库里）")]),t._v(" "),a("li",[t._v("反射型（攻击代码在URL里）")]),t._v(" "),a("li",[t._v("DOM型（恶意代码由浏览器执行，而存储和反射性都是服务端没有过滤的问题）")])]),t._v(" "),a("h4",{attrs:{id:"防御"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防御"}},[t._v("#")]),t._v(" 防御")]),t._v(" "),a("p",[a("strong",[t._v("从防止浏览器执行恶意代码")]),t._v("着手")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("预防存储型和反射型 XSS 攻击")]),t._v(" "),a("ul",[a("li",[t._v("改成纯前端渲染，把代码和数据分隔开。（SSR改为SPA）")]),t._v(" "),a("li",[t._v("对 HTML 做充分转义。")])])]),t._v(" "),a("li",[a("p",[t._v("预防 DOM 型 XSS 攻击(实际上就是网站前端 JavaScript 代码本身不够严谨，把不可信的数据当作代码执行了)")]),t._v(" "),a("ul",[a("li",[t._v("在使用 .innerHTML、.outerHTML、document.write() 时要特别小心，不要把不可信的数据作为 HTML 插到页面上，而应尽量使用 .textContent、.setAttribute() 等。如果用 Vue/React 技术栈，并且不使用 v-html/dangerouslySetInnerHTML 功能，就在前端 render 阶段避免 innerHTML、outerHTML 的 XSS 隐患")])])]),t._v(" "),a("li",[a("p",[t._v("CSP(Content Security Policy)")])])]),t._v(" "),a("h3",{attrs:{id:"csrf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csrf"}},[t._v("#")]),t._v(" CSRF")]),t._v(" "),a("h4",{attrs:{id:"概念-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念-2"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),a("p",[t._v("CSRF（Cross-site request forgery）跨站请求伪造：")]),t._v(" "),a("p",[t._v("攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的。")]),t._v(" "),a("h3",{attrs:{id:"类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型"}},[t._v("#")]),t._v(" 类型")]),t._v(" "),a("ul",[a("li",[t._v("GET")]),t._v(" "),a("li",[t._v("POST")]),t._v(" "),a("li",[t._v("链接类型，如a标签")])]),t._v(" "),a("h3",{attrs:{id:"防御-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防御-2"}},[t._v("#")]),t._v(" 防御")]),t._v(" "),a("ul",[a("li",[t._v("阻止不明外域的访问\n"),a("ul",[a("li",[t._v("同源检测")]),t._v(" "),a("li",[t._v("Samesite Cookie")])])]),t._v(" "),a("li",[t._v("提交时要求附加本域才能获取的信息\n"),a("ul",[a("li",[t._v("CSRF Token")]),t._v(" "),a("li",[t._v("双重Cookie验证")])])])])])}),[],!1,null,null,null);a.default=s.exports}}]);