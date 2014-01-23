/*
Copyright 2013, KISSY v1.41
MIT Licensed
build time: Dec 4 22:07
*/
/*
 Combined processedModules by KISSY Module Compiler: 

 editor/plugin/bold
*/

KISSY.add("editor/plugin/bold", ["./font/ui", "./bold/cmd", "./button"], function(S, require) {
  var ui = require("./font/ui");
  var cmd = require("./bold/cmd");
  require("./button");
  function bold() {
  }
  S.augment(bold, {pluginRenderUI:function(editor) {
    cmd.init(editor);
    editor.addButton("bold", {cmdType:"bold", tooltip:"\u7c97\u4f53"}, ui.Button);
    editor.docReady(function() {
      editor.get("document").on("keydown", function(e) {
        if(e.ctrlKey && e.keyCode === S.Node.KeyCode.B) {
          editor.execCommand("bold");
          e.preventDefault()
        }
      })
    })
  }});
  return bold
});

