/*! vue-ydui v0.9.7 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="/dist/",t(0)}({0:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Input=void 0;var a=r(86),o=n(a);t.Input=o.default},1:function(e,t){e.exports=function(e,t,r,n){var a,o=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(a=e,o=e.default);var l="function"==typeof o?o.options:o;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),r&&(l._scopeId=r),n){var u=l.computed||(l.computed={});Object.keys(n).forEach(function(e){var t=n[e];u[e]=function(){return t}})}return{esModule:a,exports:o,options:l}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(n[o]=!0)}for(a=0;a<t.length;a++){var i=t[a];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},3:function(e,t,r){function n(e){for(var t=0;t<e.length;t++){var r=e[t],n=d[r.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](r.parts[a]);for(;a<r.parts.length;a++)n.parts.push(o(r.parts[a]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var i=[],a=0;a<r.parts.length;a++)i.push(o(r.parts[a]));d[r.id]={id:r.id,refs:1,parts:i}}}}function a(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function o(e){var t,r,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(n){if(f)return h;n.parentNode.removeChild(n)}if(v){var o=m++;n=p||(p=a()),t=i.bind(null,n,o,!1),r=i.bind(null,n,o,!0)}else n=a(),t=l.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}function i(e,t,r,n){var a=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function l(e,t){var r=t.css,n=t.media,a=t.sourceMap;if(n&&e.setAttribute("media",n),a&&(r+="\n/*# sourceURL="+a.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var u="undefined"!=typeof document,s=r(4),d={},c=u&&(document.head||document.getElementsByTagName("head")[0]),p=null,m=0,f=!1,h=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r){f=r;var a=s(e,t);return n(a),function(t){for(var r=[],o=0;o<a.length;o++){var i=a[o],l=d[i.id];l.refs--,r.push(l)}t?(a=s(e,t),n(a)):a=[];for(var o=0;o<r.length;o++){var l=r[o];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete d[l.id]}}}};var y=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var r=[],n={},a=0;a<t.length;a++){var o=t[a],i=o[0],l=o[1],u=o[2],s=o[3],d={id:e+":"+a,css:l,media:u,sourceMap:s};n[i]?n[i].parts.push(d):r.push(n[i]={id:i,parts:[d]})}return r}},42:function(e,t,r){t=e.exports=r(2)(),t.push([e.id,'.yd-input{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yd-input>input{display:block;width:100%;height:100%;border:none;font-size:inherit}.yd-input-clear,.yd-input-error,.yd-input-password,.yd-input-success,.yd-input-warn{padding-left:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yd-input-clear:after,.yd-input-error:after,.yd-input-password:after,.yd-input-success:after,.yd-input-warn:after{font-family:YDUI-INLAY}.yd-input-clear:after{content:"\\E60C";color:#b2b2b2;font-size:15px}.yd-input-error:after{content:"\\E614";color:#f43530;font-size:20px}.yd-input-warn:after{content:"\\E614";color:#10aeff;font-size:20px}.yd-input-success:after{content:"\\E601";color:#09bb07;font-size:20px}.yd-input-password:after{content:"\\E77E";color:#b2b2b2;font-size:22px}.yd-input-password-open:after{content:"\\E77D";color:#434343}',""])},86:function(e,t,r){r(204);var n=r(1)(r(249),r(159),null,null);e.exports=n.exports},159:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"yd-input"},["mobile"==e.regex?[r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],attrs:{type:"tel",pattern:"[0-9]*",name:e.name,maxlength:"11",placeholder:e.placeholder,autocomplete:e.autocomplete,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.currentValue},on:{focus:function(t){e.showClear=!0},blur:e.blurHandler,input:function(t){t.target.composing||(e.currentValue=t.target.value)}}})]:["password"==e.type?[e.showPwd?e._e():r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],attrs:{type:"password",name:e.name,maxlength:e.max,placeholder:e.placeholder,autocomplete:e.autocomplete,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.currentValue},on:{focus:function(t){e.showClear=!0},blur:e.blurHandler,input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}),e._v(" "),e.showPwd?r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],attrs:{type:"text",name:e.name,maxlength:e.max,placeholder:e.placeholder,autocomplete:e.autocomplete,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.currentValue},on:{focus:function(t){e.showClear=!0},blur:e.blurHandler,input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}):e._e()]:e._e(),e._v(" "),"text"==e.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],attrs:{type:"text",name:e.name,maxlength:e.max,placeholder:e.placeholder,autocomplete:e.autocomplete,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.currentValue},on:{focus:function(t){e.showClear=!0},blur:e.blurHandler,input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}):e._e(),e._v(" "),"number"==e.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],attrs:{type:"number",name:e.name,maxlength:e.max,placeholder:e.placeholder,autocomplete:e.autocomplete,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.currentValue},on:{focus:function(t){e.showClear=!0},blur:e.blurHandler,input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}):e._e(),e._v(" "),"email"==e.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],attrs:{type:"email",name:e.name,maxlength:e.max,placeholder:e.placeholder,autocomplete:e.autocomplete,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.currentValue},on:{focus:function(t){e.showClear=!0},blur:e.blurHandler,input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}):e._e(),e._v(" "),"tel"==e.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],attrs:{type:"tel",name:e.name,maxlength:e.max,placeholder:e.placeholder,autocomplete:e.autocomplete,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.currentValue},on:{focus:function(t){e.showClear=!0},blur:e.blurHandler,input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}):e._e(),e._v(" "),"datetime-local"==e.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],attrs:{type:"datetime-local",name:e.name,maxlength:e.max,placeholder:e.placeholder,autocomplete:e.autocomplete,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.currentValue},on:{focus:function(t){e.showClear=!0},blur:e.blurHandler,input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}):e._e(),e._v(" "),"date"==e.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],attrs:{type:"date",name:e.name,maxlength:e.max,placeholder:e.placeholder,autocomplete:e.autocomplete,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.currentValue},on:{focus:function(t){e.showClear=!0},blur:e.blurHandler,input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}):e._e(),e._v(" "),"time"==e.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],attrs:{type:"time",name:e.name,maxlength:e.max,placeholder:e.placeholder,autocomplete:e.autocomplete,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.currentValue},on:{focus:function(t){e.showClear=!0},blur:e.blurHandler,input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}):e._e()],e._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:e.showClearIcon&&e.showClear&&!e.isempty,expression:"showClearIcon && showClear && !isempty"}],staticClass:"yd-input-clear",attrs:{href:"javascript:;",tabindex:"-1"},on:{click:e.clearInput}}),e._v(" "),e.showErrorIcon?r("span",{directives:[{name:"show",rawName:"v-show",value:(!!e.regex||!!e.min||!!e.max||e.required)&&e.iserror&&e.initError,expression:"(!!regex || !!min || !!max || required) && iserror && initError"}],staticClass:"yd-input-error"}):e._e(),e._v(" "),e.showRequiredIcon&&e.showErrorIcon?r("span",{directives:[{name:"show",rawName:"v-show",value:(e.required||!!e.min&&e.min>0)&&e.isempty&&e.showWarn,expression:"(required || (!!min && min > 0)) && isempty && showWarn"}],staticClass:"yd-input-warn"}):e._e(),e._v(" "),e.showSuccessIcon?r("span",{directives:[{name:"show",rawName:"v-show",value:(!!e.regex||!!e.min||!!e.max||e.required)&&!e.iserror&&""!=e.currentValue,expression:"(!!regex || !!min || !!max || required) && !iserror && currentValue != ''"}],staticClass:"yd-input-success"}):e._e(),e._v(" "),"password"==e.type?r("a",{staticClass:"yd-input-password",class:e.showPwd?"yd-input-password-open":"",attrs:{href:"javascript:;",tabindex:"-1"},on:{click:function(t){t.stopPropagation(),e.showPwd=!e.showPwd}}}):e._e()],2)},staticRenderFns:[]}},204:function(e,t,r){var n=r(42);"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);r(3)("4a462913",n,!0)},249:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"yd-input",data:function(){return{currentValue:this.value,isempty:!this.value,iserror:!1,showPwd:!1,showClear:!1,showWarn:!0,initError:!1,valid:!0,errorMsg:"",errorCode:"",regexObj:{email:"^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$",mobile:"^(86)?1[3,4,5,7,8]\\d{9}$",bankcard:"^\\d{15,19}$"}}},props:{name:String,placeholder:String,value:[String,Number],readonly:Boolean,disabled:Boolean,regex:String,autocomplete:{type:String,default:"off"},showClearIcon:{type:Boolean,default:!0},showErrorIcon:{type:Boolean,default:!0},showSuccessIcon:{type:Boolean,default:!0},showRequiredIcon:{type:Boolean,default:!0},required:{type:Boolean,default:!1},type:{validator:function(e){return["text","password","email","number","tel","datetime-local","date","time"].indexOf(e)>-1},default:"text"},max:{validator:function(e){return/^\d*$/.test(e)}},min:{validator:function(e){return/^\d*$/.test(e)}}},watch:{value:function(e){this.currentValue=e,this.emitInput()},currentValue:function(e){this.isempty=!e,this.validatorInput(e,!0),this.emitInput()},required:function(e){this.required=e,this.validatorInput(this.currentValue,!1)}},methods:{validatorInput:function(e,t){if(this.initError=t,t&&(this.showWarn=!1),this.required&&""===e)return this.setError("不能为空","NOT_NULL"),void(this.iserror=!0);if(this.min&&e.length<this.min)return this.setError("最少输入"+this.min+"位字符","NOT_MIN_SIZE"),void(this.iserror=!0);var r="bankcard"===this.regex?e.replace(/\s/g,""):e,n=this.regexObj[this.regex]?this.regexObj[this.regex]:this.trim(this.regex,"/");return r&&this.regex&&!new RegExp(n).test(r)?(this.setError("输入字符不符合规则","NOT_REGEX_RULE"),void(this.iserror=!0)):(this.iserror=!1,this.valid=!0,this.errorMsg="",void(this.errorCode=""))},blurHandler:function(){var e=this;this.validatorInput(this.currentValue,!0),setTimeout(function(){e.showClear=!1},200)},clearInput:function(){this.currentValue="",this.emitInput()},emitInput:function(){return"bankcard"===this.regex?(/\S{5}/.test(this.currentValue)&&(this.currentValue=this.currentValue.replace(/\s/g,"").replace(/(\d{4})(?=\d)/g,"$1 ")),void this.$emit("input",this.currentValue.replace(/\s/g,""))):void this.$emit("input",this.currentValue)},setError:function(e,t){this.errorMsg=e,this.errorCode=t,this.valid=!1},trim:function(e,t){return e?e.replace(new RegExp("^\\"+t+"+|\\"+t+"+$","g"),""):e}},mounted:function(){this.validatorInput(this.currentValue,!1)}}}})});