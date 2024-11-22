"use strict";
const common_vendor = require("../common/vendor.js");
const common_assets = require("../common/assets.js");
const TabBtn = () => "./Tab_btn/Tab_btn.js";
const _sfc_main = {
  data() {
    return {
      list: [
        { labelName: "首页", icon: "../../static/suihaoban/ic_tab_home_normal.png", selectIcon: "../../static/suihaoban/tab_1.png", isTrue: false },
        { labelName: "办事", icon: "../../static/suihaoban/ic_tab_work_normal.png", selectIcon: "../../static/suihaoban/tab_2.png", isTrue: true },
        { labelName: "生活", icon: "../../static/suihaoban/ic_tab_live_normal.png", selectIcon: "../../static/suihaoban/tab_3.png", isTrue: true },
        { labelName: "个人", icon: "../../static/suihaoban/ic_tab_mine_normal.png", selectIcon: "../../static/suihaoban/tab_4.png", isTrue: true }
      ]
    };
  },
  methods: {
    btn(item, list) {
      item.forEach((t) => {
        t.isTrue = true;
      });
      list.isTrue = !list.isTrue;
      this.$emit("update:data", this.list);
    }
  },
  components: {
    TabBtn
  }
};
if (!Array) {
  const _component_TabBtn = common_vendor.resolveComponent("TabBtn");
  _component_TabBtn();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.btn($data.list, $data.list[0])),
    b: common_vendor.p({
      label: $data.list[0]
    }),
    c: common_vendor.o(($event) => $options.btn($data.list, $data.list[1])),
    d: common_vendor.p({
      label: $data.list[1]
    }),
    e: common_assets._imports_0$2,
    f: common_vendor.o(($event) => $options.btn($data.list, $data.list[2])),
    g: common_vendor.p({
      label: $data.list[2]
    }),
    h: common_vendor.o(($event) => $options.btn($data.list, $data.list[3])),
    i: common_vendor.p({
      label: $data.list[3]
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d0b7bcff"]]);
wx.createComponent(Component);
