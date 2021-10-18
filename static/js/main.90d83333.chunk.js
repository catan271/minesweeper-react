(this["webpackJsonpreact-minesweeper"]=this["webpackJsonpreact-minesweeper"]||[]).push([[0],{23:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var i,r=n(0),a=n.n(r),c=n(12),s=n.n(c),o=(n(23),n(2)),l=n(5),h=n(4),d=n(3),u=n(1),f=a.a.createContext(),m=function(){console.log("empty function")},g={game:"new-game",height:9,width:9,mine:10},p=function(e,t){switch(t.type){case"new-game":return Object(l.a)(Object(l.a)({},e),{},{game:"new-game"});case"win":return Object(l.a)(Object(l.a)({},e),{},{game:"win"});case"lose":return Object(l.a)(Object(l.a)({},e),{},{game:"lose"});case"change-level":return{game:"new-game",height:t.height,width:t.width,mine:t.mine};default:return e}};function b(e){var t=e.children,n=Object(r.useReducer)(p,g),i=Object(h.a)(n,2),a=i[0],c=i[1];return m=c,Object(u.jsx)(f.Provider,{value:a,children:t})}var j=["EASY","MEDIUM","HARD"],v=[{height:9,width:9,mine:10},{height:16,width:16,mine:40},{height:16,width:30,mine:76}];function w(){var e=Object(r.useState)(0),t=Object(h.a)(e,2),n=t[0],i=t[1],a=Object(r.useState)(!1),c=Object(h.a)(a,2),s=c[0],o=c[1];return Object(u.jsx)(O,{children:Object(u.jsxs)("div",{className:"inner",children:[Object(u.jsxs)("div",{className:"options",children:[j.map((function(e,t){return Object(u.jsx)("div",{onClick:function(){return function(e){i(e),o(!1),m(Object(l.a)({type:"change-level"},v[e]))}(t)},className:"option"+(n===t?" active":""),children:e},t)})),Object(u.jsx)("div",{className:"option"+(s?" active":""),onClick:function(){i(4),o(!0)},children:"CUSTOM"})]}),s&&Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=Number.parseInt(e.target.height.value),n=Number.parseInt(e.target.width.value),i=Number.parseInt(e.target.mine.value);if(t&&n&&i)return i>=t*n?window.alert("Too many mines"):void m({type:"change-level",height:t,width:n,mine:i})},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"Height: "}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"number",name:"height",max:"50",min:"8"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"Width: "}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"number",name:"width",max:"50",min:"8"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"Mine: "}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"number",name:"mine",max:"1000",min:"1"})]}),Object(u.jsx)("button",{children:"Update"})]})]})})}var x,O=d.a.div(i||(i=Object(o.a)(["\n    background-color: #C6C6C6;\n    border-width: 2px;\n    border-style: solid;\n    border-color: #fff #808080 #808080 #fff;\n    margin-bottom: 8px;\n    cursor: context-menu;\n\n    .inner {\n        margin: 8px;\n        border-width: 2px;\n        border-style: solid;\n        border-color: #808080 #fff #fff #808080;\n        padding: 4px;\n    }\n\n    .options {\n        display: flex;\n\n        .option {\n            height: 36px;\n            width: 96px;\n            line-height: 36px;\n            text-align: center;\n            color: white;\n        }\n\n        .option.active {\n            line-height: 32px;\n            border-width: 2px;\n            border-style: solid;\n            border-color: #fff #808080 #808080 #fff;\n        }\n    }\n\n    form {\n        display: flex;\n        justify-content: space-evenly;\n        align-items: flex-end;\n        margin-top: 4px;\n        border-top: 2px solid #888;\n\n        input {\n            width: 60px;\n            outline: none;\n        }\n\n        button {\n            height: 24px;\n            width: 60px;\n            border-width: 2px;\n            border-style: solid;\n            border-color: #fff #808080 #808080 #fff;\n            background-color: transparent;\n        }\n    }\n\n    .option.active:active,\n    button:active {\n        transform: translate(1px, 1px);\n    }\n"]))),y=n(16),C=n(17),k=function(){function e(t,n,i){Object(y.a)(this,e),this.height=t,this.width=n,this.map=new Array(t*n).fill(0),this.remaining=this.map.length-i;for(var r=0;r<i;r++){for(var a=Math.floor(Math.random()*(this.map.length-.01));"."===this.map[a];)a=Math.floor(Math.random()*this.map.length);this.map[a]="."}for(var c=0;c<this.map.length;c++)"."!==this.map[c]&&(c%n&&("."===this.map[c-1]&&this.map[c]++,"."===this.map[c-n-1]&&this.map[c]++,"."===this.map[c+n-1]&&this.map[c]++),c%n<n-1&&("."===this.map[c+1]&&this.map[c]++,"."===this.map[c-n+1]&&this.map[c]++,"."===this.map[c+n+1]&&this.map[c]++),"."===this.map[c+n]&&this.map[c]++,"."===this.map[c-n]&&this.map[c]++)}return Object(C.a)(e,[{key:"losing",value:function(e){m({type:"lose"});for(var t=0;t<this.map.length;t++){var n=e.querySelector(".cell-"+t);"closed"===n.classList[2]&&("."!==this.map[t]?"flagged"===n.classList[3]&&(n.classList.remove("flagged"),n.classList.add("mis-flagged")):"flagged"!==n.classList[3]&&n.classList.add("mine"))}}},{key:"winning",value:function(e){m({type:"win"});for(var t=0;t<this.map.length;t++){var n=e.querySelector(".cell-"+t);"closed"===n.classList[2]&&"flagged"!==n.classList[3]&&n.classList.add("flagged")}}},{key:"newGame",value:function(e){e.querySelectorAll(".cell").forEach((function(e,t){e.className="cell cell-".concat(t," closed")}))}},{key:"revealCell",value:function(e,t){var n=e.querySelector(".cell-"+t);n&&"closed"===n.classList[2]&&"flagged"!==n.classList[3]&&(n.classList.remove("closed"),"."===this.map[t]?(n.classList.add("mine-red"),this.losing(e)):(this.remaining--,n.classList.add("type"+this.map[t]),this.map[t]||(t%this.width&&(this.revealCell(e,t-1),this.revealCell(e,t-1-this.width),this.revealCell(e,t-1+this.width)),t%this.width<this.width-1&&(this.revealCell(e,t+1),this.revealCell(e,t+1-this.width),this.revealCell(e,t+1+this.width)),this.revealCell(e,t-this.width),this.revealCell(e,t+this.width)),this.remaining||this.winning(e)))}}]),e}(),L=n(18);function N(e){for(var t=e.value,n=e.length,i=t.toString().split("");i.length<n;)i=["0"].concat(Object(L.a)(i));return i=i.slice(-n),Object(u.jsx)(T,{className:"digits",children:i.map((function(e,t){return Object(u.jsx)("div",{className:"digit digit"+e},t)}))})}var S,T=d.a.div(x||(x=Object(o.a)(["\n    display: flex;\n    gap: 2px;\n    background-color: #000;\n    border-style: solid;\n    border-width: 2px;\n    border-color: #808080 #fff #fff #808080;\n\n    .digit {\n        width: 16.5px;\n        height: 31.5px;\n    }\n"]))),M=function(){console.log("set mine")};function W(e){var t=Object(r.useState)(e.mine),n=Object(h.a)(t,2),i=n[0],a=n[1];M=a;var c=Object(r.useContext)(f),s=Object(r.useState)(0),o=Object(h.a)(s,2),l=o[0],d=o[1],g=Object(r.useRef)();return Object(r.useEffect)((function(){var e,t;if("new-game"===c.game)null===(e=g.current)||void 0===e||e.cancel(),d(0),g.current=function(e,t){var n,i,r,a;return i=(new Date).getTime()+t,r=null,a=function(){return i+=t,r=setTimeout(a,i-(new Date).getTime()),e()},n=function(){return clearTimeout(r)},r=setTimeout(a,i-(new Date).getTime()),{cancel:n}}((function(){d((function(e){return e+1}))}),1e3);else null===(t=g.current)||void 0===t||t.cancel()}),[c]),Object(u.jsxs)(A,{className:"control",children:[Object(u.jsx)("div",{className:"mine-left",children:Object(u.jsx)(N,{value:i,length:3})}),Object(u.jsx)("div",{onClick:function(){return m({type:"new-game"})},className:"face "+c.game}),Object(u.jsx)("div",{className:"timer",children:Object(u.jsx)(N,{value:l,length:3})})]})}var E,A=d.a.div(S||(S=Object(o.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin: 16px;\n    padding: 4px;\n    border-width: 4px;\n    border-style: solid;\n    border-color: #808080 #fff #fff #808080;\n\n    .face {\n        height: 40px;\n        width: 40px;\n    }\n\n    .face:active {\n        transform: translate(1px, 1px);\n    }\n"])));function D(){var e=Object(r.useContext)(f),t=Object(r.useState)(new k(e.height,e.width,e.mine)),n=Object(h.a)(t,2),i=n[0],a=n[1],c=Object(r.useRef)(e.mine),s=Object(r.useRef)();Object(r.useEffect)((function(){"new-game"===e.game&&(a(new k(e.height,e.width,e.mine)),i.newGame(s.current),c.current=e.mine,M(c.current))}),[e]);var o=function(t){if("new-game"===e.game){var n=Number.parseInt(t.target.classList[1].replace("cell-",""));i.revealCell(t.target.parentNode,n)}},l=function(t){if(t.preventDefault(),"new-game"===e.game){var n=t.target;"closed"===n.classList[2]&&("flagged"===n.classList[3]?(n.classList.remove("flagged"),c.current++,M(c.current)):c.current>0&&(n.classList.add("flagged"),c.current--,M(c.current)))}};return Object(u.jsx)(R,{theme:{height:e.height,width:e.width},className:"field",ref:s,children:i.map.map((function(e,t){return Object(u.jsx)("div",{className:"cell ".concat("cell-"+t," closed"),onClick:o,onContextMenu:l},t)}))})}var I,R=d.a.div(E||(E=Object(o.a)(["\n    display: grid;\n    grid-template-columns: repeat(",", 24px);\n    grid-template-rows: repeat(",", 24px);\n    margin: 16px;\n    border-width: 4px;\n    border-style: solid;\n    border-color: #808080 #fff #fff #808080;\n"])),(function(e){return e.theme.width}),(function(e){return e.theme.height}));function U(){return Object(u.jsx)(q,{className:"board",children:Object(u.jsxs)(b,{children:[Object(u.jsx)(W,{mine:5}),Object(u.jsx)(D,{height:9,width:9,mine:5})]})})}var q=d.a.div(I||(I=Object(o.a)(["\n    margin: auto;\n    background-color: #C6C6C6;\n    border-width: 4px;\n    border-style: solid;\n    border-color: #fff #808080 #808080 #fff;\n"])));function P(){return Object(u.jsxs)(a.a.Fragment,{children:[Object(u.jsx)(w,{}),Object(u.jsx)(U,{})]})}var B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(u.jsx)(P,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");B?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):G(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):G(t,e)}))}}()}},[[27,1,2]]]);