(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f371746"],{"28f9":function(e,t,o){},e151:function(e,t,o){"use strict";o("28f9")},ef13:function(e,t,o){"use strict";o.r(t);var c=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"code-wrap"},[t("div",{staticClass:"code-header-wrap"},[t("div",{staticClass:"code-title"},[e._v("Code Demo:")]),t("div",{staticClass:"copy-btn",on:{click:e.copyCodeContent}},[e._v("复制代码")])]),t("Editor",{staticClass:"editor",attrs:{codes:e.code,readOnly:e.readonly}})],1)},a=[],s=o("9ab4"),n=o("1b40"),d=o("5c96"),i=o("766a");let l=class extends n["c"]{copy(e,t,o){if(navigator.clipboard)navigator.clipboard.writeText(e).then((function(){t&&t()}),(function(e){o&&o()}));else{let e=document.createElement("textarea");e.value=window.location.href,e.style.top="0",e.style.left="0",e.style.position="fixed",document.body.appendChild(e),e.focus(),e.select();try{document.execCommand("copy"),t&&t()}catch(c){o&&o()}document.body.removeChild(e)}}copyCodeContent(){this.copy(this.code,()=>{d["Message"].success("复制成功")},()=>{d["Message"].error("复制失败")})}};Object(s["a"])([Object(n["b"])()],l.prototype,"code",void 0),Object(s["a"])([Object(n["b"])({default:!0})],l.prototype,"readonly",void 0),l=Object(s["a"])([Object(n["a"])({components:{Editor:i["default"]}})],l);var r=l,p=r,u=(o("e151"),o("2877")),f=Object(u["a"])(p,c,a,!1,null,"60498791",null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2f371746.2f317452.js.map