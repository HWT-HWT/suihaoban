"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const ArticleTitleVue = () => "../../components/ArticleTitle.js";
const _sfc_main = {
  data() {
    return {
      list: ["自然个人名下房产查询", "不动产等级查册表(产权人班)", "不动产登记查册表(非产权人自然状况版)", "法人查询名下不动产等级信息"],
      listTow: ["备案查询", "房源核查", "房屋租聘备案/信息采集校验", "政策法规", "租金参考"],
      listthree: ["广州市商品房网签", "e讯通", "常见问题解答", "政策法规", "业务公告", "行政处理决定书"]
    };
  },
  components: {
    ArticleTitleVue
  },
  methods: {
    NavTo() {
      common_vendor.index.navigateTo({
        url: "/pages/faceRecognition/faceRecognition"
      });
    }
  }
};
if (!Array) {
  const _component_ArticleTitleVue = common_vendor.resolveComponent("ArticleTitleVue");
  _component_ArticleTitleVue();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_assets._imports_1,
    c: common_assets._imports_2,
    d: common_assets._imports_8,
    e: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index,
        c: common_vendor.o((...args) => $options.NavTo && $options.NavTo(...args), index)
      };
    }),
    f: common_assets._imports_4,
    g: common_assets._imports_5,
    h: common_assets._imports_6,
    i: common_vendor.f($data.listTow, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    j: common_assets._imports_7,
    k: common_assets._imports_8,
    l: common_assets._imports_8,
    m: common_vendor.f($data.listthree, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    n: common_assets._imports_7,
    o: common_assets._imports_8
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-406202dc"]]);
wx.createPage(MiniProgramPage);
