(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{300:function(t,a,s){"use strict";s.r(a);var v=s(14),r=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"网页控制台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网页控制台"}},[t._v("#")]),t._v(" 网页控制台")]),t._v(" "),a("h2",{attrs:{id:"访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问"}},[t._v("#")]),t._v(" 访问")]),t._v(" "),a("p",[t._v("要访问网页控制台，首先确保 "),a("code",[t._v("console/webConsole.yml => enable")]),t._v(" 设置为 "),a("code",[t._v("true")]),t._v(" 。")]),t._v(" "),a("h2",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),a("h3",{attrs:{id:"本地部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地部署"}},[t._v("#")]),t._v(" 本地部署")]),t._v(" "),a("p",[t._v("当 "),a("code",[t._v("base.yml => renderPort")]),t._v(" 设置为 "),a("code",[t._v("80")]),t._v(" 时，直接在浏览器中访问 "),a("code",[t._v("localhost")]),t._v(" 即可。若设置为 "),a("code",[t._v("80")]),t._v(" 以外的值 ，则访问 "),a("code",[t._v("localhost:对应设置值")]),t._v(" 。")]),t._v(" "),a("h3",{attrs:{id:"云端部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#云端部署"}},[t._v("#")]),t._v(" 云端部署")]),t._v(" "),a("p",[t._v("应用部署在云服务器时，首先需要知道服务器的公网 IP 。当 "),a("code",[t._v("base.yml => renderPort")]),t._v(" 设置为 "),a("code",[t._v("80")]),t._v(" 时，直接在任意设备的浏览器中访问 IP 地址即可。若设置为 "),a("code",[t._v("80")]),t._v(" 以外的值\n，你需要先在云服务商的控制台处设置防火墙或安全组，再访问 "),a("code",[t._v("IP:对应设置值")]),t._v(" 。下面以阿里云为例，介绍如何设置端口。")]),t._v(" "),a("h4",{attrs:{id:"轻量应用服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#轻量应用服务器"}},[t._v("#")]),t._v(" 轻量应用服务器")]),t._v(" "),a("ol",[a("li",[t._v("进入轻量应用服务器控制面板，选择侧边栏 安全-防火墙")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/console/server-1.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("点击添加规则，将端口范围改为你所设置的 "),a("code",[t._v("consolePort")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/console/server-2.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"云服务器-ecs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#云服务器-ecs"}},[t._v("#")]),t._v(" 云服务器 ECS")]),t._v(" "),a("ol",[a("li",[t._v("进入 ECS 控制面板，选择安全组，并进入你所设置的安全组")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/console/ecs-1.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"/console/ecs-2.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("在 入方向 中，点击手动添加，目的设为 "),a("code",[t._v("consolePort/consolePort")]),t._v(" ，源设为 "),a("code",[t._v("0.0.0.0/0")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/console/ecs-3.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"域名解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#域名解析"}},[t._v("#")]),t._v(" 域名解析")]),t._v(" "),a("p",[t._v("在已有域名中设置域名解析（A 记录类型）到服务器公网 IP 即可通过域名访问 "),a("code",[t._v("Web Console")])]),t._v(" "),a("p",[a("s",[t._v("赞助领取 adachi.top 二级域名解析")])]),t._v(" "),a("h3",{attrs:{id:"docker-部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-部署"}},[t._v("#")]),t._v(" Docker 部署")]),t._v(" "),a("p",[t._v("Docker 部署成功后，默认下访问 IP (本地为 localhost，服务器为 服务器公网 IP) 即可直接访问。但如果你希望修改访问的端口，无需修改 "),a("code",[t._v("base.yml => renderPort")]),t._v("\n，仅对 "),a("code",[t._v("docker-compose.yml")]),t._v(" 中 "),a("code",[t._v("services.bot.ports")]),t._v(" 的第一个 80 进行修改即可，修改后需要执行 "),a("code",[t._v("docker-compose up -d")]),t._v(" 来使修改生效。")]),t._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("h3",{attrs:{id:"注册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册"}},[t._v("#")]),t._v(" 注册")]),t._v(" "),a("p",[t._v("初次访问控制台时，默认打开管理员账号注册页面。需要使用随机密钥来辅助进行注册。")]),t._v(" "),a("p",[t._v("密钥被存放于 "),a("code",[t._v("data/registration_key.txt")]),t._v(" 内，每次 bot 启动时都会生成一个随机密钥。")]),t._v(" "),a("h3",{attrs:{id:"登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登录"}},[t._v("#")]),t._v(" 登录")]),t._v(" "),a("p",[t._v("访问控制台需要使用管理员账号进行登录验证，该验证的有效期为一天，验证到期后需重新登录。")]),t._v(" "),a("p",[t._v("由于控制台具有"),a("strong",[t._v("最高管理权限")]),t._v("，请务必不要泄露管理员账号的密码。")]),t._v(" "),a("h3",{attrs:{id:"忘记密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#忘记密码"}},[t._v("#")]),t._v(" 忘记密码")]),t._v(" "),a("p",[t._v("直接删除 "),a("code",[t._v("data/registration_key.txt")]),t._v(" 文件，重启即可再次进入管理员账号创建页面。")]),t._v(" "),a("h3",{attrs:{id:"控制台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#控制台"}},[t._v("#")]),t._v(" 控制台")]),t._v(" "),a("p",[t._v("在控制台中，你可以查看设备运行状态以及用户数量、群组数量。也可以通过曲线图直观查看用户使用 BOT 指令的情况的统计数据。")]),t._v(" "),a("p",[t._v("在曲线图中，点击周统计图上的圆点，日统计图就会切换到对应的日期。鼠标悬停至日统计图上的时间点，就可以看到一小时内所有指令的使用次数。")]),t._v(" "),a("h3",{attrs:{id:"日志模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志模块"}},[t._v("#")]),t._v(" 日志模块")]),t._v(" "),a("h4",{attrs:{id:"日期选择"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日期选择"}},[t._v("#")]),t._v(" 日期选择")]),t._v(" "),a("p",[t._v("进入日志模块时默认为当前日期，可选择其他日期，选择后日志将分页打印到窗口中，每页至多显示 750 条日志。如果选择了当天的日志，会额外显示一个「自动置底」的开关，开启时，窗口将会随着日志刷新而自动滚动到最底部。")]),t._v(" "),a("h4",{attrs:{id:"去隐私复制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#去隐私复制"}},[t._v("#")]),t._v(" 去隐私复制")]),t._v(" "),a("p",[t._v("当你完整的拖选了若干行日志时，可以选择点击右上角的「去隐私复制」，这会将你拖选的内容复制进你的剪切板中，并将群号、QQ号等隐私信息去除。不过注意，该功能只是简单的进行了正则替换，在进行错误反馈时，最好再对复制内容进行检查，避免隐私信息泄露。")]),t._v(" "),a("h3",{attrs:{id:"用户模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户模块"}},[t._v("#")]),t._v(" 用户模块")]),t._v(" "),a("p",[t._v("该模块用于管理所有使用过 BOT 指令的用户以及 BOT 所加入的所有群组，可对其进行指令权限、消息冷却时间、身份权限修改。在用户管理中，可直观的查看存在订阅的用户以及一键清除指定用户的所有订阅服务。而在群组管理中则可以进行退群操作，以及群发消息功能。")]),t._v(" "),a("h3",{attrs:{id:"消息模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息模块"}},[t._v("#")]),t._v(" 消息模块")]),t._v(" "),a("p",[t._v("该模块用于展示用户通过 BOT 反馈指令（默认为 "),a("code",[t._v("call")]),t._v("）向 BOT 持有者发送的反馈消息，可选择忽略或回复此条消息。")])])}),[],!1,null,null,null);a.default=r.exports}}]);