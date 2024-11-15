"use strict";
const common_vendor = require("../../common/vendor.js");
const fontTaber = () => "../../components/footTaber.js";
const Home = () => "../../components/home.js";
const Work = () => "../../components/Work.js";
const Live = () => "../../components/Live.js";
const User = () => "../../components/User.js";
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
  onLoad() {
  },
  methods: {
    change(data) {
      this.list = data;
    }
  },
  components: {
    fontTaber,
    Home,
    Work,
    Live,
    User
  }
};
if (!Array) {
  const _component_Home = common_vendor.resolveComponent("Home");
  const _component_Work = common_vendor.resolveComponent("Work");
  const _component_Live = common_vendor.resolveComponent("Live");
  const _component_User = common_vendor.resolveComponent("User");
  const _component_fontTaber = common_vendor.resolveComponent("fontTaber");
  (_component_Home + _component_Work + _component_Live + _component_User + _component_fontTaber)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  return common_vendor.e({
    a: !((_a = $data.list[0]) == null ? void 0 : _a.isTrue)
  }, !((_b = $data.list[0]) == null ? void 0 : _b.isTrue) ? {} : {}, {
    b: !((_c = $data.list[1]) == null ? void 0 : _c.isTrue)
  }, !((_d = $data.list[1]) == null ? void 0 : _d.isTrue) ? {} : {}, {
    c: !((_e = $data.list[2]) == null ? void 0 : _e.isTrue)
  }, !((_f = $data.list[2]) == null ? void 0 : _f.isTrue) ? {} : {}, {
    d: !((_g = $data.list[3]) == null ? void 0 : _g.isTrue)
  }, !((_h = $data.list[3]) == null ? void 0 : _h.isTrue) ? {} : {}, {
    e: common_vendor.o($options.change)
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
