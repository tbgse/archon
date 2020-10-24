"use strict";
exports[Symbol.toStringTag] = "Module";
var renderer = require("@vue/server-renderer");
var script = {
  name: "PageB"
};
function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<h1${renderer.ssrRenderAttrs(_attrs)}>Page B</h1>`);
}
script.ssrRender = ssrRender;
script.__file = "src/components/PageB.vue";
exports.default = script;
