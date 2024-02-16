import { defineComponent as m, ref as f, computed as o, watch as x, openBlock as y, createElementBlock as _, withDirectives as h, createElementVNode as a, vModelText as b, toDisplayString as n } from "vue";
const w = { class: "relative" }, R = { class: "absolute left-3 top-1/2 -translate-y-1/2" }, g = { class: "ml-0.5 py-1 text-xl text-black" }, C = { class: "text-xl text-gray-400" }, k = /* @__PURE__ */ m({
  __name: "TabComplete",
  props: {
    results: { default: () => [] }
  },
  emits: ["change"],
  setup(r, { emit: u }) {
    const c = r, i = u, e = f(""), l = o(() => e.value === "" ? null : c.results.find((s) => s.toLowerCase().startsWith(e.value.toLowerCase()))), p = o(() => {
      var t;
      return e.value === "" || l.value === null ? null : (t = l.value) == null ? void 0 : t.substring(e.value.length);
    }), d = (t) => {
      t.key === "Tab" && (t.preventDefault(), l.value && (e.value = l.value));
    };
    return x(e, () => {
      i("change", e.value);
    }), (t, s) => (y(), _("div", w, [
      h(a("input", {
        "onUpdate:modelValue": s[0] || (s[0] = (v) => e.value = v),
        type: "text",
        class: "z-10 h-[76px] w-full rounded border border-[#CED7D0] p-2 pl-3.5 text-xl text-white caret-gray-600",
        onKeydown: d
      }, null, 544), [
        [b, e.value]
      ]),
      a("div", R, [
        a("span", g, n(e.value), 1),
        a("span", C, n(p.value), 1)
      ])
    ]));
  }
});
export {
  k as TabComplete
};
