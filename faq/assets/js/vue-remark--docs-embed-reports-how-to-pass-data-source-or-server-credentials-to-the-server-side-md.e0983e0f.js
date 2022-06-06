(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{UQSp:function(t,e,s){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},nlCG:function(t,e,s){"use strict";s.r(e);var n=s("KHd+"),o=s("UQSp"),r=s("Kw5r");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.default.config.optionMergeStrategies;var p={VueRemarkRoot:o.a},c=function(t){var e=t.options.components=t.options.components||{},s=t.options.computed=t.options.computed||{};Object.keys(p).forEach((function(t){"object"===a(p[t])&&"function"==typeof p[t].render||"function"==typeof p[t]&&"function"==typeof p[t].options.render?e[t]=p[t]:s[t]=function(){return p[t]}}))},i=r.default.config.optionMergeStrategies,u="__vueRemarkFrontMatter",l={excerpt:null,title:"How to pass datasource/server credentials to server side",path:"/embed-reports/how-to-pass-data-source-or-server-credentials-to-the-server-side",description:"This section explains about how to pass data source or server credentials to the server side in Bold Reports. ",date:"2022-05-11T00:00:00.000Z"};var v=function(t){t.options[u]&&(t.options[u]=l),r.default.util.defineReactive(t.options,u,l),t.options.computed=i.computed({$frontmatter:function(){return t.options[u]}},t.options.computed)},_=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("VueRemarkRoot",[s("h2",{attrs:{id:"how-to-pass-data-source-or-server-credentials-to-the-server-side"}},[s("a",{attrs:{href:"#how-to-pass-data-source-or-server-credentials-to-the-server-side","aria-hidden":"true"}},[s("span",{staticClass:"icon icon-link"})]),t._v("How to pass data source or server credentials to the server side?")]),s("p",[t._v("This section explains how to pass data source or server credentials to the server side.")]),s("p",[t._v("You can specify "),s("code",{pre:!0},[t._v("ReportServerCredential")]),t._v(" in the Web API Controller "),s("code",{pre:!0},[t._v("OnInitReportOptions")]),t._v(" method, as shown in the below snippet to connect to your "),s("code",{pre:!0},[t._v("SSRS")]),t._v(" server.")]),s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",{pre:!0,attrs:{class:"language-csharp"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("OnInitReportOptions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReportViewerOptions")]),t._v(" reportOption"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nreportOption"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReportModel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReportServerCredential "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Net"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NetworkCredential")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ssrs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RDLReport1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),s("p",[t._v("If the report has any data source that uses credentials, you must specify the "),s("code",{pre:!0},[t._v("DataSourceCredentials")]),t._v(" in the Web API Controller "),s("code",{pre:!0},[t._v("OnInitReportOptions")]),t._v(" method as shown in the below snippet to connect data-source.")]),s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",{pre:!0,attrs:{class:"language-csharp"}},[t._v("reportOption"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReportModel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DataSourceCredentials"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("BoldReports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Web"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DataSourceCredentials")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AdventureWorks"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ssrs1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RDLReport1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])}),[],!1,null,null,null);"function"==typeof c&&c(_),"function"==typeof v&&v(_);e.default=_.exports}}]);