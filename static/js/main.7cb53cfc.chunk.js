(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports={loading:"Loading_loading__2SKGB",spin:"Loading_spin__3yPHl"}},17:function(e,t,n){e.exports={blocks:"Blocks_blocks__25MUe"}},18:function(e,t,n){e.exports=n(35)},2:function(e,t,n){e.exports={block:"Block_block__1LGLO",info:"Block_info__11CH7",stats:"Block_stats__uFbJa",toggle:"Block_toggle__PBGdt",raw:"Block_raw__ziicx",open:"Block_open__IIyh3"}},23:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),o=n.n(c),l=(n(23),n(3)),i=n(5),s=n(4),u=n(7),d=n.n(u),m=n(14),b=n(15),p="https://api.eosnewyork.io",k=function(e){return new Promise(function(t){return setTimeout(t,e)})},h=function(e){return e};function f(){return g.apply(this,arguments)}function g(){return(g=Object(m.a)(d.a.mark(function e(){var t,n,a,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=new b.JsonRpc(p,{fetch:fetch}),n={},a=null;case 2:if(a){e.next=10;break}return e.next=5,fetch("".concat(p,"/v1/chain/get_info")).then(function(e){return e.json()}).catch(function(){return null});case 5:return a=e.sent,e.next=8,k(1e3);case 8:e.next=2;break;case 10:r=a.head_block_num;case 11:if(!(Object.keys(n).length<10)){e.next=21;break}return e.next=14,t.get_block(r).catch(function(){return null});case 14:return[e.sent].filter(h).forEach(function(e){return n[e.id]=e}),--r,e.next=19,k(10);case 19:e.next=11;break;case 21:return e.abrupt("return",n);case 22:case"end":return e.stop()}},e)}))).apply(this,arguments)}var _={empty:function(){return{blocks:{},loading:!1,error:null}},reduce:function(e,t){switch(t.type){case"get_blocks":return[Object(l.a)({},e,{loading:!0}),f().then(function(e){return{type:"blocks",blocks:e}})];case"blocks":return[Object(l.a)({},e,{loading:!1,blocks:Object.entries(t.blocks).reduce(function(e,t){var n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(l.a)({},e,Object(i.a)({},a,{open:!1,block:r}))},{})})];case"error":return[Object(l.a)({},e,{error:JSON.stringify(t.error,null,4),loading:!1})];case"toggle_block":return e.blocks[t.id].open=!e.blocks[t.id].open,[Object(l.a)({},e)];default:console.error("unmatched event",{event:t})}return[e]}};var v=n(1),E=n.n(v),y=(E.a.shape({timestamp:E.a.string.isRequired,producer:E.a.string,confirmed:E.a.number,previous:E.a.string,transaction_mroot:E.a.string,action_mroot:E.a.string,schedule_version:E.a.number,new_producers:E.a.any,header_extensions:E.a.array,producer_signature:E.a.string,transactions:E.a.array,block_extensions:E.a.array,id:E.a.string.isRequired,block_num:E.a.number,ref_block_prefix:E.a.number}),n(16));function w(){return r.a.createElement("span",{className:y.loading},"\ud83d\uddd8")}var O=n(8),j=n.n(O);function x(e){var t=e.dispatch,n=e.loading,a=e.ghost;return r.a.createElement("button",{className:"".concat(j.a.button," ").concat(a?j.a.ghost:""),onClick:function(){return t({type:"get_blocks"})},disabled:n},"Load Blocks ",n&&r.a.createElement(w,null))}function B(e){var t=e.blocks,n=e.dispatch,a=e.loading,c=!!Object.keys(t).length;return r.a.createElement("header",null,r.a.createElement("div",{id:"logo"},"block.one"),c&&r.a.createElement(x,{dispatch:n,loading:a,ghost:!0}))}var N=n(2),L=n.n(N);function J(e){var t=e.block,n=e.open,a=e.dispatch;return r.a.createElement("div",{className:L.a.block},r.a.createElement("div",{className:L.a.info},r.a.createElement("div",{className:L.a.stats},r.a.createElement("div",{className:L.a.hash},r.a.createElement("b",null,"Hash:")," ",t.id),r.a.createElement("div",{className:L.a.timestamp},r.a.createElement("b",null,"Timestamp:")," ",t.timestamp),r.a.createElement("div",{className:L.a.transactions},r.a.createElement("b",null,"Action Count:")," ",t.transactions.length)),r.a.createElement("div",{className:L.a.toggle,onClick:function(){return a({type:"toggle_block",id:t.id})},title:"View Raw Block"},n?"\u2796":"\u2795")),r.a.createElement("div",{className:"".concat(L.a.raw," ").concat(n?L.a.open:"")},r.a.createElement("pre",null,r.a.createElement("code",null,JSON.stringify(t,null,4)))))}var C=n(17),S=n.n(C);function H(e){var t=e.blocks,n=e.dispatch;return r.a.createElement("div",{className:S.a.blocks},r.a.createElement("h1",null,"Latest Blocks"),r.a.createElement("div",null,Object.entries(t).map(function(e){var t=Object(s.a)(e,2),a=t[0],c=t[1],o=c.open,l=c.block;return r.a.createElement(J,{key:a,block:l,open:o,dispatch:n})})))}function I(e){var t=e.dispatch,n=e.blocks,a=e.loading,c=e.error,o=!!Object.keys(n).length;return r.a.createElement("div",{id:"content"},o?r.a.createElement(H,{dispatch:t,blocks:n}):r.a.createElement(x,{dispatch:t,loading:a}),c&&r.a.createElement("div",{className:"error"},r.a.createElement("h1",null,"An Error Occurred"),r.a.createElement("h4",null,"Details:"),r.a.createElement("pre",null,r.a.createElement("code",null,JSON.stringify(c,null,4)))))}n(34);var P=function(){var e=function(e,t){var n=Object(a.useState)(e),r=Object(s.a)(n,2),c=r[0],o=r[1];return{state:c,dispatch:function e(n){return o(function(a){var r,c=t(a,n),o=Object(s.a)(c,2),l=o[0],i=o[1];return i&&(r=i).then&&"function"===typeof r.then&&Promise.resolve(i).then(e).catch(function(t){return e({type:"error",error:t})}),l})}}}(_.empty(),_.reduce),t=e.state,n=e.dispatch;return r.a.createElement("div",{id:"app"},r.a.createElement(B,{dispatch:n,blocks:t.blocks,loading:t.loading}),r.a.createElement(I,Object(l.a)({},t,{dispatch:n})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports={button:"BlockLoader_button__HneI2",ghost:"BlockLoader_ghost__3XZuC"}}},[[18,1,2]]]);
//# sourceMappingURL=main.7cb53cfc.chunk.js.map