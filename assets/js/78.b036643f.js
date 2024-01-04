(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{353:function(v,_,a){"use strict";a.r(_);var e=a(14),t=Object(e.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[v._v("#")]),v._v(" 配置")]),v._v(" "),_("p",[v._v("插件的配置文件将会在 bot 启动之后于 "),_("code",[v._v("config/genshin")]),v._v(" 目录下生成。")]),v._v(" "),_("h2",{attrs:{id:"cookies-yml"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cookies-yml"}},[v._v("#")]),v._v(" cookies.yml")]),v._v(" "),_("p",[v._v("插件用于执行 "),_("code",[v._v("mys")]),v._v(", "),_("code",[v._v("uid")]),v._v(", "),_("code",[v._v("aby")]),v._v(" 等指令所需的 "),_("code",[v._v("cookies")]),v._v(" ，可配置多个。")]),v._v(" "),_("div",{staticClass:"language-yaml extra-class"},[_("pre",{pre:!0,attrs:{class:"language-yaml"}},[_("code",[_("span",{pre:!0,attrs:{class:"token key atrule"}},[v._v("cookies")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(":")]),v._v("\n  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("-")]),v._v(" cookieA\n  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("-")]),v._v(" cookieB\n")])])]),_("h2",{attrs:{id:"main-yml"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#main-yml"}},[v._v("#")]),v._v(" main.yml")]),v._v(" "),_("p",[v._v("插件主要配置。")]),v._v(" "),_("h3",{attrs:{id:"card"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#card"}},[v._v("#")]),v._v(" card")]),v._v(" "),_("p",[v._v("人物卡片相关，影响命令："),_("code",[v._v("uid")]),v._v(" 与 "),_("code",[v._v("mys")])]),v._v(" "),_("p",[_("strong",[v._v("weaponStyle")])]),v._v(" "),_("ul",[_("li",[v._v("类型: "),_("code",[v._v("normal|weaponA|weaponB")])]),v._v(" "),_("li",[v._v("默认值: "),_("code",[v._v("normal")])])]),v._v(" "),_("p",[v._v("用户信息查询卡片武器显示样式。每个值对应的图例如下：")]),v._v(" "),_("center",{staticClass:"half"},[_("img",{attrs:{src:v.$withBase("/demo/config/normal.png"),alt:"ERROR"}}),v._v(" "),_("img",{attrs:{src:v.$withBase("/demo/config/weaponA.png"),alt:"ERROR"}}),v._v(" "),_("img",{attrs:{src:v.$withBase("/demo/config/weaponB.png"),alt:"ERROR"}})]),v._v(" "),_("p",[_("strong",[v._v("profile")])]),v._v(" "),_("ul",[_("li",[v._v("类型: "),_("code",[v._v("random|user")])]),v._v(" "),_("li",[v._v("默认值: "),_("code",[v._v("random")])])]),v._v(" "),_("p",[v._v("用户信息查询卡片头像显示。每个值对应的释义如下：")]),v._v(" "),_("ul",[_("li",[v._v("random: 从玩家所用于的角色中随机抽取。")]),v._v(" "),_("li",[v._v("user: 查询用户的 QQ 头像。")])]),v._v(" "),_("h3",{attrs:{id:"chara"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#chara"}},[v._v("#")]),v._v(" chara")]),v._v(" "),_("p",[v._v("影响命令："),_("code",[v._v("char")])]),v._v(" "),_("p",[_("strong",[v._v("showScore")])]),v._v(" "),_("ul",[_("li",[v._v("类型: "),_("code",[v._v("boolean")])]),v._v(" "),_("li",[v._v("默认值: "),_("code",[v._v("true")])])]),v._v(" "),_("p",[v._v("角色信息查询是否显示评分。")]),v._v(" "),_("h3",{attrs:{id:"wish"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#wish"}},[v._v("#")]),v._v(" wish")]),v._v(" "),_("p",[v._v("影响命令："),_("code",[v._v("wish")])]),v._v(" "),_("p",[_("strong",[v._v("limit")])]),v._v(" "),_("ul",[_("li",[v._v("类型: "),_("code",[v._v("number")])]),v._v(" "),_("li",[v._v("默认值: "),_("code",[v._v("99")])])]),v._v(" "),_("p",[v._v("单次祈愿的最大抽取十连次数。")]),v._v(" "),_("h3",{attrs:{id:"panel"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#panel"}},[v._v("#")]),v._v(" panel")]),v._v(" "),_("p",[v._v("面板查询相关，影响命令: "),_("code",[v._v("panel")]),v._v("、"),_("code",[v._v("pud")])]),v._v(" "),_("p",[_("strong",[v._v("uidQuery")])]),v._v(" "),_("ul",[_("li",[v._v("类型: "),_("code",[v._v("boolean")])]),v._v(" "),_("li",[v._v("默认值: "),_("code",[v._v("false")])])]),v._v(" "),_("p",[v._v("是否允许使用 "),_("code",[v._v("uid")]),v._v(" 查询/更新，为防止部分用户恶意遍历查询 "),_("code",[v._v("uid")]),v._v("，这里默认关闭，有需要的可以开启")]),v._v(" "),_("p",[_("strong",[v._v("enKaApi")])]),v._v(" "),_("ul",[_("li",[v._v("类型: "),_("code",[v._v("string")])]),v._v(" "),_("li",[v._v("默认值: "),_("code",[v._v("https://enka.shinshin.moe/")])])]),v._v(" "),_("p",[v._v("面板数据来源地址，默认为 Enka 官方地址。可修改为 "),_("a",{attrs:{href:"https://github.com/MiniGrayGay",target:"_blank",rel:"noopener noreferrer"}},[v._v("@MiniGrayGay"),_("OutboundLink")],1),v._v(" 提供的国内反代地址以解决连接异常问题")]),v._v(" "),_("ul",[_("li",[v._v('代理地址A：https://enka.microgg.cn/"')]),v._v(" "),_("li",[v._v('代理地址B：https://enka.minigg.cn/"')])]),v._v(" "),_("h3",{attrs:{id:"verify"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#verify"}},[v._v("#")]),v._v(" verify")]),v._v(" "),_("p",[v._v("绕过验证码服务相关配置，服务由 "),_("a",{attrs:{href:"https://github.com/MiniGrayGay",target:"_blank",rel:"noopener noreferrer"}},[v._v("@MiniGrayGay"),_("OutboundLink")],1),v._v(" 提供。")]),v._v(" "),_("p",[_("strong",[v._v("enable")])]),v._v(" "),_("ul",[_("li",[v._v("类型: "),_("code",[v._v("boolean")])]),v._v(" "),_("li",[v._v("默认值: "),_("code",[v._v("false")])])]),v._v(" "),_("p",[v._v("是否开启尝试绕过米游社验证码功能。")]),v._v(" "),_("p",[_("strong",[v._v("repeat")])]),v._v(" "),_("ul",[_("li",[v._v("类型: "),_("code",[v._v("number")])]),v._v(" "),_("li",[v._v("默认值: "),_("code",[v._v("1")])])]),v._v(" "),_("p",[v._v("绕过验证码失败后，重新尝试次数。")]),v._v(" "),_("p",[_("strong",[v._v("token")])]),v._v(" "),_("ul",[_("li",[v._v("类型: "),_("code",[v._v("number")])]),v._v(" "),_("li",[v._v("默认值: "),_("code",[v._v("随机字符")])])]),v._v(" "),_("p",[v._v("绕过验证码服务所必须的 token。")])],1)}),[],!1,null,null,null);_.default=t.exports}}]);