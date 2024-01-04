(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{295:function(e,r,t){"use strict";t.r(r);var a=t(14),v=Object(a.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"基本配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本配置"}},[e._v("#")]),e._v(" 基本配置")]),e._v(" "),r("p",[e._v("项目首次运行时，会在 "),r("code",[e._v("config")]),e._v(" 目录下生成一系列配置文件，本文将对除 "),r("code",[e._v("commands.yml")]),e._v(" 外的配置项做出相关解释。\n"),r("code",[e._v("commands.yml")]),e._v(" 的相关配置说明请参考 "),r("RouterLink",{attrs:{to:"/config/commands.html"}},[e._v("指令配置")]),e._v("。")],1),e._v(" "),r("h2",{attrs:{id:"base-yml"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#base-yml"}},[e._v("#")]),e._v(" base.yml")]),e._v(" "),r("p",[e._v("bot 运行相关的基本配置。")]),e._v(" "),r("h3",{attrs:{id:"wsserver"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wsserver"}},[e._v("#")]),e._v(" wsServer")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[e._v("string"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("127.0.0.1:11451")])])]),e._v(" "),r("p",[e._v("OneBot 实现所提供 event 事件上报的正向 websocket 地址.")]),e._v(" "),r("h3",{attrs:{id:"wsapiserver"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wsapiserver"}},[e._v("#")]),e._v(" wsApiServer")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[e._v("string"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("OneBot 实现所提供 api 调用的正向 websocket 地址，当置空时，默认使用 "),r("a",{attrs:{href:"#wsServer"}},[e._v("wsServer")]),e._v("。")]),e._v(" "),r("h3",{attrs:{id:"master"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#master"}},[e._v("#")]),e._v(" master")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"}},[e._v("number"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("987654321")])])]),e._v(" "),r("p",[e._v("BOT 持有者（或称主人）的 QQ 账号，唯一指定，拥有 BOT 最高权限。")]),e._v(" "),r("h3",{attrs:{id:"inviteauth"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#inviteauth"}},[e._v("#")]),e._v(" inviteAuth")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("code",[e._v("1|2|3")])]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("2")])])]),e._v(" "),r("p",[e._v("邀请 BOT 入群时，BOT 自动接受入群邀请的权限等级，每个权限等级的对应如下：")]),e._v(" "),r("ul",[r("li",[e._v("1: 仅自动接收 "),r("strong",[e._v("BOT 持有者")]),e._v("的入群邀请。")]),e._v(" "),r("li",[e._v("2: 自动接受 "),r("strong",[e._v("BOT 管理员")]),e._v(" 与 "),r("strong",[e._v("BOT 持有者")]),e._v("的入群邀请。")]),e._v(" "),r("li",[e._v("3: 自动接受"),r("strong",[e._v("被封禁用户外")]),e._v("的所有人的入群邀请。")])]),e._v(" "),r("h3",{attrs:{id:"loglevel"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#loglevel"}},[e._v("#")]),e._v(" logLevel")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("code",[e._v("all|trace|debug|info|warn|error|fatal|mark|off")])]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("info")])])]),e._v(" "),r("p",[e._v("日志输出等级，等级从前往后依次递减。日志输出会过滤掉比所设置等级更高的等级日志，"),r("code",[e._v("all")]),e._v(" 输出全部日志，"),r("code",[e._v("off")]),e._v(" 不输出任何日志。")]),e._v(" "),r("h3",{attrs:{id:"atuser"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#atuser"}},[e._v("#")]),e._v(" atUser")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[e._v("boolean"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("false")])])]),e._v(" "),r("p",[e._v("BOT 在响应指令时，是否需要 at 用户。部分指令的响应无视本项配置。")]),e._v(" "),r("h3",{attrs:{id:"atbot"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#atbot"}},[e._v("#")]),e._v(" atBOT")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[e._v("boolean"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("false")])])]),e._v(" "),r("p",[e._v("是否需要在使用指令时 @BOT 账号，只在群聊中生效。@BOT 必须在最前面，例如 "),r("code",[e._v("@Adachi-BOT #help")]),e._v("。")]),e._v(" "),r("h3",{attrs:{id:"addfriend"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#addfriend"}},[e._v("#")]),e._v(" addFriend")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[e._v("boolean"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("true")])])]),e._v(" "),r("p",[e._v("是否强制要求添加好友后才能使用 BOT，开启后未添加好友时 BOT 将不会响应并提示对方请先添加好友。")]),e._v(" "),r("h3",{attrs:{id:"apitimeout"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#apitimeout"}},[e._v("#")]),e._v(" apiTimeout")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"}},[e._v("number"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("20000")])])]),e._v(" "),r("p",[e._v("设置等待 OneBot 实现响应 api 的最大等待时间，超出后报错 "),r("code",[e._v("${ action } 响应超时")]),e._v("，单位秒。")]),e._v(" "),r("h3",{attrs:{id:"renderport"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#renderport"}},[e._v("#")]),e._v(" renderPort")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"}},[e._v("number"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("80")])])]),e._v(" "),r("p",[e._v("BOT 启动所依赖端口（网页控制台、公共路由等）。")]),e._v(" "),r("p",[e._v("若使用 "),r("code",[e._v("docker")]),e._v(" 启动，则修改此项后应同步更改 "),r("code",[e._v("docker-compose.yml")]),e._v(" 中 "),r("code",[e._v("port")]),e._v(" 的第二个值。")]),e._v(" "),r("h2",{attrs:{id:"directive-yml"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#directive-yml"}},[e._v("#")]),e._v(" directive.yml")]),e._v(" "),r("p",[e._v("指令发送的相关配置。")]),e._v(" "),r("h3",{attrs:{id:"header"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#header"}},[e._v("#")]),e._v(" header")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("code",[e._v("string[]")])]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v('[ "#" ]')])])]),e._v(" "),r("p",[e._v("指令起始符。用于标识 BOT 指令的特殊符号，可配置多项，")]),e._v(" "),r("p",[e._v("例如：当 "),r("code",[e._v("header")]),e._v(" 数组包含 "),r("code",[e._v("#")]),e._v(" 时，需使用 "),r("code",[e._v("#help")]),e._v(" 来触发帮助指令，"),r("code",[e._v("help")]),e._v(" 会被忽略。如果不想在指令前添加特殊符号，请设置为空数组 "),r("code",[e._v("[]")]),e._v(" 。")]),e._v(" "),r("h3",{attrs:{id:"groupintervaltime"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#groupintervaltime"}},[e._v("#")]),e._v(" groupIntervalTime")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"}},[e._v("number"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("1500")])])]),e._v(" "),r("p",[e._v("群聊中指令操作冷却时间，单位为毫秒(ms)，不支持小数。")]),e._v(" "),r("h3",{attrs:{id:"privateintervaltime"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#privateintervaltime"}},[e._v("#")]),e._v(" privateIntervalTime")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"}},[e._v("number"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("2000")])])]),e._v(" "),r("p",[e._v("私聊中指令操作冷却时间，单位为毫秒(ms)，不支持小数。")]),e._v(" "),r("h3",{attrs:{id:"helpmessagestyle"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#helpmessagestyle"}},[e._v("#")]),e._v(" helpMessageStyle")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("code",[e._v("message|forward|xml|card")])]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("message")])])]),e._v(" "),r("p",[e._v("帮助信息样式，每个配置的对应解释如下：")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("message")]),e._v(" 样式为所有指令以单条消息直接发送。")]),e._v(" "),r("li",[r("code",[e._v("forward")]),e._v(" 样式为每条指令为单条消息，并整合为合并转发的形式发送。")]),e._v(" "),r("li",[r("code",[e._v("xml")]),e._v(" 样式为所有指令以 xml 卡片的形式进行发送，此方式有一定封号风险，不建议大群使用。")]),e._v(" "),r("li",[r("code",[e._v("card")]),e._v(" 以图片形式发送，此种方式发送速度略慢于上面三种，但比较直观。")])]),e._v(" "),r("h3",{attrs:{id:"fuzzymatch"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fuzzymatch"}},[e._v("#")]),e._v(" fuzzyMatch")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[e._v("boolean"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("false")])])]),e._v(" "),r("p",[e._v("启用中文模糊匹配。开启后 BOT 会对中文指令进行模糊匹配，要求必须以 "),r("code",[e._v("header")]),e._v(" 开头且中文指令不得拆开。")]),e._v(" "),r("p",[e._v("例如在 "),r("code",[e._v("header")]),e._v(" 配置为 "),r("code",[e._v('[ "#" ]')]),e._v(" 时，对于"),r("code",[e._v("攻略（角色名）")]),e._v("指令，有如下情况：")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("#攻略行秋")]),e._v("、"),r("code",[e._v("#攻略 行秋")]),e._v(": 正常触发")]),e._v(" "),r("li",[r("code",[e._v("#行秋攻略")]),e._v("、"),r("code",[e._v("#行攻略秋")]),e._v(": 被解析为 "),r("code",[e._v("#攻略 行秋")]),e._v(" 并正常触发")]),e._v(" "),r("li",[r("code",[e._v("#行攻秋略")]),e._v(": 无法触发，指令头不能被拆分")]),e._v(" "),r("li",[r("code",[e._v("行秋#攻略")]),e._v(": 无法触发，必须以 "),r("code",[e._v("#")]),e._v(" 起始")])]),e._v(" "),r("p",[e._v("需要注意的是，此项与无指令头中文指令（例如 "),r("code",[e._v("__攻略")]),e._v(" 或 "),r("code",[e._v("header")]),e._v(" 置空）会发证某些奇妙的化学反应，导致误触率极高.")]),e._v(" "),r("p",[e._v("还是以"),r("code",[e._v("攻略（角色名）")]),e._v("指令为例，在 "),r("code",[e._v("header")]),e._v(" 配置为 "),r("code",[e._v("[]")]),e._v(" 时，，有如下情况：")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("这个攻略不太靠谱")]),e._v(": 被解析为 "),r("code",[e._v("攻略 这个不太靠谱")]),e._v("，并触发指令，导致 BOT 响应："),r("code",[e._v("未找到角色 这个不太靠谱")]),e._v("。")])]),e._v(" "),r("p",[e._v("因此如果你有使用无指令头中文指令的需求，请慎重开启此项。")]),e._v(" "),r("h3",{attrs:{id:"matchprompt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#matchprompt"}},[e._v("#")]),e._v(" matchPrompt")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[e._v("boolean"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("true")])])]),e._v(" "),r("p",[e._v("启用参数校验提示。开启后若指令参数错误，BOT 将会给予提示。")]),e._v(" "),r("h3",{attrs:{id:"concurrency"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#concurrency"}},[e._v("#")]),e._v(" concurrency")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"}},[e._v("number"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("10")])])]),e._v(" "),r("p",[e._v("bot 可并发响应的指令数量，同时响应的指令数量超过这个数值后，将会排队等待响应。")]),e._v(" "),r("h3",{attrs:{id:"calltimes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#calltimes"}},[e._v("#")]),e._v(" callTimes")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"}},[e._v("number"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("3")])])]),e._v(" "),r("p",[e._v("指令 "),r("strong",[e._v("联系bot持有者")]),e._v(" 每个人一天内可使用的最大次数。")]),e._v(" "),r("h3",{attrs:{id:"countthreshold"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#countthreshold"}},[e._v("#")]),e._v(" countThreshold")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"}},[e._v("number"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("60")])])]),e._v(" "),r("p",[e._v("用户在一小时使用指令的次数的阈值，按整点计算，如 "),r("code",[e._v("13:00~14:00")]),e._v(" 。如果用户在过去一小时内使用指令的次数超过了该值，BOT 会向持有者发送私聊信息，提示所有超量使用的用户和使用次数，以便持有者对超量使用指令的用户进行处理。")]),e._v(" "),r("h3",{attrs:{id:"thresholdinterval"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#thresholdinterval"}},[e._v("#")]),e._v(" ThresholdInterval")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[e._v("boolean"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("false")])])]),e._v(" "),r("p",[e._v("开启后当用户使用超过 "),r("code",[e._v("countThreshold")]),e._v(" 所设置的阈值时，本小时内 BOT 将不再响应其指令。")]),e._v(" "),r("h2",{attrs:{id:"db-yml"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#db-yml"}},[e._v("#")]),e._v(" db.yml")]),e._v(" "),r("p",[r("code",[e._v("redis")]),e._v(" 数据库相关配置。")]),e._v(" "),r("h3",{attrs:{id:"port"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#port"}},[e._v("#")]),e._v(" port")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"}},[e._v("number"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("6379")])])]),e._v(" "),r("p",[e._v("数据库端口。")]),e._v(" "),r("blockquote",[r("p",[e._v("注意，Docker 启动时修改此值，需同时将 "),r("code",[e._v("redis.conf")]),e._v(" 中的 "),r("code",[e._v("port")]),e._v(" 修改为与此处相同的值。")])]),e._v(" "),r("h3",{attrs:{id:"password"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#password"}},[e._v("#")]),e._v(" password")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[e._v("string"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v('""')])])]),e._v(" "),r("p",[e._v("数据库密码。非必填项，依照个人需求设置。")]),e._v(" "),r("h2",{attrs:{id:"mail-yml"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mail-yml"}},[e._v("#")]),e._v(" mail.yml")]),e._v(" "),r("p",[e._v("用于主动发送邮件的相关功能，使用 "),r("code",[e._v("SMTP")]),e._v(" 协议发送邮件。")]),e._v(" "),r("h3",{attrs:{id:"host"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#host"}},[e._v("#")]),e._v(" host")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[e._v("string"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v('"smtp.qq.com"')])])]),e._v(" "),r("p",[e._v("邮箱服务的主机名或 IP 地址，例如qq服务为smtp.qq.com。")]),e._v(" "),r("h3",{attrs:{id:"port-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#port-2"}},[e._v("#")]),e._v(" port")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"}},[e._v("number"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("587")])])]),e._v(" "),r("p",[e._v("邮箱服务的端口，配置项 "),r("code",[e._v("secure")]),e._v(" 关闭时默认 "),r("code",[e._v("587")]),e._v("，反之 "),r("code",[e._v("465")]),e._v("。")]),e._v(" "),r("h3",{attrs:{id:"user"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#user"}},[e._v("#")]),e._v(" user")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[e._v("string"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v('"123456789@qq.com"')])])]),e._v(" "),r("p",[e._v("邮箱账号。")]),e._v(" "),r("h3",{attrs:{id:"pass"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pass"}},[e._v("#")]),e._v(" pass")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[e._v("string"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v('""')])])]),e._v(" "),r("p",[e._v("邮箱密码，各平台互不相同，如qq邮箱为授权码，请参考各自平台进行配置")]),e._v(" "),r("h3",{attrs:{id:"secure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#secure"}},[e._v("#")]),e._v(" secure")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[e._v("boolean"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("false")])])]),e._v(" "),r("p",[e._v("是否开启安全连接，参考 "),r("code",[e._v("port")]),e._v(" 解释。")]),e._v(" "),r("h3",{attrs:{id:"servername"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#servername"}},[e._v("#")]),e._v(" servername")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[e._v("string"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v('""')])])]),e._v(" "),r("p",[e._v("验证主机名，"),r("code",[e._v("host")]),e._v(" 设置为"),r("strong",[e._v("IP地址")]),e._v("时可选的 TLS 验证主机名。仅 "),r("code",[e._v("secure")]),e._v(" 开启时有效。")]),e._v(" "),r("h3",{attrs:{id:"rejectunauthorized"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rejectunauthorized"}},[e._v("#")]),e._v(" rejectUnauthorized")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[e._v("boolean"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("false")])])]),e._v(" "),r("p",[e._v("证书校验。仅 "),r("code",[e._v("secure")]),e._v(" 开启时有效。")]),e._v(" "),r("p",[e._v("建议关闭，开启可能会存在认证问题。")]),e._v(" "),r("h3",{attrs:{id:"logoutsend"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#logoutsend"}},[e._v("#")]),e._v(" logoutSend")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[e._v("boolean"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("false")])])]),e._v(" "),r("p",[e._v("是否开启离线发送邮件功能。开启后当 BOT 意外掉线时，自动向 Master 的 QQ 邮箱发送邮件提醒。")]),e._v(" "),r("h3",{attrs:{id:"senddelay"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#senddelay"}},[e._v("#")]),e._v(" sendDelay")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"}},[e._v("number"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("5")])])]),e._v(" "),r("p",[e._v("BOT 离线多久后发送提醒邮件，期间 BOT 恢复上线则不会继续发送邮件，单位 "),r("strong",[e._v("分钟")]),e._v("。仅 "),r("code",[e._v("logoutSend")]),e._v(" 开启时有效。")]),e._v(" "),r("h3",{attrs:{id:"retry"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#retry"}},[e._v("#")]),e._v(" retry")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"}},[e._v("number"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("3")])])]),e._v(" "),r("p",[e._v("离线邮件发送失败时重新尝试发送的次数。仅 "),r("code",[e._v("logoutSend")]),e._v(" 开启时有效。")]),e._v(" "),r("h3",{attrs:{id:"retrywait"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#retrywait"}},[e._v("#")]),e._v(" retryWait")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"}},[e._v("number"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("5")])])]),e._v(" "),r("p",[e._v("离线邮件发送失败后延迟多久重新尝试发送，单位 "),r("strong",[e._v("分钟")]),e._v("。仅 "),r("code",[e._v("logoutSend")]),e._v(" 开启时有效。")]),e._v(" "),r("h2",{attrs:{id:"webconsole-yml"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#webconsole-yml"}},[e._v("#")]),e._v(" webConsole.yml")]),e._v(" "),r("p",[e._v("网页控制台相关配置。")]),e._v(" "),r("h3",{attrs:{id:"enable"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#enable"}},[e._v("#")]),e._v(" enable")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[e._v("boolean"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("true")])])]),e._v(" "),r("p",[e._v("是否启用 "),r("code",[e._v("Web Console")]),e._v(" 即网页控制台功能，开启后将停止终端的日志打印行为。")]),e._v(" "),r("h3",{attrs:{id:"tcploggerport"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tcploggerport"}},[e._v("#")]),e._v(" tcpLoggerPort")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"}},[e._v("number"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("54921")])])]),e._v(" "),r("p",[r("code",[e._v("log4js")]),e._v(" 日志输出端口，除非端口冲突否则不需要改动。")]),e._v(" "),r("h4",{attrs:{id:"loghighwatermark"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#loghighwatermark"}},[e._v("#")]),e._v(" logHighWaterMark")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"}},[e._v("number"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("64")])])]),e._v(" "),r("p",[e._v("控制日志单次读取的数据量，单位 "),r("code",[e._v("kb")]),e._v("，不填或置 0 时默认 "),r("code",[e._v("64")]),e._v("，越大读取越快，内存占用越高，反之同理。")]),e._v(" "),r("h4",{attrs:{id:"jwtsecret"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jwtsecret"}},[e._v("#")]),e._v(" jwtSecret")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[e._v("string"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v('""')])])]),e._v(" "),r("p",[e._v("JWT 验证秘钥，默认随机生成，可以随意输入长度为 6~16 的仅由字母和数字组成的字符串，最好不要有特殊含义。")]),e._v(" "),r("p",[e._v("该密钥还用于初次打开网页控制台时创建初始账号，请注意不要泄露该密钥。")]),e._v(" "),r("h2",{attrs:{id:"autochat-yml"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#autochat-yml"}},[e._v("#")]),e._v(" autoChat.yml")]),e._v(" "),r("p",[e._v("自动聊天配置，可以通过群聊中 "),r("code",[e._v("@BOT")]),e._v(" 或私聊发送非指令语句来触发自动对话（当开启 "),r("code",[e._v("atBOT")]),e._v(" 时，群聊中 "),r("code",[e._v("@BOT")]),e._v(" 无效）。")]),e._v(" "),r("h3",{attrs:{id:"enable-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#enable-2"}},[e._v("#")]),e._v(" enable")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[e._v("boolean"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("false")])])]),e._v(" "),r("p",[e._v("是否启用自动聊天功能。")]),e._v(" "),r("h3",{attrs:{id:"type"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[e._v("#")]),e._v(" type")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("code",[e._v("1|2|3")])]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("1")])])]),e._v(" "),r("p",[e._v("聊天 api 所使用的平台，不同值指代的平台如下：")]),e._v(" "),r("ul",[r("li",[e._v("1: 青云客")]),e._v(" "),r("li",[e._v("2: 腾讯NLP（腾讯自然语言处理）")]),e._v(" "),r("li",[e._v("3: 小爱同学")])]),e._v(" "),r("h3",{attrs:{id:"audio"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#audio"}},[e._v("#")]),e._v(" audio")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[e._v("boolean"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("false")])])]),e._v(" "),r("p",[e._v("是否开启语音发送功能，仅 "),r("code",[e._v("type")]),e._v(" 为 "),r("code",[e._v("3")]),e._v(" 时可用。")]),e._v(" "),r("h3",{attrs:{id:"secretid"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#secretid"}},[e._v("#")]),e._v(" secretId")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[e._v("string"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v('""')])])]),e._v(" "),r("p",[e._v("前往腾讯云开通 NLP 后获取，仅 "),r("code",[e._v("type")]),e._v(" 为 "),r("code",[e._v("2")]),e._v(" 时可用。")]),e._v(" "),r("h3",{attrs:{id:"secretkey"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#secretkey"}},[e._v("#")]),e._v(" secretKey")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[e._v("string"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v('""')])])]),e._v(" "),r("p",[e._v("前往腾讯云开通 NLP 后获取，仅 "),r("code",[e._v("type")]),e._v(" 为 "),r("code",[e._v("2")]),e._v(" 时可用。")]),e._v(" "),r("h2",{attrs:{id:"whitelist-yml"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#whitelist-yml"}},[e._v("#")]),e._v(" whiteList.yml")]),e._v(" "),r("p",[e._v("白名单配置，使 BOT 仅对白名单内的用户或群组作出响应。")]),e._v(" "),r("h3",{attrs:{id:"enable-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#enable-3"}},[e._v("#")]),e._v(" enable")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[e._v("boolean"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("false")])])]),e._v(" "),r("p",[e._v("是否启用白名单模式。")]),e._v(" "),r("h3",{attrs:{id:"user-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#user-2"}},[e._v("#")]),e._v(" user")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("code",[e._v("number[]")])]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("[]")])])]),e._v(" "),r("p",[e._v("BOT 响应的目标用户列表，未配置任何用户时，默认不做使用限制。")]),e._v(" "),r("h3",{attrs:{id:"group"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#group"}},[e._v("#")]),e._v(" group")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("code",[e._v("number[]")])]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("[]")])])]),e._v(" "),r("p",[e._v("BOT 响应的目标群组列表，未配置任何群组时，默认不做使用限制。")]),e._v(" "),r("h2",{attrs:{id:"banscreenswipe-yml"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#banscreenswipe-yml"}},[e._v("#")]),e._v(" banScreenSwipe.yml")]),e._v(" "),r("p",[e._v("群聊刷屏控制相关配置，用于处理群聊中的恶意刷屏行为（BOT 需要为管理员）。")]),e._v(" "),r("h3",{attrs:{id:"enable-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#enable-4"}},[e._v("#")]),e._v(" enable")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[e._v("boolean"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("false")])])]),e._v(" "),r("p",[e._v("是否启用刷屏控制。")]),e._v(" "),r("h3",{attrs:{id:"limit"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#limit"}},[e._v("#")]),e._v(" limit")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"}},[e._v("number"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("10")])])]),e._v(" "),r("p",[e._v("连续发送消息几次后触发封禁。")]),e._v(" "),r("h3",{attrs:{id:"duration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#duration"}},[e._v("#")]),e._v(" duration")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"}},[e._v("number"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("1800")])])]),e._v(" "),r("p",[e._v("禁言时长，单位为秒。")]),e._v(" "),r("h3",{attrs:{id:"prompt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prompt"}},[e._v("#")]),e._v(" prompt")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[e._v("boolean"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("true")])])]),e._v(" "),r("p",[e._v("触发判定后是否给予相关用户提示信息。")]),e._v(" "),r("h3",{attrs:{id:"promptmsg"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#promptmsg"}},[e._v("#")]),e._v(" promptMsg")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[e._v("string"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("请不要刷屏")])])]),e._v(" "),r("p",[e._v("触发判定后给予相关用户的提示信息内容，仅 "),r("code",[e._v("prompt")]),e._v(" 开启时有效。")]),e._v(" "),r("h2",{attrs:{id:"banheavyat-yml"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#banheavyat-yml"}},[e._v("#")]),e._v(" banHeavyAt.yml")]),e._v(" "),r("p",[e._v("群聊过量 at 处理相关配置，用于处理群聊中的at大量群员的恶意行为（BOT 需要为管理员）。")]),e._v(" "),r("h3",{attrs:{id:"enable-5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#enable-5"}},[e._v("#")]),e._v(" enable")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[e._v("boolean"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("false")])])]),e._v(" "),r("p",[e._v("是否启用过量 at 处理控制。")]),e._v(" "),r("h3",{attrs:{id:"limit-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#limit-2"}},[e._v("#")]),e._v(" limit")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"}},[e._v("number"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("10")])])]),e._v(" "),r("p",[e._v("一条消息中超过多少个 "),r("code",[e._v("@")]),e._v(" 消息后触发封禁。")]),e._v(" "),r("h3",{attrs:{id:"duration-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#duration-2"}},[e._v("#")]),e._v(" duration")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"}},[e._v("number"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("1800")])])]),e._v(" "),r("p",[e._v("禁言时长，单位为秒。")]),e._v(" "),r("h3",{attrs:{id:"prompt-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prompt-2"}},[e._v("#")]),e._v(" prompt")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[e._v("boolean"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("true")])])]),e._v(" "),r("p",[e._v("触发判定后是否给予相关用户提示信息。")]),e._v(" "),r("h3",{attrs:{id:"promptmsg-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#promptmsg-2"}},[e._v("#")]),e._v(" promptMsg")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[e._v("string"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("缺省值: "),r("code",[e._v("请不要同时at太多人")])])]),e._v(" "),r("p",[e._v("触发判定后给予相关用户的提示信息内容，仅 "),r("code",[e._v("prompt")]),e._v(" 开启时有效。")])])}),[],!1,null,null,null);r.default=v.exports}}]);