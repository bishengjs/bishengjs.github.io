/*
Copyright 2013, KISSY v1.41
MIT Licensed
build time: Dec 4 22:17
*/
KISSY.add("overlay/extension/loading",["node"],function(h,e){function c(){}var g=e("node");c.prototype={loading:function(){this._loadingExtEl||(this._loadingExtEl=(new g('<div class="'+this.get("prefixCls")+'ext-loading" style="position: absolute;border: none;width: 100%;top: 0;left: 0;z-index: 99999;height:100%;*height: expression(this.parentNode.offsetHeight);"/>')).appendTo(this.$el));this._loadingExtEl.show()},unloading:function(){var b=this._loadingExtEl;b&&b.hide()}};return c});
KISSY.add("overlay/extension/mask",["node"],function(h,e){function c(a,b){var i=a.view.getBaseCssClasses("mask"),i=m('<div  style="width:'+(f?"expression(KISSY.DOM.docWidth())":"100%")+";left:0;top:0;height:"+(f?"expression(KISSY.DOM.docHeight())":"100%")+";position:"+(f?"absolute":"fixed")+';" class="'+i+" "+b+'">'+(f?'<iframe style="position:absolute;left:0;top:0;background:red;width: expression(this.parentNode.offsetWidth);height: expression(this.parentNode.offsetHeight);filter:alpha(opacity=0);z-index:-1;"></iframe>':
"")+"</div>").prependTo("body");i.unselectable();i.on("mousedown",function(a){a.preventDefault()});return i}function g(){}function b(a,i){var b=a.get("maskNode"),d=a.view.getBaseCssClasses("mask-hidden");i?b.removeClass(d):b.addClass(d)}function a(a,i,d,c){var f=a.effect||l;b(c,d);if(f!==l){var c=a.duration,a=a.easing,e=d?1:0;i.stop(1,1);i.css("display",d?l:"block");i[f+j[f][e]](c,function(){i.css("display","")},a)}}function i(i){var d=this.get("maskNode");if(i=i.newVal){var b=Number(this.$el.css("z-index"));
isNaN(b)||d.css("z-index",b)}a(this.get("mask"),d,i,this)}var d=h.UA,o=e("node"),f=6===d.ie,m=o.all;g.ATTRS={mask:{value:!1},maskNode:{}};var l="none",j={fade:["Out","In"],slide:["Up","Down"]};g.prototype={__renderUI:function(){this.get("mask")&&this.set("maskNode",c(this,this.get("visible")?"":this.view.getBaseCssClasses("mask-hidden")))},__bindUI:function(){var a,d;if(d=this.get("mask")){a=this.get("maskNode");if(d.closeOnClick)a.on(o.Gesture.tap,this.close,this);this.on("afterVisibleChange",i)}},
__destructor:function(){var a;(a=this.get("maskNode"))&&a.remove()}};return g});
KISSY.add("overlay/close-xtpl",[],function(){return function(h){var e,c=this;e=this.config.utils;var g=e.runBlockCommand,b=e.renderOutput,a=e.getProperty,i=e.runInlineCommand,d=e.getPropertyOrRunCommand;e="";var o={},f=[],a=a(c,h,"closable",0,1);f.push(a);o.params=f;o.fn=function(a){var f;f='\n<a href="javascript:void(\'close\')"\n   id="ks-overlay-close-';var e=d(c,a,{},"id",0,3);f+=b(e,!0);f+='"\n   class="';var e={},g=[];g.push("close");e.params=g;e=i(c,a,e,"getBaseCssClasses",4);f+=b(e,!0);f+=
"\"\n   role='button'>\n    <span class=\"";e={};g=[];g.push("close-x");e.params=g;a=i(c,a,e,"getBaseCssClasses",6);f+=b(a,!0);return f+'">close</span>\n</a>\n'};e+=g(c,h,o,"if",1);return e+"\n"}});
KISSY.add("overlay/overlay-xtpl",["overlay/close-xtpl","component/extension/content-xtpl"],function(h,e,c,g){return function(b){var a,i;a=this.config.utils;"undefined"!==typeof g&&g.kissy&&(i=g);var d=a.renderOutput,c=a.runInlineCommand;a="";var f={},m=[];m.push("overlay/close-xtpl");f.params=m;i&&(e("overlay/close-xtpl"),f.params[0]=i.resolveByName(f.params[0]));f=c(this,b,f,"include",1);a+=d(f,!1);a+="\n";f={};m=[];m.push("component/extension/content-xtpl");f.params=m;i&&(e("component/extension/content-xtpl"),
f.params[0]=i.resolveByName(f.params[0]));b=c(this,b,f,"include",2);return a+=d(b,!1)}});
KISSY.add("overlay/overlay-render",["component/container","./overlay-xtpl","component/extension/content-render"],function(h,e){var c=e("component/container"),g=e("./overlay-xtpl"),b=e("component/extension/content-render");return c.getDefaultRender().extend([b],{createDom:function(){this.fillChildrenElsBySelectors({closeBtn:"#ks-overlay-close-{id}"})}},{ATTRS:{contentTpl:{value:g}},HTML_PARSER:{closeBtn:function(a){return a.one("."+this.getBaseCssClass("close"))}}})});
KISSY.add("overlay/extension/overlay-effect",[],function(h){function e(a){var d=a.$el.clone(!0);d.css({visibility:"visible",overflow:"hidden"}).addClass(a.get("prefixCls")+"overlay-ghost");return a.__afterCreateEffectGhost(d)}function c(a,d,b){a.__effectGhost&&a.__effectGhost.stop(1,1);var f=a.$el,c=h.all,g=a.get("effect"),j=c(g.target),c=g.duration,j=h.mix(j.offset(),{width:j.width(),height:j.height()}),k=h.mix(f.offset(),{width:f.width(),height:f.height()}),n=e(a),g=g.easing;n.insertAfter(f);d?
(d=j,j=k):d=k;f.css("visibility","hidden");n.css(d);a.__effectGhost=n;n.animate(j,{duration:c,easing:g,complete:function(){a.__effectGhost=null;n.remove();f.css("visibility","");b()}})}function g(b,d,e){var f=b.$el,g=b.get("effect"),h=g.effect||"none",j=g.target;"none"===h&&!j?e():j?c(b,d,e):(b=g.duration,g=g.easing,j=d?1:0,f.stop(1,1),f.css({visibility:"visible",display:d?"none":"block"}),f[h+a[h][j]](b,function(){f.css({display:"block",visibility:""});e()},g))}function b(){}var a={fade:["Out","In"],
slide:["Up","Down"]};b.ATTRS={effect:{value:{effect:"",target:null,duration:0.5,easing:"easeOut"},setter:function(b){var d=b.effect;"string"===typeof d&&!a[d]&&(b.effect="")}}};b.prototype={__afterCreateEffectGhost:function(a){return a},_onSetVisible:function(a){var b=this;g(b,a,function(){b.fire(a?"show":"hide")})}};return b});
KISSY.add("overlay/control","component/container,component/extension/shim,component/extension/align,./extension/loading,./extension/mask,./overlay-render,./extension/overlay-effect".split(","),function(h,e){var c=e("component/container"),g=e("component/extension/shim"),b=e("component/extension/align"),a=e("./extension/loading"),i=e("./extension/mask"),d=e("./overlay-render"),o=e("./extension/overlay-effect"),f={hide:"hide",destroy:"destroy"};return c.extend([g,a,b,i,o],{bindUI:function(){var a=this,
b=a.get("closeBtn");if(b)b.on("click",function(b){a.close();b.preventDefault()})},close:function(){this[f[this.get("closeAction")]||"hide"]();return this}},{ATTRS:{contentEl:{},closable:{value:false,view:1},closeBtn:{view:1},closeAction:{value:"hide"},focusable:{value:false},allowTextSelection:{value:true},handleMouseEvents:{value:false},visible:{value:false},xrender:{value:d}},xclass:"overlay"})});
KISSY.add("overlay/dialog-xtpl",["overlay/close-xtpl"],function(h,e,c,g){return function(b){var a,c=this,d;a=this.config.utils;"undefined"!==typeof g&&g.kissy&&(d=g);var h=a.runBlockCommand,f=a.renderOutput,m=a.getProperty,l=a.runInlineCommand,j=a.getPropertyOrRunCommand;a="";var k={},n=[];n.push("overlay/close-xtpl");k.params=n;d&&(e("overlay/close-xtpl"),k.params[0]=d.resolveByName(k.params[0]));d=l(c,b,k,"include",1);a+=f(d,!1);a+='\n<div id="ks-content-';d=j(c,b,{},"id",0,2);a+=f(d,!0);a+='"\n     class="';
d={};k=[];k.push("content");d.params=k;d=l(c,b,d,"getBaseCssClasses",3);a+=f(d,!0);a+='">\n    <div class="';d={};k=[];k.push("header");d.params=k;d=l(c,b,d,"getBaseCssClasses",4);a+=f(d,!0);a+='"\n         style="\n';d={};k=[];n=m(c,b,"headerStyle",0,6);k.push(n);d.params=k;d.fn=function(a){var b;b=" \n ";var d=j(c,a,{},"xindex",0,7);b=b+f(d,true);b=b+":";a=j(c,a,{},".",0,7);b=b+f(a,true);return b+";\n"};a+=h(c,b,d,"each",6);a+='\n"\n         id="ks-stdmod-header-';d=j(c,b,{},"id",0,10);a+=f(d,!0);
a+='">';d=j(c,b,{},"headerContent",0,10);a+=f(d,!1);a+='</div>\n\n    <div class="';d={};k=[];k.push("body");d.params=k;d=l(c,b,d,"getBaseCssClasses",12);a+=f(d,!0);a+='"\n         style="\n';d={};k=[];n=m(c,b,"bodyStyle",0,14);k.push(n);d.params=k;d.fn=function(a){var b;b=" \n ";var d=j(c,a,{},"xindex",0,15);b=b+f(d,true);b=b+":";a=j(c,a,{},".",0,15);b=b+f(a,true);return b+";\n"};a+=h(c,b,d,"each",14);a+='\n"\n         id="ks-stdmod-body-';d=j(c,b,{},"id",0,18);a+=f(d,!0);a+='">';d=j(c,b,{},"bodyContent",
0,18);a+=f(d,!1);a+='</div>\n\n    <div class="';d={};k=[];k.push("footer");d.params=k;l=l(c,b,d,"getBaseCssClasses",20);a+=f(l,!0);a+='"\n         style="\n';l={};d=[];m=m(c,b,"footerStyle",0,22);d.push(m);l.params=d;l.fn=function(a){var b;b=" \n ";var d=j(c,a,{},"xindex",0,23);b=b+f(d,true);b=b+":";a=j(c,a,{},".",0,23);b=b+f(a,true);return b+";\n"};a+=h(c,b,l,"each",22);a+='\n"\n         id="ks-stdmod-footer-';h=j(c,b,{},"id",0,26);a+=f(h,!0);a+='">';b=j(c,b,{},"footerContent",0,26);a+=f(b,!1);
return a+'</div>\n</div>\n<div tabindex="0"></div>'}});
KISSY.add("overlay/dialog-render",["./overlay-render","./dialog-xtpl"],function(h,e){var c=e("./overlay-render"),g=e("./dialog-xtpl");return c.extend({beforeCreateDom:function(b){h.mix(b.elAttrs,{role:"dialog","aria-labelledby":"ks-stdmod-header-"+this.control.get("id")})},createDom:function(){this.fillChildrenElsBySelectors({header:"#ks-stdmod-header-{id}",body:"#ks-stdmod-body-{id}",footer:"#ks-stdmod-footer-{id}"})},getChildrenContainerEl:function(){return this.control.get("body")},_onSetBodyStyle:function(b){this.control.get("body").css(b)},
_onSetHeaderStyle:function(b){this.control.get("header").css(b)},_onSetFooterStyle:function(b){this.control.get("footer").css(b)},_onSetBodyContent:function(b){var a;a=this.control.get("body");a.html(b)},_onSetHeaderContent:function(b){var a;a=this.control.get("header");a.html(b)},_onSetFooterContent:function(b){var a;a=this.control.get("footer");a.html(b)}},{ATTRS:{contentTpl:{value:g}},HTML_PARSER:{header:function(b){return b.one("."+this.getBaseCssClass("header"))},body:function(b){return b.one("."+
this.getBaseCssClass("body"))},footer:function(b){return b.one("."+this.getBaseCssClass("footer"))},headerContent:function(b){return b.one("."+this.getBaseCssClass("header")).html()},bodyContent:function(b){return b.one("."+this.getBaseCssClass("body")).html()},footerContent:function(b){return(b=b.one("."+this.getBaseCssClass("footer")))&&b.html()}}})});
KISSY.add("overlay/dialog",["./control","./dialog-render","node"],function(h,e){var c=e("./control"),g=e("./dialog-render"),b=e("node"),c=c.extend({__afterCreateEffectGhost:function(a){var b=this.get("body");a.all("."+this.get("prefixCls")+"stdmod-body").css({height:b.height(),width:b.width()}).html("");return a},handleKeyDownInternal:function(c){if(this.get("escapeToClose")&&c.keyCode===b.KeyCode.ESC){if("select"!==c.target.nodeName.toLowerCase()||c.target.disabled)this.close(),c.halt()}else a:if(c.keyCode===
a){var d=this.$el,e=b.all(c.target),f=d.last();if(e.equals(d)&&c.shiftKey)f[0].focus(),c.halt();else if(e.equals(f)&&!c.shiftKey)this.focus(),c.halt();else if(e.equals(d)||d.contains(e))break a;c.halt()}},_onSetVisible:function(a,b){var c=this.el;if(a)this.__lastActive=c.ownerDocument.activeElement,this.focus(),c.setAttribute("aria-hidden","false");else{c.setAttribute("aria-hidden","true");try{this.__lastActive&&this.__lastActive.focus()}catch(f){}}this.callSuper(a,b)}},{ATTRS:{header:{view:1},body:{view:1},
footer:{view:1},bodyStyle:{value:{},view:1},footerStyle:{value:{},view:1},headerStyle:{value:{},view:1},headerContent:{value:"",view:1},bodyContent:{value:"",view:1},footerContent:{value:"",view:1},closable:{value:!0},xrender:{value:g},focusable:{value:!0},escapeToClose:{value:!0}},xclass:"dialog"}),a=b.KeyCode.TAB;return c});
KISSY.add("overlay/popup",["./control"],function(h,e){return e("./control").extend({initializer:function(){var c=this;c.get("trigger")&&("mouse"===c.get("triggerType")?(c._bindTriggerMouse(),c.on("afterRenderUI",function(){c._bindContainerMouse()})):c._bindTriggerClick())},_bindTriggerMouse:function(){var c=this,e=c.get("trigger"),b;c.__mouseEnterPopup=function(a){c._clearHiddenTimer();b=h.later(function(){c._showing(a);b=void 0},1E3*c.get("mouseDelay"))};e.on("mouseenter",c.__mouseEnterPopup);c._mouseLeavePopup=
function(){b&&(b.cancel(),b=void 0);c._setHiddenTimer()};e.on("mouseleave",c._mouseLeavePopup)},_bindContainerMouse:function(){this.$el.on("mouseleave",this._setHiddenTimer,this).on("mouseenter",this._clearHiddenTimer,this)},_setHiddenTimer:function(){var c=this;c._hiddenTimer=h.later(function(){c._hiding()},1E3*c.get("mouseDelay"))},_clearHiddenTimer:function(){this._hiddenTimer&&(this._hiddenTimer.cancel(),this._hiddenTimer=void 0)},_bindTriggerClick:function(){var c=this;c.__clickPopup=function(e){e.preventDefault();
if(c.get("toggle"))c[c.get("visible")?"_hiding":"_showing"](e);else c._showing(e)};c.get("trigger").on("click",c.__clickPopup)},_showing:function(c){this.set("currentTrigger",h.one(c.target));this.show()},_hiding:function(){this.set("currentTrigger",void 0);this.hide()},destructor:function(){var c=this.$el,e=this.get("trigger");e&&(this.__clickPopup&&e.detach("click",this.__clickPopup),this.__mouseEnterPopup&&e.detach("mouseenter",this.__mouseEnterPopup),this._mouseLeavePopup&&e.detach("mouseleave",
this._mouseLeavePopup));c.detach("mouseleave",this._setHiddenTimer,this).detach("mouseenter",this._clearHiddenTimer,this)}},{ATTRS:{trigger:{setter:function(c){return h.all(c)}},triggerType:{value:"click"},currentTrigger:{},mouseDelay:{value:0.1},toggle:{value:!1}},xclass:"popup"})});KISSY.add("overlay",["overlay/control","overlay/dialog","overlay/popup"],function(h,e){var c=e("overlay/control"),g=e("overlay/dialog"),b=e("overlay/popup");c.Dialog=g;h.Dialog=g;c.Popup=b;return h.Overlay=c});