(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{"SjJ+":function(e,t,n){"use strict";n.r(t);var o=n("KHd+"),r=n("UQSp"),i=n("Kw5r");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i.default.config.optionMergeStrategies;var a={VueRemarkRoot:r.a},d=function(e){var t=e.options.components=e.options.components||{},n=e.options.computed=e.options.computed||{};Object.keys(a).forEach((function(e){"object"===s(a[e])&&"function"==typeof a[e].render||"function"==typeof a[e]&&"function"==typeof a[e].options.render?t[e]=a[e]:n[e]=function(){return a[e]}}))},p=i.default.config.optionMergeStrategies,h="__vueRemarkFrontMatter",u={excerpt:null,title:"Why http authorization headers are not being set?",path:"/rpeort-service/why-authorization-headers-are-not-being-set-for-all-requests",description:"This documentation explains why http authorization headers not being set for all requests on Report Viewer and Report Designer components in ASP.NET applications.",date:"2022-05-25T00:00:00.000Z"};var c=function(e){e.options[h]&&(e.options[h]=u),i.default.util.defineReactive(e.options,h,u),e.options.computed=p.computed({$frontmatter:function(){return e.options[h]}},e.options.computed)},v=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VueRemarkRoot",[n("h2",{attrs:{id:"why-http-authorization-headers-are-not-being-set-for-all-requests"}},[n("a",{attrs:{href:"#why-http-authorization-headers-are-not-being-set-for-all-requests","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("Why http authorization headers are not being set for all requests?")]),n("p",[e._v("Http authorization headers not being set for all requests on Report Viewer and Report Designer in ASP.NET Core and ASP.NET MVC applications because of the following reasons mentioned in the table.")]),n("table",[n("tr",[n("th",[e._v("\nReport Action\n")]),n("th",[e._v("\nAction Name\n")]),n("th",[e._v("\nRequest type\n")]),n("th",[e._v("\nComponent\n")]),n("th",[e._v("\nHeaders\n")]),n("th",[e._v("\nComments\n")])]),n("tr",[n("td",[e._v("\nReport Rendering\n")]),n("td",[e._v("\nPostReportAction\n")]),n("td",[e._v("\nPOST\n")]),n("td",[e._v("\nReport Viewer, Report Designer\n")]),n("td",[e._v("\nYes\n")]),n("td",[e._v("\nNo\n")])]),n("tr",[n("td",[e._v("\nReport Exporting (ASP.NET MVC)\n")]),n("td",[e._v("\nPostReportAction\n")]),n("td",[e._v("\nPOST\n")]),n("td",[e._v("\nReport Viewer, Report Designer\n")]),n("td",[e._v("\nNo\n")]),n("td",[n("p",[e._v("This request is to download the exporting document from Report Viewer and Report Designer applications with Form post action. So, the request headers cannot be passed with this action. Regarding the security, you can refer more details from this "),n("a",{attrs:{href:"https://help.boldreports.com/report-viewer-sdk/how-to/resolve-the-image-render-and-export-issue-with-asp.net-mvc-authentication/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("link")]),e._v(".")])])]),n("tr",[n("td",[e._v("\nReport Exporting (ASP.NET Core)\n")]),n("td",[e._v("\nPostFormReportAction\n")]),n("td",[e._v("\nPOST\n")]),n("td",[e._v("\nReport Viewer, Report Designer\n")]),n("td",[e._v("\nNo\n")]),n("td",[n("p",[e._v("This request is to download the exporting document from Report Viewer and Report Designer applications with Form post action. So, the request headers cannot be passed with this action. Regarding the security, you can refer more details from this "),n("a",{attrs:{href:"https://help.boldreports.com/report-viewer-sdk/how-to/resolve-the-image-render-and-export-issue-with-asp.net-core-authentication/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("link")]),e._v(".")])])]),n("tr",[n("td",[e._v("\nImage Rendering\n")]),n("td",[e._v("\nGet Resource\n")]),n("td",[e._v("\nGET\n")]),n("td",[e._v("\nReport Viewer, Report Designer\n")]),n("td",[e._v("\nNo\n")]),n("td",[n("p",[e._v("This request is to render the image items with Report Viewer and Report Designer applications. Since, this request URL is used with HTML image src attribute, you cannot add additional headers for this request and you can refer more details from this "),n("a",{attrs:{href:"https://help.boldreports.com/report-viewer-sdk/how-to/resolve-the-image-render-and-export-issue-with-asp.net-mvc-authentication/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("link")]),e._v(".")])])]),n("tr",[n("td",[e._v("\nReport Designing\n")]),n("td",[e._v("\nPostDesignerAction\n")]),n("td",[e._v("\nPOST\n")]),n("td",[e._v("\nReport Designer\n")]),n("td",[e._v("\nYes\n")]),n("td",[e._v("\nNo\n")])]),n("tr",[n("td",[e._v("\nReport Save (ASP.NET MVC)\n")]),n("td",[e._v("\nPostDesignerAction\n")]),n("td",[e._v("\nPOST\n")]),n("td",[e._v("\nReport Designer\n")]),n("td",[e._v("\nNo\n")]),n("td",[e._v("\nThis request method is used for the download process (save the report in the device), upload process (open the report from the device), and add an image (open the image from the device). You cannot use further to get the data from the server.\n")])]),n("tr",[n("td",[e._v("\nReport Save (ASP.NET Core)\n")]),n("td",[e._v("\nPostFormDesignerAction\n")]),n("td",[e._v("\nPOST\n")]),n("td",[e._v("\nReport Designer\n")]),n("td",[e._v("\nNo\n")]),n("td",[e._v("\nThis request method is used for the download process (save the report in the device), upload process (open the report from the device), and add an image (open the image from the device). You cannot use further to get the data from the server.\n")])]),n("tr",[n("td",[e._v("\nOpen Report and Add image\n")]),n("td",[e._v("\nUploadReportAction\n")]),n("td",[e._v("\nPOST\n")]),n("td",[e._v("\nReport Designer\n")]),n("td",[e._v("\nYes\n")]),n("td",[e._v("\nNo\n")])]),n("tr",[n("td",[e._v("\nImage Manager Images Reporting\n")]),n("td",[e._v("\nGetImage\n")]),n("td",[e._v("\nGET\n")]),n("td",[e._v("\nReport Designer\n")]),n("td",[e._v("\nNo\n")]),n("td",[n("p",[e._v("This request is to render the image items with Report Viewer and Report Designer applications. Since, this request URL is used with HTML image src attribute, you cannot add additional headers for this request and you can refer more details from this "),n("a",{attrs:{href:"https://help.boldreports.com/report-viewer-sdk/how-to/resolve-the-image-render-and-export-issue-with-asp.net-mvc-authentication/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("link")]),e._v(".")])])])])])}),[],!1,null,null,null);"function"==typeof d&&d(v),"function"==typeof c&&c(v);t.default=v.exports},UQSp:function(e,t,n){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);