(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{211:function(a,t,e){"use strict";e.r(t);var s=e(6),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"输入url到页面加载全过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输入url到页面加载全过程"}},[a._v("#")]),a._v(" 输入url到页面加载全过程")]),a._v(" "),t("p",[a._v("前置知识，浏览器是多进程的，主要分为：")]),a._v(" "),t("ul",[t("li",[a._v("浏览器主进程：只有一个，主要控制页面的创建、销毁、网络资源管理、下载等。")]),a._v(" "),t("li",[a._v("第三方插件进程：每一种类型的插件对应一个进程，仅当使用该插件时才创建。")]),a._v(" "),t("li",[a._v("GPU进程：最多一个，用于3D绘制等。")]),a._v(" "),t("li",[a._v("浏览器渲染进程(浏览器内核)：每个Tab页对应一个进程，互不影响。")])]),a._v(" "),t("h4",{attrs:{id:"_1-输入url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-输入url"}},[a._v("#")]),a._v(" 1. 输入url")]),a._v(" "),t("h4",{attrs:{id:"_2-浏览器查找缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-浏览器查找缓存"}},[a._v("#")]),a._v(" "),t("RouterLink",{attrs:{to:"/knowledge/浏览器/6.2浏览器缓存.html"}},[a._v("2. 浏览器查找缓存")])],1),a._v(" "),t("h4",{attrs:{id:"_3-dns域名解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-dns域名解析"}},[a._v("#")]),a._v(" 3. dns域名解析")]),a._v(" "),t("p",[a._v("浏览器向DNS服务器发起请求，解析该URL中的域名对应的IP地址。"),t("code",[a._v("DNS服务器是基于UDP的，因此会用到UDP协议")])]),a._v(" "),t("p",[a._v("值得注意的是，浏览器提供 "),t("code",[a._v("DNS数据缓存功能")]),a._v(",及一个域名如果解析过，会把解析的结果缓存，下次该域名直接走缓存。另外默认IP端口为"),t("code",[a._v("80")])]),a._v(" "),t("h4",{attrs:{id:"_4-建立-tcp-连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-建立-tcp-连接"}},[a._v("#")]),a._v(" 4. 建立 TCP 连接")]),a._v(" "),t("p",[t("code",[a._v("建立 TCP 连接分为以下三个阶段")]),a._v(":")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("通过"),t("code",[a._v("三次握手")]),a._v("(即总共发送3个数据包确认已经建立连接)建立客户端和服务器之间的连接。")])]),a._v(" "),t("li",[t("p",[a._v("进行数据传输。这里有一个重要的机制，就是接收方接收到数据包后必须要向发送方确认, 如果发送方没有接到这个确认的消息，就判定为数据包丢失，并重新发送该数据包。当然，发送的过程中还有一个优化策略，就是把大的数据包拆成一个个小包，依次传输到接收方，接收方按照这个小包的顺序把它们组装成完整数据包。")])]),a._v(" "),t("li",[t("p",[a._v("断开连接的阶段。数据传输完成，现在要断开连接了，通过"),t("code",[a._v("四次挥手")]),a._v("来断开连接。")])])]),a._v(" "),t("p",[a._v("Chrome 同一域名下"),t("code",[a._v("最多6个")]),a._v("TCP链接")]),a._v(" "),t("h4",{attrs:{id:"_5-发起请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-发起请求"}},[a._v("#")]),a._v(" 5. 发起请求")]),a._v(" "),t("p",[t("code",[a._v("HTTP 请求组成")]),a._v("：")]),a._v(" "),t("ol",[t("li",[a._v("请求行：请求方法 + 请求URL + HTTP版本协议")])]),a._v(" "),t("div",{staticClass:"language-http extra-class"},[t("pre",{pre:!0,attrs:{class:"language-http"}},[t("code",[t("span",{pre:!0,attrs:{class:"token request-line"}},[t("span",{pre:!0,attrs:{class:"token method property"}},[a._v("GET")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token request-target url"}},[a._v("/")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token http-version property"}},[a._v("HTTP/1.1")])]),a._v("   =>  get请求，请求根路径，协议版本为http1.1\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("请求头")])]),a._v(" "),t("div",{staticClass:"language-http extra-class"},[t("pre",{pre:!0,attrs:{class:"language-http"}},[t("code",[t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[a._v("Accept")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[a._v("text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[a._v("Accept-Encoding")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[a._v("gzip, deflate, br")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[a._v("Accept-Language")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[a._v("zh-CN,zh;q=0.9")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[a._v("Cache-Control")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[a._v("no-cache")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[a._v("Connection")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[a._v("keep-alive")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[a._v("Cookie")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[a._v("/* 省略cookie信息 */")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[a._v("Host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[a._v("www.baidu.com")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[a._v("Pragma")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[a._v("no-cache")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[a._v("Upgrade-Insecure-Requests")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[a._v("1")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[a._v("User-Agent")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[a._v("Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1")])]),a._v("\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("请求体：")])]),a._v(" "),t("h4",{attrs:{id:"_6-响应请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-响应请求"}},[a._v("#")]),a._v(" 6. 响应请求")]),a._v(" "),t("ul",[t("li",[a._v("常见状态码")]),a._v(" "),t("li",[a._v("响应报文（响应行+响应头+响应体）")])]),a._v(" "),t("h4",{attrs:{id:"_7-浏览器渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-浏览器渲染"}},[a._v("#")]),a._v(" 7. 浏览器渲染")]),a._v(" "),t("blockquote",[t("p",[a._v("渲染的主线程")])]),a._v(" "),t("p",[t("strong",[a._v("1. 构建 "),t("code",[a._v("DOM树")])]),a._v(" "),t("strong",[a._v("2. 样式计算，生成 "),t("code",[a._v("CSSOM")])]),a._v(" "),t("strong",[a._v("3. 布局，计算元素布局信息 "),t("code",[a._v("Layout")])]),a._v(" "),t("strong",[a._v("4. 分层，建图层树")]),a._v(" "),t("strong",[a._v("5. 生成绘制列表，提交到合成线程")]),a._v(" "),t("strong",[a._v("6. 光栅化：生成图块和生成位图")]),a._v(" "),t("strong",[a._v("7. 显示器显示内容")])]),a._v(" "),t("h4",{attrs:{id:"_8-关闭-tcp-连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-关闭-tcp-连接"}},[a._v("#")]),a._v(" 8. 关闭 TCP 连接")]),a._v(" "),t("ul",[t("li",[a._v("DNS 解析过程")]),a._v(" "),t("li",[a._v("HTML词法分析和语法分析")]),a._v(" "),t("li",[a._v("CSS解析")]),a._v(" "),t("li",[a._v("合成图层、合成线程调用光栅化线程池")]),a._v(" "),t("li",[a._v("生成位图后浏览器进程间通信过程")]),a._v(" "),t("li",[a._v("显卡缓存与显示器的关系")])]),a._v(" "),t("h3",{attrs:{id:"回流和重绘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回流和重绘"}},[a._v("#")]),a._v(" 回流和重绘")]),a._v(" "),t("h4",{attrs:{id:"回流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回流"}},[a._v("#")]),a._v(" 回流")]),a._v(" "),t("p",[t("strong",[a._v("触发条件")])]),a._v(" "),t("p",[a._v("简单来说，就是当我们对 DOM 结构的修改引发 DOM 几何尺寸变化的时候，会发生回流的过程。")]),a._v(" "),t("ul",[t("li",[a._v("DOM元素几何属性变化，常见如：width、height、padding、margin、left、top、border")]),a._v(" "),t("li",[a._v("DOM 节点 "),t("code",[a._v("增减")]),a._v(" 或 "),t("code",[a._v("移动")])]),a._v(" "),t("li",[a._v("读写 offset族、scroll族和client族属性")]),a._v(" "),t("li",[a._v("调用 window.getComputedStyle 方法")])]),a._v(" "),t("p",[t("strong",[a._v("回流过程")])]),a._v(" "),t("blockquote",[t("p",[a._v("回流导致DOM树改变，需要浏览器重新生成和渲染DOM树，将渲染主线程流程都走一遍，开销巨大")])]),a._v(" "),t("h4",{attrs:{id:"重绘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重绘"}},[a._v("#")]),a._v(" 重绘")]),a._v(" "),t("p",[t("strong",[a._v("触发条件")])]),a._v(" "),t("p",[a._v("当 DOM 的修改导致了样式的变化，并且没有影响几何属性的时候，会导致重绘(repaint)。")]),a._v(" "),t("p",[t("strong",[a._v("重绘过程")])])])}),[],!1,null,null,null);t.default=r.exports}}]);