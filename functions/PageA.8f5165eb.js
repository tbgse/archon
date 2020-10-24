"use strict";
exports[Symbol.toStringTag] = "Module";
var renderer = require("@vue/server-renderer");
var script = {
  name: "PageA",
  props: {
    msg: String
  },
  mounted() {
    this.randomNumber = Math.random();
  },
  data() {
    return {
      randomNumber: 0,
      initialized: false,
      count: 0
    };
  }
};
function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<h1${renderer.ssrRenderAttrs(_attrs)}>Page A</h1>`);
}
script.ssrRender = ssrRender;
script.__file = "src/components/PageA.vue";
exports.default = script;
