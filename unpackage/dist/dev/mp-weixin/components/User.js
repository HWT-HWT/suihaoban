"use strict";
const common_vendor = require("../common/vendor.js");
const common_assets = require("../common/assets.js");
const certificate = () => "./certificate.js";
const UserFoot = () => "./UserFoot.js";
const _sfc_main = {
  name: "User",
  data() {
    return {
      work: [
        {
          name: "已提交",
          image: "../static/suihaoban/User_icon_1.png"
        },
        {
          name: "办理中",
          image: "../static/suihaoban/User_icon_2.png"
        },
        {
          name: "已办结",
          image: "../static/suihaoban/User_icon_3.png"
        }
      ]
    };
  },
  components: {
    certificate,
    UserFoot
  }
};
if (!Array) {
  const _component_certificate = common_vendor.resolveComponent("certificate");
  const _component_UserFoot = common_vendor.resolveComponent("UserFoot");
  (_component_certificate + _component_UserFoot)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$1,
    b: common_assets._imports_1$1,
    c: common_assets._imports_2,
    d: common_assets._imports_3$1,
    e: common_assets._imports_4$1,
    f: common_assets._imports_5$1,
    g: common_assets._imports_6$1,
    h: common_assets._imports_7$1,
    i: common_vendor.f($data.work, (item, index, i0) => {
      return {
        a: item.image,
        b: common_vendor.t(item.name),
        c: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-cecf776e"]]);
wx.createComponent(Component);
