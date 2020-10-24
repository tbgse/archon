"use strict";
exports[Symbol.toStringTag] = "Module";
var renderer = require("@vue/server-renderer");
var script = {
  name: "Homepage"
};
function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<h1${renderer.ssrRenderAttrs(_attrs)}>This is the homepage</h1>`);
}
script.ssrRender = ssrRender;
script.__file = "src/components/Homepage.vue";
exports.default = script;
