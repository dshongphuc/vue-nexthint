(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".vue-tab-complete-wrapper{position:relative}.vue-tab-complete-wrapper input{z-index:10;padding:.5rem;padding-left:14px;width:100%;height:100%;color:#fff;border-color:#ced7d0;caret-color:#63666c}.vue-tab-complete-wrapper .input-overlay{position:absolute;left:.75rem;top:50%;transform:translateY(-50%)}.vue-tab-complete-wrapper .input-overlay .result-query{padding-top:.25rem;padding-bottom:.25rem;margin-left:.125rem;color:#000}.vue-tab-complete-wrapper .input-overlay .result-suggest{color:#9ca3af}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { defineComponent as _, ref as m, computed as a, watch as f, openBlock as h, createElementBlock as g, withDirectives as y, createElementVNode as n, vModelText as x, toDisplayString as u } from "vue";
const R = { class: "vue-tab-complete-wrapper" }, w = ["placeholder"], b = { class: "input-overlay" }, D = { class: "result-query" }, N = { class: "result-suggest" }, C = /* @__PURE__ */ _({
  __name: "NextHint",
  props: {
    suggestions: { default: () => [] },
    placeholder: { default: "" }
  },
  emits: ["change"],
  setup(r, { emit: c }) {
    const o = r, i = c, e = m(""), s = a(() => e.value === "" ? null : o.suggestions.find((l) => l.toLowerCase().startsWith(e.value.toLowerCase()))), p = a(() => {
      var t;
      return e.value === "" || s.value === null ? null : (t = s.value) == null ? void 0 : t.substring(e.value.length);
    }), d = (t) => {
      t.key === "Tab" && (t.preventDefault(), s.value && (e.value = s.value));
    };
    return f(e, () => {
      i("change", e.value);
    }), (t, l) => (h(), g("div", R, [
      y(n("input", {
        "onUpdate:modelValue": l[0] || (l[0] = (v) => e.value = v),
        type: "text",
        class: "vue-tab-complete-input",
        onKeydown: d,
        placeholder: o.placeholder
      }, null, 40, w), [
        [x, e.value]
      ]),
      n("div", b, [
        n("span", D, u(e.value), 1),
        n("span", N, u(p.value), 1)
      ])
    ]));
  }
});
export {
  C as NextHint
};
