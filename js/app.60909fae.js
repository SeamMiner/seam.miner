(function(e){function t(t){for(var o,c,i=t[0],s=t[1],l=t[2],u=0,f=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function c(e){return i.p+"js/"+({404:"404"}[e]||e)+"."+{404:"3e3b973d"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var l=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}r[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/seam.miner/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"14f8":function(e,t,n){"use strict";n("3c35")},2602:function(e,t,n){"use strict";n("9afd")},"3c35":function(e,t,n){},"49f8":function(e,t,n){var o={"./en-EN.json":"611e","./ru-RU.json":"b69a"};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id="49f8"},"611e":function(e,t,n){"use strict";n.r(t),t["default"]={Home:{about:{title:e=>{const{normalize:t}=e;return t(["Hi, I&rsquo;m Platon&nbspLapp"])},description:e=>{const{normalize:t}=e;return t(["And also a&nbsp;<strong>Full-Stack Web Developer</strong>. I&nbsp;mostly write Frontend on&nbsp;Vue, Backend on&nbsp;Django. Also familiar with React, React-Native, PHP, Laravel.<br> <br> You can contact me&nbsp;or&nbsp;view my&nbsp;work thanks to&nbsp;the icons..."])}},socials:{Email:e=>{const{normalize:t}=e;return t(["Email"])},GitHub:e=>{const{normalize:t}=e;return t(["GitHub"])},Telegram:e=>{const{normalize:t}=e;return t(["Telegram"])}}},404:{title:e=>{const{normalize:t}=e;return t(["Whoops, page not found"])},goBack:e=>{const{normalize:t}=e;return t(["Back to Home"])}},welcomeMessage:e=>{const{normalize:t}=e;return t(["Hi, what are u doing here? Ok, anyway u can change language and theme by pressing 1 and 3 keys on your keyboard respectivly;)"])},greensDesign:e=>{const{normalize:t}=e;return t(["Alex greeneboy Greene made this fcking design, not without my help, of course...;)"])}}},"9afd":function(e,t,n){},b69a:function(e,t,n){"use strict";n.r(t),t["default"]={Home:{about:{title:e=>{const{normalize:t}=e;return t(["Full-stack разработчик"])},description:e=>{const{normalize:t}=e;return t(["Я <strong>Платон&nbsp;Лапп</strong> &mdash; Full-Stack Web Developer. В&nbsp;основном пишу Frontend на&nbsp;Vue, Backend на&nbsp;Django. Также знаком с&nbsp;React, React-Native, PHP, Laravel.<br><br>Связаться со&nbsp;мной или посмотреть мои работы можно благодаря иконкам..."])}},socials:{Email:e=>{const{normalize:t}=e;return t(["Email"])},GitHub:e=>{const{normalize:t}=e;return t(["GitHub"])},Telegram:e=>{const{normalize:t}=e;return t(["Telegram"])}}},404:{title:e=>{const{normalize:t}=e;return t(["Упс, страница не найдена..."])},goBack:e=>{const{normalize:t}=e;return t(["Назад на главную"])}},welcomeMessage:e=>{const{normalize:t}=e;return t(["Привет, что ты здесь делаешь? Хорошо, в любом случае можешь изменить язык и тему, нажав клавиши 1 и 3 на клавиатуре соответственно;)"])},greensDesign:e=>{const{normalize:t}=e;return t(["Александр greeneboy Грин сделал этот ахенный дизайн, не без моей помощи, конечно же...;)"])}}},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function r(e,t,n,r,a,c){var i=Object(o["A"])("router-view");return Object(o["t"])(),Object(o["e"])(i)}n("2532");var a=n("47e2"),c=Object(o["j"])({setup:function(){"not all"!==window.matchMedia("(prefers-color-scheme)").media&&window.matchMedia("(prefers-color-scheme: dark)").matches&&document.body.classList.add("dark");var e=Object(a["b"])(),t=e.locale,n=e.t,r=navigator.language;t.value=r;var c=function(e){"1".includes(e.key)&&(t.value="en-EN"==t.value?"ru-RU":"en-EN"),"3".includes(e.key)&&document.body.classList.toggle("dark")};Object(o["r"])((function(){document.addEventListener("keydown",c)})),Object(o["s"])((function(){document.removeEventListener("keydown",c)}));var i="font-weight: bold; font-size: 40px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)";console.log(n("welcomeMessage")),console.log("%c@greeneboy",i),console.log(n("greensDesign"))}});n("2602");c.render=r;var i=c,s=n("9483");Object(s["a"])("".concat("/seam.miner/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var l=n("6c02"),u=(n("b0c0"),n("df5e")),d=n.n(u),f=Object(o["G"])("data-v-0fdfa9f7");Object(o["w"])("data-v-0fdfa9f7");var b={class:"container"},p=Object(o["g"])('<div class="backgroundWords" id="backWords" data-v-0fdfa9f7><div class="word outlined" style="animation-delay:0;" data-v-0fdfa9f7> FULL-STACK FULL-STACK </div><div class="word" style="animation-delay:0.5s;" data-v-0fdfa9f7> FULL-STACK FULL-STACK </div><div class="word outlined" style="animation-delay:0.75s;" data-v-0fdfa9f7> FULL-STACK FULL-STACK </div><div class="word" style="animation-delay:1s;" data-v-0fdfa9f7>FULL-STACK FULL-STACK</div></div>',1),m={class:"content"},g={class:"socials"},v={key:0,xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px"},h=Object(o["i"])("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),j=Object(o["i"])("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"},null,-1),w={key:1,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},O=Object(o["i"])("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"},null,-1),y={key:2,xmlns:"http://www.w3.org/2000/svg",width:"31",height:"30",viewBox:"0 0 31 30"},k=Object(o["i"])("path",{d:"M15.43 4.08333e-05C11.4639 0.0185495 7.66654 1.60707 4.86862 4.41811C2.07069 7.22914 0.499957 11.0339 0.5 15C0.5 18.9783 2.08035 22.7936 4.89339 25.6066C7.70643 28.4196 11.5217 30 15.5 30C19.4782 30 23.2935 28.4196 26.1066 25.6066C28.9196 22.7936 30.5 18.9783 30.5 15C30.5 11.0218 28.9196 7.20647 26.1066 4.39343C23.2935 1.58039 19.4782 4.08333e-05 15.5 4.08333e-05C15.4766 -1.36111e-05 15.4533 -1.36111e-05 15.43 4.08333e-05ZM21.6325 9.03003C21.7575 9.02753 22.0337 9.05878 22.2137 9.20503C22.3333 9.3089 22.4096 9.45387 22.4275 9.61128C22.4475 9.72753 22.4725 9.99378 22.4525 10.2013C22.2275 12.5738 21.25 18.3288 20.7525 20.985C20.5425 22.11 20.1287 22.4863 19.7275 22.5225C18.8575 22.6038 18.1962 21.9475 17.3525 21.395C16.0325 20.5288 15.2862 19.99 14.005 19.145C12.5237 18.17 13.4837 17.6325 14.3275 16.7575C14.5487 16.5275 18.3862 13.0363 18.4612 12.72C18.47 12.68 18.4787 12.5325 18.3912 12.455C18.3037 12.3775 18.1737 12.4038 18.08 12.425C17.9475 12.455 15.8387 13.85 11.7537 16.6063C11.1537 17.0188 10.6125 17.2188 10.1262 17.2063C9.59124 17.1963 8.56124 16.905 7.79499 16.6563C6.85499 16.35 6.10874 16.1888 6.17374 15.67C6.20749 15.4 6.57999 15.1238 7.28999 14.8413C11.6625 12.9363 14.5775 11.68 16.0375 11.0738C20.2025 9.34128 21.0687 9.04003 21.6325 9.03003Z"},null,-1),C=Object(o["i"])("div",{class:"logo"},[Object(o["i"])("img",{draggable:"false",src:d.a,alt:"Beautiful logo designed by Alex Greene"})],-1);Object(o["u"])();var x=f((function(e,t,n,r,a,c){return Object(o["t"])(),Object(o["e"])("div",b,[p,Object(o["i"])("div",m,[Object(o["i"])("h1",{class:"headline",innerHTML:e.t("".concat(e.route.name,".about.title"))},null,8,["innerHTML"]),Object(o["i"])("p",{class:"description",innerHTML:e.t("".concat(e.route.name,".about.description"))},null,8,["innerHTML"]),Object(o["i"])("div",g,[(Object(o["t"])(!0),Object(o["e"])(o["a"],null,Object(o["z"])(e.socials,(function(e,t){return Object(o["t"])(),Object(o["e"])("a",{class:["social",e.name],key:t,href:e.contact},["Email"==e.name?(Object(o["t"])(),Object(o["e"])("svg",v,[h,j])):Object(o["f"])("",!0),"GitHub"==e.name?(Object(o["t"])(),Object(o["e"])("svg",w,[O])):Object(o["f"])("",!0),"Telegram"==e.name?(Object(o["t"])(),Object(o["e"])("svg",y,[k])):Object(o["f"])("",!0)],10,["href"])})),128))]),C])])})),L=Object(o["j"])({name:"Home",setup:function(){var e=Object(a["b"])(),t=e.t,n=Object(l["c"])(),r=Object(o["y"])([{name:"Email",contact:"mailto:niatit130@gmail.com"},{name:"GitHub",contact:"https://github.com/SeamMiner"},{name:"Telegram",contact:"https://t.me/SeamMiner"}]);return{t:t,route:n,socials:r}}});n("14f8");L.render=x,L.__scopeId="data-v-0fdfa9f7";var z=L,T=[{path:"/",name:"Home",component:z},{path:"/:pathMatch(.*)*",name:"404",component:function(){return n.e("404").then(n.bind(null,"8cdb"))}}],M=Object(l["a"])({history:Object(l["b"])("/seam.miner/"),routes:T}),H=M,E=n("5502"),A=Object(E["a"])({state:{},mutations:{},actions:{},modules:{}});n("159b"),n("ac1f"),n("466d");function S(){var e=n("49f8"),t={};return e.keys().forEach((function(n){var o=n.match(/([A-Za-z0-9-_:.]+)\./i);if(o&&o.length>1){var r=o[1];t[r]=e(n).default}})),t}var F=Object(a["a"])({locale:"en-EN",fallbackLocale:"en-EN",messages:S()});Object(o["d"])(i).use(F).use(A).use(H).mount("#app")},df5e:function(e,t,n){e.exports=n.p+"img/Logo.be3b2245.svg"}});
//# sourceMappingURL=app.60909fae.js.map