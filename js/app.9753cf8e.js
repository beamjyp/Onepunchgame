(function(t){function n(n){for(var o,r,s=n[0],l=n[1],u=n[2],m=0,h=[];m<s.length;m++)r=s[m],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);c&&c(n);while(h.length)h.shift()();return i.push.apply(i,u||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],o=!0,s=1;s<e.length;s++){var l=e[s];0!==a[l]&&(o=!1)}o&&(i.splice(n--,1),t=r(r.s=e[0]))}return t}var o={},a={app:0},i=[];function r(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=o,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var u=0;u<s.length;u++)n(s[u]);var c=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var o=e("85ec"),a=e.n(o);a.a},1075:function(t,n,e){"use strict";var o=e("958e"),a=e.n(o);a.a},"15b9":function(t,n,e){t.exports=e.p+"img/h3.79995ceb.jpg"},"4cf9":function(t,n,e){"use strict";var o=e("8720"),a=e.n(o);a.a},"56b2":function(t,n,e){t.exports=e.p+"img/h1.af44f014.jpg"},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),a=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticStyle:{"background-color":"black"},attrs:{id:"app"}},[o("HelloWorld",{attrs:{msg:"Welcome to The one punch man game"}}),o("img",{attrs:{src:e("b640")}}),o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("HelloWorld",{attrs:{msg:"select the hero"}}),o("p"),o("Reset"),o("p")],1)]),o("div",{staticClass:"row"},[o("div",{staticClass:"col-4"},[o("Heropic",{on:{cc:t.ranH}}),t._v(" Name = "+t._s(t.player[t.total1].name)+"/Hp = "+t._s(t.player[t.total1].hp)+" "),o("img",{attrs:{src:t.player[t.total1].image,width:"300",height:"200"}})],1),o("div",{staticClass:"col-4"},[o("Monsterpic",{on:{bb:t.ranM}}),t._v(" Name = "+t._s(t.monster[t.total2].name)+"/Hp = "+t._s(t.monster[t.total2].hp)+" "),o("img",{attrs:{src:t.monster[t.total2].image,width:"300",height:"200"}})],1),o("div",{staticClass:"col-4"},[o("Attackbut",{on:{N:t.sumH,MN:t.sumM,S:t.sumHS,MS:t.sumMS}}),o("h2",[t._v("Hero Hp = "+t._s(t.player[t.total1].hp))]),o("h2",[t._v("Monster Hp = "+t._s(t.monster[t.total2].hp))]),o("h2",[t._v(t._s(t.Result))]),o("h2",[t._v(t._s(t.Result2))])],1)])],1)},i=[],r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))])])},s=[],l={name:"HelloWorld",props:{msg:String}},u=l,c=(e("1075"),e("2877")),m=Object(c["a"])(u,r,s,!1,null,"7d381216",null),h=m.exports,p=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[e("button",{staticClass:"btn btn-info",on:{click:function(n){return t.randomhero(0,4)}}},[t._v("กดเพื่อเป็น Hero")])])])},f=[],d={data:function(){return{num:0}},methods:{randomhero:function(t,n){this.num=Math.max(Math.floor(Math.random()*n)+1,t),this.$emit("cc",this.num)}}},g=d,b=(e("4cf9"),Object(c["a"])(g,p,f,!1,null,null,null)),v=b.exports,M=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[e("button",{staticClass:"btn btn-info",on:{click:function(n){return t.randommonster(0,4)}}},[t._v("กดสุ่ม Monster")])])])},_=[],y={data:function(){return{num1:0}},methods:{randommonster:function(t,n){this.num1=Math.max(Math.floor(Math.random()*n)+1,t),this.$emit("bb",this.num1)}}},x=y,S=(e("9c59"),Object(c["a"])(x,M,_,!1,null,null,null)),j=S.exports,w=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"row-2"},[e("div",{staticClass:"col"},[e("button",{staticClass:"btn btn-info",on:{click:function(n){t.randomDamageN(3,10),t.randomDamageMN(3,10)}}},[t._v("กดเพื่อโจมตีธรรมดา")])]),e("p"),e("div",{staticClass:"col"},[e("button",{staticClass:"btn btn-info",on:{click:function(n){t.randomDamageS(10,20),t.randomDamageMS(10,20)}}},[t._v("กดเพื่อโจมตีท่าไม้ตาย")])])])},H=[],O={data:function(){return{numN:0,numMN:0,numS:0,numMS:0}},methods:{randomDamageN:function(t,n){this.numN=Math.max(Math.floor(Math.random()*n)+1,t),this.$emit("N",this.numN)},randomDamageMN:function(t,n){this.numMN=Math.max(Math.floor(Math.random()*n)+1,t),this.$emit("MN",this.numMN)},randomDamageS:function(t,n){this.numS=Math.max(Math.floor(Math.random()*n)+1,t),this.$emit("S",this.numS)},randomDamageMS:function(t,n){this.numMS=Math.max(Math.floor(Math.random()*n)+1,t),this.$emit("MS",this.numMS)}}},k=O,C=(e("d822"),Object(c["a"])(k,w,H,!1,null,null,null)),N=C.exports,R=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"btn btn-info",on:{click:function(n){return t.reloadPage()}}},[t._v("Reset Battle")])},$=[],D={methods:{reloadPage:function(){window.location.reload()}}},P=D,E=Object(c["a"])(P,R,$,!1,null,null,null),T=E.exports,W={name:"App",components:{HelloWorld:h,Heropic:v,Monsterpic:j,Attackbut:N,Reset:T},data:function(){return{name:"",hp:0,total1:0,total2:0,Result:"",Result2:"",player:[{image:e("eed7")},{name:"Saitama",hp:300,image:e("56b2")},{name:"Tasumaki",hp:200,image:e("93a5")},{name:"Janos",hp:125,image:e("15b9")},{name:"Mumen rider",hp:35,image:e("e392")}],monster:[{image:e("eed7")},{name:"Giantfukakao",hp:120,image:e("bbd6")},{name:"Kingofdeepsea",hp:150,image:e("dc21")},{name:"Carpkung",hp:35,image:e("7e92")},{name:"Boros",hp:225,image:e("ae00")}]}},methods:{ranH:function(t){this.total1=t},ranM:function(t){this.total2=t},sumH:function(t){this.player[this.total1].hp=this.player[this.total1].hp-t,this.player[this.total1].hp<=0&&(this.Result="Monster win",this.Result2="Hero Death")},sumM:function(t){this.monster[this.total2].hp=this.monster[this.total2].hp-t,this.monster[this.total2].hp<=0&&(this.Result="Monster Death",this.Result2="Hero win")},sumHS:function(t){this.player[this.total1].hp=this.player[this.total1].hp-t,this.player[this.total1].hp<=0&&(this.Result="Monster win",this.Result2="Hero Death")},sumMS:function(t){this.monster[this.total2].hp=this.monster[this.total2].hp-t,this.monster[this.total2].hp<=0&&(this.Result="Monster Death",this.Result2="Hero win")}}},A=W,J=(e("034f"),Object(c["a"])(A,a,i,!1,null,null,null)),B=J.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(B)}}).$mount("#app")},"62a4":function(t,n,e){},"6e26":function(t,n,e){},"7e92":function(t,n,e){t.exports=e.p+"img/m3.ef0a2ea1.jpg"},"85ec":function(t,n,e){},8720:function(t,n,e){},"93a5":function(t,n,e){t.exports=e.p+"img/h2.6dd48fd6.jpg"},"958e":function(t,n,e){},"9c59":function(t,n,e){"use strict";var o=e("6e26"),a=e.n(o);a.a},ae00:function(t,n,e){t.exports=e.p+"img/m4.9e089297.jpg"},b640:function(t,n,e){t.exports=e.p+"img/logo.fac31bf1.jpg"},bbd6:function(t,n,e){t.exports=e.p+"img/m1.5b213cba.png"},d822:function(t,n,e){"use strict";var o=e("62a4"),a=e.n(o);a.a},dc21:function(t,n,e){t.exports=e.p+"img/m2.b82b7717.png"},e392:function(t,n,e){t.exports=e.p+"img/h4.e7ce14f0.jpg"},eed7:function(t,n,e){t.exports=e.p+"img/logoM.c5e591f5.jpg"}});
//# sourceMappingURL=app.9753cf8e.js.map