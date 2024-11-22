"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "FaceTitle",
  data() {
    return {
      title: "未检出到人脸"
    };
  },
  methods: {
    setText() {
      setTimeout(() => {
        this.title = "脸部亮一点";
        console.log(1);
        setTimeout(() => {
          this.title = "靠近一点";
          console.log(2);
          setTimeout(() => {
            this.title = "保存脸部向前";
            console.log(2);
          }, 1500);
        }, 1500);
      }, 3e3);
    }
  },
  mounted() {
    this.setText();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.title)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
