/*!
 * Vux v0.1.3-rc6 (https://vux.li)
 * Licensed under the MIT license
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxMasker=e():t.vuxMasker=e()}(this,function(){return function(t){function e(r){if(o[r])return o[r].exports;var n=o[r]={exports:{},id:r,loaded:!1};return t[r].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){t.exports=o(5)},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(2);e["default"]={props:{color:{type:String,"default":"0, 0, 0"},opacity:{type:Number,"default":.5}},computed:{style:function(){var t=/,/.test(this.color)?this.color:(0,r.toRGB)(this.color.replace("#","")).join(",");return{backgroundColor:"rgba("+t+","+this.opacity+")"}}}}},function(t,e){"use strict";function o(t){var e=parseInt(t,16);return[e>>16,e>>8&255,255&e]}function r(t,e,o){return(o|e<<8|t<<16|1<<24).toString(16).slice(1)}Object.defineProperty(e,"__esModule",{value:!0}),e.toRGB=o,e.toHex=r},function(t,e){},function(t,e){t.exports="<div class=vux-masker-box> <slot></slot> <div class=vux-masker :style=style> <slot name=content></slot> </div> </div>"},function(t,e,o){var r,n;o(3),r=o(1),n=o(4),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)}])});