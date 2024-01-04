(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{329:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"renderer-工具类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#renderer-工具类"}},[t._v("#")]),t._v(" renderer 工具类")]),t._v(" "),s("p",[t._v("Adachi-BOT 在启动之初会借助 "),s("a",{attrs:{href:"https://pptr.dev/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Puppeteer"),s("OutboundLink")],1),t._v(" 伴随后台无头模式启动一个 chromium 浏览器。")]),t._v(" "),s("p",[t._v("renderer 工具类则负责控制这个浏览器以进行截图或是其他定制化的操作。")]),t._v(" "),s("p",[t._v("翻阅 "),s("RouterLink",{attrs:{to:"/api/global/renderer.html"}},[t._v("工具类 Renderer API")]),t._v(" 来查看工具类所包含的所有方法。")],1),t._v(" "),s("h2",{attrs:{id:"渲染实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染实例"}},[t._v("#")]),t._v(" 渲染实例")]),t._v(" "),s("p",[t._v("为了简化渲染页面内容输出为图片的操作，我们提供了一个封装了部分方法的渲染类。可通过 "),s("code",[t._v("register()")]),t._v(" 方法来注册得到一个渲染实例。")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" bot "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ROOT"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 得到渲染实例")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" render "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("renderer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/test-plugin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#app"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("上面注册了一个渲染实例，调用该渲染实例的方法时，"),s("strong",[t._v("相对路径")]),t._v("的目标将会基于基地址 "),s("code",[t._v("/test-plugin")]),t._v("，并默认选择 "),s("code",[t._v("#app")]),t._v(" 元素进行渲染。")]),t._v(" "),s("p",[t._v("渲染实例提供了三个方法，可以以预设的方式输出图片，或是自定义输出图片逻辑。")]),t._v(" "),s("h3",{attrs:{id:"预设方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预设方式"}},[t._v("#")]),t._v(" 预设方式")]),t._v(" "),s("p",[t._v("渲染实例中提供了 "),s("code",[t._v("asBase64()")]),t._v(" 与 "),s("code",[t._v("asSegment()")]),t._v(" 预设方法。这两个方法将会访问指定的页面，并对指定元素进行截图，得到截图内容。")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" image "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" render"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("asSegment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test.html"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("两种方法除返回值不同外并无区别，其中 "),s("code",[t._v("asBase64()")]),t._v(" 得到图片的 "),s("code",[t._v("base64")]),t._v(" 格式，可用于进行其他二次封装操作。"),s("code",[t._v("asSegment()")]),t._v(" 则得到可直接用于 bot 发送的图片消息内容。")]),t._v(" "),s("h3",{attrs:{id:"自定义方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义方式"}},[t._v("#")]),t._v(" 自定义方式")]),t._v(" "),s("p",[t._v("如果预设方法不能满足开发者的需求。可以使用 "),s("code",[t._v("asForFunction()")]),t._v(" 来自行决定渲染输出方式。")]),t._v(" "),s("p",[s("code",[t._v("asForFunction()")]),t._v(" 将会先访问指定的页面，然后执行开发者提供的自定义方法来获取页面内容。")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" image "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" render"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("asSegment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test.html"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" page "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" element "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#target"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("screenshot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"base64"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jpeg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" quality"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("base64://")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("自定义方法接受一个 "),s("a",{attrs:{href:"https://pptr.dev/api/puppeteer.page",target:"_blank",rel:"noopener noreferrer"}},[t._v("Page"),s("OutboundLink")],1),t._v(" 对象参数，可自定义执行页面相关操作。")]),t._v(" "),s("p",[s("code",[t._v("asForFunction()")]),t._v(" 将会把自定义方法的返回值原样返回。当自定义方法未返回任何内容时，"),s("code",[t._v("asForFunction()")]),t._v(" 返回空字符串 "),s("code",[t._v('""')]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"操作浏览器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作浏览器"}},[t._v("#")]),t._v(" 操作浏览器")]),t._v(" "),s("p",[t._v("工具类同样提供了操作浏览器的相关方法。但除非特殊需要，我们并不建议开发者直接对浏览器进行操作。")]),t._v(" "),s("h3",{attrs:{id:"获取浏览器实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取浏览器实例"}},[t._v("#")]),t._v(" 获取浏览器实例")]),t._v(" "),s("p",[t._v("可以通过 "),s("code",[t._v("launchBrowser()")]),t._v(" 获取浏览器实例。执行此方法时，若浏览器未启动则会先尝试启动浏览器（正常情况下 bot 的浏览器会一直在后台运行），反之直接返回浏览器实例。")]),t._v(" "),s("p",[t._v("开发者可以通过此浏览器实例来进行一些 "),s("a",{attrs:{href:"https://pptr.dev/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Puppeteer"),s("OutboundLink")],1),t._v(" 所提供的自动化操作。")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" bot "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ROOT"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nbot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("renderer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("launchBrowser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" browser "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" browser "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取此 Browser 内所有打开页面的列表")]),t._v("\n        browser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pages")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("当启动浏览器出错时，得到的浏览器实例对象 "),s("code",[t._v("borwser")]),t._v(" 为 "),s("code",[t._v("null")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"关闭与重启浏览器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭与重启浏览器"}},[t._v("#")]),t._v(" 关闭与重启浏览器")]),t._v(" "),s("p",[s("code",[t._v("closeBrowser()")]),t._v(" 与 "),s("code",[t._v("restartBrowser()")]),t._v(" 分别用于关闭与重启浏览器。如非必要，开发者不应操作此方法。")])])}),[],!1,null,null,null);s.default=e.exports}}]);