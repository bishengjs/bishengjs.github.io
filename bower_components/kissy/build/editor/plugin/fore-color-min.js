/*
Copyright 2013, KISSY v1.41
MIT Licensed
build time: Dec 4 22:10
*/
KISSY.add("editor/plugin/fore-color",["./color/btn","./fore-color/cmd"],function(d,b){function c(a){this.config=a||{}}var e=b("./color/btn"),f=b("./fore-color/cmd");d.augment(c,{pluginRenderUI:function(a){f.init(a);e.init(a,{cmdType:"foreColor",defaultColor:"rgb(204, 0, 0)",tooltip:"\u6587\u672c\u989c\u8272"})}});return c});
