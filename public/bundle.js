!function(e){function n(n){for(var i,o,l=n[0],c=n[1],s=n[2],f=0,u=[];f<l.length;f++)o=l[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);for(d&&d(n);u.length;)u.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],i=!0,l=1;l<t.length;l++){var c=t[l];0!==r[c]&&(i=!1)}i&&(a.splice(n--,1),e=o(o.s=t[0]))}return e}var i={},r={0:0},a=[];function o(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=i,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)o.d(t,i,function(n){return e[n]}.bind(null,i));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="C:\\projects\\erzinLanding\\public";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=n,l=l.slice();for(var s=0;s<l.length;s++)n(l[s]);var d=c;a.push([18,1]),t()}({18:function(e,n,t){"use strict";t.r(n);t(5),t(6),t(7),t(8);var i=t(0),r=function(){var e,n;e=document.querySelectorAll(".js-deal-change-slide"),(n=new i.a(".deal__container",{loop:!1,slidesPerView:1,spaceBetween:20,effect:"slide",centeredSlides:!0,pagination:{el:".deal-pagination",clickable:!0}})).on("slideChange",(function(){var t=n.activeIndex;e.forEach((function(e){e.classList.remove("deal__pagination-btn--active")})),e[t].classList.add("deal__pagination-btn--active")})),e.forEach((function(t,i){t.addEventListener("click",(function(t){e.forEach((function(e){e.classList.remove("deal__pagination-btn--active")})),t.target.classList.add("deal__pagination-btn--active"),n.slideTo(i,600)}))}))},a=1200,o=t(4),l=t.n(o),c=function(){var e=window.innerWidth,n=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=new i.a(".tariffs-slider__container",{breakpoints:{992:{slidesPerView:"auto",centeredSlides:!0,spaceBetween:30,effect:"slide",pagination:{el:".tariffs-slider__pagination",clickable:!0}},800:{slidesPerView:3,spaceBetween:30,pagination:{el:".tariffs-slider__pagination",clickable:!0}},600:{slidesPerView:2,spaceBetween:30,pagination:{el:".tariffs-slider__pagination",clickable:!0}},320:{slidesPerView:1,spaceBetween:20,pagination:{el:".tariffs-slider__pagination",clickable:!0}}}});window.slider=n,e?n.destroy(!0,!0):n.slideTo(1,600)};console.log(e<=a),e<=a&&n(),window.addEventListener("resize",l()((function(){(e=window.innerWidth)<=a?n():(console.log(e,">",a),n(!0))}),300))};document.addEventListener("DOMContentLoaded",(function(){r(),c()}))},8:function(e,n,t){}});