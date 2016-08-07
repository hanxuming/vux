/*!
 * Vux v0.1.3-rc6 (https://vux.li)
 * Licensed under the MIT license
 */
!function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.vuxAlert=o():t.vuxAlert=o()}(this,function(){return function(t){function o(i){if(e[i])return e[i].exports;var s=e[i]={exports:{},id:i,loaded:!1};return t[i].call(s.exports,s,s.exports,o),s.loaded=!0,s.exports}var e={};return o.m=t,o.c=e,o.p="",o(0)}([function(t,o,e){t.exports=e(7)},function(t,o,e){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(o,"__esModule",{value:!0});var s=e(8),n=i(s);o["default"]={components:{Dialog:n["default"]},props:{show:Boolean,title:String,buttonText:{type:String,"default":"OK"},maskTransition:{type:String,"default":"vux-fade"},dialogTransition:{type:String,"default":"vux-dialog"}},methods:{onHide:function(){this.show=!1}}}},function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={props:{show:{type:Boolean,"default":!1},maskTransition:{type:String,"default":"vux-fade"},dialogTransition:{type:String,"default":"vux-dialog"},hideOnBlur:Boolean,scroll:{type:Boolean,"default":!0}},watch:{show:function(t){this.$emit(t?"on-show":"on-hide")}}}},function(t,o){},function(t,o){},function(t,o){t.exports='<div class=vux-alert> <dialog class=weui_dialog_alert :show=show :mask-transition=maskTransition :dialog-transition=dialogTransition @on-hide="$emit(\'on-hide\')" @on-show="$emit(\'on-show\')"> <div class=weui_dialog_hd><strong class=weui_dialog_title>{{title}}</strong></div> <div class=weui_dialog_bd><slot></slot></div> <div class=weui_dialog_ft> <a href=javascript:; class="weui_btn_dialog primary" @click=onHide>{{buttonText}}</a> </div> </dialog> </div>'},function(t,o){t.exports='<div class=weui_dialog_alert @touchmove="!this.scroll && $event.preventDefault()"> <div class=weui_mask @click="hideOnBlur && (show = false)" v-show=show :transition=maskTransition></div> <div class=weui_dialog v-show=show :transition=dialogTransition> <slot></slot> </div> </div>'},function(t,o,e){var i,s;e(3),i=e(1),s=e(5),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,o,e){var i,s;e(4),i=e(2),s=e(6),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)}])});