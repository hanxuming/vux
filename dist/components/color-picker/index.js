/*!
 * Vux v0.1.3-rc6 (https://vux.li)
 * Licensed under the MIT license
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxColorPicker=e():t.vuxColorPicker=e()}(this,function(){return function(t){function e(r){if(o[r])return o[r].exports;var i=o[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){t.exports=o(12)},function(t,e,o){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(15),s=r(i),n=o(14),l=r(n),u=o(13),p=r(u),c={large:40,middle:30,small:20};e["default"]={components:{Icon:s["default"],Flexbox:l["default"],FlexboxItem:p["default"]},props:{colors:{type:Array,required:!0},size:{type:String,"default":"large"},value:{type:String,twoWay:!0}},computed:{width:function(){return c[this.size]}},methods:{change:function(t){this.value=t,this.$emit("on-change",t)}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=["-moz-box-","-webkit-box-",""];e["default"]={props:{span:[Number,String],order:[Number,String]},methods:{buildWidth:function(t){return"number"==typeof t?1>t?t:t/12:"string"==typeof t?t.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var t={},e="horizontal"===this.$parent.orient?"marginLeft":"marginTop";if(t[e]=this.$parent.gutter+"px",this.span)for(var r=0;r<o.length;r++)t[o[r]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return"undefined"!=typeof this.order&&(t.order=this.order),t}},data:function(){return{bodyWidth:document.documentElement.offsetWidth}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{gutter:{type:Number,"default":8},orient:{type:String,"default":"horizontal"},justify:String,align:String,wrap:String,direction:String},computed:{styles:function(){return{"justify-content":this.justify,"align-items":this.align,"flex-wrap":this.wrap,"flex-direction":this.direction}}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{type:String},computed:{className:function(){return"weui_icon weui_icon_"+this.type}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){t.exports="<div class=vux-color-picker> <flexbox> <flexbox-item v-for=\"color in colors\" class=vux-color-box> <span class=vux-color-item :style=\"{borderRadius: width/2 + 'px',backgroundColor: color, width: width + 'px', height: width + 'px'}\" @click=change(color) :class=\"{'vux-color-white': color === '#fff' || color === '#fff', 'vux-color-picker-small': size === 'small', 'vux-color-picker-middle': size === 'middle'}\"> <icon v-if=\"color === value\" class=vux-color-checked :style=\"{lineHeight: width + 'px'}\" type=success_no_circle></icon> </span> </flexbox-item> </flexbox> </div>"},function(t,e){t.exports="<div class=vux-flexbox-item :style=style> <slot></slot> </div>"},function(t,e){t.exports="<div class=vux-flexbox :class=\"{'vux-flex-col': orient === 'vertical', 'vux-flex-row': orient === 'horizontal'}\" :style=styles> <slot></slot> </div>"},function(t,e){t.exports="<i class={{className}}></i>"},function(t,e,o){var r,i;o(5),r=o(1),i=o(8),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},function(t,e,o){var r,i;r=o(2),i=o(9),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},function(t,e,o){var r,i;o(6),r=o(3),i=o(10),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},function(t,e,o){var r,i;o(7),r=o(4),i=o(11),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)}])});