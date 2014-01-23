/*
Copyright 2013, KISSY v1.41
MIT Licensed
build time: Dec 4 22:14
*/
/*
 Combined processedModules by KISSY Module Compiler: 

 editor/plugin/underline
*/

KISSY.add("editor/plugin/underline", ["./font/ui", "./underline/cmd", "./button"], function(S, require) {
  var ui = require("./font/ui");
  var cmd = require("./underline/cmd");
  require("./button");
  function Underline() {
  }
  S.augment(Underline, {pluginRenderUI:function(editor) {
    cmd.init(editor);
    editor.addButton("underline", {cmdType:"underline", tooltip:"\u4e0b\u5212\u7ebf"}, ui.Button);
    editor.docReady(function() {
      editor.get("document").on("keydown", function(e) {
        if(e.ctrlKey && e.keyCode == S.Node.KeyCode.U) {
          editor.execCommand("underline");
          e.preventDefault()
        }
      })
    })
  }});
  return Underline
});

