(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e50a162"],{"3f9a":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("exception-page",{style:"min-height: "+t.minHeight,attrs:{"home-route":"/user",type:"403"}})},o=[],n=s("5530"),c=s("7832"),a=s("5880"),r={name:"Exp403",components:{ExceptionPage:c["a"]},computed:Object(n["a"])(Object(n["a"])({},Object(a["mapState"])("setting",["pageMinHeight"])),{},{minHeight:function(){return this.pageMinHeight?this.pageMinHeight+"px":"100vh"}})},p=r,u=s("2877"),h=Object(u["a"])(p,i,o,!1,null,"f9354614",null);e["default"]=h.exports},7832:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"exception-page"},[s("div",{staticClass:"img"},[s("img",{attrs:{src:t.config[t.type].img}})]),s("div",{staticClass:"content"},[s("h1",[t._v(t._s(t.config[t.type].title))]),s("div",{staticClass:"desc"},[t._v(t._s(t.config[t.type].desc))]),s("div",{staticClass:"action"},[s("a-button",{attrs:{type:"primary"},on:{click:t.backHome}},[t._v("Back")])],1)])])},o=[],n={403:{img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",title:"403",desc:"Sorry, you do not have permission to access this page!"},404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404",desc:"Sorry, the page you visited does not exist or is still under development!"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500",desc:"Sorry, server error!"}},c=n,a={name:"ExceptionPage",props:["type","homeRoute"],data:function(){return{config:c}},methods:{backHome:function(){this.homeRoute&&this.$router.push(this.homeRoute),this.$emit("backHome",this.type)}}},r=a,p=(s("de40"),s("2877")),u=Object(p["a"])(r,i,o,!1,null,"57677790",null);e["a"]=u.exports},de40:function(t,e,s){"use strict";s("ee15")},ee15:function(t,e,s){}}]);