(this.webpackJsonpdlmp3yt=this.webpackJsonpdlmp3yt||[]).push([[0],{16:function(t,e,a){t.exports=a(41)},21:function(t,e,a){},40:function(t,e,a){},41:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(15),u=a.n(c),o=(a(21),a(2)),l=a.n(o),s=a(4),i=a(3),p=a(5),m=a.n(p),f="http://localhost:3333";function d(t,e){return b.apply(this,arguments)}function b(){return(b=Object(s.a)(l.a.mark((function t(e,a){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.substr(32),a("Baixando o "+n),r={ytid:n},t.prev=3,t.next=6,m.a.post(f+"/sendid",r);case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t.catch(3),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[3,9]])})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=Object(s.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.post(f+"/sendinfoaudio",e);case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}a(40);var g=function(){var t=Object(n.useState)(""),e=Object(i.a)(t,2),a=e[0],c=e[1],u=Object(n.useState)(""),o=Object(i.a)(u,2),p=o[0],m=o[1],b=Object(n.useState)(""),v=Object(i.a)(b,2),g=v[0],E=v[1],j=Object(n.useState)(""),y=Object(i.a)(j,2),O=y[0],x=y[1],w=Object(n.useState)(""),N=Object(i.a)(w,2),k=N[0],S=N[1],C=Object(n.useState)(""),A=Object(i.a)(C,2),B=A[0],I=A[1],J=Object(n.useState)(""),L=Object(i.a)(J,2),T=L[0],M=L[1];function R(){return(R=Object(s.a)(l.a.mark((function t(e){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e,m);case 2:a=t.sent,m("baixou o ",a.data.audiofilename),E(a.data.audiofilename);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function U(){return(U=Object(s.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:h({file:g,tags:{title:k,artist:O,album:B,trackNumber:1,image:T}});case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Y(){!function(t){try{window.open(f+"/dlmp3/"+t)}catch(e){console.error(e)}}("".concat(k," - ").concat(O,".mp3"))}return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"form-dl"},r.a.createElement("input",{className:"input-dl",placeholder:"YouTube Link",type:"text",value:a,onChange:function(t){return c(t.target.value)}}),r.a.createElement("button",{className:"btn-dl",onClick:function(){return function(t){return R.apply(this,arguments)}(a)}},"Baixar"),r.a.createElement("h3",{className:"status-dl"},p)),r.a.createElement("div",{className:"form-tags"},r.a.createElement("div",null,r.a.createElement("input",{type:"text",className:"input-tags left-top",value:O,placeholder:"Artista",onChange:function(t){return x(t.target.value)}}),r.a.createElement("input",{type:"text",className:"input-tags left-bottom",placeholder:"Titulo",value:k,onChange:function(t){return S(t.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",className:"input-tags right-top",placeholder:"Album",value:B,onChange:function(t){return I(t.target.value)}}),r.a.createElement("input",{type:"text",className:"input-tags right-bottom",placeholder:"URL da Imagem",value:T,onChange:function(t){return M(t.target.value)}})),r.a.createElement("button",{className:"btn-tag",onClick:function(){return function(){return U.apply(this,arguments)}()}},"Setar"),r.a.createElement("button",{className:"btn-tag",onClick:function(){return Y()}},"Salvar"),r.a.createElement("button",{className:"btn-tag",onClick:function(){window.open("http://localhost:3333/delfromserver")}},"Excluir")))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.907170cc.chunk.js.map