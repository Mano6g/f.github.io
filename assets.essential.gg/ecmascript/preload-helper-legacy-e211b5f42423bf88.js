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
!function(){function t(t,r){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,r){if(t){if("string"==typeof t)return e(t,r);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}(t))||r&&t&&"number"==typeof t.length){n&&(t=n);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){c=!0,i=t},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw i}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}System.register([],(function(e,r){"use strict";return{execute:function(){var r;(r="undefined"!=typeof document&&document.createElement("link").relList)&&r.supports&&r.supports("modulepreload"),e("_",(function(e,r,n){var o=Promise.resolve();function a(t){var e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=t,window.dispatchEvent(e),!e.defaultPrevented)throw t}return o.then((function(r){var n,o=t(r||[]);try{for(o.s();!(n=o.n()).done;){var i=n.value;"rejected"===i.status&&a(i.reason)}}catch(u){o.e(u)}finally{o.f()}return e().catch(a)}))}))}}}))}();
