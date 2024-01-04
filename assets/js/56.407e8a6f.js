(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{330:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"公共-express-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#公共-express-server"}},[t._v("#")]),t._v(" 公共 express-server")]),t._v(" "),s("p",[t._v("框架现已集成一个公共 express-server，插件开发者无需自行监听端口开启 express 服务。")]),t._v(" "),s("h2",{attrs:{id:"使用公共-express-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用公共-express-server"}},[t._v("#")]),t._v(" 使用公共 express-server")]),t._v(" "),s("p",[t._v("配置 "),s("code",[t._v("PluginSetting.server.routers")]),t._v(" 即可接入公共 express-server。")]),t._v(" "),s("h3",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("p",[t._v("例如位于 "),s("code",[t._v("test-plugin/init.ts")]),t._v(" 的入口文件有如下插件声明：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("definePlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"测试插件"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    cfgList"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    server"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        routers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"/api/info"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" express"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Router")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("此时可通过 "),s("code",[t._v("localhost:{renderPort}/test-plugin/api/info")]),t._v(" 来访问该接口。")]),t._v(" "),s("blockquote",[s("p",[t._v("tip：强烈建议使用该支持来注册插件的接口路由。自行创建 server 服务不仅会额外占用端口，还会导致你的插件无法使用 v3 新增的插件重载支持，除非你自行对自己的 server 服务进行注销重启。")])]),t._v(" "),s("h2",{attrs:{id:"静态资源服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态资源服务器"}},[t._v("#")]),t._v(" 静态资源服务器")]),t._v(" "),s("p",[t._v("公共 express-server 分别为 "),s("code",[t._v("public")]),t._v(" 目录与插件目录注册了静态资源服务器。")]),t._v(" "),s("h3",{attrs:{id:"插件独有"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件独有"}},[t._v("#")]),t._v(" 插件独有")]),t._v(" "),s("p",[t._v("可通过 "),s("code",[t._v("localhost:renderPort/插件目录名/资源路径")]),t._v(" 访问插件独有的静态资源服务器。如果你不希望使用 vue 编写渲染页面，可通过此支持来使用类似 v2 的渲染方式。")]),t._v(" "),s("p",[t._v("同时，当你希望在前端页面中引入本地资源时，则可以利用静态资源服务器来进行访问。")]),t._v(" "),s("p",[s("strong",[t._v("示例")])]),t._v(" "),s("p",[t._v("存在如下目录结构：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("- test-plugin\n  - assets\n    - test.png\n")])])]),s("p",[t._v("你可以在代码中通过如下方式加载 "),s("code",[t._v("test.png")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".test")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string url"}},[t._v('"/test-plugin/assets/test.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("如果你使用 vue 编写渲染页面，则不建议你使用此种方式加载静态资源。")])]),t._v(" "),s("h3",{attrs:{id:"公共资源独有"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#公共资源独有"}},[t._v("#")]),t._v(" 公共资源独有")]),t._v(" "),s("p",[t._v("可通过 "),s("code",[t._v("localhost:renderPort/")]),t._v(" 来访问 "),s("code",[t._v("/public")]),t._v(" 目录中的资源。")]),t._v(" "),s("p",[t._v("例如对于 "),s("code",[t._v("Adachi-BOT/public/assets/test-plugin/test.png")]),t._v("，可以通过以下方式进行访问：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".test")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string url"}},[t._v('"/assets/test-plugin/test.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("若你使用了"),s("RouterLink",{attrs:{to:"/guide/plugin/update-static-resource.html"}},[t._v("自动更新插件静态资源")]),t._v("支持，相关静态资源将会被下载到 "),s("code",[t._v("/public/assets/插件名")]),t._v(" 目录下，此时使用此种方式来访问静态资源是最为有效的。不论是否使用了 "),s("code",[t._v("vue")]),t._v(" 支持来编写页面。")],1)])}),[],!1,null,null,null);s.default=n.exports}}]);