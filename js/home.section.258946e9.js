(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home.section"],{a722:function(t,e,a){"use strict";a("20f6"),a("99af"),a("4de4"),a("a15b"),a("b64b"),a("2ca0"),a("498a");var s=a("2b0e");function r(t){return s["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var s=a.props,r=a.data,i=a.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var n=r.attrs;if(n){r.attrs={};var o=Object.keys(n).filter((function(t){if("slot"===t)return!1;var e=n[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(r.staticClass+=" ".concat(o.join(" ")))}return s.id&&(r.domProps=r.domProps||{},r.domProps.id=s.id),e(s.tag,r,i)}})}e["a"]=r("layout")},b3d7:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"d-flex justify-center align-center",staticStyle:{height:"100%"}},[a("div",{staticClass:"text-center"},[a("h2",{staticClass:"mb-6"},[t._v(" Добрый день, "+t._s(t.profile.displayName||t.profile.email)+" ")]),a("p",[t._v(" Статус подтерждения: "),a("br"),t.profile.emailVerified?a("b",{staticClass:"success--text",domProps:{textContent:t._s("подтвержден")}}):a("b",{staticClass:"error--text",domProps:{textContent:t._s("не подтвержден")}})])])])},r=[],i=a("5530"),n=a("2f62"),o={name:"view-home",computed:Object(i["a"])({},Object(n["d"])(["profile"]))},c=o,l=a("2877"),d=a("6544"),u=a.n(d),f=a("a722"),p=Object(l["a"])(c,s,r,!1,null,null,null);e["default"]=p.exports;u()(p,{VLayout:f["a"]})}}]);
//# sourceMappingURL=home.section.258946e9.js.map