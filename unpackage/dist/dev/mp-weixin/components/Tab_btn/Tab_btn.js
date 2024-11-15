"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {},
  props: {
    label: {
      type: Object
    }
  },
  created() {
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.label.isTrue
  }, $props.label.isTrue ? {
    b: $props.label.icon,
    c: common_vendor.t($props.label.labelName)
  } : {
    d: $props.label.selectIcon
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-690a1ab3"]]);
wx.createComponent(Component);
