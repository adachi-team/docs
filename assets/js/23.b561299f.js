(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{299:function(a,s,t){"use strict";t.r(s);var e=t(14),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"docker-部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-部署"}},[a._v("#")]),a._v(" Docker 部署")]),a._v(" "),s("h2",{attrs:{id:"前置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前置"}},[a._v("#")]),a._v(" 前置")]),a._v(" "),s("p",[a._v("首先你需要安装 docker 服务，包括 "),s("code",[a._v("docker")]),a._v(" 与 "),s("code",[a._v("docker-compose")]),a._v("。参考"),s("a",{attrs:{href:"https://www.docker.com/get-started/",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方文档"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("在此种部署方式中，你无需自行启动 "),s("code",[a._v("redis")]),a._v(" 服务，docker 将会附带启动一个 "),s("code",[a._v("redis")]),a._v(" 容器。")]),a._v(" "),s("h2",{attrs:{id:"拉取项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拉取项目"}},[a._v("#")]),a._v(" 拉取项目")]),a._v(" "),s("p",[a._v("与"),s("RouterLink",{attrs:{to:"/deploy/install/manual.html"}},[a._v("手动部署")]),a._v("相同的步骤")],1),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://mirror.ghproxy.com/https://github.com/SilveryStar/Adachi-BOT.git\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" Adachi-BOT\n")])])]),s("h2",{attrs:{id:"初次启动项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初次启动项目"}},[a._v("#")]),a._v(" 初次启动项目")]),a._v(" "),s("p",[a._v("通过 "),s("code",[a._v("docker-compose")]),a._v(" 直接以 "),s("code",[a._v("docker")]),a._v(" 方式启动项目")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker-compose")]),a._v(" up "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v("\n")])])]),s("h2",{attrs:{id:"修改配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件"}},[a._v("#")]),a._v(" 修改配置文件")]),a._v(" "),s("p",[a._v("与手动部署一样，初次运行将在根目录 "),s("code",[a._v("config")]),a._v(" 文件夹下生成配置文件模板，需要自行对修改配置文件内容。")]),a._v(" "),s("p",[a._v("不同的是，当使用本地自建的 "),s("code",[a._v("OneBot")]),a._v(" 实现时，"),s("code",[a._v("config/base.yml => wsServer")]),a._v(" 中的 ip 部分不能使用 "),s("code",[a._v("localhost")]),a._v(" 或 "),s("code",[a._v("127.0.0.1")]),a._v("。")]),a._v(" "),s("p",[a._v("首先检查 Docker 版本：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v("\n")])])]),s("p",[a._v("若为 "),s("code",[a._v("18.03")]),a._v(" 以上，可以使用 "),s("code",[a._v("host.docker.internal")]),a._v(" 来替代 ip 部分，例如: "),s("code",[a._v("host.docker.internal:8080")]),a._v("。")]),a._v(" "),s("p",[a._v("反之需要根据不同环境按照以下方式手动获取主机地址")]),a._v(" "),s("h3",{attrs:{id:"linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[a._v("#")]),a._v(" linux")]),a._v(" "),s("p",[a._v("查看网关信息")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ifconfig")]),a._v("\n")])])]),s("p",[a._v("在结果中查找 "),s("code",[a._v("eth0:")]),a._v(" 开头的一项，"),s("code",[a._v("inet")]),a._v(" 后即为主机地址")]),a._v(" "),s("p",[s("img",{attrs:{src:"/install/ifconfig.png",alt:"eth0"}})]),a._v(" "),s("h3",{attrs:{id:"windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[a._v("#")]),a._v(" windows")]),a._v(" "),s("p",[a._v("查看网关信息")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("ipconfig\n")])])]),s("p",[a._v("在结果中查找 "),s("code",[a._v("以太网适配器 vEthernet (WSL):")]),a._v(" 开头的一项，使用 "),s("code",[a._v("IPv4 地址")]),a._v(" 作为主机地址")]),a._v(" "),s("p",[s("img",{attrs:{src:"/install/ipconfig.png",alt:"WSL"}})]),a._v(" "),s("h2",{attrs:{id:"再次启动项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#再次启动项目"}},[a._v("#")]),a._v(" 再次启动项目")]),a._v(" "),s("p",[a._v("修改配置文件完毕后，执行命令重启项目。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker-compose")]),a._v(" restart\n")])])]),s("p",[a._v("若未正常启动，可执行下方命令来查看错误信息")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker-compose")]),a._v(" logs "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-tf")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);