"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Math) {
  FaceTitle();
}
const FaceTitle = () => "../../components/FaceTitle.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "faceRecognition",
  setup(__props) {
    common_vendor.ref({});
    common_vendor.onMounted(() => {
      const instance = common_vendor.getCurrentInstance();
      const pusherContext = common_vendor.index.createLivePusherContext("pusherId", instance.ctx);
      pusherContext.switchCamera();
    });
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-049a0bd3"]]);
wx.createPage(MiniProgramPage);
