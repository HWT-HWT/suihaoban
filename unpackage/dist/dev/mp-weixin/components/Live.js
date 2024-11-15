"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      aspect: "16:9",
      // 视频宽高比
      devicePosition: "front",
      // 摄像头位置，'front'为前置，'back'为后置
      windowWidth: 375,
      // 窗口宽度，根据实际需求设置
      windowHeight: 667
      // 窗口高度，根据实际需求设置
      // ...其他数据
    };
  },
  methods: {
    // 切换摄像头
    switchCamera() {
      this.devicePosition = this.devicePosition === "front" ? "back" : "front";
    }
    // 其他方法...
  }
  // ...其他选项
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.aspect,
    b: $data.devicePosition,
    c: common_vendor.o((...args) => _ctx.statechange && _ctx.statechange(...args)),
    d: $data.windowWidth,
    e: $data.windowHeight,
    f: common_vendor.o((...args) => $options.switchCamera && $options.switchCamera(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e3c415cd"]]);
wx.createComponent(Component);
