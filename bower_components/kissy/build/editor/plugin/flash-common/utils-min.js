/*
Copyright 2013, KISSY v1.41
MIT Licensed
build time: Dec 4 22:09
*/
KISSY.add("editor/plugin/flash-common/utils",["swf"],function(d,g){var e=g("swf"),b=d.DOM,f={insertFlash:function(a,c,b,d,e){c=f.createSWF({src:c,attrs:b,document:a.get("document")[0]});b=a.createFakeElement(c.el,d||"ke_flash",e||"flash",!0,c.html,b);a.insertElement(b);return b},isFlashEmbed:function(a){return"application/x-shockwave-flash"===b.attr(a,"type")||/\.swf(?:$|\?)/i.test(b.attr(a,"src")||"")},getUrl:function(a){return e.getSrc(a)},createSWF:function(a){var c=b.create('<div style="position:absolute;left:-9999px;top:-9999px;"></div>',
void 0,a.document);a.htmlMode="full";b.append(c,a.document.body);a.render=c;a=new e(a);b.remove(c);return{el:d.all(a.get("el")),html:a.get("html")}}};return f});
