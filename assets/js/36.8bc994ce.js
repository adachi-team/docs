(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{319:function(t,a,e){"use strict";e.r(a);var s=e(14),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"指令配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令配置"}},[t._v("#")]),t._v(" 指令配置")]),t._v(" "),a("p",[t._v("本篇针对 "),a("code",[t._v("config/commands.yml")]),t._v(" 配置文件作出解释，该文件将会在 BOT 初次运行后生成，所以你并不能在启动 BOT 前配置指令。")]),t._v(" "),a("h2",{attrs:{id:"基本结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本结构"}},[t._v("#")]),t._v(" 基本结构")]),t._v(" "),a("p",[a("code",[t._v("Adachi-BOT")]),t._v(" 中的指令被分为三类 "),a("code",[t._v("order")]),t._v(", "),a("code",[t._v("switch")]),t._v(" 和 "),a("code",[t._v("enquire")]),t._v(" ，你需要了解他们的共性和特性。每个指令都以 "),a("code",[t._v("cmdKey")]),t._v(" 为顶级标识，你可以通过使用 "),a("code",[t._v("#help -k")]),t._v("\n指令（或根据你的配置）来查看每个指令对应的 "),a("code",[t._v("key")]),t._v(" 。每种指令都有四个公共配置字段：")]),t._v(" "),a("h3",{attrs:{id:"type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[t._v("#")]),t._v(" type")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("order|switch|enquire")])])]),t._v(" "),a("p",[t._v("不可修改。")]),t._v(" "),a("h3",{attrs:{id:"auth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auth"}},[t._v("#")]),t._v(" auth")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("1|2|3")])])]),t._v(" "),a("p",[t._v("最低操作权限，每个权限的限制如下：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("1")]),t._v(" 表示除封禁用户外所有人可使用")]),t._v(" "),a("li",[a("code",[t._v("2")]),t._v(" 表示 "),a("strong",[t._v("BOT 管理员")]),t._v(" 和持有者可使用")]),t._v(" "),a("li",[a("code",[t._v("3")]),t._v(" 表示只有持有者可使用")])]),t._v(" "),a("h3",{attrs:{id:"scope"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scope"}},[t._v("#")]),t._v(" scope")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("1|2|3")])])]),t._v(" "),a("p",[t._v("指令使用位置，每个值的释义如下：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("1")]),t._v(" 表示仅群聊可使用")]),t._v(" "),a("li",[a("code",[t._v("2")]),t._v(" 表示仅私聊可使用")]),t._v(" "),a("li",[a("code",[t._v("3")]),t._v(" 表示群聊和私聊均可使用")])]),t._v(" "),a("h3",{attrs:{id:"enable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable"}},[t._v("#")]),t._v(" enable")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[t._v("boolean"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("是否启用指令。")]),t._v(" "),a("h3",{attrs:{id:"display"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#display"}},[t._v("#")]),t._v(" display")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[t._v("boolean"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("表示是否在 "),a("code",[t._v("help")]),t._v(" 指令的返回内容中显示此指令。")]),t._v(" "),a("h3",{attrs:{id:"priority"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#priority"}},[t._v("#")]),t._v(" priority")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"}},[t._v("number"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("指令优先级，存在多个请求头相同的指令时，此值较大者将被触发。")]),t._v(" "),a("h2",{attrs:{id:"order-类指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#order-类指令"}},[t._v("#")]),t._v(" "),a("code",[t._v("Order")]),t._v(" 类指令")]),t._v(" "),a("p",[a("code",[t._v("Order")]),t._v(" 具有唯一可配置项 "),a("code",[t._v("headers")]),t._v(" ，表示指令头，为数组类型，可以设置多个。默认情况下，指令头前会被添加上 "),a("code",[t._v("setting.yml")]),t._v(" 中的 "),a("code",[t._v("header")]),t._v("\n的值，如果你不想在某条指令加上它，可以在指令头前加上双下划线 "),a("code",[t._v("__")]),t._v(" 。如:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("silvery-star.wish")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" order\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("auth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("headers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" __wish\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" w\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("priority")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),a("p",[t._v("这将为祈愿十连导出两个指令，"),a("code",[t._v("wish")]),t._v(" "),a("code",[t._v("#w")]),t._v(" ，当然，你也可以配置更多。")]),t._v(" "),a("h2",{attrs:{id:"switch-类指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#switch-类指令"}},[t._v("#")]),t._v(" "),a("code",[t._v("Switch")]),t._v(" 类指令")]),t._v(" "),a("p",[a("code",[t._v("Switch")]),t._v(" 拥有四个可配置项，"),a("code",[t._v("header")]),t._v(", "),a("code",[t._v("onKey")]),t._v(", "),a("code",[t._v("offKey")]),t._v(" 和 "),a("code",[t._v("mode")]),t._v("。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("mode")]),t._v(" 开关模式，分为 "),a("code",[t._v("single")]),t._v(" 和 "),a("code",[t._v("divided")]),t._v(" ，它们的作用将在下面阐述")]),t._v(" "),a("li",[a("code",[t._v("header")]),t._v(" 指令头，只可配置一个，当 "),a("code",[t._v("mode")]),t._v(" 设置为 "),a("code",[t._v("divided")]),t._v(" 无效，此处同样可以通过双下划线来屏蔽 "),a("code",[t._v("setting")]),t._v(" 中配置的 "),a("code",[t._v("header")])]),t._v(" "),a("li",[a("code",[t._v("onKey/offKey")]),t._v(" 表示开/关的关键词")])]),t._v(" "),a("p",[a("code",[t._v("single")]),t._v(" 模式表示单指令头，使用关键词区分开/关状态，如：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# setting.yml => header: "#"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("silvery-star.alias-customize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" switch\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("auth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" single\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("onKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" add\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("offKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" rem\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" alias\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("priority")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 导出指令 #alias [add|rem] [本名] [别名] ")]),t._v("\n")])])]),a("p",[a("code",[t._v("divided")]),t._v(" 模式表示拆分指令头，使用指令头区分开/关状态，如：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# setting.yml => header: ""')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("silvery-star.alias-customize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" switch\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("auth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" divided\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("onKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 增加别名\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("offKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 删除别名\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("priority")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 导出指令 1. 增加别名 [本名] [别名]  2. 删除别名 [本名] [别名]")]),t._v("\n")])])]),a("h2",{attrs:{id:"enquire-类指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enquire-类指令"}},[t._v("#")]),t._v(" "),a("code",[t._v("Enquire")]),t._v(" 类指令")]),t._v(" "),a("p",[a("code",[t._v("Enquire")]),t._v(" 类指令的配置项与 "),a("code",[t._v("Order")]),t._v(" 指令相同，不做赘述。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enquire.example")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" enquire\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("auth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("headers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ps\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("priority")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);