"use strict";
const common_vendor = require("../common/vendor.js");
const common_assets = require("../common/assets.js");
const _sfc_main = {
  name: "certificate",
  data() {
    return {};
  },
  components: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$5,
    b: common_assets._imports_0$5,
    c: common_vendor.o((...args) => _ctx.scroll && _ctx.scroll(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-aab9872e"]]);
wx.createComponent(Component);
