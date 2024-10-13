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
!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}System.register(["./framework-legacy-9b1bfef5a0d2b748.js","./animations-legacy-f3810bb52e6513ef.js","./commons-legacy-1b70ed7075663cf9.js","./core-legacy-9aa202f93c9263e3.js"],(function(e,n){"use strict";var r,o;return{setters:[function(t){r=t.u},function(t){o=t.s},null,null],execute:function(){r.Runner.add({order:2,task:function(){var e=t(document.querySelectorAll(".article--index a[href]")).map((function(t){var e=document.querySelector(new URL(t.href).hash);return e?{anchor:t,element:e}:void 0}));e.length<=0||o.on("scroll",(function(){var t;null===(t=e.reduce((function(t,e){var n=window.innerHeight;return t.anchor.removeAttribute("active"),e.anchor.removeAttribute("active"),Math.abs(t.element.getBoundingClientRect().top)+n>Math.abs(e.element.getBoundingClientRect().top)+n?e:t})))||void 0===t||t.anchor.setAttribute("active","")}))}})}}}))}();
