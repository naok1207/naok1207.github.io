/*! For license information please see index.js.LICENSE.txt */
(()=>{var e={2:function(e,t,n){var o,r;window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;0<=--t&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var o=(new Date).getTime(),r=Math.max(0,16-(o-e)),a=window.setTimeout((function(){t(o+r)}),r);return e=o+r,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),r=void 0!==n.g?n.g:"undefined"!=typeof window?window:this,o=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},o=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,r=-1,a="",i=n.charCodeAt(0);++r<o;){if(0===(t=n.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=1<=t&&t<=31||127==t||0===r&&48<=t&&t<=57||1===r&&48<=t&&t<=57&&45===i?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(r):"\\"+n.charAt(r)}return"#"+a},r=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},a=function(t,n,o){0===t&&document.body.focus(),o||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},i=function(t,n,o,r){if(n.emitEvents&&"function"==typeof e.CustomEvent){var a=new CustomEvent(t,{bubbles:!0,detail:{anchor:o,toggle:r}});document.dispatchEvent(a)}};return function(c,s){var u,l,d,m,f={cancelScroll:function(e){cancelAnimationFrame(m),m=null,e||i("scrollCancel",u)},animateScroll:function(o,c,s){f.cancelScroll();var l=n(u||t,s||{}),h="[object Number]"===Object.prototype.toString.call(o),p=h||!o.tagName?null:o;if(h||p){var g=e.pageYOffset;l.header&&!d&&(d=document.querySelector(l.header));var v,y,w,E,b,S,A,C,O=function(t){return t?(n=t,parseInt(e.getComputedStyle(n).height,10)+t.offsetTop):0;var n}(d),I=h?o:function(t,n,o,a){var i=0;if(t.offsetParent)for(;i+=t.offsetTop,t=t.offsetParent;);return i=Math.max(i-n-o,0),a&&(i=Math.min(i,r()-e.innerHeight)),i}(p,O,parseInt("function"==typeof l.offset?l.offset(o,c):l.offset,10),l.clip),M=I-g,q=r(),x=0,L=(v=M,w=(y=l).speedAsDuration?y.speed:Math.abs(v/1e3*y.speed),y.durationMax&&w>y.durationMax?y.durationMax:y.durationMin&&w<y.durationMin?y.durationMin:parseInt(w,10)),F=function(t){var n,r,s;E||(E=t),x+=t-E,S=g+M*(r=b=1<(b=0===L?0:x/L)?1:b,"easeInQuad"===(n=l).easing&&(s=r*r),"easeOutQuad"===n.easing&&(s=r*(2-r)),"easeInOutQuad"===n.easing&&(s=r<.5?2*r*r:(4-2*r)*r-1),"easeInCubic"===n.easing&&(s=r*r*r),"easeOutCubic"===n.easing&&(s=--r*r*r+1),"easeInOutCubic"===n.easing&&(s=r<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1),"easeInQuart"===n.easing&&(s=r*r*r*r),"easeOutQuart"===n.easing&&(s=1- --r*r*r*r),"easeInOutQuart"===n.easing&&(s=r<.5?8*r*r*r*r:1-8*--r*r*r*r),"easeInQuint"===n.easing&&(s=r*r*r*r*r),"easeOutQuint"===n.easing&&(s=1+--r*r*r*r*r),"easeInOutQuint"===n.easing&&(s=r<.5?16*r*r*r*r*r:1+16*--r*r*r*r*r),n.customEasing&&(s=n.customEasing(r)),s||r),e.scrollTo(0,Math.floor(S)),function(t,n){var r=e.pageYOffset;if(t==n||r==n||(g<n&&e.innerHeight+r)>=q)return f.cancelScroll(!0),a(o,n,h),i("scrollStop",l,o,c),!(m=E=null)}(S,I)||(m=e.requestAnimationFrame(F),E=t)};0===e.pageYOffset&&e.scrollTo(0,0),A=o,C=l,h||history.pushState&&C.updateURL&&history.pushState({smoothScroll:JSON.stringify(C),anchor:A.id},document.title,A===document.documentElement?"#top":"#"+A.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?a(o,Math.floor(I),!1):(i("scrollStart",l,o,c),f.cancelScroll(!0),e.requestAnimationFrame(F))}}},h=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(l=t.target.closest(c))&&"a"===l.tagName.toLowerCase()&&!t.target.closest(u.ignore)&&l.hostname===e.location.hostname&&l.pathname===e.location.pathname&&/#/.test(l.href)){var n,r;try{n=o(decodeURIComponent(l.hash))}catch(t){n=o(l.hash)}if("#"===n){if(!u.topOnEmptyHash)return;r=document.documentElement}else r=document.querySelector(n);(r=r||"#top"!==n?r:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}}(u),f.animateScroll(r,l))}},p=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(u)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(o(history.state.anchor)))||f.animateScroll(t,null,{updateURL:!1})}};return f.destroy=function(){u&&(document.removeEventListener("click",h,!1),e.removeEventListener("popstate",p,!1),f.cancelScroll(),m=d=l=u=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";f.destroy(),u=n(t,s||{}),d=u.header?document.querySelector(u.header):null,document.addEventListener("click",h,!1),u.updateURL&&u.popstate&&e.addEventListener("popstate",p,!1)}(),f}}(r)}.apply(t,[]),void 0===o||(e.exports=o)},525:()=>{var e=document.createElement("style");document.head.appendChild(e);var t=e.sheet;[...document.getElementsByClassName("skill-status")].forEach((function(e,n){t.insertRule(`#${e.id}::before {\n    content: '${e.dataset.name.toUpperCase()}';\n    color: white;\n    z-index: 40;\n    display: block;\n    position: absolute;\n    left: -10px;\n    top: -40px;\n  }`,n)}))}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(2),t=n.n(e),o=(n(525),new function(){var e;this.get=function(){return e},this.set=function(t){e=t,E(t)},this.add=function(t){e+=t,E(t)}}),r=document.createElement("style");document.head.appendChild(r);var a=r.sheet;const i=document.getElementById("menu"),c=document.getElementsByTagName("section"),s=c.length;for(var u=0;u<s;u++)a.insertRule(`#${m=c.item(u).id}::before {\n    content: '${m}';\n    position: absolute;\n    left: 5.9rem;\n    top: 50%;\n    transform: rotate(-90deg) translateY(-50%);\n    color: white;\n    z-index: 40;\n  }`,u),i.appendChild((l=u,d=void 0,(d=document.createElement("div")).setAttribute("data-value",l),d.innerHTML=("0"+(l+1)).slice(-2),d));var l,d,m;const f=document.getElementById("arrow-up"),h=document.getElementById("arrow-down");function p(e){o.add(e);var n=new(t()),r=c.item(o.get());n.animateScroll(r.offsetTop)}f.addEventListener("click",(function(){o.get()!=s-1&&p(1)})),h.addEventListener("click",(function(){0!=o.get()&&p(-1)}));const g=document.querySelectorAll(".menu div");[...g].map((function(e,t){e.addEventListener("click",(function(){p(t-o.get())}))}));const v=document.querySelectorAll("section"),y=[...v].reduce((function(e,t){return e.push(t.offsetTop),e}),[]),w=v.item(0).offsetHeight;function E(e){[...g].map((function(t,n){t.classList.toggle("active",e==n)}))}window.addEventListener("scroll",(function(){var e=window.scrollY;y.map((function(t,n){t-w/3<e&&e<t+w/3&&o.set(n)}))}))})()})();
//# sourceMappingURL=index.js.map