!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("lodash")):"function"==typeof define&&define.amd?define(["lodash"],r):"object"==typeof exports?exports.webpackNumbersLib=r(require("lodash")):e.webpackNumbersLib=r(e[void 0])}("undefined"!=typeof self?self:this,(function(e){return function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=2)}([function(r,n){r.exports=e},function(e){e.exports=JSON.parse('[{"num":1,"word":"One"},{"num":2,"word":"Two"},{"num":3,"word":"Three"},{"num":4,"word":"Four"},{"num":5,"word":"Five"},{"num":0,"word":"Zero"}]')},function(e,r,n){"use strict";n.r(r),n.d(r,"numberToWord",(function(){return i})),n.d(r,"wordToNumber",(function(){return f}));var t=n(0),o=n.n(t),u=n(1);function i(e){return o.a.reduce(u,(r,n)=>n.num===e?n.word:r,"")}function f(e){return o.a.reduce(u,(r,n)=>n.word===e&&e.toLowerCase()?n.num:r,-1)}}])}));