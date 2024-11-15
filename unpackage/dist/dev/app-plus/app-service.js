if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$c = {
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
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "tab-btn" }, [
      $props.label.isTrue ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "tab-btn"
      }, [
        vue.createElementVNode("view", { class: "tab-btn-ioc" }, [
          vue.createElementVNode("image", {
            class: "ioc-image",
            src: $props.label.icon,
            mode: ""
          }, null, 8, ["src"])
        ]),
        vue.createTextVNode(
          " " + vue.toDisplayString($props.label.labelName),
          1
          /* TEXT */
        )
      ])) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "tab-btn",
        style: { "height": "70%", "display": "flex", "align-items": "center" }
      }, [
        vue.createElementVNode("view", { class: "tab-btn-ioc" }, [
          vue.createElementVNode("image", {
            class: "ioc-avc-image",
            src: $props.label.selectIcon,
            mode: ""
          }, null, 8, ["src"])
        ])
      ]))
    ]);
  }
  const TabBtn = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-690a1ab3"], ["__file", "C:/Users/HWT/Desktop/shb/suihaoban/components/Tab_btn/Tab_btn.vue"]]);
  const _imports_0$2 = "/static/suihaoban/t.png";
  const _sfc_main$b = {
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
        item.forEach((t2) => {
          t2.isTrue = true;
        });
        list.isTrue = !list.isTrue;
        this.$emit("update:data", this.list);
      }
    },
    components: {
      TabBtn
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_TabBtn = vue.resolveComponent("TabBtn");
    return vue.openBlock(), vue.createElementBlock("view", { class: "tab" }, [
      vue.createVNode(_component_TabBtn, {
        class: "TabBtn",
        label: $data.list[0],
        onClick: _cache[0] || (_cache[0] = ($event) => $options.btn($data.list, $data.list[0]))
      }, null, 8, ["label"]),
      vue.createVNode(_component_TabBtn, {
        class: "TabBtn",
        label: $data.list[1],
        onClick: _cache[1] || (_cache[1] = ($event) => $options.btn($data.list, $data.list[1]))
      }, null, 8, ["label"]),
      vue.createElementVNode("view", { class: "tab-btn" }, [
        vue.createElementVNode("view", { class: "tab-btn-ioc" }, [
          vue.createElementVNode("image", {
            style: { "height": "150rpx", "margin-top": "-25rpx" },
            src: _imports_0$2,
            mode: ""
          })
        ])
      ]),
      vue.createVNode(_component_TabBtn, {
        class: "TabBtn",
        label: $data.list[2],
        onClick: _cache[2] || (_cache[2] = ($event) => $options.btn($data.list, $data.list[2]))
      }, null, 8, ["label"]),
      vue.createVNode(_component_TabBtn, {
        class: "TabBtn",
        label: $data.list[3],
        onClick: _cache[3] || (_cache[3] = ($event) => $options.btn($data.list, $data.list[3]))
      }, null, 8, ["label"])
    ]);
  }
  const fontTaber = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-d0b7bcff"], ["__file", "C:/Users/HWT/Desktop/shb/suihaoban/components/footTaber.vue"]]);
  const fontData = [
    {
      "font_class": "arrow-down",
      "unicode": ""
    },
    {
      "font_class": "arrow-left",
      "unicode": ""
    },
    {
      "font_class": "arrow-right",
      "unicode": ""
    },
    {
      "font_class": "arrow-up",
      "unicode": ""
    },
    {
      "font_class": "auth",
      "unicode": ""
    },
    {
      "font_class": "auth-filled",
      "unicode": ""
    },
    {
      "font_class": "back",
      "unicode": ""
    },
    {
      "font_class": "bars",
      "unicode": ""
    },
    {
      "font_class": "calendar",
      "unicode": ""
    },
    {
      "font_class": "calendar-filled",
      "unicode": ""
    },
    {
      "font_class": "camera",
      "unicode": ""
    },
    {
      "font_class": "camera-filled",
      "unicode": ""
    },
    {
      "font_class": "cart",
      "unicode": ""
    },
    {
      "font_class": "cart-filled",
      "unicode": ""
    },
    {
      "font_class": "chat",
      "unicode": ""
    },
    {
      "font_class": "chat-filled",
      "unicode": ""
    },
    {
      "font_class": "chatboxes",
      "unicode": ""
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": ""
    },
    {
      "font_class": "chatbubble",
      "unicode": ""
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": ""
    },
    {
      "font_class": "checkbox",
      "unicode": ""
    },
    {
      "font_class": "checkbox-filled",
      "unicode": ""
    },
    {
      "font_class": "checkmarkempty",
      "unicode": ""
    },
    {
      "font_class": "circle",
      "unicode": ""
    },
    {
      "font_class": "circle-filled",
      "unicode": ""
    },
    {
      "font_class": "clear",
      "unicode": ""
    },
    {
      "font_class": "close",
      "unicode": ""
    },
    {
      "font_class": "closeempty",
      "unicode": ""
    },
    {
      "font_class": "cloud-download",
      "unicode": ""
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": ""
    },
    {
      "font_class": "color",
      "unicode": ""
    },
    {
      "font_class": "color-filled",
      "unicode": ""
    },
    {
      "font_class": "compose",
      "unicode": ""
    },
    {
      "font_class": "contact",
      "unicode": ""
    },
    {
      "font_class": "contact-filled",
      "unicode": ""
    },
    {
      "font_class": "down",
      "unicode": ""
    },
    {
      "font_class": "bottom",
      "unicode": ""
    },
    {
      "font_class": "download",
      "unicode": ""
    },
    {
      "font_class": "download-filled",
      "unicode": ""
    },
    {
      "font_class": "email",
      "unicode": ""
    },
    {
      "font_class": "email-filled",
      "unicode": ""
    },
    {
      "font_class": "eye",
      "unicode": ""
    },
    {
      "font_class": "eye-filled",
      "unicode": ""
    },
    {
      "font_class": "eye-slash",
      "unicode": ""
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": ""
    },
    {
      "font_class": "fire",
      "unicode": ""
    },
    {
      "font_class": "fire-filled",
      "unicode": ""
    },
    {
      "font_class": "flag",
      "unicode": ""
    },
    {
      "font_class": "flag-filled",
      "unicode": ""
    },
    {
      "font_class": "folder-add",
      "unicode": ""
    },
    {
      "font_class": "folder-add-filled",
      "unicode": ""
    },
    {
      "font_class": "font",
      "unicode": ""
    },
    {
      "font_class": "forward",
      "unicode": ""
    },
    {
      "font_class": "gear",
      "unicode": ""
    },
    {
      "font_class": "gear-filled",
      "unicode": ""
    },
    {
      "font_class": "gift",
      "unicode": ""
    },
    {
      "font_class": "gift-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-down",
      "unicode": ""
    },
    {
      "font_class": "hand-down-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-up",
      "unicode": ""
    },
    {
      "font_class": "hand-up-filled",
      "unicode": ""
    },
    {
      "font_class": "headphones",
      "unicode": ""
    },
    {
      "font_class": "heart",
      "unicode": ""
    },
    {
      "font_class": "heart-filled",
      "unicode": ""
    },
    {
      "font_class": "help",
      "unicode": ""
    },
    {
      "font_class": "help-filled",
      "unicode": ""
    },
    {
      "font_class": "home",
      "unicode": ""
    },
    {
      "font_class": "home-filled",
      "unicode": ""
    },
    {
      "font_class": "image",
      "unicode": ""
    },
    {
      "font_class": "image-filled",
      "unicode": ""
    },
    {
      "font_class": "images",
      "unicode": ""
    },
    {
      "font_class": "images-filled",
      "unicode": ""
    },
    {
      "font_class": "info",
      "unicode": ""
    },
    {
      "font_class": "info-filled",
      "unicode": ""
    },
    {
      "font_class": "left",
      "unicode": ""
    },
    {
      "font_class": "link",
      "unicode": ""
    },
    {
      "font_class": "list",
      "unicode": ""
    },
    {
      "font_class": "location",
      "unicode": ""
    },
    {
      "font_class": "location-filled",
      "unicode": ""
    },
    {
      "font_class": "locked",
      "unicode": ""
    },
    {
      "font_class": "locked-filled",
      "unicode": ""
    },
    {
      "font_class": "loop",
      "unicode": ""
    },
    {
      "font_class": "mail-open",
      "unicode": ""
    },
    {
      "font_class": "mail-open-filled",
      "unicode": ""
    },
    {
      "font_class": "map",
      "unicode": ""
    },
    {
      "font_class": "map-filled",
      "unicode": ""
    },
    {
      "font_class": "map-pin",
      "unicode": ""
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": ""
    },
    {
      "font_class": "medal",
      "unicode": ""
    },
    {
      "font_class": "medal-filled",
      "unicode": ""
    },
    {
      "font_class": "mic",
      "unicode": ""
    },
    {
      "font_class": "mic-filled",
      "unicode": ""
    },
    {
      "font_class": "micoff",
      "unicode": ""
    },
    {
      "font_class": "micoff-filled",
      "unicode": ""
    },
    {
      "font_class": "minus",
      "unicode": ""
    },
    {
      "font_class": "minus-filled",
      "unicode": ""
    },
    {
      "font_class": "more",
      "unicode": ""
    },
    {
      "font_class": "more-filled",
      "unicode": ""
    },
    {
      "font_class": "navigate",
      "unicode": ""
    },
    {
      "font_class": "navigate-filled",
      "unicode": ""
    },
    {
      "font_class": "notification",
      "unicode": ""
    },
    {
      "font_class": "notification-filled",
      "unicode": ""
    },
    {
      "font_class": "paperclip",
      "unicode": ""
    },
    {
      "font_class": "paperplane",
      "unicode": ""
    },
    {
      "font_class": "paperplane-filled",
      "unicode": ""
    },
    {
      "font_class": "person",
      "unicode": ""
    },
    {
      "font_class": "person-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": ""
    },
    {
      "font_class": "phone",
      "unicode": ""
    },
    {
      "font_class": "phone-filled",
      "unicode": ""
    },
    {
      "font_class": "plus",
      "unicode": ""
    },
    {
      "font_class": "plus-filled",
      "unicode": ""
    },
    {
      "font_class": "plusempty",
      "unicode": ""
    },
    {
      "font_class": "pulldown",
      "unicode": ""
    },
    {
      "font_class": "pyq",
      "unicode": ""
    },
    {
      "font_class": "qq",
      "unicode": ""
    },
    {
      "font_class": "redo",
      "unicode": ""
    },
    {
      "font_class": "redo-filled",
      "unicode": ""
    },
    {
      "font_class": "refresh",
      "unicode": ""
    },
    {
      "font_class": "refresh-filled",
      "unicode": ""
    },
    {
      "font_class": "refreshempty",
      "unicode": ""
    },
    {
      "font_class": "reload",
      "unicode": ""
    },
    {
      "font_class": "right",
      "unicode": ""
    },
    {
      "font_class": "scan",
      "unicode": ""
    },
    {
      "font_class": "search",
      "unicode": ""
    },
    {
      "font_class": "settings",
      "unicode": ""
    },
    {
      "font_class": "settings-filled",
      "unicode": ""
    },
    {
      "font_class": "shop",
      "unicode": ""
    },
    {
      "font_class": "shop-filled",
      "unicode": ""
    },
    {
      "font_class": "smallcircle",
      "unicode": ""
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": ""
    },
    {
      "font_class": "sound",
      "unicode": ""
    },
    {
      "font_class": "sound-filled",
      "unicode": ""
    },
    {
      "font_class": "spinner-cycle",
      "unicode": ""
    },
    {
      "font_class": "staff",
      "unicode": ""
    },
    {
      "font_class": "staff-filled",
      "unicode": ""
    },
    {
      "font_class": "star",
      "unicode": ""
    },
    {
      "font_class": "star-filled",
      "unicode": ""
    },
    {
      "font_class": "starhalf",
      "unicode": ""
    },
    {
      "font_class": "trash",
      "unicode": ""
    },
    {
      "font_class": "trash-filled",
      "unicode": ""
    },
    {
      "font_class": "tune",
      "unicode": ""
    },
    {
      "font_class": "tune-filled",
      "unicode": ""
    },
    {
      "font_class": "undo",
      "unicode": ""
    },
    {
      "font_class": "undo-filled",
      "unicode": ""
    },
    {
      "font_class": "up",
      "unicode": ""
    },
    {
      "font_class": "top",
      "unicode": ""
    },
    {
      "font_class": "upload",
      "unicode": ""
    },
    {
      "font_class": "upload-filled",
      "unicode": ""
    },
    {
      "font_class": "videocam",
      "unicode": ""
    },
    {
      "font_class": "videocam-filled",
      "unicode": ""
    },
    {
      "font_class": "vip",
      "unicode": ""
    },
    {
      "font_class": "vip-filled",
      "unicode": ""
    },
    {
      "font_class": "wallet",
      "unicode": ""
    },
    {
      "font_class": "wallet-filled",
      "unicode": ""
    },
    {
      "font_class": "weibo",
      "unicode": ""
    },
    {
      "font_class": "weixin",
      "unicode": ""
    }
  ];
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$a = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: fontData
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return code.unicode;
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      },
      styleObj() {
        if (this.fontFamily !== "") {
          return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
        }
        return `color: ${this.color}; font-size: ${this.iconSize};`;
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle($options.styleObj),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-d31e1c47"], ["__file", "C:/Users/HWT/Desktop/shb/suihaoban/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales = Object.keys(messages2);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater: formater2 }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater2 || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      const options = [
        messages2,
        locale
      ];
      locale = options[0];
      messages2 = options[1];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "Search enter content"
  };
  const zhHans = {
    "uni-search-bar.cancel": "取消",
    "uni-search-bar.placeholder": "请输入搜索内容"
  };
  const zhHant = {
    "uni-search-bar.cancel": "取消",
    "uni-search-bar.placeholder": "請輸入搜索內容"
  };
  const messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const {
    t
  } = initVueI18n(messages);
  const _sfc_main$9 = {
    name: "UniSearchBar",
    emits: ["input", "update:modelValue", "clear", "cancel", "confirm", "blur", "focus"],
    props: {
      placeholder: {
        type: String,
        default: ""
      },
      radius: {
        type: [Number, String],
        default: 5
      },
      clearButton: {
        type: String,
        default: "auto"
      },
      cancelButton: {
        type: String,
        default: "auto"
      },
      cancelText: {
        type: String,
        default: ""
      },
      bgColor: {
        type: String,
        default: "#F8F8F8"
      },
      textColor: {
        type: String,
        default: "#000000"
      },
      maxlength: {
        type: [Number, String],
        default: 100
      },
      value: {
        type: [Number, String],
        default: ""
      },
      modelValue: {
        type: [Number, String],
        default: ""
      },
      focus: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false,
        showSync: false,
        searchVal: ""
      };
    },
    computed: {
      cancelTextI18n() {
        return this.cancelText || t("uni-search-bar.cancel");
      },
      placeholderText() {
        return this.placeholder || t("uni-search-bar.placeholder");
      }
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal) {
          this.searchVal = newVal;
          if (newVal) {
            this.show = true;
          }
        }
      },
      focus: {
        immediate: true,
        handler(newVal) {
          if (newVal) {
            if (this.readonly)
              return;
            this.show = true;
            this.$nextTick(() => {
              this.showSync = true;
            });
          }
        }
      },
      searchVal(newVal, oldVal) {
        this.$emit("input", newVal);
        this.$emit("update:modelValue", newVal);
      }
    },
    methods: {
      searchClick() {
        if (this.readonly)
          return;
        if (this.show) {
          return;
        }
        this.show = true;
        this.$nextTick(() => {
          this.showSync = true;
        });
      },
      clear() {
        this.searchVal = "";
        this.$nextTick(() => {
          this.$emit("clear", { value: "" });
        });
      },
      cancel() {
        if (this.readonly)
          return;
        this.$emit("cancel", {
          value: this.searchVal
        });
        this.searchVal = "";
        this.show = false;
        this.showSync = false;
        plus.key.hideSoftKeybord();
      },
      confirm() {
        plus.key.hideSoftKeybord();
        this.$emit("confirm", {
          value: this.searchVal
        });
      },
      blur() {
        plus.key.hideSoftKeybord();
        this.$emit("blur", {
          value: this.searchVal
        });
      },
      emitFocus(e) {
        this.$emit("focus", e.detail);
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-searchbar" }, [
      vue.createElementVNode(
        "view",
        {
          style: vue.normalizeStyle({ borderRadius: $props.radius + "px", backgroundColor: $props.bgColor }),
          class: "uni-searchbar__box",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.searchClick && $options.searchClick(...args))
        },
        [
          vue.createElementVNode("view", { class: "uni-searchbar__box-icon-search" }, [
            vue.renderSlot(_ctx.$slots, "searchIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "18",
                type: "search"
              })
            ], true)
          ]),
          $data.show || $data.searchVal ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
            key: 0,
            focus: $data.showSync,
            disabled: $props.readonly,
            placeholder: $options.placeholderText,
            maxlength: $props.maxlength,
            class: "uni-searchbar__box-search-input",
            "confirm-type": "search",
            type: "text",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchVal = $event),
            style: vue.normalizeStyle({ color: $props.textColor }),
            onConfirm: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
            onBlur: _cache[2] || (_cache[2] = (...args) => $options.blur && $options.blur(...args)),
            onFocus: _cache[3] || (_cache[3] = (...args) => $options.emitFocus && $options.emitFocus(...args))
          }, null, 44, ["focus", "disabled", "placeholder", "maxlength"])), [
            [vue.vModelText, $data.searchVal]
          ]) : (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 1,
              class: "uni-searchbar__text-placeholder"
            },
            vue.toDisplayString($props.placeholder),
            1
            /* TEXT */
          )),
          $data.show && ($props.clearButton === "always" || $props.clearButton === "auto" && $data.searchVal !== "") && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "uni-searchbar__box-icon-clear",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "clearIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "20",
                type: "clear"
              })
            ], true)
          ])) : vue.createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      ),
      $props.cancelButton === "always" || $data.show && $props.cancelButton === "auto" ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          onClick: _cache[6] || (_cache[6] = (...args) => $options.cancel && $options.cancel(...args)),
          class: "uni-searchbar__cancel"
        },
        vue.toDisplayString($options.cancelTextI18n),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-f07ef577"], ["__file", "C:/Users/HWT/Desktop/shb/suihaoban/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue"]]);
  const _sfc_main$8 = {
    // name:"HoeTitle",
    data() {
      return {};
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "Hot-Title" }, [
      vue.createElementVNode("view", { class: "Hot-left" }, [
        vue.renderSlot(_ctx.$slots, "left", {}, void 0, true)
      ]),
      vue.createElementVNode("view", { class: "Hot-rigth" }, [
        vue.renderSlot(_ctx.$slots, "rigth", {}, void 0, true)
      ])
    ]);
  }
  const titleVue = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-463435c1"], ["__file", "C:/Users/HWT/Desktop/shb/suihaoban/components/ArticleTitle.vue"]]);
  const _imports_2$1 = "/static/suihaoban/dh.png";
  const _imports_1$1 = "/static/suihaoban/ic_version_switch_enterprise.png";
  const _imports_2 = "/static/suihaoban/bg-1.png";
  const _imports_3$1 = "/static/suihaoban/bg-3.png";
  const _imports_4$1 = "/static/suihaoban/Zone.png";
  const _imports_5$1 = "/static/suihaoban/bm_1.png";
  const _imports_6$1 = "/static/suihaoban/bg_3.png";
  const _imports_7$1 = "/static/suihaoban/bg_1.png";
  const _imports_8 = "/static/suihaoban/bg_2.png";
  const _imports_9 = "/static/suihaoban/bg_4.png";
  const _imports_10 = "/static/suihaoban/bg_5.png";
  const _sfc_main$7 = {
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
              name: "车辆年间",
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
      }
    },
    components: {
      titleVue
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_0);
    const _component_titleVue = vue.resolveComponent("titleVue");
    return vue.openBlock(), vue.createElementBlock("view", { class: "Home" }, [
      vue.createElementVNode(
        "view",
        {
          class: "NavTitle",
          style: vue.normalizeStyle({ backgroundColor: $data.backgroundColor })
        },
        [
          vue.createElementVNode("view", { class: "occupy" }),
          vue.createElementVNode("view", { class: "search" }, [
            vue.createElementVNode("view", { class: "search-icon" }, [
              vue.createElementVNode("image", {
                class: "search-icon",
                src: _imports_2$1,
                mode: ""
              })
            ]),
            vue.createElementVNode("view", { class: "search-input" }, [
              vue.createVNode(_component_uni_search_bar, {
                class: "uni-mt-10",
                placeholder: "搜索服务",
                "bg-color": "",
                clearButton: "none",
                cancelButton: "none"
              })
            ]),
            vue.createElementVNode("view", { class: "search-image" }, [
              vue.createElementVNode("image", {
                class: "search-image",
                src: _imports_1$1,
                mode: ""
              })
            ])
          ])
        ],
        4
        /* STYLE */
      ),
      vue.createElementVNode("view", { style: { "width": "100%", "height": "100%" } }, [
        vue.createElementVNode(
          "scroll-view",
          {
            style: { "width": "100%", "height": "100vh", "background-color": "#fafbfe" },
            "scroll-y": "true",
            onScroll: _cache[0] || (_cache[0] = (...args) => $options.onPageScroll && $options.onPageScroll(...args))
          },
          [
            vue.createElementVNode("view", { style: { "width": "100%", "height": "200vh", "background-color": "#fafbfe" } }, [
              vue.createElementVNode("swiper", {
                class: "banner",
                "indicator-active-color": "#fff",
                "indicator-dots": true,
                autoplay: true,
                interval: 3e3,
                duration: 1e3
              }, [
                vue.createElementVNode("swiper-item", { class: "swiper-item" }, [
                  vue.createElementVNode("image", {
                    src: _imports_2,
                    mode: ""
                  })
                ]),
                vue.createElementVNode("swiper-item", { class: "swiper-item" }, [
                  vue.createElementVNode("image", {
                    src: _imports_3$1,
                    mode: ""
                  })
                ])
              ]),
              vue.createElementVNode("view", { class: "ioc" }, [
                vue.createElementVNode("view", { class: "icon" }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList($data.bannerIcon, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: "icon-btn",
                        key: index
                      }, [
                        vue.createElementVNode("image", {
                          class: "icon-btn-image",
                          src: `../static/suihaoban/Nav_title_ioc${index + 1}.png`,
                          mode: ""
                        }, null, 8, ["src"]),
                        vue.createElementVNode(
                          "view",
                          null,
                          vue.toDisplayString(item.name),
                          1
                          /* TEXT */
                        )
                      ]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                vue.createElementVNode("view", { class: "bannerMini" }, " 广州 30℃ | 广州不动产功能迁移.... ")
              ]),
              vue.createElementVNode("view", { class: "occupy-box" }),
              vue.createElementVNode("swiper", {
                class: "swiper",
                "indicator-dots": true,
                "indicator-active-color": "#ee734c",
                "indicator-color": "#cccccc",
                interval: 3e3,
                duration: 1e3
              }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.iconLog, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("swiper-item", { key: index }, [
                      vue.createElementVNode("view", { class: "icon-log" }, [
                        vue.createElementVNode("view", { class: "log-box" }, [
                          (vue.openBlock(true), vue.createElementBlock(
                            vue.Fragment,
                            null,
                            vue.renderList(item, (sum, num) => {
                              return vue.openBlock(), vue.createElementBlock("view", {
                                class: "btn-log",
                                key: num
                              }, [
                                vue.createElementVNode("image", {
                                  class: "btn-log-image",
                                  src: sum.image,
                                  mode: ""
                                }, null, 8, ["src"]),
                                vue.createElementVNode(
                                  "view",
                                  { class: "btn-log-text" },
                                  vue.toDisplayString(sum.name),
                                  1
                                  /* TEXT */
                                )
                              ]);
                            }),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ])
                      ])
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              vue.createElementVNode("view", { class: "Zone" }, [
                vue.createElementVNode("image", {
                  class: "Zone",
                  src: _imports_4$1,
                  mode: ""
                })
              ]),
              vue.createVNode(_component_titleVue, null, {
                left: vue.withCtx(() => [
                  vue.createTextVNode(" 热门服务 ")
                ]),
                rigth: vue.withCtx(() => [
                  vue.createTextVNode(" 更多 ")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createElementVNode("view", { class: "Hot" }, [
                vue.createElementVNode("view", { class: "Hot-icon" }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList($data.ZoneList, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: "Hot-icon-box",
                        key: index
                      }, [
                        vue.createElementVNode("view", { class: "box-image" }, [
                          vue.createElementVNode("image", {
                            class: "Hot-icon-box-image",
                            src: item.image,
                            mode: ""
                          }, null, 8, ["src"])
                        ]),
                        vue.createElementVNode(
                          "view",
                          { class: "Hot-icon-box-text" },
                          vue.toDisplayString(item.name),
                          1
                          /* TEXT */
                        )
                      ]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ]),
              vue.createVNode(_component_titleVue, null, {
                left: vue.withCtx(() => [
                  vue.createTextVNode(" 特色服务 ")
                ]),
                rigth: vue.withCtx(() => [
                  vue.createTextVNode(" 更多 ")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createElementVNode("view", { class: "characteristic" }, [
                (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(6, (item) => {
                    return vue.createElementVNode("view", {
                      class: "characteristic-image",
                      key: item
                    }, [
                      vue.createElementVNode("image", {
                        class: "image",
                        src: `../static/suihaoban/bg_mini_banner${item}.png`,
                        mode: ""
                      }, null, 8, ["src"])
                    ]);
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              vue.createVNode(_component_titleVue, null, {
                left: vue.withCtx(() => [
                  vue.createTextVNode(" 便民服务 ")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createElementVNode("view", { class: "people" }, [
                vue.createElementVNode("view", { class: "people-image" }, [
                  vue.createElementVNode("image", {
                    class: "image",
                    src: _imports_5$1,
                    mode: ""
                  })
                ]),
                vue.createElementVNode("view", { class: "people-icon" }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList($data.peopleLsit, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: "icon",
                        key: index
                      }, [
                        vue.createElementVNode("image", {
                          class: "image",
                          src: `../static/suihaoban/bm_ic_${index + 1}.png`,
                          mode: ""
                        }, null, 8, ["src"]),
                        vue.createElementVNode(
                          "view",
                          { class: "text" },
                          vue.toDisplayString(item),
                          1
                          /* TEXT */
                        )
                      ]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ]),
              vue.createElementVNode("view", { class: "backG" }, [
                vue.createElementVNode("image", {
                  class: "image",
                  src: _imports_6$1,
                  mode: ""
                })
              ]),
              vue.createElementVNode("view", { class: "backGu" }, [
                vue.createElementVNode("view", { class: "backGuUrl" }, [
                  vue.createElementVNode("image", {
                    class: "image",
                    src: _imports_7$1,
                    mode: ""
                  })
                ]),
                vue.createElementVNode("view", { class: "backGuUrl" }, [
                  vue.createElementVNode("image", {
                    class: "image",
                    src: _imports_8,
                    mode: ""
                  })
                ])
              ]),
              vue.createElementVNode("view", { style: { "width": "95%" } }, [
                vue.createVNode(_component_titleVue, null, {
                  left: vue.withCtx(() => [
                    vue.createTextVNode(" 我的足迹 ")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              vue.createElementVNode("view", { class: "backGun" }, [
                vue.createElementVNode("image", {
                  class: "image",
                  src: _imports_9,
                  mode: ""
                })
              ]),
              vue.createElementVNode("view", { class: "backGund" }, [
                vue.createElementVNode("image", {
                  class: "image",
                  src: _imports_10,
                  mode: ""
                })
              ])
            ]),
            vue.createElementVNode("view", { style: { "height": "200rpx" } })
          ],
          32
          /* NEED_HYDRATION */
        )
      ])
    ]);
  }
  const Home = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-045d88fd"], ["__file", "C:/Users/HWT/Desktop/shb/suihaoban/components/home.vue"]]);
  const _sfc_main$6 = {
    name: "Work",
    data() {
      return {};
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 办事 ");
  }
  const Work = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "C:/Users/HWT/Desktop/shb/suihaoban/components/Work.vue"]]);
  const _sfc_main$5 = {
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
        this.devicePosition = "front";
      }
      // 其他方法...
    }
    // ...其他选项
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("live-pusher", {
        id: "livePusher",
        ref: "livePusher",
        class: "livePusher",
        mode: "FHD",
        beauty: "0",
        whiteness: "0",
        aspect: $data.aspect,
        "min-bitrate": "1000",
        "audio-quality": "16KHz",
        "device-position": $data.devicePosition,
        "auto-focus": true,
        muted: true,
        "enable-camera": true,
        "enable-mic": false,
        zoom: true,
        onStatechange: _cache[0] || (_cache[0] = (...args) => _ctx.statechange && _ctx.statechange(...args)),
        style: vue.normalizeStyle({ width: $data.windowWidth, height: $data.windowHeight })
      }, null, 44, ["aspect", "device-position"]),
      vue.createCommentVNode(" 其他UI元素，如按钮、提示信息等 "),
      vue.createElementVNode("button", {
        onClick: _cache[1] || (_cache[1] = (...args) => $options.switchCamera && $options.switchCamera(...args))
      }, "切换摄像头")
    ]);
  }
  const Live = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-e3c415cd"], ["__file", "C:/Users/HWT/Desktop/shb/suihaoban/components/Live.vue"]]);
  const _imports_0$1 = "/static/suihaoban/User_bg_1.png";
  const _sfc_main$4 = {
    name: "certificate",
    data() {
      return {};
    },
    components: {}
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "certificate" }, [
      vue.createElementVNode("view", { class: "certificate-title" }, [
        vue.createElementVNode("view", { class: "maxtitle" }, [
          vue.createElementVNode("text", null, "我的证照"),
          vue.createElementVNode("text", { style: { "font-weight": "500", "color": "#646464", "font-size": "32rpx" } }, "我的证明")
        ]),
        vue.createElementVNode("view", { class: "minititle" }, " 全部 ")
      ]),
      vue.createElementVNode("view", { class: "certificate-content" }, [
        vue.createElementVNode(
          "scroll-view",
          {
            class: "scroll-view_H",
            "scroll-x": "true",
            onScroll: _cache[0] || (_cache[0] = (...args) => _ctx.scroll && _ctx.scroll(...args))
          },
          [
            vue.createElementVNode("view", { class: "scroll-view_H_view" }, [
              vue.createElementVNode("image", {
                class: "scroll-view_H_view-image",
                src: _imports_0$1,
                mode: ""
              }),
              vue.createElementVNode("image", {
                class: "scroll-view_H_view-image",
                style: { "margin-left": "40rpx" },
                src: _imports_0$1,
                mode: ""
              })
            ])
          ],
          32
          /* NEED_HYDRATION */
        )
      ])
    ]);
  }
  const certificate = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-aab9872e"], ["__file", "C:/Users/HWT/Desktop/shb/suihaoban/components/certificate.vue"]]);
  const _sfc_main$3 = {
    name: "UserFoot",
    data() {
      return {};
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 123 ");
  }
  const UserFoot = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "C:/Users/HWT/Desktop/shb/suihaoban/components/UserFoot.vue"]]);
  const _imports_0 = "/static/suihaoban/User_head.png";
  const _imports_1 = "/static/suihaoban/User_head_1.png";
  const _imports_3 = "/static/suihaoban/User_5.png";
  const _imports_4 = "/static/suihaoban/User_icon_6.png";
  const _imports_5 = "/static/suihaoban/wjx.png";
  const _imports_6 = "/static/suihaoban/wz_3.png";
  const _imports_7 = "/static/suihaoban/User_4.png";
  const _sfc_main$2 = {
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
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_certificate = vue.resolveComponent("certificate");
    const _component_UserFoot = vue.resolveComponent("UserFoot");
    return vue.openBlock(), vue.createElementBlock("view", { class: "User" }, [
      vue.createElementVNode("view", { class: "User-title" }, [
        vue.createElementVNode("view", { class: "User-op" }),
        vue.createElementVNode("view", { class: "User-head" }, [
          vue.createElementVNode("view", { class: "head" }, [
            vue.createElementVNode("image", {
              class: "head-image",
              src: _imports_0,
              mode: ""
            })
          ]),
          vue.createElementVNode("view", { class: "User-name" }, [
            vue.createElementVNode("view", { class: "User-text" }, [
              vue.createElementVNode("view", { class: "name" }, [
                vue.createTextVNode(" 泰*罗"),
                vue.createElementVNode("image", {
                  class: "name-image",
                  src: _imports_1,
                  mode: ""
                })
              ]),
              vue.createElementVNode("view", { class: "text" }, " 136****2264 ")
            ])
          ]),
          vue.createElementVNode("view", { class: "User-icon" }, [
            vue.createElementVNode("view", { class: "ic" }, [
              vue.createElementVNode("image", {
                class: "ic-image",
                src: _imports_2$1,
                mode: ""
              }),
              vue.createElementVNode("image", {
                class: "ic-image",
                src: _imports_3,
                mode: ""
              }),
              vue.createElementVNode("image", {
                class: "ic-image",
                src: _imports_4,
                mode: ""
              })
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "User-Tub" }, [
          vue.createElementVNode("view", { class: "Tub" }, [
            vue.createElementVNode("view", { class: "image-Tub" }, [
              vue.createElementVNode("image", {
                class: "image-icom",
                src: _imports_5,
                mode: ""
              })
            ]),
            vue.createElementVNode("view", { class: "image-text" }, " 我的收藏 ")
          ]),
          vue.createElementVNode("view", { class: "Tub" }, [
            vue.createElementVNode("view", { class: "image-Tub" }, [
              vue.createElementVNode("image", {
                style: { "width": "50rpx", "height": "50rpx" },
                class: "image-icom",
                src: _imports_6,
                mode: ""
              })
            ]),
            vue.createElementVNode("view", { class: "image-text" }, " 服务一张图 ")
          ]),
          vue.createElementVNode("view", { class: "Tub" }, [
            vue.createElementVNode("view", { class: "image-Tub" }, [
              vue.createElementVNode("image", {
                style: { "width": "60rpx", "height": "60rpx" },
                class: "image-icom",
                src: _imports_7,
                mode: ""
              })
            ]),
            vue.createElementVNode("view", { class: "image-text" }, " 红棉码 ")
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "work" }, [
        vue.createElementVNode("view", { class: "work-title" }, [
          vue.createElementVNode("view", { class: "work-title-left" }, " 我的办事 "),
          vue.createElementVNode("view", { class: "work-title-left left-cor" }, " 我的预约 ")
        ]),
        vue.createElementVNode("view", { class: "work-content" }, [
          vue.createElementVNode("view", { class: "work-content-box" }, [
            vue.createElementVNode("view", { class: "box-image" }, " 0 "),
            vue.createElementVNode("view", { class: "box-text" }, " 全部办事 ")
          ]),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.work, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "work-content-box work-content-boxOne",
                key: index
              }, [
                vue.createElementVNode("view", { class: "box-image" }, [
                  vue.createElementVNode("image", {
                    class: "box-image-icon",
                    src: item.image,
                    mode: ""
                  }, null, 8, ["src"])
                ]),
                vue.createElementVNode(
                  "view",
                  { class: "box-text" },
                  vue.toDisplayString(item.name),
                  1
                  /* TEXT */
                )
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]),
      vue.createVNode(_component_certificate),
      vue.createVNode(_component_UserFoot)
    ]);
  }
  const User = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-cecf776e"], ["__file", "C:/Users/HWT/Desktop/shb/suihaoban/components/User.vue"]]);
  const _sfc_main$1 = {
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
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    var _a, _b, _c, _d;
    const _component_Home = vue.resolveComponent("Home");
    const _component_Work = vue.resolveComponent("Work");
    const _component_Live = vue.resolveComponent("Live");
    const _component_User = vue.resolveComponent("User");
    const _component_fontTaber = vue.resolveComponent("fontTaber");
    return vue.openBlock(), vue.createElementBlock("view", { class: "home" }, [
      !((_a = $data.list[0]) == null ? void 0 : _a.isTrue) ? (vue.openBlock(), vue.createBlock(_component_Home, { key: 0 })) : vue.createCommentVNode("v-if", true),
      !((_b = $data.list[1]) == null ? void 0 : _b.isTrue) ? (vue.openBlock(), vue.createBlock(_component_Work, { key: 1 })) : vue.createCommentVNode("v-if", true),
      !((_c = $data.list[2]) == null ? void 0 : _c.isTrue) ? (vue.openBlock(), vue.createBlock(_component_Live, { key: 2 })) : vue.createCommentVNode("v-if", true),
      !((_d = $data.list[3]) == null ? void 0 : _d.isTrue) ? (vue.openBlock(), vue.createBlock(_component_User, { key: 3 })) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 底部taber "),
      vue.createElementVNode("view", { style: { "height": "200rpx" } }),
      vue.createVNode(_component_fontTaber, { "onUpdate:data": $options.change }, null, 8, ["onUpdate:data"])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "C:/Users/HWT/Desktop/shb/suihaoban/pages/index/index.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/Users/HWT/Desktop/shb/suihaoban/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
