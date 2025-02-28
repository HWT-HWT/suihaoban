"use strict";
const common_vendor = require("../common/vendor.js");
const common_assets = require("../common/assets.js");
const articleTitle = () => "./ArticleTitle.js";
const _sfc_main = {
  name: "UserFoot",
  data() {
    return {};
  },
  components: {
    articleTitle
  }
};
if (!Array) {
  const _component_articleTitle = common_vendor.resolveComponent("articleTitle");
  _component_articleTitle();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$6,
    b: common_assets._imports_1$3,
    c: common_assets._imports_2$3,
    d: common_assets._imports_3$2,
    e: common_assets._imports_4$3
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9b61165e"]]);
wx.createComponent(Component);
