(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{307:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"工具类-command-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工具类-command-api"}},[t._v("#")]),t._v(" 工具类 Command Api")]),t._v(" "),s("h2",{attrs:{id:"工具类相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工具类相关"}},[t._v("#")]),t._v(" 工具类相关")]),t._v(" "),s("h3",{attrs:{id:"属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("raws")]),t._v(": 指令配置项列表")]),t._v(" "),s("li",[s("code",[t._v("cmdKeys")]),t._v(": 指令键值列表")])]),t._v(" "),s("h3",{attrs:{id:"get"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[t._v("#")]),t._v(" get()")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Command")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" auth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" AuthLevel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" scope"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MessageScope "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" BasicConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("auth")]),t._v(" 权限等级")]),t._v(" "),s("li",[s("code",[t._v("scope")]),t._v(" 使用位置")]),t._v(" "),s("li",[t._v("返回值: "),s("a",{attrs:{href:"#%E6%8C%87%E4%BB%A4%E5%AE%9E%E4%BE%8B"}},[t._v("指令实例")]),t._v("列表")])]),t._v(" "),s("p",[t._v("限制指令权限、指令范围，获取所匹配的"),s("a",{attrs:{href:"#%E6%8C%87%E4%BB%A4%E5%AE%9E%E4%BE%8B"}},[t._v("指令实例")]),t._v("列表。当未匹配到任何相关指令实例时，返回空数组。")]),t._v(" "),s("h3",{attrs:{id:"getsingle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getsingle"}},[t._v("#")]),t._v(" getSingle()")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Command")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSingle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" auth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" AuthLevel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" scope"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MessageScope "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" BasicConfig "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("key")]),t._v(" 指令的 "),s("code",[t._v("cmdKey")]),t._v(" 值")]),t._v(" "),s("li",[s("code",[t._v("auth")]),t._v(" 权限等级，默认为 "),s("code",[t._v("AuthLevel.User")])]),t._v(" "),s("li",[s("code",[t._v("scope")]),t._v(" 使用位置，默认为 "),s("code",[t._v("MessageScope.Both")])]),t._v(" "),s("li",[t._v("返回值: "),s("a",{attrs:{href:"#%E6%8C%87%E4%BB%A4%E5%AE%9E%E4%BE%8B"}},[t._v("指令实例")])])]),t._v(" "),s("p",[t._v("限制指令权限、指令范围，根据具体的 "),s("code",[t._v("cmdKey")]),t._v(" 值获取相关的"),s("a",{attrs:{href:"#%E6%8C%87%E4%BB%A4%E5%AE%9E%E4%BE%8B"}},[t._v("指令实例")]),t._v("。当未匹配到任何相关指令实例时，返回 "),s("code",[t._v("undefined")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"getunion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getunion"}},[t._v("#")]),t._v(" getUnion()")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Command")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUnion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" auth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" AuthLevel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" scope"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MessageScope"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Group "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" MessageScope"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Private "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" RegExp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("auth")]),t._v(" 权限等级")]),t._v(" "),s("li",[s("code",[t._v("scope")]),t._v(" 使用位置")]),t._v(" "),s("li",[t._v("返回值: 正则表达式")])]),t._v(" "),s("p",[t._v("根据指定范围和权限等级获得所有相关指令，并生成一个能够匹配这些指令的正则表达式。")]),t._v(" "),s("h3",{attrs:{id:"cmdrunerror"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cmdrunerror"}},[t._v("#")]),t._v(" cmdRunError()")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Command")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cmdRunError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("arg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" groupID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("run")]),t._v(" 自定义方法")]),t._v(" "),s("li",[s("code",[t._v("userID")]),t._v(" 错误提示消息发送目标的用户 qq")]),t._v(" "),s("li",[s("code",[t._v("groupID")]),t._v(" 错误提示消息发送目标的用户所在群聊，当为私聊时，传递 "),s("code",[t._v("-1")])])]),t._v(" "),s("p",[t._v("执行所接受的自定义方法。当方法执行错误时，捕获错误输出到日志，并向目标用户发送指令异常的消息提示。")]),t._v(" "),s("h3",{attrs:{id:"reload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reload"}},[t._v("#")]),t._v(" reload()")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Command")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reload")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("重载指令列表，配合 "),s("code",[t._v("#reload")]),t._v(" 指令使用开发者无需也不应该手动调用此方法。")]),t._v(" "),s("p",[t._v("当启动浏览器出错时，返回 "),s("code",[t._v("null")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"refresh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#refresh"}},[t._v("#")]),t._v(" refresh()")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Command")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("refresh")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("返回值: 刷新成功后的输出语句")])]),t._v(" "),s("p",[t._v("重载指令列表，配合 "),s("code",[t._v("#refresh")]),t._v(" 指令使用。开发者无需也不应该手动调用此方法。")]),t._v(" "),s("h3",{attrs:{id:"checkorder-checkswitch-checkenquire"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#checkorder-checkswitch-checkenquire"}},[t._v("#")]),t._v(" checkOrder()/checkSwitch()/checkEnquire()")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("cmd")]),t._v(" "),s("a",{attrs:{href:"#%E6%8C%87%E4%BB%A4%E5%AE%9E%E4%BE%8B"}},[t._v("指令实例")])]),t._v(" "),s("li",[t._v("返回值: 是否为对应类型的"),s("a",{attrs:{href:"#%E6%8C%87%E4%BB%A4%E5%AE%9E%E4%BE%8B"}},[t._v("指令实例")])])]),t._v(" "),s("p",[t._v("判断目标是否为对应类型的"),s("a",{attrs:{href:"#%E6%8C%87%E4%BB%A4%E5%AE%9E%E4%BE%8B"}},[t._v("指令实例")]),t._v("，本质为以诸如 "),s("code",[t._v('cmd.type === "order"')]),t._v(" 的方式进行判断，仅为 "),s("code",[t._v("typescript")]),t._v(" 支持而存在。")]),t._v(" "),s("h2",{attrs:{id:"指令实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指令实例"}},[t._v("#")]),t._v(" 指令实例")]),t._v(" "),s("p",[t._v("下面一些方法的输出结果将以下面的指令对象为例：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" alias "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"switch"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"single"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    cmdKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"silvery-star.alias-customize"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    desc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"修改别名"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#{OPT} [本名] [别名]"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    header"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"alias"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    regexps"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#{OPT}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[\\\\u4e00-\\\\u9fa5]+"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[\\\\w\\\\u4e00-\\\\u9fa5]+"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    main"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"achieves/alias"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    onKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"add"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    offKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rem"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"基本类型定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本类型定义"}},[t._v("#")]),t._v(" 基本类型定义")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Unmatch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unmatch"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    missParam"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    header"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    param"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MatchResult")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cmd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OrderMatchResult "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    cmd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SwitchMatchResult "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    cmd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EnquireMatchResult "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    Unmatch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MatchResultMap")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    order"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" cmd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OrderMatchResult"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" cmd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SwitchMatchResult"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    enquire"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" cmd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EnquireMatchResult"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CommandFunc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("keyof")]),t._v(" MatchResultMap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" input"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" InputParameter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 指令入口对象 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CommandEntry")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CommandFunc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"order"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" CommandFunc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"switch"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" CommandFunc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enquire"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 指令配置项 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConfigType")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cmd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OrderConfig "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    cmd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SwitchConfig "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    cmd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EnquireConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FollowInfo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    headers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    param"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"指令属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指令属性"}},[t._v("#")]),t._v(" 指令属性")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BasicConfig")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"order"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"switch"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enquire"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指令类型")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" run"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CommandEntry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 入口函数")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" auth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" AuthLevel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 权限")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" scope"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MessageScope"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用范围：群聊/私聊")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" cmdKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 唯一 key 值")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" detail"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 详情")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" display"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否在 #help 中展示")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" ignoreCase"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否忽略大小写")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" enable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否启用")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" raw"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ConfigType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置项完整对象")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" desc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 描述内容")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" pluginName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所属插件名")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" priority"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 优先级大小")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"match"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#match"}},[t._v("#")]),t._v(" match()")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BasicConfig")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" content"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MatchResult"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("content")]),t._v(" 匹配目标内容")]),t._v(" "),s("li",[t._v("返回值: 匹配结果")])]),t._v(" "),s("p",[t._v("使用指令实例自身的正则约束，对给定内容进行匹配。根据指令实例的类型不同（"),s("code",[t._v("order")]),t._v("、"),s("code",[t._v("switch")]),t._v(" 或 "),s("code",[t._v("enquire")]),t._v("），返回不同的匹配结果。")]),t._v(" "),s("h3",{attrs:{id:"write"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#write"}},[t._v("#")]),t._v(" write()")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BasicConfig")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("返回值: 指令的属性对象")])]),t._v(" "),s("p",[t._v("得到由一些指令属性（"),s("code",[t._v("auth")]),t._v("、"),s("code",[t._v("scope")]),t._v(" 等）所组成的基本对象。")]),t._v(" "),s("h3",{attrs:{id:"getfollow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getfollow"}},[t._v("#")]),t._v(" getFollow()")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BasicConfig")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFollow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" FollowInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("返回值: 指令格式相关信息对象")])]),t._v(" "),s("p",[t._v("得到一个对象，其包含了格式化后的指令使用格式的相关信息。主要用作在诸如帮助文档中展示，提示用户指令的使用格式。")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[t._v("detail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFollow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// { header: [ "#alias" ], param: "[add|rem] [本名] [别名]"  }')]),t._v("\n")])])]),s("h3",{attrs:{id:"getdesc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getdesc"}},[t._v("#")]),t._v(" getDesc()")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BasicConfig")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDesc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" headerNum"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("headerNum")]),t._v(" 可选，最终字符串中的指令头数量，多个指令头以 "),s("code",[t._v("|")]),t._v(" 拼接。若不传递，则默认展示全部的指令头。")]),t._v(" "),s("li",[t._v("返回值: 序列化后的指令格式字符串")])]),t._v(" "),s("p",[t._v("得到一个序列化后的指令格式字符串。主要用作在诸如帮助文档中展示，提示用户指令的使用格式。")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[t._v("detail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDesc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "#alias [add|rem] [本名] [别名]"')]),t._v("\n")])])]),s("h3",{attrs:{id:"getcmdkey"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getcmdkey"}},[t._v("#")]),t._v(" getCmdKey()")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BasicConfig")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCmdKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("返回值: 序列化后的 "),s("code",[t._v("cmdKey")]),t._v(" 字符串")])]),t._v(" "),s("p",[t._v("得到一个序列化后的 "),s("code",[t._v("cmdKey")]),t._v(" 字符串，用于 "),s("code",[t._v("#help -k")]),t._v(" 中展示。")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[t._v("detail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCmdKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "修改别名 -- silvery-star.alias-customize"')]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);