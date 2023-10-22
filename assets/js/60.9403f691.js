(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{343:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"interval-工具类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interval-工具类"}},[t._v("#")]),t._v(" interval 工具类")]),t._v(" "),s("p",[t._v("Bot 针对每个用户和群聊均有一定的响应间隔时间。在默认行为下，当 bot 对目标用户响应指令后的一段时间内，不会再对该群聊/用户所发出的任何消息作出响应。")]),t._v(" "),s("p",[t._v("开发者可以通过此工具类来获取/控制响应间隔时间，来实现一些自定义的操作。")]),t._v(" "),s("p",[t._v("具体 api 调用可以翻阅 "),s("RouterLink",{attrs:{to:"/api/global/interval.html"}},[t._v("工具类 Interval Api")])],1),t._v(" "),s("h2",{attrs:{id:"设置目标响应间隔时间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置目标响应间隔时间"}},[t._v("#")]),t._v(" 设置目标响应间隔时间")]),t._v(" "),s("p",[t._v("通过 "),s("code",[t._v("set()")]),t._v(" 方法可以对指定目标设置响应间隔时间。")]),t._v(" "),s("p",[t._v("示例: 对 QQ 为 114514191 的用户设置 3s 的响应间隔时间，单位 ms：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" bot "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ROOT"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nbot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("114514191")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"private"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"获取目标响应间隔时间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取目标响应间隔时间"}},[t._v("#")]),t._v(" 获取目标响应间隔时间")]),t._v(" "),s("p",[t._v("通过 "),s("code",[t._v("get()")]),t._v(" 方法可以对指定目标设置响应间隔时间。")]),t._v(" "),s("p",[t._v("示例: 获取群号 为 114514191 的群聊的响应间隔时间，单位 ms：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" bot "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ROOT"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nbot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("114514191")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"group"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"检测目标状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检测目标状态"}},[t._v("#")]),t._v(" 检测目标状态")]),t._v(" "),s("p",[t._v("通过 "),s("code",[t._v("check()")]),t._v(" 方法可以检测指定目标是否处于响应间隔时间内。")]),t._v(" "),s("p",[t._v("示例：检测 QQ 为 114514191 的用户当前是否处于响应间隔时间内：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" bot "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ROOT"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nbot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("check")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("114514191")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"private"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);