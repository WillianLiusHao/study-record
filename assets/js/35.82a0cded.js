(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{243:function(t,s,v){"use strict";v.r(s);var _=v(6),a=Object(_.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"浏览器安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器安全"}},[t._v("#")]),t._v(" 浏览器安全")]),t._v(" "),s("h2",{attrs:{id:"xss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss"}},[t._v("#")]),t._v(" XSS")]),t._v(" "),s("h3",{attrs:{id:"概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),s("p",[t._v("XSS 攻击指的是跨站脚本攻击，是一种代码注入攻击。攻击者通过在网站注入恶意脚本，使之在用户的浏览器上运行，从而盗取用户的信息如 cookie 等。")]),t._v(" "),s("h3",{attrs:{id:"分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分类"}},[t._v("#")]),t._v(" 分类")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("存储型")])])]),t._v(" "),s("ul",[s("li",[t._v("存储型的 XSS 将脚本存储到了服务端的数据库，然后在客户端执行这些脚本，从而达到攻击的效果。")]),t._v(" "),s("li",[t._v("常见的场景就是评论区提交一段脚本代码，如果前后端没有做好转义，存储到数据库后，在客户端渲染时直接执行；")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("strong",[t._v("反射型")])])]),t._v(" "),s("ul",[s("li",[t._v("反射形 XSS 攻击指的是恶意脚本作为请求URL的参数；浏览器解析后作为脚本执行，")]),t._v(" "),s("li",[t._v("之所以叫它反射型, 是因为恶意脚本是通过作为网络请求的参数出现在 url 中，经过服务器解析响应，拼接在 HTML 中传回给客户端，然后浏览器解析执行恶意脚本。")]),t._v(" "),s("li",[t._v("和存储型不一样的是，服务器并不会存储这些恶意脚本。")])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[s("strong",[t._v("文档型")])])]),t._v(" "),s("ul",[s("li",[t._v("文档形的 XSS 攻击其实也是恶意脚本被作为请求URL的参数；浏览器解析后作为脚本执行，和反射形的区别在于：由前端JS取出 URL 中的恶意代码并执行")])]),t._v(" "),s("h3",{attrs:{id:"防御"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防御"}},[t._v("#")]),t._v(" 防御")]),t._v(" "),s("p",[s("strong",[t._v("从防止浏览器执行恶意代码着手")])]),t._v(" "),s("ol",[s("li",[t._v("对用户的输入特殊字符进行 "),s("code",[t._v("转义和过滤")]),t._v("，例如： "),s("code",[t._v("<")]),t._v(" => "),s("code",[t._v("&lt")])]),t._v(" "),s("li",[t._v("对输出的内容进行 "),s("code",[t._v("转义和过滤")]),t._v("，对数据库返回的数据，前端在输出到页面时 进行一定的 "),s("code",[t._v("转义和过滤")])]),t._v(" "),s("li",[t._v("CSP（Content Security Policy）")]),t._v(" "),s("li",[t._v("HttpOnly：防止 "),s("code",[t._v("cookie")]),t._v(" 被 js 读取")])]),t._v(" "),s("h2",{attrs:{id:"csrf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf"}},[t._v("#")]),t._v(" CSRF")]),t._v(" "),s("h3",{attrs:{id:"概念-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概念-2"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),s("p",[t._v("CSRF（Cross-site request forgery）跨站请求伪造：")]),t._v(" "),s("p",[t._v("攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的。")]),t._v(" "),s("h3",{attrs:{id:"原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),s("p",[t._v("就是http请求会自动携带 Cookie，而且是 HTTP 目标请求域名的 Cookie")]),t._v(" "),s("h3",{attrs:{id:"防御-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防御-2"}},[t._v("#")]),t._v(" 防御")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Samesite Cookie")]),t._v("：该属性表示 Cookie 不随着跨域请求发送，可以很大程度减少 CSRF 的攻击")]),t._v(" "),s("li",[s("strong",[t._v("CSRF Token")])])]),t._v(" "),s("h2",{attrs:{id:"xss-和-csrf-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss-和-csrf-的区别"}},[t._v("#")]),t._v(" XSS 和 CSRF 的区别")]),t._v(" "),s("ul",[s("li",[t._v("两者的原理区别：CSRF 是利用 网站A 本身的漏洞，去请求 网站A 的 api。而 XSS 是向网站A 注入 JS代码，然后执行 JS 里的代码，篡改网站A的内容。")]),t._v(" "),s("li",[t._v("CSRF仅仅是利用了http携带cookie的特性进行攻击的，但是"),s("code",[t._v("无法得到被攻击站点的cookie")]),t._v("。这个和XSS不同，"),s("code",[t._v("XSS一般是直接通过拿到Cookie")]),t._v("等信息进行攻击的")])]),t._v(" "),s("h2",{attrs:{id:"sql-注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql-注入"}},[t._v("#")]),t._v(" SQL 注入")])])}),[],!1,null,null,null);s.default=a.exports}}]);