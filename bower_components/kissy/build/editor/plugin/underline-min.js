/*
Copyright 2013, KISSY v1.41
MIT Licensed
build time: Dec 4 22:14
*/
KISSY.add("editor/plugin/underline",["./font/ui","./underline/cmd","./button"],function(c,a){function d(){}var e=a("./font/ui"),f=a("./underline/cmd");a("./button");c.augment(d,{pluginRenderUI:function(b){f.init(b);b.addButton("underline",{cmdType:"underline",tooltip:"\u4e0b\u5212\u7ebf"},e.Button);b.docReady(function(){b.get("document").on("keydown",function(a){a.ctrlKey&&a.keyCode==c.Node.KeyCode.U&&(b.execCommand("underline"),a.preventDefault())})})}});return d});
