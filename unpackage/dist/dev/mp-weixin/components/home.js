"use strict";
const common_vendor = require("../common/vendor.js");
const common_assets = require("../common/assets.js");
const titleVue = () => "./ArticleTitle.js";
const _sfc_main = {
  name: "home",
  data() {
    return {
      backgroundColor: "",
      scrollThreshold: 200,
      scrollTop: "",
      peopleLsit: ["ETC办理", "国际驾照办理", "智慧充电", "视频会员", "健康通"],
      ZoneList: [
        { name: "社保", image: "../static/suihaoban/ioc1.png" },
        { name: "医保", image: "../static/suihaoban/ioc2.png" },
        { name: "公积金", image: "../static/suihaoban/ioc3.png" },
        { name: "出入境", image: "../static/suihaoban/ioc4.png" },
        { name: "城乡居民医疗", image: "../static/suihaoban/ioc5.png" },
        { name: "不动产", image: "../static/suihaoban/ioc5.png" },
        { name: "民政", image: "../static/suihaoban/ioc6.png" },
        { name: "考试教育", image: "../static/suihaoban/ioc7.png" }
      ],
      bannerIcon: [
        {
          name: "数字空间",
          image: "../static/suihaoban/Nav_title_ioc1.png"
        },
        {
          name: "电子印章",
          image: "../static/suihaoban/Nav_title_ioc2.png"
        },
        {
          name: "亮证",
          image: "../static/suihaoban/Nav_title_ioc3.png"
        },
        {
          name: "关爱版",
          image: "../static/suihaoban/Nav_title_ioc4.png"
        }
      ],
      iconLog: [
        [
          {
            name: "社保卡申领",
            image: "../static/suihaoban/home_list_1.png"
          },
          {
            name: "车辆年检",
            image: "../static/suihaoban/home_list_2.png"
          },
          {
            name: "拍证件照",
            image: "../static/suihaoban/home_list_3.png"
          },
          {
            name: "欠薪投诉",
            image: "../static/suihaoban/home_list_4.png"
          },
          {
            name: "随手拍",
            image: "../static/suihaoban/home_list_5.png"
          },
          {
            name: "签证服务",
            image: "../static/suihaoban/home_list_6.png"
          },
          {
            name: "志愿时",
            image: "../static/suihaoban/home_list_7.png"
          },
          {
            name: "微心愿征集",
            image: "../static/suihaoban/home_list_8.png"
          },
          {
            name: "景区购票",
            image: "../static/suihaoban/home_list_9.png"
          },
          {
            name: "贷款",
            image: "../static/suihaoban/home_list_10.png"
          }
        ],
        [
          {
            name: "居住证",
            image: "../static/suihaoban/home_list_1.png"
          },
          {
            name: "广州图书馆",
            image: "../static/suihaoban/home_list_2.png"
          },
          {
            name: "考试教育",
            image: "../static/suihaoban/home_list_3.png"
          },
          {
            name: "查缴服务",
            image: "../static/suihaoban/home_list_4.png"
          },
          {
            name: "服务一张图",
            image: "../static/suihaoban/home_list_5.png"
          },
          {
            name: "实时公交",
            image: "../static/suihaoban/home_list_6.png"
          },
          {
            name: "交通运输",
            image: "../static/suihaoban/home_list_7.png"
          },
          {
            name: "百姓提案",
            image: "../static/suihaoban/home_list_8.png"
          },
          {
            name: "签证服务",
            image: "../static/suihaoban/home_list_9.png"
          },
          {
            name: "更多",
            image: "../static/suihaoban/home_list_10.png"
          }
        ]
      ]
    };
  },
  methods: {
    onPageScroll(event) {
      this.scrollTop = event.detail.scrollTop;
      if (this.scrollTop > this.scrollThreshold) {
        this.backgroundColor = "#ee734c";
      }
      if (this.scrollTop < this.scrollThreshold) {
        this.backgroundColor = "";
      }
    },
    NagTo(index) {
      console.log(index);
      index === 5 ? common_vendor.index.navigateTo({
        url: "/pages/Estate/Estate"
      }) : index;
    }
  },
  components: {
    titleVue
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _component_titleVue = common_vendor.resolveComponent("titleVue");
  (_easycom_uni_search_bar2 + _component_titleVue)();
}
const _easycom_uni_search_bar = () => "../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_2$1,
    b: common_vendor.p({
      placeholder: "搜索服务",
      bgColor: "",
      clearButton: "none",
      cancelButton: "none"
    }),
    c: common_assets._imports_1$1,
    d: $data.backgroundColor,
    e: common_assets._imports_2$2,
    f: common_assets._imports_3,
    g: common_vendor.f($data.bannerIcon, (item, index, i0) => {
      return {
        a: "url(" + item.image + ")",
        b: common_vendor.t(item.name),
        c: index
      };
    }),
    h: common_assets._imports_4$1,
    i: common_vendor.f($data.iconLog, (item, index, i0) => {
      return {
        a: common_vendor.f(item, (sum, num, i1) => {
          return {
            a: sum.image,
            b: common_vendor.t(sum.name),
            c: num
          };
        }),
        b: index
      };
    }),
    j: common_assets._imports_5$1,
    k: common_assets._imports_6$1,
    l: common_assets._imports_7$1,
    m: common_vendor.f($data.ZoneList, (item, index, i0) => {
      return {
        a: item.image,
        b: common_vendor.t(item.name),
        c: index,
        d: common_vendor.o(($event) => $options.NagTo(index), index)
      };
    }),
    n: common_vendor.f(6, (item, k0, i0) => {
      return {
        a: `../static/suihaoban/bg_mini_banner${item}.png`,
        b: item
      };
    }),
    o: common_assets._imports_8$1,
    p: common_vendor.f($data.peopleLsit, (item, index, i0) => {
      return {
        a: `../static/suihaoban/bm_ic_${index + 1}.png`,
        b: common_vendor.t(item),
        c: index
      };
    }),
    q: common_assets._imports_9,
    r: common_assets._imports_10,
    s: common_assets._imports_11,
    t: common_assets._imports_12,
    v: common_assets._imports_13,
    w: common_vendor.o((...args) => $options.onPageScroll && $options.onPageScroll(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-045d88fd"]]);
wx.createComponent(Component);
