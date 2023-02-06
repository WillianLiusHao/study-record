(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{213:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#算法"}},[t._v("#")]),t._v(" 算法")]),t._v(" "),s("blockquote",[s("p",[t._v("leetcode 中 hot 100 | 腾讯精选 50 题 | 精选 Top 面试题 | 剑指 offer | 面试中遇到的一些算法题")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/6844904175562653710",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端算法渣的救赎之路"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#排序"}},[t._v("#")]),t._v(" 排序")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("冒泡 "),s("code",[t._v("O(n^2)")])])]),t._v(" "),s("li",[s("p",[t._v("选择 "),s("code",[t._v("O(n^2)")])])]),t._v(" "),s("li",[s("p",[t._v("插入 "),s("code",[t._v("O(n^2)")])])]),t._v(" "),s("li",[s("p",[t._v("快排 "),s("code",[t._v("O(n^2)")])])]),t._v(" "),s("li",[s("p",[t._v("归并 "),s("code",[t._v("O(n^2)")])])])]),t._v(" "),s("h3",{attrs:{id:"链表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链表"}},[t._v("#")]),t._v(" 链表")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("常见题型")])])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("双指针")]),t._v(" "),s("ul",[s("li",[t._v("链表的中间节点")]),t._v(" "),s("li",[t._v("链表的倒数第 k 个节点("),s("code",[t._v("mid")]),t._v(")")]),t._v(" "),s("li",[t._v("删除第 k 个节点")]),t._v(" "),s("li",[t._v("反转链表")]),t._v(" "),s("li",[s("strong",[t._v("链表排序")])])])]),t._v(" "),s("li",[s("p",[t._v("特殊链表")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("回文链表")]),t._v("（"),s("code",[t._v("解法 & 奇偶长度处理")]),t._v(")")]),t._v(" "),s("li",[t._v("有环")]),t._v(" "),s("li",[s("strong",[t._v("链表中环位置")]),t._v(" "),s("ul",[s("li",[t._v("step1: 快慢指针相遇（得出环的长度 => 假设慢指针走了k步，相遇时离入环点m => 环的长度为k）")]),t._v(" "),s("li",[t._v("step2：慢指针回到起始点，然后同速率前进，"),s("strong",[t._v("相遇时即为环入口")]),t._v("（慢指针走了"),s("code",[t._v("k-m")]),t._v("步，快指针也在环内走了"),s("code",[t._v("k-m")]),t._v("步，同时到达环入口）")])])])])]),t._v(" "),s("li",[s("p",[t._v("多条链表（拼接/求和）")]),t._v(" "),s("ul",[s("li",[t._v("合并两个单调递增链表（"),s("code",[t._v("递归")]),t._v("）")]),t._v(" "),s("li",[t._v("两数相加("),s("code",[t._v("mid")]),t._v(")")]),t._v(" "),s("li",[s("strong",[t._v("相交链表")]),t._v("（"),s("code",[t._v("思路")]),t._v("）")])])])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("常用方法")])])]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("链表切割")]),t._v("(cut)")]),t._v(" "),s("ul",[s("li",[t._v("使用快慢指针找到链表的中点，奇数个为"),s("code",[t._v("中点")]),t._v(",偶数个为"),s("code",[t._v("中心左边")]),t._v("节点")]),t._v(" "),s("li",[t._v("找到中点"),s("code",[t._v("slow")]),t._v("后，保存右段并切割，"),s("code",[t._v("temp=slow.next")]),t._v("，"),s("code",[t._v("slow.next = null")])]),t._v(" "),s("li",[t._v("返回"),s("code",[t._v("左段的头结点")]),t._v("和"),s("code",[t._v("右段(temp)")])])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("合并链表")]),t._v("(merge)")]),t._v(" "),s("ul",[s("li",[t._v("递归思想")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" list2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  list1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeLinkLists")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" list2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" list1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  list2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeLinkLists")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" list1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" list2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"二叉树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二叉树"}},[t._v("#")]),t._v(" 二叉树")]),t._v(" "),s("p",[s("strong",[t._v("写树相关算法的终极奥义")]),t._v("：简单说就是，先搞清楚当前 root 节点该做什么，然后根据函数定义递归调用子节点，递归调用让孩子节点做相同的事情。")]),t._v(" "),s("p",[s("strong",[t._v("！终极奥义的难点")]),t._v("：如何把题目的要求细化成每个节点需要做的事情。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://images.vrm.cn/ox/2023/02/06/tree.jpg",alt:""}})]),t._v(" "),s("h4",{attrs:{id:"两个基本点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#两个基本点"}},[t._v("#")]),t._v(" 两个基本点")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("DFS （"),s("strong",[t._v("递归法")]),t._v("、"),s("strong",[t._v("迭代法")]),t._v("）")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. 递归：非常容易，只需要改变存值和递归方法的位置即可")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. 迭代:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 后续采用前序反转的形式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("houxu")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("root")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" cur "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    stack "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    res "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 【根】")]),t._v("\n      stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      cur "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 【右】")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    cur "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    cur "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 【左】")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根右左 => reverse => 左右根(后续)")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("BFS（"),s("strong",[t._v("不分层")]),t._v("、"),s("strong",[t._v("分层")]),t._v("、"),s("strong",[t._v("锯齿形层次遍历")]),t._v("）")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 队列思想")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 记录每层数目")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数组包裹每层数据，进入下一层")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("levelOrder")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("root")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * level: 当前层索引\n  * queue: 存数队列\n  */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" level "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    queue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    res "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("level"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" curNode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shift")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("level"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("curNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      curNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("curNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      curNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("curNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    level"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("h4",{attrs:{id:"三种题型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三种题型"}},[t._v("#")]),t._v(" 三种题型")]),t._v(" "),s("ul",[s("li",[t._v("搜索类")]),t._v(" "),s("li",[t._v("构建类")]),t._v(" "),s("li",[t._v("修改类")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("根据已知二叉树，求某值")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("二叉树的最大深度(dfs)")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("二叉搜索树的第 K 小元素(no.230)")])])]),t._v(" "),s("li",[s("p",[t._v("二叉树最近公共祖先(剑指 no.68)")])]),t._v(" "),s("li",[s("p",[t._v("二叉树的直径")])]),t._v(" "),s("li",[s("p",[t._v("求根到叶节点数字之和(剑指 Ⅱ no.049)")])])])]),t._v(" "),s("li",[s("p",[t._v("一些特殊的二叉树（判断和构建）")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("对称二叉树 ("),s("code",[t._v("双指针， 一前一后")]),t._v(")")])]),t._v(" "),s("li",[s("p",[t._v("搜索二叉树 ("),s("code",[t._v("中序 or 递归")]),t._v(")")])]),t._v(" "),s("li",[s("p",[t._v("反转二叉树 ("),s("code",[t._v("递归")]),t._v(")")])]),t._v(" "),s("li",[s("p",[t._v("合并二叉树")])])])])]),t._v(" "),s("h3",{attrs:{id:"双指针"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双指针"}},[t._v("#")]),t._v(" 双指针")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("快慢指针")])]),t._v(" "),s("ul",[s("li",[t._v("是否有环")]),t._v(" "),s("li",[t._v("环的位置")]),t._v(" "),s("li",[t._v("链表中点节点")]),t._v(" "),s("li",[t._v("链表倒数第k个节点")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("左右指针")])]),t._v(" "),s("ul",[s("li",[t._v("二分查找")]),t._v(" "),s("li",[t._v("两数之和(升序数组)")]),t._v(" "),s("li",[t._v("反转数组")]),t._v(" "),s("li",[t._v("滑动窗口")])])])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://leetcode.cn/problems/move-zeroes/comments/",target:"_blank",rel:"noopener noreferrer"}},[t._v("评论区高级双指针解法"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("[x] "),s("a",{attrs:{href:"https://leetcode.cn/problems/move-zeroes/",target:"_blank",rel:"noopener noreferrer"}},[t._v("283.移动零"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("[x] "),s("a",{attrs:{href:"https://leetcode.cn/problems/sort-colors/",target:"_blank",rel:"noopener noreferrer"}},[t._v("75.颜色分类"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"栈和队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#栈和队列"}},[t._v("#")]),t._v(" 栈和队列")]),t._v(" "),s("h3",{attrs:{id:"dp-dynamic-programming-动态规划"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dp-dynamic-programming-动态规划"}},[t._v("#")]),t._v(" dp(Dynamic Programming：动态规划)")]),t._v(" "),s("ul",[s("li",[t._v("[ ] "),s("a",{attrs:{href:"https://leetcode.cn/problems/climbing-stairs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("70.爬楼梯"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("[ ] "),s("a",{attrs:{href:"https://leetcode.cn/problems/house-robber/",target:"_blank",rel:"noopener noreferrer"}},[t._v("198.打家劫舍"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("[ ] "),s("a",{attrs:{href:"https://leetcode.cn/problems/maximal-square/",target:"_blank",rel:"noopener noreferrer"}},[t._v("221.最大正方形"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("[ ] "),s("a",{attrs:{href:"https://leetcode.cn/problems/coin-change/",target:"_blank",rel:"noopener noreferrer"}},[t._v("322.零钱兑换"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("[ ] "),s("a",{attrs:{href:"https://leetcode.cn/problems/unique-paths/",target:"_blank",rel:"noopener noreferrer"}},[t._v("62.不同路径"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("[ ] "),s("a",{attrs:{href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/",target:"_blank",rel:"noopener noreferrer"}},[t._v("121.买卖股票系列"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("[x] "),s("a",{attrs:{href:"https://leetcode.cn/problems/generate-parentheses/",target:"_blank",rel:"noopener noreferrer"}},[t._v("22.括号生成"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("[x] "),s("a",{attrs:{href:"https://leetcode.cn/problems/unique-binary-search-trees/submissions/",target:"_blank",rel:"noopener noreferrer"}},[t._v("96.不同的二叉搜索树？？？"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[t._v("#")]),t._v(" 字符串")]),t._v(" "),s("ol",[s("li",[t._v("电话号码的字母组合")])]),t._v(" "),s("h3",{attrs:{id:"贪心-greedy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#贪心-greedy"}},[t._v("#")]),t._v(" 贪心(greedy)")]),t._v(" "),s("ul",[s("li",[t._v("[ ] 剑指 Offer 14 剪绳子")]),t._v(" "),s("li",[t._v("[ ] 55.跳跃游戏")])]),t._v(" "),s("h3",{attrs:{id:"回溯-backtrack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回溯-backtrack"}},[t._v("#")]),t._v(" 回溯(backtrack)")]),t._v(" "),s("blockquote",[s("p",[t._v("回溯按照如下三个步骤思考问题")])]),t._v(" "),s("ol",[s("li",[t._v("「路径」：记录做出的选择。")]),t._v(" "),s("li",[t._v("「选择列表」：通常而言，用数组存储可以选择的操作。")]),t._v(" "),s("li",[t._v("「结束条件」：一般而言，就是递归的结束点，也就是搜索的结束点。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" res "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("路径"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 选择列表")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'满足结束条件'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("路径"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("选择 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" 选择列表"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    做选择\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("路径"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 选择列表"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    撤销选择\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"二分-binarysearch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二分-binarysearch"}},[t._v("#")]),t._v(" 二分（binarySearch）")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("最常用的二分查找场景：寻找一个数、寻找左侧边界、寻找右侧边界")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("binarySearch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("arr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" mid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" mid\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("binarySearch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("binarySearch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"位运算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#位运算"}},[t._v("#")]),t._v(" 位运算")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("n&1")]),t._v("：判断奇偶")]),t._v(" "),s("li",[s("code",[t._v("<<")]),t._v(" "),s("code",[t._v(">>")]),t._v("：左移右移")]),t._v(" "),s("li",[s("code",[t._v("n&n-1")]),t._v("：消除最右边的1")])])])}),[],!1,null,null,null);s.default=e.exports}}]);