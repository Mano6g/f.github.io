/**
 * essential-gg / website
 *
 * Copyright © 2013-2024 Panascais ehf. and / or subsidiaries. All rights reserved.
 *
 * All information contained herein is, and remains the property
 * of Panascais ehf. and its suppliers, if any.
 * The intellectual and technical concepts contained herein are
 * proprietary to Panascais ehf. and its suppliers and may
 * be covered by European, U.S. and foreign patents, patents in process,
 * and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Panascais ehf.
 *
 * License:
 *
 * You are not allowed to copy, modify, merge, publish, distribute,
 * sublicense, and / or sell copies of the software.
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the software.
 */
!function(){function t(t,r){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,r){if(t){if("string"==typeof t)return e(t,r);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}(t))||r&&t&&"number"==typeof t.length){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,u=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw u}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./framework-legacy-9b1bfef5a0d2b748.js"],(function(e,r){"use strict";var n,o;return{setters:[function(t){n=t.S,o=t.p}],execute:function(){e("s",new n({type:o.NATIVE})),e("r",(function(){var e,r=t(document.querySelectorAll("[child-hover]"));try{var n=function(){var r,n=e.value,o=t(n.children);try{for(o.s();!(r=o.n()).done;){var i=r.value;i.addEventListener("mouseover",(function(){n.setAttribute("child-hover","true")})),i.addEventListener("mouseleave",(function(){n.setAttribute("child-hover","")}))}}catch(u){o.e(u)}finally{o.f()}};for(r.s();!(e=r.n()).done;)n()}catch(o){r.e(o)}finally{r.f()}}))}}}))}();
