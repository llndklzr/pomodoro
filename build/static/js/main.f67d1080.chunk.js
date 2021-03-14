(this["webpackJsonppomodoro-timer"]=this["webpackJsonppomodoro-timer"]||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),i=a.n(c),o=(a(10),a(1)),s=a(2);function u(e){return Object.entries(e).reduce((function(e,t){var a=Object(s.a)(t,2),n=a[0],r=a[1];return e.concat(r?n:void 0)}),[]).filter((function(e){return void 0!==e})).join(" ")}function l(e){if(3600===e)return"60:00";var t=Math.floor(e%3600/60).toString().padStart(2,"0"),a=Math.round(e%60).toString().padStart(2,"0");return"".concat(t,":").concat(a)}var m=function(e){var t=e.min,a=e.max,n=e.label,c=e.session,i=e.setSession;return r.a.createElement("div",{className:"input-group input-group-lg mb-2"},r.a.createElement("span",{className:"input-group-text","data-testid":"duration-focus"},"".concat(n," ").concat(l(c.focusDuration))),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"button",className:u({btn:!0,"btn-primary":!c.active,"btn-secondary":c.active}),onClick:c.active?void 0:function(){c.focusDuration>t&&i(Object(o.a)(Object(o.a)({},c),{},{focusDuration:c.focusDuration-300}))},"data-testid":"decrease-focus"},r.a.createElement("span",{className:"oi oi-minus"})),r.a.createElement("button",{type:"button",className:u({btn:!0,"btn-primary":!c.active,"btn-secondary":c.active}),onClick:c.active?void 0:function(){c.focusDuration<a&&i(Object(o.a)(Object(o.a)({},c),{},{focusDuration:c.focusDuration+300}))},"data-testid":"increase-focus"},r.a.createElement("span",{className:"oi oi-plus"}))))};var b=function(e){var t=e.min,a=e.max,n=e.label,c=e.session,i=e.setSession;return r.a.createElement("div",{className:"input-group input-group-lg mb-2"},r.a.createElement("span",{className:"input-group-text","data-testid":"duration-break"},"".concat(n," ").concat(l(c.breakDuration))),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"button",className:u({btn:!0,"btn-primary":!c.active,"btn-secondary":c.active}),onClick:c.active?void 0:function(){c.breakDuration>t&&i(Object(o.a)(Object(o.a)({},c),{},{breakDuration:c.breakDuration-60}))},"data-testid":"decrease-break"},r.a.createElement("span",{className:"oi oi-minus"})),r.a.createElement("button",{type:"button",className:u({btn:!0,"btn-primary":!c.active,"btn-secondary":c.active}),onClick:c.active?void 0:function(){c.breakDuration<a&&i(Object(o.a)(Object(o.a)({},c),{},{breakDuration:c.breakDuration+60}))},"data-testid":"increase-break"},r.a.createElement("span",{className:"oi oi-plus"}))))};var p=function(e){var t=e.session;return r.a.createElement("div",{className:"progress",style:{height:"20px"}},r.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":(t.currentDuration-t.timer)/t.currentDuration*100,style:{width:"".concat((t.currentDuration-t.timer)/t.currentDuration*100,"%")}}))};var d=function(e){var t=e.session,a=e.isTimerRunning;return t.active?r.a.createElement("div",null,r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col"},r.a.createElement("h2",{"data-testid":"session-title"},t.sessionTypeVerb," for ",l(t.currentDuration)," minutes"),r.a.createElement("p",{className:"lead","data-testid":"session-sub-title"},l(t.timer)," remaining"),r.a.createElement("h3",null,!a&&"PAUSED"))),r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col"},r.a.createElement(p,{session:t})))):null};var v=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(Object(o.a)({},{active:!1,focusSession:!0,sessionTypeVerb:"Focusing",focusDuration:1500,breakDuration:300,currentDuration:0,timer:1500})),l=Object(s.a)(i,2),p=l[0],v=l[1];return function(e,t){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){v(Object(o.a)(Object(o.a)({},p),{},{timer:p.timer-1})),p.timer<1&&function(e,t){e.focusSession?t(Object(o.a)(Object(o.a)({},e),{},{focusSession:!1,sessionTypeVerb:"On Break",currentDuration:e.breakDuration,timer:e.breakDuration})):t(Object(o.a)(Object(o.a)({},e),{},{focusSession:!0,sessionTypeVerb:"Focusing",currentDuration:e.focusDuration,timer:e.focusDuration})),new Audio("https://bigsoundbank.com/UPLOAD/mp3/1922.mp3").play()}(p,v)}),a?1e3:null),r.a.createElement("div",{className:"pomodoro"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(m,{min:300,max:3600,label:"Focus Duration: ",session:p,setSession:v})),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"float-right"},r.a.createElement(b,{min:60,max:900,label:"Break Duration: ",session:p,setSession:v})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"btn-group btn-group-lg mb-2",role:"group","aria-label":"Timer controls"},r.a.createElement("button",{type:"button",className:"btn btn-primary","data-testid":"play-pause",title:"Start or pause timer",onClick:function(){c((function(e){return!e})),p.active||v(Object(o.a)(Object(o.a)({},p),{},{active:!0,currentDuration:p.focusDuration,timer:p.focusDuration}))}},r.a.createElement("span",{className:u({oi:!0,"oi-media-play":!a,"oi-media-pause":a})})),r.a.createElement("button",{type:"button",className:u({btn:!0,"btn-primary":p.active,"btn-secondary":!p.active}),title:"Stop the session",onClick:p.active?function(){c(!1),v(Object(o.a)(Object(o.a)({},p),{},{active:!1,focusSession:!0}))}:void 0},r.a.createElement("span",{className:"oi oi-media-stop"}))))),r.a.createElement(d,{session:p,isTimerRunning:a}))};var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header container"},r.a.createElement("h1",null,"Pomodoro Timer")),r.a.createElement("div",{className:"container"},r.a.createElement(v,null)))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))},5:function(e,t,a){e.exports=a(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.f67d1080.chunk.js.map