!function(e){var t={};function n(c){if(t[c])return t[c].exports;var d=t[c]={i:c,l:!1,exports:{}};return e[c].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(c,d,function(t){return e[t]}.bind(null,d));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function c(){console.log("renderHome()");const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("navBar");const n=document.createElement("div"),c=document.createElement("img");c.classList.add("logo"),c.setAttribute("src","imgs/salty weenie hut.png"),n.appendChild(c),t.appendChild(n);const d=document.createElement("div");d.innerHTML="Home",d.classList.add("rightNavBarItem"),t.appendChild(d);const a=document.createElement("div");a.innerHTML="Menu",a.classList.add("rightNavBarItem"),t.appendChild(a);const o=document.createElement("div");o.innerHTML="Contact",o.classList.add("rightNavBarItem"),t.appendChild(o);const i=document.createElement("div");i.classList.add("content-home");const r=document.createElement("h1");r.innerHTML="Welcome to Salty Weenie Hut!",i.appendChild(r);const s=document.createElement("h4");s.innerHTML="Where the tough meets the weak!",i.appendChild(s);const l=document.createElement("p");l.innerHTML="Please visit our main location! We will soon be adding more locations soon!",i.appendChild(l),e.appendChild(t),e.appendChild(i)}let d,a;function o(){document.querySelector(".content").innerHTML=""}n.r(t),c(),function e(){a=document.querySelector(".logo"),a.addEventListener("click",()=>{o(),c(),e()}),d=document.querySelectorAll(".rightNavBarItem"),d.forEach(t=>{t.addEventListener("click",()=>{o(),"Home"===t.innerHTML?(c(),e()):"Menu"===t.innerHTML?(!function(){console.log("renderMenu()");const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("navBar");const n=document.createElement("div"),c=document.createElement("img");c.classList.add("logo"),c.setAttribute("src","imgs/salty weenie hut.png"),n.appendChild(c),t.appendChild(n);const d=document.createElement("div");d.innerHTML="Home",d.classList.add("rightNavBarItem"),t.appendChild(d);const a=document.createElement("div");a.innerHTML="Menu",a.classList.add("rightNavBarItem"),t.appendChild(a);const o=document.createElement("div");o.innerHTML="Contact",o.classList.add("rightNavBarItem"),t.appendChild(o);const i=document.createElement("div");i.classList.add("content-menuList");const r=document.createElement("h1");r.innerHTML="Menu:",i.appendChild(r);const s=document.createElement("div");s.classList.add("menuList");const l=[["Cold Deli Meat Cut Spread","$MP",'<img src="imgs/coldcuts.jpeg">'],["Salty Meat Spread","$MP",'<img src="imgs/meat.jpg">'],["Truly Tough Spread","50% OFF $MP",'<img src="imgs/saltyspitoon.jpg">'],["Weenie Hut Spread","50% MORE $MP",'<img src="imgs/vegan.jpg">'],["Salty Tough Cannibal Spread","FREE YOU ANIMAL",'<img src="imgs/seafood.jpg">']];for(let e=0;e<l.length;e++){const t=document.createElement("div");t.classList.add("row");for(let n=0;n<l[e].length;n++){const c=document.createElement("div");c.classList.add("food"),c.innerHTML=l[e][n],2===n&&c.classList.add("itemImg"),t.appendChild(c)}s.appendChild(t)}i.appendChild(s),e.appendChild(t),e.appendChild(i)}(),e()):"Contact"===t.innerHTML&&(!function(){console.log("renderContact()");const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("navBar");const n=document.createElement("div"),c=document.createElement("img");c.classList.add("logo"),c.setAttribute("src","imgs/salty weenie hut.png"),n.appendChild(c),t.appendChild(n);const d=document.createElement("div");d.innerHTML="Home",d.classList.add("rightNavBarItem"),t.appendChild(d);const a=document.createElement("div");a.innerHTML="Menu",a.classList.add("rightNavBarItem"),t.appendChild(a);const o=document.createElement("div");o.innerHTML="Contact",o.classList.add("rightNavBarItem"),t.appendChild(o);const i=document.createElement("div");i.classList.add("content-contact");const r=document.createElement("div");r.classList.add("ccContainer"),i.appendChild(r);const s=document.createElement("h3");s.innerHTML="Contact Us!",s.classList.add("cc"),r.appendChild(s);const l=document.createElement("p");l.innerHTML="124 Conch Street, Bikini Bottom, Pacific Ocean",l.classList.add("cc"),r.appendChild(l);const m=document.createElement("div");m.classList.add("ccContainer"),i.appendChild(m);const u=document.createElement("h3");u.innerHTML="Sorry! We're located in the ocean!",u.classList.add("cc"),m.appendChild(u);const p=document.createElement("p");p.innerHTML="Don't worry! We're in the process of opening a location near you~! SOON!",p.classList.add("cc"),m.appendChild(p),e.appendChild(t),e.appendChild(i)}(),e())})})}()}]);