/*
Copyright 2014, KISSY v1.50
MIT Licensed
build time: Feb 25 19:38
*/
/*
 Combined modules by KISSY Module Compiler: 

 editor/plugin/indent
*/

KISSY.add("editor/plugin/indent", ["editor", "./indent/cmd", "./button"], function(S, require) {
  var Editor = require("editor");
  var indexCmd = require("./indent/cmd");
  require("./button");
  function Indent() {
  }
  S.augment(Indent, {pluginRenderUI:function(editor) {
    indexCmd.init(editor);
    editor.addButton("indent", {tooltip:"\u589e\u52a0\u7f29\u8fdb\u91cf", listeners:{click:function() {
      editor.execCommand("indent");
      editor.focus()
    }}, mode:Editor.Mode.WYSIWYG_MODE})
  }});
  return Indent
});

