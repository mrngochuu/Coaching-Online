(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b5f60e0"],{"1ae3":function(t,e,i){"use strict";var s=i("dea7"),a=i.n(s);a.a},"1c4c":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["step-item",t.link?"linkable":null],on:{click:t.go}},[i("span",{style:t.titleStyle},[t._v(t._s(t.title))]),t.icon?i("a-icon",{style:t.iconStyle,attrs:{type:t.icon}}):t._e(),t._t("default")],2)},a=[],n=(i("c975"),i("9911"),{name:"AStepItemGroup",props:{align:{type:String,default:"center",validator:function(t){return-1!=["left","center","right"].indexOf(t)}}},render:function(t){return t("div",{attrs:{style:"text-align: ".concat(this.align,"; margin-top: 8px")}},[t("div",{attrs:{style:"text-align: left; display: inline-block;"}},[this.$slots.default])])}}),r={name:"AStepItem",Group:n,props:["title","icon","link","titleStyle","iconStyle"],methods:{go:function(){var t=this.link;t&&this.$router.push(t)}}},c=r,l=(i("95eb"),i("0c7c")),o=Object(l["a"])(c,s,a,!1,null,"2267d9fc",null);e["a"]=o.exports},"42a1":function(t,e,i){},"46d1":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-card",{staticClass:"result-success",attrs:{bordered:!1}},[i("result",{attrs:{"is-success":!0,description:t.description,title:t.title}},[i("template",{slot:"action"},[i("a-button",{staticClass:"action",attrs:{type:"primary"}},[t._v("返回列表")]),i("a-button",{staticClass:"action"},[t._v("查看项目")]),i("a-button",{staticClass:"action",on:{click:t.print}},[t._v("打印")])],1),i("div",[i("div",{staticClass:"project-name"},[t._v("项目名称")]),i("detail-list",{staticStyle:{"max-width":"800px","margin-bottom":"8px"},attrs:{size:"small"}},[i("detail-list-item",{attrs:{term:"项目ID"}},[t._v("20180724089")]),i("detail-list-item",{attrs:{term:"负责人"}},[t._v("曲丽丽")]),i("detail-list-item",{attrs:{term:"生效时间"}},[t._v("016-12-12 ~ 2017-12-12")])],1),i("a-steps",{attrs:{current:1,progressDot:""}},[i("a-step",{attrs:{title:"创建项目"}},[i("a-step-item-group",{attrs:{slot:"description"},slot:"description"},[i("a-step-item",{attrs:{title:"曲丽丽",icon:"dingding-o"}}),i("a-step-item",{attrs:{title:"2016-12-12 12:32"}})],1)],1),i("a-step",{attrs:{title:"部门初审"}},[i("a-step-item-group",{attrs:{slot:"description"},slot:"description"},[i("a-step-item",{attrs:{title:"周毛毛",icon:"dingding-o",iconStyle:{color:"#00A0E9"}}}),i("a-step-item",{attrs:{title:"催一下",titleStyle:{color:"#00A0E9"}}})],1)],1),i("a-step",{attrs:{title:"财务复核"}}),i("a-step",{attrs:{title:"完成"}})],1)],1)],2)],1)},a=[],n=i("84a9"),r=i("c340"),c=i("1c4c"),l=c["a"].Group,o=r["a"].Item,u={name:"Success",components:{AStepItemGroup:l,AStepItem:c["a"],DetailListItem:o,DetailList:r["a"],Result:n["a"]},data:function(){return{title:"提交成功",description:"提交结果页用于反馈一系列操作任务的处理结果，\n 如果仅是简单操作，使用 Message 全局提示反馈即可。\n 本文字区域可以展示简单的补充说明，如果有类似展示\n “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。"}},methods:{print:function(){window.print()}}},p=u,d=(i("1ae3"),i("0c7c")),m=Object(d["a"])(p,s,a,!1,null,"3ad9e860",null);e["default"]=m.exports},6531:function(t,e,i){"use strict";var s=i("42a1"),a=i.n(s);a.a},6573:function(t,e,i){},6748:function(t,e,i){"use strict";var s=i("6573"),a=i.n(s);a.a},"6c85":function(t,e,i){},"84a9":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"result"},[i("div",[i("a-icon",{class:[t.isSuccess?"success":"error","icon"],attrs:{type:t.isSuccess?"check-circle":"close-circle"}})],1),t.title?i("div",{staticClass:"title"},[t._v(t._s(t.title))]):t._e(),t.description?i("div",{staticClass:"desc"},[t._v(t._s(t.description))]):t._e(),i("div",{staticClass:"content"},[t._t("default")],2),i("div",{staticClass:"action"},[t._t("action")],2)])},a=[],n={name:"Result",props:["isSuccess","title","description"]},r=n,c=(i("6748"),i("0c7c")),l=Object(c["a"])(r,s,a,!1,null,"78c73a4c",null);e["a"]=l.exports},"95eb":function(t,e,i){"use strict";var s=i("6c85"),a=i.n(s);a.a},c340:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["detail-list","small"===t.size?"small":"large","vertical"===t.layout?"vertical":"horizontal"]},[t.title?i("div",{staticClass:"title"},[t._v(t._s(t.title))]):t._e(),i("a-row",[t._t("default")],2)],1)},a=[],n=(i("a9e3"),i("da05")),r={name:"DetailListItem",props:{term:{type:String,required:!1}},inject:{col:{type:Number}},methods:{renderTerm:function(t,e){return e?t("div",{attrs:{class:"term"}},[e]):null},renderContent:function(t,e){return t("div",{attrs:{class:"content"}},[e])}},render:function(t){var e=this.renderTerm(t,this.$props.term),i=this.renderContent(t,this.$slots.default);return t(n["b"],{props:c[this.col]},[e,i])}},c={1:{xs:24},2:{xs:24,sm:12},3:{xs:24,sm:12,md:8},4:{xs:24,sm:12,md:6}},l={name:"DetailList",Item:r,props:{title:{type:String,required:!1},col:{type:Number,required:!1,default:3},size:{type:String,required:!1,default:"large"},layout:{type:String,required:!1,default:"horizontal"}},provide:function(){return{col:this.col>4?4:this.col}}},o=l,u=(i("6531"),i("0c7c")),p=Object(u["a"])(o,s,a,!1,null,null,null);e["a"]=p.exports},dea7:function(t,e,i){}}]);