(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{336:function(e,t,v){"use strict";v.r(t);var s=v(14),_=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"网页控制台"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网页控制台"}},[e._v("#")]),e._v(" 网页控制台")]),e._v(" "),t("h2",{attrs:{id:"准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[e._v("#")]),e._v(" 准备工作")]),e._v(" "),t("p",[e._v("要开发网页控制台，需要先进行几项项准备工作：")]),e._v(" "),t("ol",[t("li",[e._v("前往 "),t("code",[e._v("config/web-console.yml")]),e._v(" 配置文件，将 "),t("code",[e._v("enable")]),e._v(" 设置为 "),t("code",[e._v("ture")]),e._v("，开启网页控制台")]),e._v(" "),t("li",[e._v("进入 "),t("code",[e._v("src/web-console/frontend")]),e._v(" 目录，执行 "),t("code",[e._v("pnpm install")]),e._v("，安装相关依赖")]),e._v(" "),t("li",[e._v("在项目根目录执行命令 "),t("code",[e._v("pnpm dev")]),e._v("，以开发模式启动项目")])]),e._v(" "),t("h2",{attrs:{id:"打包上传"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包上传"}},[e._v("#")]),e._v(" 打包上传")]),e._v(" "),t("blockquote",[t("p",[e._v("在执行此操作前，需要先向开发者申请 "),t("code",[e._v("upload_token")]),e._v("，并填入自动生成的 "),t("code",[e._v("src/web-console/frontend/build_setting.yml")]),e._v(" 中")])]),e._v(" "),t("p",[e._v("前端开发完毕后，在 "),t("code",[e._v("src/web-console/frontend")]),e._v(" 目录下，执行如下命令")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("pnpm")]),e._v(" build\n")])])]),t("p",[e._v("这个命令将会对前端页面进行打包，并在打包完毕后上传至云服务器。用户启动 bot 时将会检测并自动拉取云端当前 "),t("code",[e._v("package.json")]),e._v(" 的版本的新更新文件。")]),e._v(" "),t("h2",{attrs:{id:"注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[e._v("#")]),e._v(" 注意事项")]),e._v(" "),t("ol",[t("li",[e._v("若仅对前端页面部分进行了修改，直接打包上传即可。")]),e._v(" "),t("li",[e._v("若在修改了前端页面的同时，对后端内容也进行了修改，则务必修改根目录下的 "),t("code",[e._v("package.json")]),e._v(" 的 "),t("code",[e._v("version")]),e._v(" 版本号，然后再打包上传。")])])])}),[],!1,null,null,null);t.default=_.exports}}]);